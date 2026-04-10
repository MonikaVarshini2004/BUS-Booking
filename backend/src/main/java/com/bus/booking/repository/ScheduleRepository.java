package com.bus.booking.repository;

import com.bus.booking.entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.time.LocalDateTime;
import java.util.List;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

    @Query("SELECT s FROM Schedule s WHERE s.route.source = :source " +
           "AND s.route.destination = :destination " +
           "AND s.departureTime BETWEEN :startOfDay AND :endOfDay")
    List<Schedule> findSchedules(
        @Param("source") String source, 
        @Param("destination") String destination, 
        @Param("startOfDay") LocalDateTime startOfDay, 
        @Param("endOfDay") LocalDateTime endOfDay
    );
}
