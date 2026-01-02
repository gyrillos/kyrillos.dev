package com.kyrillos.message.service;

import java.util.List;

import com.kyrillos.message.entity.Message;

public interface MessageService {

	List<Message> findAll();
	Message save(Message m);
	Message findByEmail(String email);
	Message findbyId(int id);
}
