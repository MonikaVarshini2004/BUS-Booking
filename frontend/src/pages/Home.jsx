import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BookingFlow.css';

const Home = () => {
    const [search, setSearch] = useState({ from: '', to: '', date: '' });
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        // In a real app, we'd validate here
        navigate('/search');
    };

    return (
        <div className="home-hero">
            <div className="glass-card">
                <h1>Where to next?</h1>
                <form onSubmit={handleSearch} className="search-form">
                    <div className="input-group">
                        <label>From</label>
                        <input 
                            type="text" 
                            placeholder="Source City" 
                            value={search.from}
                            onChange={(e) => setSearch({...search, from: e.target.value})}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>To</label>
                        <input 
                            type="text" 
                            placeholder="Destination City" 
                            value={search.to}
                            onChange={(e) => setSearch({...search, to: e.target.value})}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Date</label>
                        <input 
                            type="date" 
                            value={search.date}
                            onChange={(e) => setSearch({...search, date: e.target.value})}
                            required
                        />
                    </div>
                    <button type="submit" className="search-btn">Find Buses</button>
                </form>
            </div>
        </div>
    );
};

export default Home;
