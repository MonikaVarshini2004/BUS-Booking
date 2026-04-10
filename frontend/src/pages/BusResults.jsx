import React from 'react';
import BusCard from '../components/BusCard';
import FilterSidebar from '../components/FilterSidebar';
import '../styles/BookingFlow.css';

const DUMMY_BUSES = [
    { id: 1, operator: 'City Express', type: 'AC Sleeper', departure: '09:00 AM', arrival: '05:00 PM', duration: '8h', rating: 4.5, price: 1200 },
    { id: 2, operator: 'Royal Travels', type: 'Non-AC Seater', departure: '10:30 AM', arrival: '08:00 PM', duration: '9h 30m', rating: 4.2, price: 800 },
    { id: 3, operator: 'Night Rider', type: 'AC Seater', departure: '11:00 PM', arrival: '07:00 AM', duration: '8h', rating: 4.8, price: 1500 },
];

const BusResults = () => {
    return (
        <div className="bus-results-page">
            <FilterSidebar />
            <main className="bus-list">
                <div className="list-header">
                    <h2>Found {DUMMY_BUSES.length} Buses</h2>
                </div>
                {DUMMY_BUSES.map(bus => (
                    <BusCard key={bus.id} bus={bus} />
                ))}
            </main>
        </div>
    );
};

export default BusResults;
