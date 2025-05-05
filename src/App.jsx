import React from 'react';
import './App.css';

function App() {
  const drugs = [
    {
      name: "Parol",
      price: 25,
      stateCovered: true,
      purpose: "Ağrı kesici ve ateş düşürücü",
      sideEffects: ["Baş dönmesi", "Bulantı", "Alerjik reaksiyonlar"]
    },
    {
      name: "Augmentin",
      price: 85,
      stateCovered: true,
      purpose: "Bakteriyel enfeksiyonların tedavisi",
      sideEffects: ["İshal", "Mide rahatsızlığı", "Döküntü"]
    },
    {
      name: "Nurofen",
      price: 40,
      stateCovered: false,
      purpose: "Ağrı ve iltihap azaltıcı",
      sideEffects: ["Mide bulantısı", "Baş ağrısı", "Uyku hali"]
    }
  ];

  return (
    <div className="container">
      <h1>İlaç Atlası</h1>
      <div className="drug-list">
        {drugs.map((drug, index) => (
          <div key={index} className="drug-card">
            <h2>{drug.name}</h2>
            <p><strong>Fiyat:</strong> {drug.price} TL</p>
            <p><strong>Devlet Karşılıyor mu?:</strong> {drug.stateCovered ? "Evet" : "Hayır"}</p>
            <p><strong>Kullanım Amacı:</strong> {drug.purpose}</p>
            <div>
              <strong>Yan Etkiler:</strong>
              <ul>
                {drug.sideEffects.map((effect, idx) => (
                  <li key={idx}>{effect}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
