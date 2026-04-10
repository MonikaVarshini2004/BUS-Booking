package com.bus.booking.entity;

import jakarta.persistence.*;
import lombok.*;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "routes")
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String source;

    @Column(nullable = false)
    private String destination;

    @Column(nullable = false)
    private Double distance;

    public Long getId() { return id; }
    public String getSource() { return source; }
    public String getDestination() { return destination; }
    public Double getDistance() { return distance; }
}
