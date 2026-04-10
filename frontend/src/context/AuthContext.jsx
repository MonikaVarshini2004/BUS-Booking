import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    useEffect(() => {
        if (token) {
            // Mock validation
            setUser({ name: 'Guest User', email: 'guest@example.com' });
        } else {
            setUser(null);
        }
    }, [token]);

    const login = (jwt, userData) => {
        localStorage.setItem('token', jwt);
        setToken(jwt);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
