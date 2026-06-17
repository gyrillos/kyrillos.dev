package com.kyrillos.message.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kyrillos.message.dao.GithubDAO;
import com.kyrillos.message.entity.Github;

@Service
public class GithubServiceImp implements GithubService{
	
	private GithubDAO githubDAO;
	
	@Autowired
	public GithubServiceImp(GithubDAO githubDAO) {
		this.githubDAO = githubDAO;
	}

	@Override
	public List<String> allCommits() {
		return githubDAO.allCommits();
	}

	@Override
	public Github findByName(String name) {
		return githubDAO.findByName(name);
	}

	@Override
	@Transactional
	public void save(Github github) {
		githubDAO.save(github);
		
	}

	@Override
	public List<Github> findAll() {
		return githubDAO.findAll();
	}
}
