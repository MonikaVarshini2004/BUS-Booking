package com.bus.booking.service;

import com.bus.booking.dto.BookingRequest;
import com.bus.booking.entity.Booking;
import com.bus.booking.entity.Schedule;
import com.bus.booking.entity.Seat;
import com.bus.booking.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private SeatRepository seatRepository;

    @Transactional
    public Booking bookSeat(BookingRequest request) {
        // 1. Fetch Schedule and Seat
        Schedule schedule = scheduleRepository.findById(request.getScheduleId())
                .orElseThrow(() -> new RuntimeException("Schedule not found"));
        
        Seat seat = seatRepository.findById(request.getSeatId())
                .orElseThrow(() -> new RuntimeException("Seat not found"));

        // 2. Double-Booking Prevention: Check if seat is already taken
        if (seat.getIsBooked()) {
            throw new RuntimeException("Seat is already booked by someone else!");
        }

        // 3. Create Booking Record
        Booking booking = new Booking();
        booking.setUserId(request.getUserId());
        booking.setSchedule(schedule);
        booking.setSeat(seat);
        booking.setBookedAt(LocalDateTime.now());
        booking.setTotalPaid(schedule.getBasePrice());

        // 4. Atomic Update: Mark seat as booked
        seat.setIsBooked(true);
        seatRepository.save(seat);

        return bookingRepository.save(booking);
    }
}
