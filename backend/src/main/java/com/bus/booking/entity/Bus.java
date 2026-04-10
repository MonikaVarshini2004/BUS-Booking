package com.bus.booking.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "buses")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String busNumber;

    @Column(nullable = false)
    private String busType; // e.g., AC, NON_AC, SLEEPER

    @Column(nullable = false)
    private Integer totalSeats;

    @Column(nullable = false)
    private String operator;
}
