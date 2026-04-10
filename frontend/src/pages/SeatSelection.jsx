import React, { useState } from 'react';
import SeatGrid from '../components/SeatGrid';
import '../styles/BookingFlow.css';

const SeatSelection = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const seatPrice = 1200;

    const toggleSeat = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    return (
        <div className="seat-selection-page">
            <div className="selection-container">
                <div className="bus-layout-card">
                    <h2>Select Your Seats</h2>
                    <div className="bus-deck">
                        <div className="driver-cabin">Driver</div>
                        <SeatGrid 
                            selectedSeats={selectedSeats} 
                            toggleSeat={toggleSeat} 
                        />
                    </div>
                    <div className="legend">
                        <div className="legend-item"><span className="seat available"></span> Available</div>
                        <div className="legend-item"><span className="seat selected"></span> Selected</div>
                        <div className="legend-item"><span className="seat booked"></span> Booked</div>
                    </div>
                </div>

                <div className="selection-summary">
                    <h3>Booking Summary</h3>
                    <div className="summary-details">
                        <p>Seats: <span>{selectedSeats.join(', ') || 'None'}</span></p>
                        <p>Total Fare: <strong>₹{selectedSeats.length * seatPrice}</strong></p>
                    </div>
                    <button 
                        className="proceed-btn" 
                        disabled={selectedSeats.length === 0}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SeatSelection;
