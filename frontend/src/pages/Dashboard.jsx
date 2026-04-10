import React, { useState } from 'react';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('upcoming');

    return (
        <div className="flex flex-col md:flex-row gap-8 py-16 px-8 max-w-[1200px] mx-auto min-h-screen font-sans">
            <div className="w-full md:w-[300px] p-8 h-fit box-border bg-white/85 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-2xl">
                <div className="text-center mb-8 pb-8 border-b border-black/10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#1A2B48] to-[#FF6B6B] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">JD</div>
                    <h3 className="text-[#1A2B48] mb-2 font-bold text-xl">John Doe</h3>
                    <p className="text-slate-600 text-sm">john@example.com</p>
                </div>
                <nav className="flex flex-col gap-2">
                    <button className={`bg-transparent border-none text-left p-4 rounded-lg text-base text-[#1A2B48] cursor-pointer transition-all duration-300 font-medium hover:bg-[#1A2B48]/5 ${activeTab === 'upcoming' ? '!bg-[#1A2B48] !text-white' : ''}`} onClick={() => setActiveTab('upcoming')}>Upcoming Trips</button>
                    <button className={`bg-transparent border-none text-left p-4 rounded-lg text-base text-[#1A2B48] cursor-pointer transition-all duration-300 font-medium hover:bg-[#1A2B48]/5 ${activeTab === 'past' ? '!bg-[#1A2B48] !text-white' : ''}`} onClick={() => setActiveTab('past')}>Past Trips</button>
                    <button className={`bg-transparent border-none text-left p-4 rounded-lg text-base text-[#1A2B48] cursor-pointer transition-all duration-300 font-medium hover:bg-[#1A2B48]/5 ${activeTab === 'profile' ? '!bg-[#1A2B48] !text-white' : ''}`} onClick={() => setActiveTab('profile')}>Profile Settings</button>
                </nav>
            </div>
            
            <div className="flex-1 p-12 bg-white/85 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-2xl">
                {activeTab === 'upcoming' && (
                    <div className="duration-500 ease-in-out">
                        <h2 className="text-[#1A2B48] mb-8 text-3xl font-bold">Upcoming Trips</h2>
                        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                            <div className="flex justify-between mb-6 pb-4 border-b border-dashed border-slate-200">
                                <span className="font-semibold text-slate-600">PNR: HCL-BUS-8493</span>
                                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">Confirmed</span>
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-left">
                                    <h3 className="text-[#1A2B48] text-2xl mb-2 font-bold">Mumbai</h3>
                                    <p className="text-slate-500 text-sm">Oct 24, 2026 • 21:00</p>
                                </div>
                                <div className="text-2xl text-[#FF6B6B]">➔</div>
                                <div className="text-right flex flex-col items-end">
                                    <h3 className="text-[#1A2B48] text-2xl mb-2 font-bold">Goa</h3>
                                    <p className="text-slate-500 text-sm">Oct 25, 2026 • 09:00</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-slate-200 text-[#1A2B48] border-none px-6 py-3 rounded-lg cursor-pointer font-semibold transition-colors duration-300 hover:bg-slate-300">Print Ticket</button>
                                <button className="bg-red-100 text-red-500 border-none px-6 py-3 rounded-lg cursor-pointer font-semibold transition-colors duration-300 hover:bg-red-300">Cancel Trip</button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'past' && (
                    <div className="duration-500 ease-in-out">
                        <h2 className="text-[#1A2B48] mb-8 text-3xl font-bold">Past Trips</h2>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6 opacity-70">
                            <div className="flex justify-between mb-6 pb-4 border-b border-dashed border-slate-200">
                                <span className="font-semibold text-slate-600">PNR: HCL-BUS-1122</span>
                                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-slate-200 text-slate-600">Completed</span>
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-left">
                                    <h3 className="text-[#1A2B48] text-2xl mb-2 font-bold">Pune</h3>
                                    <p className="text-slate-500 text-sm">Sep 10, 2026 • 10:00</p>
                                </div>
                                <div className="text-2xl text-[#FF6B6B]">➔</div>
                                <div className="text-right flex flex-col items-end">
                                    <h3 className="text-[#1A2B48] text-2xl mb-2 font-bold">Mumbai</h3>
                                    <p className="text-slate-500 text-sm">Sep 10, 2026 • 14:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'profile' && (
                    <div className="duration-500 ease-in-out">
                        <h2 className="text-[#1A2B48] mb-8 text-3xl font-bold">Profile Settings</h2>
                        <form className="max-w-[500px]">
                            <div className="flex flex-col mb-6">
                                <label className="mb-2 text-slate-600 font-medium text-left">Full Name</label>
                                <input className="px-4 py-3 border-2 border-slate-200 rounded-lg text-base focus:outline-none focus:border-[#FF6B6B]" type="text" defaultValue="John Doe" />
                            </div>
                            <div className="flex flex-col mb-6">
                                <label className="mb-2 text-slate-600 font-medium text-left">Email</label>
                                <input className="px-4 py-3 border-2 border-slate-200 rounded-lg text-base focus:outline-none focus:border-[#FF6B6B]" type="email" defaultValue="john@example.com" />
                            </div>
                            <div className="flex flex-col mb-6">
                                <label className="mb-2 text-slate-600 font-medium text-left">New Password</label>
                                <input className="px-4 py-3 border-2 border-slate-200 rounded-lg text-base focus:outline-none focus:border-[#FF6B6B]" type="password" placeholder="••••••••" />
                            </div>
                            <button type="button" className="bg-gradient-to-br from-[#FF6B6B] to-[#ff4757] text-white p-4 border-none rounded-xl text-lg font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(255,107,107,0.4)] mt-4 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(255,107,107,0.6)]">Save Changes</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
