import { useEffect, useState } from 'react';

export default function IlacArama() {
  const [query, setQuery] = useState('');
  const [htmlSonuc, setHtmlSonuc] = useState('');

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim() !== '') {
        fetch(`http://localhost/x/src/data/search.php?q=${encodeURIComponent(query)}`)
          .then(res => res.text())
          .then(html => setHtmlSonuc(html))
          .catch(err => console.error('Hata:', err));
      } else {
        setHtmlSonuc('');
      }
    }, 400);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div
      style={{
        minHeight: '100vh',
        paddingTop: '120px',
        paddingBottom: '60px',
        backgroundImage: 'url("https://www.upload.ee/image/18196374/foto.png" )',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
      }}
    >
    <h1 
  className="text-white mb-4 text-4xl font-bold text-center bg-black bg-opacity-60 shadow-lg rounded-xl px-6 py-4 inline-block"
>
  İLAÇ ATLASI
</h1>
      <div
        style={{
          backgroundColor: 'rgba(11, 27, 42, 0.85)', // yarı saydam koyu maske
          padding: '40px 20px',
          borderRadius: '12px',
          maxWidth: '900px',
          margin: '0 auto',
          boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
        }}
      >
        <h2 className="text-white mb-4" style={{ textAlign: 'center' }}>İlaç Arama</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            maxWidth: '600px',
            margin: '0 auto',
            marginBottom: '30px',
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="İlaç adı, kullanım alanı veya halk dili girin"
            style={{
              flex: '1 1 auto',
              minWidth: '200px',
              padding: '12px',
              borderRadius: '6px',
              border: '1px solid #ccc',
            }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {htmlSonuc && (
          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.95)',
              color: '#000',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            }}
            dangerouslySetInnerHTML={{ __html: htmlSonuc }}
          />
        )}
      </div>
    </div>
  );
}
