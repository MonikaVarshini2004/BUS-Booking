import React from 'react';
import { useNavigate } from 'react-router-dom';

const BusCard = ({ bus }) => {
    const navigate = useNavigate();

    return (
        <div className="bus-card">
            <div className="bus-info">
                <div className="operator">
                    <h3>{bus.operator}</h3>
                    <span className="bus-type">{bus.type}</span>
                </div>
                <div className="timing">
                    <div className="time">{bus.departure}</div>
                    <div className="duration">—— {bus.duration} ——</div>
                    <div className="time">{bus.arrival}</div>
                </div>
                <div className="rating-price">
                    <div className="rating">⭐ {bus.rating}</div>
                    <div className="price">₹{bus.price}</div>
                </div>
                <button 
                    className="select-seat-btn"
                    onClick={() => navigate('/seats')}
                >
                    Select Seat
                </button>
            </div>
        </div>
    );
};

export default BusCard;
