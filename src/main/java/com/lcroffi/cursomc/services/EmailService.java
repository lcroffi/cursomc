package com.lcroffi.cursomc.services;

import org.springframework.mail.SimpleMailMessage;

import com.lcroffi.cursomc.domain.Pedido;

public interface EmailService {
	
	void sendOrderConfirmationEmail(Pedido obj);
	
	void sendEmail(SimpleMailMessage msg);

}
