import React, { useState } from 'react';

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = (e) => {
        e.preventDefault();
        setIsConfirmed(true);
    };

    if (isConfirmed) {
        return (
            <div className="py-16 px-8 min-h-screen bg-[#f4f7f6] font-sans">
                <div className="max-w-[500px] mx-auto p-12 text-center bg-white/85 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-2xl">
                    <h2 className="text-[#FF6B6B] text-3xl mb-8 font-bold">✨ Booking Confirmed!</h2>
                    <div className="text-left bg-slate-50 p-8 rounded-xl mb-8">
                        <p className="text-[1.1rem] text-[#1A2B48] mb-3"><strong>PNR:</strong> HCL-BUS-8493</p>
                        <p className="text-[1.1rem] text-[#1A2B48] mb-3"><strong>Route:</strong> Mumbai ➔ Goa</p>
                        <p className="text-[1.1rem] text-[#1A2B48] mb-3"><strong>Date:</strong> 24 Oct 2026</p>
                        <p className="text-[1.1rem] text-[#1A2B48] mb-3"><strong>Passenger:</strong> John Doe</p>
                        <p className="text-[1.1rem] text-[#1A2B48] mb-3"><strong>Seat:</strong> 12A (Upper Sleeper)</p>
                    </div>
                    <button className="w-full bg-gradient-to-br from-[#FF6B6B] to-[#ff4757] text-white p-4 border-none rounded-xl text-lg font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(255,107,107,0.4)] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(255,107,107,0.6)]" onClick={() => window.print()}>Print E-Ticket</button>
                </div>
            </div>
        );
    }

    return (
        <div className="py-16 px-8 min-h-screen bg-[#f4f7f6] font-sans">
            <h1 className="text-center text-[#1A2B48] mb-12 text-4xl font-bold">Complete Your Booking</h1>
            <div className="flex flex-col md:flex-row gap-8 max-w-[1200px] mx-auto items-start">
                <form className="flex-[2] p-10 max-md:w-full max-md:box-border text-left bg-white/85 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-2xl" onSubmit={handleConfirm}>
                    
                    <section className="mb-10">
                        <h3 className="text-[#1A2B48] mb-6 border-b-2 border-slate-200 pb-2 text-xl font-semibold">Passenger Details</h3>
                        <div className="flex gap-4 flex-wrap text-left">
                            <div className="flex-1 min-w-[200px] flex flex-col">
                                <label className="mb-2 text-slate-600 text-sm font-medium">Full Name</label>
                                <input className="px-4 py-3 border-2 border-slate-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-[#FF6B6B] focus:ring-[3px] focus:ring-[#FF6B6B]/20" type="text" placeholder="Passenger Name" required />
                            </div>
                            <div className="flex-[0.5] min-w-[100px] flex flex-col">
                                <label className="mb-2 text-slate-600 text-sm font-medium">Age</label>
                                <input className="px-4 py-3 border-2 border-slate-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-[#FF6B6B] focus:ring-[3px] focus:ring-[#FF6B6B]/20" type="number" placeholder="Years" required />
                            </div>
                            <div className="flex-[0.5] min-w-[100px] flex flex-col">
                                <label className="mb-2 text-slate-600 text-sm font-medium">Gender</label>
                                <select className="px-4 py-3 border-2 border-slate-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-[#FF6B6B] focus:ring-[3px] focus:ring-[#FF6B6B]/20" required>
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h3 className="text-[#1A2B48] mb-6 border-b-2 border-slate-200 pb-2 text-xl font-semibold">Contact Information</h3>
                        <div className="flex gap-4 flex-wrap text-left">
                            <div className="flex-1 min-w-[200px] flex flex-col">
                                <label className="mb-2 text-slate-600 text-sm font-medium">Mobile Number</label>
                                <input className="px-4 py-3 border-2 border-slate-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-[#FF6B6B] focus:ring-[3px] focus:ring-[#FF6B6B]/20" type="tel" placeholder="+91 9876543210" required />
                            </div>
                            <div className="flex-1 min-w-[200px] flex flex-col">
                                <label className="mb-2 text-slate-600 text-sm font-medium">Email Address</label>
                                <input className="px-4 py-3 border-2 border-slate-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-[#FF6B6B] focus:ring-[3px] focus:ring-[#FF6B6B]/20" type="email" placeholder="email@example.com" required />
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h3 className="text-[#1A2B48] mb-6 border-b-2 border-slate-200 pb-2 text-xl font-semibold">Payment Method</h3>
                        <div className="flex flex-col gap-4 text-left">
                            <label className={`p-4 border-2 border-slate-200 rounded-lg cursor-pointer flex items-center gap-4 transition-all duration-300 font-medium text-[#1A2B48] hover:border-[#FF6B6B] hover:bg-[#FF6B6B]/5 ${paymentMethod === 'upi' ? 'border-[#FF6B6B] bg-[#FF6B6B]/10' : ''}`}>
                                <input type="radio" name="payment" value="upi" onChange={(e) => setPaymentMethod(e.target.value)} required />
                                UPI (GPay, PhonePe)
                            </label>
                            <label className={`p-4 border-2 border-slate-200 rounded-lg cursor-pointer flex items-center gap-4 transition-all duration-300 font-medium text-[#1A2B48] hover:border-[#FF6B6B] hover:bg-[#FF6B6B]/5 ${paymentMethod === 'card' ? 'border-[#FF6B6B] bg-[#FF6B6B]/10' : ''}`}>
                                <input type="radio" name="payment" value="card" onChange={(e) => setPaymentMethod(e.target.value)} required />
                                Credit/Debit Card
                            </label>
                            <label className={`p-4 border-2 border-slate-200 rounded-lg cursor-pointer flex items-center gap-4 transition-all duration-300 font-medium text-[#1A2B48] hover:border-[#FF6B6B] hover:bg-[#FF6B6B]/5 ${paymentMethod === 'netbanking' ? 'border-[#FF6B6B] bg-[#FF6B6B]/10' : ''}`}>
                                <input type="radio" name="payment" value="netbanking" onChange={(e) => setPaymentMethod(e.target.value)} required />
                                Net Banking
                            </label>
                        </div>
                    </section>

                    <button type="submit" className="w-full mt-4 bg-gradient-to-br from-[#FF6B6B] to-[#ff4757] text-white p-4 border-none rounded-xl text-lg font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(255,107,107,0.4)] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(255,107,107,0.6)]">Confirm & Pay</button>
                </form>

                <div className="flex-1 p-8 md:sticky top-8 max-md:w-full max-md:static max-md:box-border text-left bg-white/85 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-2xl">
                    <h3 className="text-[#1A2B48] mb-6 text-[1.4rem] font-bold">Fare Summary</h3>
                    <div className="flex justify-between mb-4 text-slate-600">
                        <span>Base Fare (1 Seat)</span>
                        <span>₹1,200</span>
                    </div>
                    <div className="flex justify-between mb-4 text-slate-600">
                        <span>Service Fee</span>
                        <span>₹50</span>
                    </div>
                    <div className="flex justify-between mb-4 text-slate-600">
                        <span>GST (5%)</span>
                        <span>₹60</span>
                    </div>
                    <hr className="border-none border-t-2 border-dashed border-slate-200 my-6" />
                    <div className="flex justify-between mb-4 text-slate-600 text-[1.4rem] font-bold text-[#1A2B48] mt-4">
                        <span>Total Amount</span>
                        <span>₹1,310</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
