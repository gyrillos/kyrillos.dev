package com.kyrillos.message.dao;

import java.util.List;

import com.kyrillos.message.entity.Github;

public interface GithubDAO {
	List<String> allCommits();
	Github findByName(String name);
	void save(Github github);
	List<Github> findAll();
}
