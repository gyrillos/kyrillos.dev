package com.kyrillos.message.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kyrillos.message.entity.Message;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;

@Repository
public class MessageDAOImp implements MessageDAO{
	
	private EntityManager entityManager;
	
	@Autowired
	public MessageDAOImp(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public List<Message> findAll() {
		TypedQuery<Message> query = entityManager.createQuery("From Message", Message.class);
		return query.getResultList();
	}

	@Override
	public Message save(Message m) {
		return entityManager.merge(m);
	}

	@Override
	public Message findByEmail(String email) {
		return entityManager.createQuery(
				"SELECT m FROM Message m WHERE m.email = :email",
	            Message.class)
				.setParameter("email", email).getSingleResultOrNull();
	}

	@Override
	public Message findbyId(int id) {
		return entityManager.find(Message.class, id);
	}

}
