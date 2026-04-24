import React from 'react';
import { Camera } from 'lucide-react';

const Galleria = () => {
  return (
    <div className="galleria-page">
      <div className="nav-spacer"></div>
      
      <section className="gallery-hero container" data-aos="fade-up">
        <span className="script text-gold" style={{ fontSize: '2.5rem', display: 'block', marginBottom: '10px' }}>
          I nostri ricordi
        </span>
        <h1 className="serif">Galleria Fotografica</h1>
        <div className="divider"></div>
        
        <div className="funny-text-container" data-aos="fade-up" data-aos-delay="200">
          <p className="description">
            Benvenuti nel nostro angolo dei ricordi! Qui troverete le foto ufficiali 
            (quelle dove siamo tutti bellissimi e composti) e, speriamo, tantissime delle 
            vostre foto (quelle vere, quelle spontanee... e quelle che forse sarebbe meglio 
            non mostrare a colazione!).
          </p>
          <p className="description italic" style={{ marginTop: '20px' }}>
            Se avete immortalato un momento epico, un ballo scatenato o quel selfie 
            leggermente sfocato alle 4 del mattino, non tenetelo per voi! 
            Caricatelo sul nostro album condiviso e aiutateci a rivivere ogni istante.
          </p>
          <p className="description bold text-green" style={{ marginTop: '20px', fontWeight: '600' }}>
            Promettiamo di non giudicare... troppo! ;)
          </p>
        </div>

        <div className="button-wrapper" data-aos="zoom-in" data-aos-delay="400">
          <a 
            href="https://www.wedshoots.com/it?albumId=ES3b17fa73" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <Camera size={20} />
            VEDI E CARICA FOTO SU WEDSHOOTS
          </a>
        </div>
      </section>

      <section className="qr-section container" data-aos="fade-up">
        <div className="qr-card">
          <div className="qr-text">
            <h3 className="serif">Condividi la tua prospettiva!</h3>
            <p>
              Usa il tuo telefono per scansionare questo codice QR o inserisci manualmente 
              il codice dell'album nell'app WedShoots.
            </p>
            <div className="album-code-box">
              <span className="label">Codice Album:</span>
              <span className="code">ES3b17fa73</span>
            </div>
            <p className="italic" style={{ marginTop: '20px', fontSize: '0.95rem' }}>
              Promettiamo di guardarle tutte, specialmente quelle scattate dopo qualche brindisi! ;)
            </p>
          </div>
          <div className="qr-image-container">
            <div className="qr-frame">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://www.wedshoots.com?albumId=ES3b17fa73" 
                alt="WedShoots QR Code" 
                className="qr-code-img" 
              />
              <p className="qr-caption">SCANSIONAMI</p>
            </div>
          </div>
        </div>
      </section>

      <section className="placeholder-images container" data-aos="fade-up" data-aos-delay="600">
        <div className="image-preview-grid">
          <div className="preview-card" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80")' }}></div>
          <div className="preview-card" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80")' }}></div>
          <div className="preview-card" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&q=80")' }}></div>
        </div>
      </section>

      <style>{`
        .galleria-page {
          min-height: 100vh;
          background-color: var(--color-bg);
          padding-bottom: 100px;
        }
        .gallery-hero {
          text-align: center;
          padding-top: 60px;
          max-width: 800px;
        }
        .gallery-hero h1 {
          font-size: 4.5rem;
          color: var(--color-green);
          margin-bottom: 20px;
          line-height: 1;
        }
        .divider {
          width: 80px;
          height: 2px;
          background-color: var(--color-gold);
          margin: 30px auto;
        }
        .funny-text-container {
          margin: 40px auto;
          padding: 30px;
          background: white;
          border: 1px solid var(--glass-border);
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          border-radius: 20px;
        }
        .description {
          font-size: 1.15rem;
          color: var(--color-text-light);
          line-height: 1.8;
        }
        .qr-section {
          margin: 60px auto;
          max-width: 800px;
        }
        .qr-card {
          display: flex;
          align-items: center;
          gap: 40px;
          background: var(--color-bg-green-soft);
          padding: 40px;
          border-radius: 30px;
          border: 1px dashed var(--color-gold);
        }
        .qr-text {
          flex: 2;
        }
        .qr-text h3 {
          font-size: 2rem;
          color: var(--color-green);
          margin-bottom: 15px;
        }
        .qr-text p {
          color: var(--color-text-light);
          line-height: 1.6;
        }
        .qr-image-container {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .album-code-box {
          margin-top: 20px;
          display: inline-flex;
          flex-direction: column;
          background: white;
          padding: 10px 20px;
          border-radius: 12px;
          border: 1px solid var(--color-gold);
          text-align: center;
        }
        .album-code-box .label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-gold);
        }
        .album-code-box .code {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--color-green);
          letter-spacing: 2px;
        }
        .qr-frame {
          background: white;
          padding: 15px;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          text-align: center;
          transition: var(--transition-smooth);
        }
        .qr-frame:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.12);
        }
        .qr-code-img {
          width: 180px;
          height: auto;
          display: block;
          margin-bottom: 10px;
          border-radius: 10px;
        }
        .qr-caption {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-gold);
          letter-spacing: 2px;
        }
        .button-wrapper {
          margin-top: 50px;
        }
        .btn-gold {
          padding: 18px 40px;
          font-size: 1rem;
          gap: 15px;
        }
        .image-preview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 80px;
        }
        .preview-card {
          aspect-ratio: 1;
          background-size: cover;
          background-position: center;
          border-radius: 15px;
          filter: grayscale(10%) sepia(10%);
          transition: var(--transition-smooth);
        }
        .preview-card:hover {
          filter: none;
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .text-green { color: var(--color-green); }

        @media (max-width: 768px) {
          .gallery-hero h1 { font-size: 3rem; }
          .qr-card {
            flex-direction: column;
            text-align: center;
            gap: 30px;
            padding: 30px 20px;
          }
          .image-preview-grid { grid-template-columns: 1fr; }
          .preview-card:nth-child(n+2) { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Galleria;
