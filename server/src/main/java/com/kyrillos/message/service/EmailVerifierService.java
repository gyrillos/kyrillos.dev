package com.kyrillos.message.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Service
public class EmailVerifierService {

    private final RestClient restClient = RestClient.create();

    @Value("${hunter.api.key}")
    private String apiKey;

    public boolean isDeliverable(String email) {
        String encoded = URLEncoder.encode(email, StandardCharsets.UTF_8);
        String url = "https://api.hunter.io/v2/email-verifier?email=" + encoded + "&api_key=" + apiKey;

        HunterResponse resp = restClient.get()
                .uri(url)
                .retrieve()
                .body(HunterResponse.class);

        if (resp == null || resp.data == null) return false;

        // Typical policy: accept only high-confidence deliverable addresses
        String result = resp.data.result; // e.g. "deliverable", "undeliverable", "risky", "unknown"
        int score = resp.data.score;      // 0-100

        return "deliverable".equalsIgnoreCase(result) && score >= 80;
    }

    // Minimal DTO matching Hunter's response shape
    public static class HunterResponse {
        public Data data;
        public static class Data {
            public String result;
            public int score;
        }
    }
}
