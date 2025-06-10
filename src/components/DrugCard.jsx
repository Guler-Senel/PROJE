import React from 'react';
import { Link } from 'react-router-dom';

function DrugCard({ ilac }) {
  return (
    <div className="card h-100 shadow-sm border-primary">
      <div className="card-body">
        <h5 className="card-title">{ilac.isimVeForm}</h5>
        <p className="card-text"><strong>Kullanım:</strong> {ilac.kullanimAlani}</p>
        <p className="card-text"><strong>Reçete:</strong> {ilac.receteRengi}</p>
        <p className="card-text"><strong>Halk Dili:</strong> {ilac.halkDili}</p>
        <Link to={`/ilac/${ilac.id}`} className="btn btn-outline-primary btn-sm mt-2">
          Detayları Gör
        </Link>
      </div>
    </div>
  );
}

export default DrugCard;
