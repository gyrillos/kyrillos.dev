package com.kyrillos.message.service;

import java.util.List;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import jakarta.mail.*;
import jakarta.mail.internet.*;
import com.kyrillos.message.dao.MessageDAO;
import com.kyrillos.message.entity.Message;

import jakarta.transaction.Transactional;

@Service
public class MessageServiceImp implements MessageService{
	
	private MessageDAO messageDAO;
	
	@Value("${app.email.username}")
    private String fromEmail;

    @Value("${app.email.password}")
    private String appPassword;

    @Value("${app.email.to}")
    private String toEmail;
	
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
		Properties props = new Properties();

        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(fromEmail, appPassword);
            }
        });

        try {
        	 try {
             	
                 jakarta.mail.Message message = new MimeMessage(session);

                 message.setFrom(new InternetAddress(fromEmail));
                 message.setRecipients(
                         jakarta.mail.Message.RecipientType.TO,
                         InternetAddress.parse(m.getEmail())
                 );

                 message.setSubject("Response From Kyrillos.dev");
                 message.setText("Hello, \n\n Thank you from your message! I'll try to get back to you as soon as possible.\n\n --\r\n"
                 		+ "Software Engineer\r\n"
                 		+ "Bachelor of Science in Computer Science\r\n"
                 		+ "tel: 757-375-8368\r\n"
                 		+ "linkedin.com/in/kyrillos-abdelshaheed");

                 Transport.send(message);

             } catch (MessagingException e) {
                 throw new RuntimeException("Failed to send email, User Email incorrect", e);
             }
            jakarta.mail.Message message = new MimeMessage(session);

            message.setFrom(new InternetAddress(fromEmail));
            message.setRecipients(
                    jakarta.mail.Message.RecipientType.TO,
                    InternetAddress.parse(toEmail)
            );

            message.setSubject("New Message on Kyrillos.dev!!!");
            message.setText("New Message from Sender: " + m.getEmail() + "\n\n" + m.getMessage());

            Transport.send(message);

        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send email", e);
        }
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
