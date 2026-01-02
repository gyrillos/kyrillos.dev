package com.kyrillos.message.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kyrillos.message.dao.MessageDAO;
import com.kyrillos.message.entity.Message;

import jakarta.transaction.Transactional;

@Service
public class MessageServiceImp implements MessageService{
	
	private MessageDAO messageDAO;
	private EmailVerifierService emailVerifier;
	
	@Autowired
	public MessageServiceImp(MessageDAO messageDAO, EmailVerifierService emailVerifier) {
		this.messageDAO = messageDAO;
		this.emailVerifier = emailVerifier;
	}

	@Override
	public List<Message> findAll() {
		return messageDAO.findAll();
	}

	@Override
	@Transactional
	public Message save(Message m) {
		Message message = findByEmail(m.getEmail());
		System.out.println(message);
		
		if (message == null) {
			m.setId(0);
			System.out.println(emailVerifier.isDeliverable(m.getEmail()));
			 if (!emailVerifier.isDeliverable(m.getEmail())) {
				 throw new IllegalArgumentException("Email looks invalid/undeliverable");
			 }
			return messageDAO.save(m);
		}
		
		m.setId(message.getId());
		
		System.out.println(m);
		
		return messageDAO.save(m);
	}

	@Override
	public Message findByEmail(String email) {
		return messageDAO.findByEmail(email);
	}

	@Override
	public Message findbyId(int id) {
		return messageDAO.findbyId(id);
	}

}
