import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Sayfaya göre link rengi belirle
  const getLinkColor = () => {
    if (currentPath === '/') return '#ffffff';            // Ana Sayfa: beyaz
    if (currentPath === '/hakkimizda') return '#003366';  // Hakkımızda: lacivert
    if (currentPath === '/recete-renkleri') return '#006400'; // Reçete: koyu yeşil
    if (currentPath === '/iletisim') return '#800000';    // İletişim: bordo
    return '#000000'; // Diğer sayfalar: siyah
  };

  const linkStyle = {
    color: getLinkColor(),
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        backgroundColor: '#0b1b2a', // koyu lacivert
        zIndex: 1000,
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
      }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/" style={linkStyle}>
          İlaç Atlası
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-bold" to="/" style={linkStyle}>
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-bold" to="/hakkimizda" style={linkStyle}>
                Hakkımızda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-bold" to="/recete-renkleri" style={linkStyle}>
                Reçete Renkleri
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
