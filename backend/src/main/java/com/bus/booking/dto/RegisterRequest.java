package com.bus.booking.dto;

import lombok.Data;
@Data


public class RegisterRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    public String getFirstName() { return firstName; }
    public String getLastName() { return lastName; }
    public String getEmail() { return email; }
    public String getPassword() { return password; }
}
