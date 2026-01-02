package com.kyrillos.message.dao;

import java.util.List;

import com.kyrillos.message.entity.Message;

public interface MessageDAO {

	List<Message> findAll();
	Message save(Message m);
	Message findByEmail(String email);
	Message findbyId(int id);
}