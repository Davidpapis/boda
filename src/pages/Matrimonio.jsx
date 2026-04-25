import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Music, Utensils, GlassWater, Church, Play } from 'lucide-react';

// Asset Imports
import cathedralNew from '../assets/recursos/cathedral-new.jpg';
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
        <img src={cathedralNew} alt="Cattedrale di Trani" className="hero-img-full" />
        <motion.div 
          className="hero-wedding-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <span className="script text-gold" style={{ fontSize: '2.5rem' }}>Il Nostro Giorno</span>
          <h1 className="serif">Il Matrimonio</h1>
          <div className="divider-gold-center"></div>
          <p className="hero-date sans">27 GIUGNO 2026 • TRANI</p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="wedding-timeline" style={{ backgroundImage: `url(${marbleBg})` }}>
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

      {/* Video Section */}
      <section className="video-section">
        <div className="container text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="video-wrapper shadow-premium"
          >
            <div className="video-header">
              <Play size={20} className="text-gold" />
              <h2 className="serif">Vivi l'atmosfera</h2>
            </div>
            <div className="video-iframe-container">
              <iframe 
                src="https://www.youtube.com/embed/U7g9EVluaf4" 
                title="Corte Bracco dei Germani Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
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
          background-size: 400px;
          background-repeat: repeat;
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

        /* Video Section */
        .video-section {
          padding: 100px 0;
          background: #fff;
        }

        .video-wrapper {
          max-width: 900px;
          margin: 0 auto;
          background: #F9F7F2;
          padding: 40px;
          border-radius: 30px;
        }

        .video-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        .video-header h2 {
          font-size: 2.5rem;
          color: var(--color-green);
        }

        .video-iframe-container {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .video-iframe-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
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
          .timeline-line {
            left: 30px;
          }
          .timeline-item {
            justify-content: flex-start;
            padding-left: 70px;
            padding-right: 0;
          }
          .timeline-item.right {
            padding-left: 70px;
          }
          .timeline-dot {
            left: 30px;
          }
          .timeline-content-wrapper {
            max-width: 100%;
          }
          .hero-wedding-content h1 {
            font-size: 3.5rem;
          }
          .video-wrapper {
            padding: 20px;
          }
          .video-header h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Matrimonio;
