package com.bus.booking.service;

import com.bus.booking.entity.Schedule;
import com.bus.booking.repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class SearchService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    public List<Schedule> searchBuses(String source, String destination, LocalDate date) {
        LocalDateTime startOfDay = date.atStartOfDay();
        LocalDateTime endOfDay = date.atTime(23, 59, 59);
        
        return scheduleRepository.findSchedules(source, destination, startOfDay, endOfDay);
    }
}
