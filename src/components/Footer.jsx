import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p>&copy; 2025 İlaç Atlası. Tüm hakları saklıdır.</p>
        <p>
          <a href="/hakkimizda" className="text-white text-decoration-underline">
            Hakkımızda
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
