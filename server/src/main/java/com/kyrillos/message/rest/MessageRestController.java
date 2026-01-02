package com.kyrillos.message.rest;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kyrillos.message.entity.Message;
import com.kyrillos.message.service.MessageService;

@RestController
@RequestMapping("/api")
public class MessageRestController {

	private MessageService messageService;

	public MessageRestController(MessageService messageService) {
		this.messageService = messageService;
	}
	
	@GetMapping("/messages")
	public List<Message> findAll() {
		return messageService.findAll();
	}
	
	@GetMapping("/messages/{messageId}")
	public Message findById(@PathVariable("messageId") int messageId) {
		Message m = messageService.findbyId(messageId);
		
		if (m == null) {
			throw new RuntimeException("Message not found");
		}
		
		return m;
	}
	
	@PostMapping("/messages")
	public Message addMessage(@RequestBody Message message) {
		return messageService.save(message);
	}
}
