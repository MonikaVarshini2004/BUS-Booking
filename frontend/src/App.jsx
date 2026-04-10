
import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BusResults from './pages/BusResults';
import SeatSelection from './pages/SeatSelection'; // 1. Added this import


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<BusResults />} />
        <Route path="/seats" element={<SeatSelection />} /> {/* 2. Added this route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App; // 3. Added the export back
