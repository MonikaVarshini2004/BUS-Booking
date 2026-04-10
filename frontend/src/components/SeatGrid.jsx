import React from 'react';

const SEATS_DATA = Array.from({ length: 40 }, (_, i) => ({
    id: `${Math.floor(i / 10) + 1}${String.fromCharCode(65 + (i % 4))}`,
    isBooked: Math.random() < 0.2
}));

const SeatGrid = ({ selectedSeats, toggleSeat }) => {
    return (
        <div className="seat-grid">
            {SEATS_DATA.map(seat => (
                <button
                    key={seat.id}
                    className={`seat ${seat.isBooked ? 'booked' : ''} ${selectedSeats.includes(seat.id) ? 'selected' : 'available'}`}
                    disabled={seat.isBooked}
                    onClick={() => toggleSeat(seat.id)}
                >
                    {seat.id}
                </button>
            ))}
        </div>
    );
};

export default SeatGrid;
