package com.bus.booking.service;

public interface EmailService {
    void sendBookingConfirmation(String to, String bookingDetails);
}
