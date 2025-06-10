import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AnaSayfa.css'; // varsa CSS dosyan

export default function AnaSayfa() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfa yenilenmesini engeller
    if (query.trim() !== '') {
      navigate(`/ilac-arama?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title ilac">İLAÇ</h1>
        <h1 className="hero-title atlasi">ATLASI</h1>

        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="q"
              placeholder="İlaç adıyla ara…"
              className="search-box"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
