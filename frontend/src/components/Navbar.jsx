import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-white/85 backdrop-blur-md border-b border-white/30 px-8 py-4 sticky top-0 z-50 flex justify-between items-center shadow-sm">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-br from-[#1A2B48] to-[#FF6B6B] bg-clip-text text-transparent italic">
                Antigravity Bus
            </Link>
            
            <div className="flex items-center gap-6">
                <Link to="/" className="text-slate-600 font-medium hover:text-[#FF6B6B] transition-colors">Search</Link>
                {user ? (
                    <>
                        <Link to="/dashboard" className="text-slate-600 font-medium hover:text-[#FF6B6B] transition-colors">My Bookings</Link>
                        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                            <span className="text-[#1A2B48] font-semibold text-sm">Hi, {user.name.split(' ')[0]}</span>
                            <button 
                                onClick={handleLogout}
                                className="bg-slate-100 text-[#1A2B48] px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    </>
                ) : (
                    <Link 
                        to="/login" 
                        className="bg-gradient-to-br from-[#FF6B6B] to-[#ff4757] text-white px-6 py-2 rounded-lg font-semibold hover:-translate-y-[1px] transition-all shadow-md shadow-red-200"
                    >
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
