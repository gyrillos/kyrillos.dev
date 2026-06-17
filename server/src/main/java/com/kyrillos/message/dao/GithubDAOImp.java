package com.kyrillos.message.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.kyrillos.message.entity.Github;

import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.TypedQuery;

@Repository
public class GithubDAOImp implements GithubDAO {
	
	public EntityManager entityManager;
	
	@Autowired
	public GithubDAOImp(EntityManager entityManager) {
		this.entityManager = entityManager;
	}
	

	@Override
	public List<String> allCommits() {
		List<Github> projects = entityManager
                .createQuery("SELECT g FROM Github g", Github.class)
                .getResultList();

        return projects.stream()
                .filter(project -> project.getCommits() != null)
                .flatMap(project -> project.getCommits().stream())
                .toList();
	}

	@Override
	public Github findByName(String name) {
	    try {
	        return entityManager
	                .createQuery("SELECT g FROM Github g WHERE g.name = :name", Github.class)
	                .setParameter("name", name)
	                .getSingleResult();

	    } catch (NoResultException e) {
	        return null;
	    }
	}


	@Override
	@Transactional
	public void save(Github github) {
		entityManager.merge(github);
		
	}
	
	@Override
	public List<Github> findAll() {
		TypedQuery<Github> query = entityManager.createQuery("From Github", Github.class);
		return query.getResultList();
		
	}
}
