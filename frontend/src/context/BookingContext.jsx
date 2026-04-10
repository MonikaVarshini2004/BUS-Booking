import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    // Load bookings from localStorage on mount
    useEffect(() => {
        const savedBookings = localStorage.getItem('tripBookings');
        if (savedBookings) {
            setBookings(JSON.parse(savedBookings));
        }
    }, []);

    // Save bookings whenever they change
    useEffect(() => {
        localStorage.setItem('tripBookings', JSON.stringify(bookings));
    }, [bookings]);

    const addBooking = (newBooking) => {
        const bookingWithId = {
            ...newBooking,
            id: 'HCL-BUS-' + Math.floor(1000 + Math.random() * 9000),
            userEmail: user?.email,
            createdAt: new Date().toISOString(),
            status: 'Confirmed'
        };
        setBookings(prev => [bookingWithId, ...prev]);
        return bookingWithId;
    };

    const cancelBooking = (bookingId) => {
        setBookings(prev => prev.map(trip => 
            trip.id === bookingId ? { ...trip, status: 'Cancelled' } : trip
        ));
    };

    const getUserBookings = () => {
        return bookings.filter(trip => trip.userEmail === user?.email);
    };

    return (
        <BookingContext.Provider value={{ bookings, addBooking, cancelBooking, getUserBookings }}>
            {children}
        </BookingContext.Provider>
    );
};
