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
	
	@Autowired
	public MessageServiceImp(MessageDAO messageDAO) {
		this.messageDAO = messageDAO;
	}

	@Override
	public List<Message> findAll() {
		return messageDAO.findAll();
	}

	@Override
	@Transactional
	public Message save(Message m) {
		
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
