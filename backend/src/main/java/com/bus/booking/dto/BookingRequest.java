package com.bus.booking.dto;

import lombok.Data;

public class BookingRequest {
    private Long userId;
    private Long scheduleId;
    private Long seatId;

    public Long getUserId() { return userId; }
    public Long getScheduleId() { return scheduleId; }
    public Long getSeatId() { return seatId; }
}
