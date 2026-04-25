import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Music, Utensils, GlassWater, Church } from 'lucide-react';

// Asset Imports
import cathedralNew from '../assets/recursos/cathedral-new.jpg';
import heroMatrimonio from '../assets/recursos/hero-matrimonio.webp';
import aperitivoNew from '../assets/recursos/aperitivo-new.jpg';
import cenaNew from '../assets/recursos/cena-new.jpg';
import festaNew from '../assets/recursos/festa-new.jpg';
import logoCbdg from '../assets/recursos/logo-cbdg.png';
import marbleBg from '../assets/recursos/marble-texture.png';

const Matrimonio = () => {
  const events = [
    {
      time: '16:00',
      title: 'La Cerimonia',
      location: 'Cattedrale di Trani',
      description: 'Il momento del "Sì" in una cornice mozzafiato sospesa tra cielo e mare.',
      image: cathedralNew,
      icon: <Church size={24} />,
      side: 'left'
    },
    {
      time: '18:00',
      title: 'Aperitivo di Benvenuto',
      location: 'Corte Bracco dei Germani',
      description: 'Iniziamo i festeggiamenti con bollicine e delizie pugliesi nei giardini della corte.',
      image: aperitivoNew,
      icon: <GlassWater size={24} />,
      side: 'right'
    },
    {
      time: '20:00',
      title: 'Cena di Gala',
      location: 'Corte Bracco dei Germani',
      description: 'Un viaggio enogastronomico attraverso i sapori autentici della nostra terra.',
      image: cenaNew,
      icon: <Utensils size={24} />,
      side: 'left'
    },
    {
      time: '00:00',
      title: 'Taglio della Torta & Party',
      location: 'Corte Bracco dei Germani',
      description: 'La magia della torta sotto le stelle e poi... scateniamo il divertimento!',
      image: festaNew,
      icon: <Music size={24} />,
      side: 'right'
    }
  ];

  return (
    <div className="matrimonio-page">
      {/* Cinematic Hero */}
      <section className="wedding-hero">
        <div className="hero-overlay"></div>
        <img src={heroMatrimonio} alt="Il Matrimonio" className="hero-img-full" />
        <motion.div 
          className="hero-wedding-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <span className="script text-gold" style={{ fontSize: '2.5rem' }}>Il Nostro Giorno</span>
          <h1 className="serif">Il Matrimonio</h1>
          <div className="divider-gold-center"></div>
          <p className="hero-date sans">15 LUGLIO 2026 • TRANI</p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="wedding-timeline" style={{ backgroundColor: '#FAF9F6' }}>
        <div className="container">
          <div className="timeline-container">
            {/* The vertical line */}
            <div className="timeline-line"></div>

            {events.map((event, index) => (
              <motion.div 
                key={index}
                className={`timeline-item ${event.side}`}
                initial={{ opacity: 0, x: event.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="timeline-content-wrapper">
                  <div className="timeline-image-box">
                    <img src={event.image} alt={event.title} className="event-img" />
                    <div className="time-badge">
                      <Clock size={16} /> {event.time}
                    </div>
                  </div>
                  
                  <div className="timeline-text-box shadow-premium">
                    <div className="event-icon-circle">{event.icon}</div>
                    <h3 className="serif">{event.title}</h3>
                    <div className="event-location">
                      <MapPin size={14} /> {event.location}
                    </div>
                    <p className="sans">{event.description}</p>
                    
                    {event.location.includes('Corte Bracco') && (
                      <div className="venue-logo-mini">
                        <img src={logoCbdg} alt="Corte Bracco Logo" />
                      </div>
                    )}
                  </div>
                </div>

                {/* The dot on the timeline */}
                <div className="timeline-dot"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Hero Section */}
      <section className="video-full-section">
        <div className="video-background-container">
          <div className="video-foreground">
            <iframe 
              src="https://www.youtube.com/embed/H2YPykJyslY?autoplay=1&mute=1&controls=0&loop=1&playlist=H2YPykJyslY&modestbranding=1&playsinline=1&rel=0&showinfo=0" 
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
              title="Corte Bracco Background Video"
            ></iframe>
          </div>
          <div className="video-overlay-dark"></div>
          <div className="video-text-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="serif text-white">Vivi l'atmosfera</h2>
              <div className="divider-gold-center"></div>
              <p className="sans text-white italic">Un’esperienza sensoriale indimenticabile</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Venue Detail Section */}
      <section className="venue-section">
        <div className="container text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="venue-branding"
          >
            <img src={logoCbdg} alt="Corte Bracco dei Germani" className="main-venue-logo" />
            <h2 className="serif">Corte Bracco dei Germani</h2>
            <p className="sans italic">Un’antica dimora, un’atmosfera senza tempo</p>
            <div className="divider-gold-center"></div>
            <p className="venue-desc max-w-700">
              Sito in una posizione strategica tra le ridenti colline pugliesi, questo monastero del XVII secolo 
              sarà la cornice del nostro ricevimento. Un luogo dove l'eleganza della pietra incontra il calore della nostra terra.
            </p>
            <a 
              href="https://www.google.com/maps/search/Corte+Bracco+dei+Germani" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-gold-outline m-t-30"
            >
              Come Arrivare <MapPin size={16} className="m-l-10" />
            </a>
          </motion.div>
        </div>
      </section>

      <style>{`
        .matrimonio-page {
          background-color: var(--color-bg);
          overflow-x: hidden;
        }

        .wedding-hero {
          height: 90vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          overflow: hidden;
        }

        .hero-img-full {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
          z-index: 2;
        }

        .hero-wedding-content {
          position: relative;
          z-index: 3;
          padding: 0 20px;
        }

        .hero-wedding-content h1 {
          font-size: 5rem;
          margin: 10px 0;
          text-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .divider-gold-center {
          width: 80px;
          height: 2px;
          background: var(--color-gold);
          margin: 20px auto;
        }

        .hero-date {
          font-size: 1.2rem;
          letter-spacing: 0.3em;
          opacity: 0.9;
        }

        /* Timeline Styles */
        .wedding-timeline {
          padding: 120px 0;
          position: relative;
        }

        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, var(--color-gold), transparent);
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          justify-content: flex-end;
          padding-right: 50%;
          position: relative;
          margin-bottom: 80px;
          width: 100%;
        }

        .timeline-item.right {
          justify-content: flex-start;
          padding-right: 0;
          padding-left: 50%;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 30px;
          width: 16px;
          height: 16px;
          background: var(--color-gold);
          border: 4px solid white;
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 5;
          box-shadow: 0 0 10px rgba(197, 160, 89, 0.5);
        }

        .timeline-content-wrapper {
          width: 90%;
          max-width: 450px;
          padding: 0 30px;
        }

        .timeline-image-box {
          position: relative;
          border-radius: 20px 20px 0 0;
          overflow: hidden;
          height: 250px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .event-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .timeline-item:hover .event-img {
          transform: scale(1.05);
        }

        .time-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(5px);
          padding: 8px 15px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-green);
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .timeline-text-box {
          background: white;
          padding: 40px 30px 30px;
          border-radius: 0 0 20px 20px;
          position: relative;
          text-align: left;
        }

        .event-icon-circle {
          position: absolute;
          top: -25px;
          left: 30px;
          width: 50px;
          height: 50px;
          background: var(--color-gold);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid white;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .timeline-text-box h3 {
          font-size: 2rem;
          margin-bottom: 5px;
          color: var(--color-green);
        }

        .event-location {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.85rem;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .timeline-text-box p {
          color: var(--color-text-light);
          line-height: 1.6;
        }

        .venue-logo-mini {
          margin-top: 20px;
          border-top: 1px solid rgba(0,0,0,0.05);
          padding-top: 15px;
          text-align: right;
        }

        .venue-logo-mini img {
          height: 30px;
          opacity: 0.7;
          filter: grayscale(1);
        }

        /* Video Background Section */
        .video-full-section {
          height: 60vh;
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .video-background-container {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .video-foreground {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .video-foreground iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100vw;
          height: 56.25vw; /* 16:9 ratio */
          min-height: 100vh;
          min-width: 177.77vh; /* 16:9 ratio */
          transform: translate(-50%, -50%);
        }

        .video-overlay-dark {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.4);
          z-index: 2;
        }

        .video-text-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
          text-align: center;
          width: 100%;
        }

        .video-text-content h2 {
          font-size: 4rem;
          text-shadow: 0 5px 15px rgba(0,0,0,0.4);
        }

        /* Venue Section */
        .venue-section {
          padding: 100px 0;
          background: #F9F7F2;
        }

        .venue-branding {
          max-width: 800px;
          margin: 0 auto;
        }

        .main-venue-logo {
          height: 120px;
          margin-bottom: 30px;
        }

        .venue-desc {
          font-size: 1.1rem;
          margin: 0 auto;
          color: var(--color-text-light);
        }

        @media (max-width: 991px) {
          .timeline-line, .timeline-dot {
            display: none;
          }
          .timeline-item, .timeline-item.right {
            justify-content: center;
            padding: 0 15px;
            margin-bottom: 50px;
          }
          .timeline-content-wrapper {
            max-width: 100%;
            padding: 0;
            width: 100%;
          }
          .timeline-image-box {
            height: 200px;
          }
          .hero-wedding-content h1 {
            font-size: 3rem;
          }
          .video-text-content h2 {
            font-size: 2.2rem;
          }
          .video-full-section {
            height: 35vh;
          }
          .wedding-timeline {
            padding: 60px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Matrimonio;
