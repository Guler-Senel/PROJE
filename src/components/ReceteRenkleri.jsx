// src/components/ReceteRenkleri.jsx
import React from "react";
import "../styles/ReceteRenkleri.css";

const receteVerileri = [
  {
    renk: "BEYAZ",
    aciklama: "Reçetesiz alınabilen ağrı kesici ve soğuk algınlığı ilaçlarını kapsar.",
    ornek: "Örnek İlaç: Parol, Minoset"
  },
  {
    renk: "TURUNCU",
    aciklama: "Psikotrop etkili ilaçlardır. Merkezi sinir sistemine etki eder.",
    ornek: "Örnek İlaç: Akineton"
  },
  {
    renk: "KIRMIZI",
    aciklama: "Narkotik (uyuşturucu) ilaçlardır. Ağrı kesici etkisi çok yüksektir.",
    ornek: "Örnek İlaç: Dolorex"
  },
  {
    renk: "MOR",
    aciklama: "Antidepresan grubu ilaçlardır. Ruh sağlığı tedavilerinde kullanılır.",
    ornek: "Örnek İlaç: Lustral"
  },
  {
    renk: "YEŞİL",
    aciklama: "Bağımlılık yapabilen sakinleştirici ilaçlardır.",
    ornek: "Örnek İlaç: Xanax, Diazem"
  }
];

function ReceteRenkleri() {
  return (
    <div className="recete-renkleri-section">
      <h2 className="recete-renkleri-title">REÇETE RENKLERİ </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {receteVerileri.map((recete, index) => (
          <div key={index} className="recete-card">
            <h4>{recete.renk}</h4>
            <p>{recete.aciklama}</p>
            <p><strong>{recete.ornek}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReceteRenkleri;
