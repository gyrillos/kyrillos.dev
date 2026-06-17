package com.kyrillos.message.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="github")
public class Github {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="discription")
	private String discritpion;
	
	@Column(name="tech_stack")
	private List<String> techStack;
	
	@Column(name="commits")
	private List<String> commits;
	
	public Github() {}

	public Github(int id, String name, String discritpion, List<String> techStack, List<String> commits) {
		super();
		this.id = id;
		this.name = name;
		this.discritpion = discritpion;
		this.techStack = techStack;
		this.commits = commits;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}
	
	public List<String> getCommits() {
		return commits;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDiscritpion() {
		return discritpion;
	}

	public void setDiscritpion(String discritpion) {
		this.discritpion = discritpion;
	}

	public List<String> getTechStack() {
		return techStack;
	}

	public void setTechStack(List<String> techStack) {
		this.techStack = techStack;
	}
	public void setCommits(List<String> commits) {
		this.commits = commits;
	}
	
	
	
}
