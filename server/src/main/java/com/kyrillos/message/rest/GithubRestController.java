package com.kyrillos.message.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.kyrillos.message.entity.Github;
import com.kyrillos.message.service.GithubService;

import tools.jackson.databind.json.JsonMapper;

@RestController
@RequestMapping("/api/github")
public class GithubRestController {
	
	private GithubService githubservice;
	
	private JsonMapper jsonMapper;
	
	private final RestTemplate restTemplate = new RestTemplate();
	
	@Value("${github.token}")
	private String githubToken;
	
	public GithubRestController(GithubService githubservice, JsonMapper jsonMapper) {
		this.githubservice = githubservice;
		this.jsonMapper = jsonMapper;
	}
	
	@PostMapping("/loadgit")
	public void loadGit() {
		HttpHeaders headers = new HttpHeaders();

        headers.set("Accept", "application/vnd.github+json");
        headers.set("X-GitHub-Api-Version", "2022-11-28");

        headers.setBearerAuth(githubToken.trim());
        
        
        HttpEntity<Void> buildRequest = new HttpEntity<>(headers);
        
        String url = "https://api.github.com/user/repos"
                + "?visibility=all"
                + "&affiliation=owner,collaborator,organization_member"
                + "&sort=pushed"
                + "&direction=desc"
                + "&per_page=100";

        ResponseEntity<List> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                buildRequest,
                List.class
        );

        List<Map<String, Object>> repos = response.getBody();

        if (repos == null) {
            return;
        }
        
        for (Map<String, Object> repo : repos) {
            String name = (String) repo.get("name");
            String description = (String) repo.get("description");
            String fullName = (String) repo.get("full_name");

            List<String> techStack = getLanguages(fullName);

            Github existingProject = githubservice.findByName(name);

            Github github;

            if (existingProject == null) {
                github = new Github();
            } else {
                github = existingProject;
            }

            github.setName(name);
            github.setDiscritpion(description);
            github.setTechStack(techStack);

            githubservice.save(github);
        }
        
	}
	
	private List<String> getLanguages(String fullName) {
		HttpHeaders headers = new HttpHeaders();

        headers.set("Accept", "application/vnd.github+json");
        headers.set("X-GitHub-Api-Version", "2022-11-28");

        headers.setBearerAuth(githubToken.trim());
        
        
        HttpEntity<Void> buildRequest = new HttpEntity<>(headers);
        
        String url = "https://api.github.com/repos/" + fullName + "/languages";

        ResponseEntity<Map> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                buildRequest,
                Map.class
        );

        Map<String, Object> languages = response.getBody();

        if (languages == null) {
            return List.of();
        }

        return new ArrayList<>(languages.keySet());
    }
	
	
	@GetMapping("/commits")
	private List<String> getCommits() {
		return githubservice.allCommits();
	}
	
	@GetMapping("/projects")
	private List<Github> getProjects() {
		return githubservice.findAll();
	}
}
