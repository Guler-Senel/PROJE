import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AnaSayfa from './pages/AnaSayfa';
import IlacDetay from './pages/IlacDetay';
import Hakkimizda from './pages/Hakkimizda';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AnaSayfa />} />
      <Route path="/ilac/:id" element={<IlacDetay />} />
      <Route path="/hakkimizda" element={<Hakkimizda />} />
    </Routes>
  );
}

export default App;
