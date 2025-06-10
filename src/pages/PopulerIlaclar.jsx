import React, { useEffect, useState } from 'react';
import { getAllDrugs } from '../services/ilacService';
import DrugCard from '../components/DrugCard';

function PopulerIlaclar() {
  const [ilaclar, setIlaclar] = useState([]);

  useEffect(() => {
    getAllDrugs().then(data => setIlaclar(data));
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Popüler İlaçlar</h2>
      <div className="row">
        {ilaclar.map(ilac => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={ilac.id}>
            <DrugCard ilac={ilac} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopulerIlaclar;
