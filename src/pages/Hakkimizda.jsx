import React from 'react';
import '../styles/Hakkimizda.css';

function Hakkimizda() {
  const heroStyle = {
    backgroundImage: "url('/iletisimarkaplan.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    position: "relative",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 30px"
  };

  return (
    <div style={heroStyle}>
      <div className="overlay"></div>
      <div className="row w-100 m-0">
        <div className="left-content">
          <h2 className="section-title">BİZ KİMİZ & NEDEN BU SİTE</h2>
          <p><strong>İlaç Atlası</strong>, Fırat Üniversitesi Teknoloji Fakültesi Yazılım Mühendisliği 1. sınıf öğrencileri tarafından geliştirilen bir dönem projesidir.</p>
          <p>Bu projenin temel amacı, sağlık alanında özellikle ilaçlarla ilgili doğru, sade ve erişilebilir bilgileri dijital ortamda sunarak kullanıcıların bilgiye kolay ve güvenilir şekilde ulaşmasını sağlamaktır.</p>
          <p>Günümüzde sağlıkla ilgili içeriklere erişim kolay gibi görünse de, güvenilir ve anlaşılır bilgiye ulaşmak hâlâ önemli bir sorundur. İlaçların kullanım alanları, reçete türleri, devlet tarafından karşılanıp karşılanmadığı ya da halk arasında bilinen adları gibi konularda bilgi kirliliği yaygındır. İlaç Atlası, bu tür sorunlara çözüm üretmeyi hedefleyen kullanıcı dostu bir platform olarak tasarlanmıştır.</p>
          <p>Bu proje yalnızca bir akademik gereklilik değil, aynı zamanda yazılım dünyasında attığımız ilk profesyonel adımdır.</p>

          <div className="contact-info">
            <h4>İLETİŞİM</h4>
            <p><strong>E-MAIL:</strong>ilacatlasicom@gmail.com</p>
          </div>
        </div>

        <div className="right-content"  style={{ paddingLeft: '60px' }}>
          <h3>PROJE EKİBİ</h3>
          <ul>
            <li><strong>GÜLER ŞENEL:</strong> Scrum Master</li>
            <li><strong>ESMA NUR POLAT:</strong> Backend Developer</li>
            <li><strong>ABDULBAKİ İMSAL:</strong> Veri Uzmanı</li>
            <li><strong>NİSA İREM DİLEKÇİ:</strong> Frontend Developer</li>
            <li><strong>YARENGÜL KOCAOĞLU:</strong> API Geliştirici</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hakkimizda;
