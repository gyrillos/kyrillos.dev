package com.kyrillos.message.service;

import java.util.List;

import com.kyrillos.message.entity.Github;

public interface GithubService {
	List<String> allCommits();
	Github findByName(String name);
	void save(Github github);
	List<Github> findAll();
}