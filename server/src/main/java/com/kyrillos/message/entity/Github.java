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
	
	@Column(name="description", columnDefinition="LONGTEXT")
	private String descritpion;
	
	@Column(name="tech_stack")
	private List<String> techStack;
	
	@Column(name="commits")
	private List<String> commits;
	
	@Column(name="readme", columnDefinition="LONGTEXT")
	private String readme;
	
	public Github() {}

	public Github(int id, String name, String descritpion, List<String> techStack, List<String> commits, String readme) {
		super();
		this.id = id;
		this.name = name;
		this.descritpion = descritpion;
		this.techStack = techStack;
		this.commits = commits;
		this.readme = readme;
	}

	public String getReadme() {
		return readme;
	}

	public void setReadme(String readme) {
		this.readme = readme;
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

	public String getDescritpion() {
		return descritpion;
	}

	public void setDescritpion(String descritpion) {
		this.descritpion = descritpion;
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
