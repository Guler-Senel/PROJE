// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/AnaSayfa.css';
import AnaSayfa from './pages/IlacArama';
import ReceteRenkleriSayfasi from "./pages/ReceteRenkleriSayfasi";
import IlacDetay from './pages/IlacDetay';
import Hakkimizda from './pages/Hakkimizda';
import PopulerIlaclar from './pages/PopulerIlaclar';
import IlacArama from './pages/IlacArama'; // yeni arama sayfası

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1" style={{ paddingTop: '70px' }}>

        <Routes>
          {/* Yeni arama sayfası */}
          <Route path="/ilac-arama" element={<IlacArama />} />
          
          {/* Diğer sayfalar */}
          <Route path="/" element={<AnaSayfa />} />
          <Route path="/recete-renkleri" element={<ReceteRenkleriSayfasi />} />
          <Route path="/ilac/:id" element={<IlacDetay />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/populer-ilaclar" element={<PopulerIlaclar />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
