import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getDrugById } from '../services/ilacService';
import 'bootstrap/dist/css/bootstrap.min.css';

function IlacDetay() {
  const { id } = useParams();
  const [ilac, setIlac] = useState(null);

  // Geçici sahte veriler (artık 3 adet)
  const fakeIlaclar = [
    {
      id: 1,
      isimVeForm: "Parol Tablet",
      etkenMadde: "Parasetamol",
      kullanimAlani: "Ağrı kesici ve ateş düşürücü",
      yanEtki: "Mide bulantısı, baş dönmesi",
      fiyat: "25 TL",
      odeme: "SGK tarafından karşılanır"
    },
    {
      id: 2,
      isimVeForm: "Augmentin 625 mg",
      etkenMadde: "Amoksisilin + Klavulanik Asit",
      kullanimAlani: "Enfeksiyon tedavisi",
      yanEtki: "İshal, mide rahatsızlığı",
      fiyat: "45 TL",
      odeme: "SGK karşılar"
    },
    {
      id: 3,
      isimVeForm: "Aferin Forte",
      etkenMadde: "Parasetamol + Klorfeniramin Maleat",
      kullanimAlani: "Soğuk algınlığı ve grip semptomlarının giderilmesi",
      yanEtki: "Sersemlik, uyku hali, ağız kuruluğu",
      fiyat: "18 TL",
      odeme: "SGK tarafından karşılanmaz"
    }
  ];

  useEffect(() => {
    const secilenIlac = fakeIlaclar.find((i) => i.id === parseInt(id));
    setIlac(secilenIlac);
    // getDrugById(id).then((data) => setIlac(data));
  }, [id]);

  if (!ilac) {
    return (
      <div className="container mt-5">
        <h3>İlaç bulunamadı.</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">{ilac.isimVeForm}</h1>
      <ul className="list-group">
        <li className="list-group-item"><strong>Etken Madde:</strong> {ilac.etkenMadde}</li>
        <li className="list-group-item"><strong>Kullanım:</strong> {ilac.kullanimAlani}</li>
        <li className="list-group-item"><strong>Yan Etkiler:</strong> {ilac.yanEtki}</li>
        <li className="list-group-item"><strong>Fiyat:</strong> {ilac.fiyat}</li>
        <li className="list-group-item"><strong>Ödeme Durumu:</strong> {ilac.odeme}</li>
      </ul>
    </div>
  );
}

export default IlacDetay;
