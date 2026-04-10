package com.bus.booking.dto;

import lombok.Data;

@Data
public class BookingRequest {
    private Long userId;
    private Long scheduleId;
    private Long seatId;
}
