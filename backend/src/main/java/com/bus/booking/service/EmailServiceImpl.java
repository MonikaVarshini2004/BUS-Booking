package com.bus.booking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired(required = false)
    private JavaMailSender mailSender;

    @Override
    public void sendBookingConfirmation(String to, String bookingDetails) {
        System.out.println("Sending email to: " + to);
        System.out.println("Details: " + bookingDetails);
        
        if (mailSender != null) {
            try {
                SimpleMailMessage message = new SimpleMailMessage();
                message.setFrom("no-reply@busbooking.com");
                message.setTo(to);
                message.setSubject("Bus Booking Confirmation");
                message.setText(bookingDetails);
                mailSender.send(message);
            } catch (Exception e) {
                System.err.println("Failed to send email: " + e.getMessage());
            }
        } else {
            System.out.println("MailSender not configured. Email logged to console.");
        }
    }
}
