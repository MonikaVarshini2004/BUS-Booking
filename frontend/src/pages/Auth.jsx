import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    // Determine where to redirect after login (default to dashboard)
    const from = location.state?.from?.pathname || '/dashboard';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Mock token generation
        const mockToken = 'jwt-' + Math.random().toString(36).substr(2);
        const userData = {
            name: isLogin ? (formData.name || 'John Doe') : formData.name,
            email: formData.email
        };

        login(mockToken, userData);
        alert(isLogin ? "Logged in successfully!" : "Registered successfully!");
        
        // Redirect back to original destination or dashboard
        navigate(from, { replace: true });
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#f5f7fb] to-[#e2e8f0] p-8 font-sans">
            <div className="w-full max-w-[420px] py-12 px-8 text-center transition-transform duration-300 hover:-translate-y-1 bg-white/85 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-2xl">
                <h2 className="text-[#1A2B48] text-3xl mb-8 font-bold">{isLogin ? 'Welcome Back' : 'Create an Account'}</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {!isLogin && (
                        <div className="flex flex-col items-start">
                            <label className="text-sm text-slate-600 mb-2 font-medium">Full Name</label>
                            <input 
                                className="w-full p-4 border-2 border-slate-200 rounded-xl text-base transition-all duration-300 bg-white/90 focus:outline-none focus:border-[#FF6B6B] focus:ring-[3px] focus:ring-[#FF6B6B]/20" 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe" 
                                required 
                            />
                        </div>
                    )}
                    <div className="flex flex-col items-start">
                        <label className="text-sm text-slate-600 mb-2 font-medium">Email Address</label>
                        <input 
                            className="w-full p-4 border-2 border-slate-200 rounded-xl text-base transition-all duration-300 bg-white/90 focus:outline-none focus:border-[#FF6B6B] focus:ring-[3px] focus:ring-[#FF6B6B]/20" 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com" 
                            required 
                        />
                    </div>
                    <div className="flex flex-col items-start">
                        <label className="text-sm text-slate-600 mb-2 font-medium">Password</label>
                        <input 
                            className="w-full p-4 border-2 border-slate-200 rounded-xl text-base transition-all duration-300 bg-white/90 focus:outline-none focus:border-[#FF6B6B] focus:ring-[3px] focus:ring-[#FF6B6B]/20" 
                            type="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••" 
                            required 
                        />
                    </div>
                    <button type="submit" className="bg-gradient-to-br from-[#FF6B6B] to-[#ff4757] text-white p-4 border-none rounded-xl text-lg font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(255,107,107,0.4)] mt-4 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(255,107,107,0.6)]">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <p className="mt-8 text-slate-600">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <span className="text-[#FF6B6B] font-semibold cursor-pointer transition-colors duration-300 hover:text-[#ff4757] hover:underline" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Sign up here' : 'Login here'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Auth;
