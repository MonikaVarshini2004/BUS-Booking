import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BookingContext } from '../context/BookingContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('upcoming');
    const { user, login, logout } = useContext(AuthContext);
    const { bookings, cancelBooking, getUserBookings } = useContext(BookingContext);
    const navigate = useNavigate();
    
    const userTrips = getUserBookings();
    const upcomingTrips = userTrips.filter(t => t.status === 'Confirmed');
    const pastTrips = userTrips.filter(t => t.status === 'Cancelled' || t.status === 'Completed');

    const [profileData, setProfileData] = useState({
        name: user?.name || 'Guest',
        email: user?.email || '',
        password: ''
    });

    const handleProfileChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handleProfileSave = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        login(token, { name: profileData.name, email: profileData.email });
        alert("Profile updated successfully!");
    };

    const handleCancel = (id) => {
        if (window.confirm("Are you sure you want to cancel this booking?")) {
            cancelBooking(id);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const getInitials = (name) => {
        if (!name) return '??';
        return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 py-16 px-8 max-w-[1200px] mx-auto min-h-screen font-sans">
            <div className="w-full md:w-[300px] p-8 h-fit bg-white/85 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl">
                <div className="text-center mb-8 pb-8 border-b border-black/10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#1A2B48] to-[#FF6B6B] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 italic">
                        {getInitials(user?.name)}
                    </div>
                    <h3 className="text-[#1A2B48] mb-2 font-bold text-xl">{user?.name}</h3>
                    <p className="text-slate-600 text-sm">{user?.email}</p>
                </div>
                <nav className="flex flex-col gap-2">
                    <button className={`p-4 rounded-lg text-left font-medium transition-all ${activeTab === 'upcoming' ? 'bg-[#1A2B48] text-white' : 'hover:bg-slate-100'}`} onClick={() => setActiveTab('upcoming')}>Upcoming Trips ({upcomingTrips.length})</button>
                    <button className={`p-4 rounded-lg text-left font-medium transition-all ${activeTab === 'past' ? 'bg-[#1A2B48] text-white' : 'hover:bg-slate-100'}`} onClick={() => setActiveTab('past')}>Trip History ({pastTrips.length})</button>
                    <button className={`p-4 rounded-lg text-left font-medium transition-all ${activeTab === 'profile' ? 'bg-[#1A2B48] text-white' : 'hover:bg-slate-100'}`} onClick={() => setActiveTab('profile')}>Profile Settings</button>
                    <button className="p-4 rounded-lg text-left font-medium text-red-500 hover:bg-red-50 mt-4" onClick={handleLogout}>Logout</button>
                </nav>
            </div>
            
            <div className="flex-1 p-12 bg-white/85 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl">
                {activeTab === 'upcoming' && (
                    <div className="animate-in fade-in duration-500">
                        <h2 className="text-[#1A2B48] mb-8 text-3xl font-bold">Upcoming Trips</h2>
                        {upcomingTrips.length === 0 ? (
                            <div className="text-center py-20 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                                <p className="text-slate-400">No upcoming trips found. Start searching!</p>
                            </div>
                        ) : (
                            upcomingTrips.map(trip => (
                                <div key={trip.id} className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between mb-4 pb-4 border-b border-dashed border-slate-200">
                                        <span className="font-bold text-slate-600">ID: {trip.id}</span>
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">Confirmed</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <h3 className="text-[#1A2B48] text-xl font-bold">{trip.route}</h3>
                                            <p className="text-slate-500 text-sm">{trip.date} • Seats: {trip.seats.join(', ')}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-[#1A2B48]">₹{trip.total}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="bg-slate-100 text-[#1A2B48] px-6 py-2 rounded-lg font-semibold hover:bg-slate-200" onClick={() => window.print()}>Print Ticket</button>
                                        <button className="bg-red-50 text-red-500 px-6 py-2 rounded-lg font-semibold hover:bg-red-100" onClick={() => handleCancel(trip.id)}>Cancel Trip</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {activeTab === 'past' && (
                    <div className="animate-in fade-in duration-500">
                        <h2 className="text-[#1A2B48] mb-8 text-3xl font-bold">Trip History</h2>
                        {pastTrips.length === 0 ? (
                            <div className="text-center py-20 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                                <p className="text-slate-400">No past or cancelled trips.</p>
                            </div>
                        ) : (
                            pastTrips.map(trip => (
                                <div key={trip.id} className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4 opacity-75">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="text-[#1A2B48] font-bold">{trip.route}</h3>
                                            <p className="text-slate-500 text-xs">{trip.date} • ID: {trip.id}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${trip.status === 'Cancelled' ? 'bg-red-100 text-red-600' : 'bg-slate-200 text-slate-600'}`}>
                                            {trip.status}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {activeTab === 'profile' && (
                    <div className="animate-in fade-in duration-500">
                        <h2 className="text-[#1A2B48] mb-8 text-3xl font-bold">Profile Settings</h2>
                        <form className="max-w-md" onSubmit={handleProfileSave}>
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-slate-600 mb-2">Full Name</label>
                                <input className="w-full p-4 border border-slate-200 rounded-xl focus:border-[#FF6B6B] outline-none" type="text" name="name" value={profileData.name} onChange={handleProfileChange} required />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-slate-600 mb-2">Email</label>
                                <input className="w-full p-4 border border-slate-200 rounded-xl focus:border-[#FF6B6B] outline-none" type="email" name="email" value={profileData.email} onChange={handleProfileChange} required />
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-br from-[#FF6B6B] to-[#ff4757] text-white p-4 rounded-xl font-bold shadow-lg shadow-red-200 hover:-translate-y-1 transition-transform">Save Changes</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;

