package com.bus.booking.controller;

import com.bus.booking.entity.Schedule;
import com.bus.booking.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/buses")
@CrossOrigin(origins = "http://localhost:5173") // Allow React frontend
public class SearchController {

    @Autowired
    private SearchService searchService;

    @GetMapping("/search")
    public List<Schedule> searchBuses(
            @RequestParam String source,
            @RequestParam String destination,
            @RequestParam String date) {
        
        LocalDate searchDate = LocalDate.parse(date);
        return searchService.searchBuses(source, destination, searchDate);
    }
}
