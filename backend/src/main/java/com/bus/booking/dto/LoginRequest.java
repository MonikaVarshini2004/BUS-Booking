package com.bus.booking.dto;

import lombok.Data;

public class LoginRequest {
    private String email;
    private String password;

    public String getEmail() { return email; }
    public String getPassword() { return password; }
}
