import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import confetti from 'canvas-confetti';
import heroAtardecer from '../assets/recursos/trani-hero-atardecer.jpg';
import storyVideo from '../assets/recursos/video_casa.mp4';
import tilesBg from '../assets/recursos/azulejos.png';
import houseBg from '../assets/recursos/casa fondo.png';
import oliveSeparator from '../assets/recursos/separador-olivos.svg';
import logo from '../assets/recursos/logo-transparent.png';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slower speed
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const weddingDate = new Date('2026-07-15T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8A9A5B', '#E2A9A1', '#C19A6B']
    });
  };

  const ringsRef = useRef(null);
  const isRingsInView = useInView(ringsRef, { once: true, amount: 0.5 });

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-bg-overlay"></div>
        <img src={heroAtardecer} className="hero-img" alt="David y Giuliana Wedding" />
        
        <motion.div 
          className="hero-content" 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="hero-title script" style={{ order: 1 }}>David & Giuliana</h1>
          <h2 className="hero-intro script" style={{ order: 2 }}>Ci sposiamo!</h2>
          <p className="hero-subtitle" style={{ order: 3 }}>ITALIA • TRANI • 2026</p>
        </motion.div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      {/* New Section for Countdown and Rings below Hero */}
      <section className="countdown-section" ref={ringsRef}>
        <div className="countdown-texture" style={{ backgroundImage: `url(${tilesBg})` }}></div>
        <div className="container">
          <div className="rings-container" style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 999 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isRingsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', maxWidth: '100%', height: 'auto', overflow: 'visible' }}>
                <style>{`
                  .anillo-izq {
                    animation: ${isRingsInView ? 'unir-izq 4s cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none'};
                    transform-box: fill-box;
                    transform-origin: center;
                    opacity: 0;
                  }
                  .anillo-der {
                    animation: ${isRingsInView ? 'unir-der 4s cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none'};
                    transform-box: fill-box;
                    transform-origin: center;
                    opacity: 0;
                  }
                  .brillo-superior {
                    opacity: 0;
                    animation: ${isRingsInView ? 'destello 2s ease-in-out 3.8s infinite' : 'none'};
                    transform-box: fill-box;
                    transform-origin: center;
                  }
                  @keyframes unir-izq {
                    0% { transform: translateX(-200px) rotate(-15deg); opacity: 0; }
                    100% { transform: translateX(0px) rotate(-15deg); opacity: 1; }
                  }
                  @keyframes unir-der {
                    0% { transform: translateX(200px) rotate(15deg); opacity: 0; }
                    100% { transform: translateX(0px) rotate(15deg); opacity: 1; }
                  }
                  @keyframes destello {
                    0%, 100% { opacity: 0; transform: scale(0.3) rotate(0deg); }
                    50% { opacity: 1; transform: scale(1.2) rotate(90deg); }
                  }
                `}</style>

                <defs>
                  <linearGradient id="oroJoven" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FFD700' }} />
                    <stop offset="30%" style={{ stopColor: '#FFFACD' }} />
                    <stop offset="60%" style={{ stopColor: '#FFDF00' }} />
                    <stop offset="100%" style={{ stopColor: '#DAA520' }} />
                  </linearGradient>

                  <filter id="glow-anillo">
                    <feGaussianBlur stdDeviation="0.5" result="blur"/>
                    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                  </filter>

                  {/* Máscara para el efecto cruzado: blanco es visible, negro es invisible */}
                  <mask id="mascara-cruce">
                    <rect x="0" y="0" width="600" height="400" fill="black" />
                    <rect x="0" y="200" width="600" height="200" fill="white" />
                  </mask>
                </defs>

                {/* 1. Anillo Izquierdo (Base) */}
                <g transform="translate(265, 200)">
                  <g className="anillo-izq">
                    <ellipse cx="0" cy="0" rx="50" ry="38" fill="none" stroke="url(#oroJoven)" strokeWidth="8" filter="url(#glow-anillo)" />
                    <ellipse cx="0" cy="0" rx="45" ry="34" fill="none" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" />
                  </g>
                </g>
                
                {/* 2. Anillo Derecho */}
                <g transform="translate(335, 200)">
                  <g className="anillo-der">
                    <ellipse cx="0" cy="0" rx="50" ry="38" fill="none" stroke="url(#oroJoven)" strokeWidth="8" filter="url(#glow-anillo)" />
                    <ellipse cx="0" cy="0" rx="45" ry="34" fill="none" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" />
                  </g>
                </g>

                {/* 3. Clon del Anillo Izquierdo (Solo visible abajo para cruzar) */}
                <g transform="translate(265, 200)" mask="url(#mascara-cruce)">
                  <g className="anillo-izq">
                    <ellipse cx="0" cy="0" rx="50" ry="38" fill="none" stroke="url(#oroJoven)" strokeWidth="8" filter="url(#glow-anillo)" />
                    <ellipse cx="0" cy="0" rx="45" ry="34" fill="none" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" />
                  </g>
                </g>

                <g transform="translate(300, 110)">
                  <g className="brillo-superior">
                    <path d="M-30 0 L30 0 M0 -30 L0 30" stroke="#FFFACD" strokeWidth="2" />
                    <path d="M-20 -20 L20 20 M-20 20 L20 -20" stroke="#FFFACD" strokeWidth="1" />
                    <circle cx="0" cy="0" r="6" fill="white" filter="url(#glow-anillo)" />
                  </g>
                </g>
              </svg>
            </motion.div>
          </div>

          <motion.div 
            className="save-the-date"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="script text-gold">Save the Date</h3>
            <p className="countdown-intro serif">Il conto alla rovescia è iniziato</p>
          </motion.div>

          <motion.div 
            className="countdown-modern"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="countdown-item">
              <span className="count serif">{timeLeft.days}</span>
              <label>Giorni</label>
            </div>
            <div className="countdown-item">
              <span className="count serif">{timeLeft.hours}</span>
              <label>Ore</label>
            </div>
            <div className="countdown-item">
              <span className="count serif">{timeLeft.minutes}</span>
              <label>Minuti</label>
            </div>
            <div className="countdown-item">
              <span className="count serif">{timeLeft.seconds}</span>
              <label>Secondi</label>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floral Separator Section */}
      <div className="floral-separator-container" style={{ backgroundColor: '#F9FAF7', padding: '100px 0' }}>
        <div className="floral-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto', overflow: 'hidden', display: 'grid', placeItems: 'center' }}>
          {/* Reveal animation from center using width */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ gridArea: '1/1', overflow: 'hidden', display: 'flex', justifyContent: 'center', width: '100%', zIndex: 1 }}
          >
            <img 
              src={oliveSeparator} 
              alt="Separator" 
              style={{ width: '800px', maxWidth: 'none', height: 'auto', display: 'block' }} 
            />
          </motion.div>
          
          <motion.div 
            className="separator-logo-container"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            viewport={{ once: true }}
            style={{ gridArea: '1/1', zIndex: 10, position: 'relative' }}
          >
            <img src={logo} alt="D&G Logo" className="separator-logo-img" style={{ width: '120px', display: 'block' }} />
          </motion.div>
        </div>
      </div>


      <section className="welcome container" data-aos="fade-up" style={{ display: 'none' }}>
        {/* Hidden as requested: replaced by Story Section below */}
      </section>

      {/* Story Section */}
      <section className="story-section">
        
        {/* Decorative Olive Branches */}
        <motion.div 
          className="olive-branch-top"
          initial={{ opacity: 0, rotate: -20, x: -50 }}
          whileInView={{ opacity: 0.25, rotate: 0, x: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <svg viewBox="0 0 200 200" fill="none">
             <path d="M40,160 Q60,120 40,40 M40,140 Q80,120 100,110 M40,120 Q20,100 10,80 M40,100 Q100,80 140,60 M40,80 Q20,60 10,40" stroke="#1A5276" strokeWidth="2" />
             <path d="M100,110 Q120,90 140,100 M140,60 Q160,40 180,50" stroke="#1A5276" strokeWidth="2" />
             <circle cx="100" cy="110" r="4" fill="#1A5276" />
             <circle cx="140" cy="60" r="4" fill="#1A5276" />
             <circle cx="10" cy="80" r="3" fill="#2E86C1" />
             <circle cx="140" cy="100" r="3" fill="#2E86C1" />
          </svg>
        </motion.div>

        <motion.div 
          className="olive-branch-bottom"
          initial={{ opacity: 0, rotate: 20, x: 50 }}
          whileInView={{ opacity: 0.2, rotate: 0, x: 0 }}
          transition={{ duration: 2.5, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <svg viewBox="0 0 200 200" fill="none">
             <path d="M160,40 Q140,80 160,160 M160,60 Q120,80 100,90 M160,80 Q180,100 190,120 M160,100 Q100,120 60,140 M160,120 Q180,140 190,160" stroke="#1A5276" strokeWidth="2" />
             <circle cx="100" cy="90" r="4" fill="#1A5276" />
             <circle cx="60" cy="140" r="4" fill="#1A5276" />
          </svg>
        </motion.div>

        <div className="container story-grid">
          <motion.div 
            className="story-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <video 
              ref={videoRef}
              muted 
              playsInline 
              className="story-video"
            >
              <source src={storyVideo} type="video/mp4" />
            </video>
            <div className="story-img-overlay"></div>
          </motion.div>

          <motion.div 
            className="story-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="story-overline text-gold">La Nostra Storia</span>
            <h2 className="story-title serif">L'inizio a Marbella</h2>
            <div className="story-text-wrapper">
              <p className="story-quote serif italic">
                «Ci sono luoghi que custodiscono promesse e momenti che definiscono una vita. Per noi, quel luogo è Trani e quel momento è arrivato.»
              </p>
              <p className="story-p">
                Circondati dalla pietra bianca di Puglia e dall'azzurro infinito dell'Adriático, vogliamo dire il nostro ‘sì’ davanti alle persone che hanno dato un senso al nostro cammino. Più che un matrimonio, è la celebrazione di un'avventura che abbiamo iniziato insieme e che oggi, con la vostra compagnia, diventa eterna.
              </p>
            </div>
            <div className="story-signature script">David & Giuliana</div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .home-page {
          background-color: var(--color-bg);
        }
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          overflow: hidden;
        }
        .hero-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          image-rendering: high-quality;
          filter: brightness(1.05) contrast(1.1);
          animation: kenBurns 25s infinite alternate ease-in-out;
        }

        @keyframes kenBurns {
          0% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1.2);
          }
        }
        .hero-bg-overlay {
          display: none;
        }
        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .hero-title {
          font-size: 8.5rem;
          color: white !important;
          margin: 0;
          line-height: 0.9;
          font-family: var(--font-script);
          order: 1;
          text-shadow: 0 0 50px rgba(255,255,255,0.8), 2px 2px 15px rgba(0,0,0,0.3); 
        }
        .hero-intro {
          font-size: 3rem;
          color: white !important;
          margin-top: 5px;
          line-height: 1.2;
          order: 2;
          font-family: var(--font-script);
          font-weight: 400;
          text-shadow: 0 0 30px rgba(255,255,255,0.6);
        }
        .hero-subtitle {
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 14px;
          color: white !important;
          margin-top: 35px;
          opacity: 1;
          order: 3;
          font-family: var(--font-sans);
          font-weight: 600;
          text-shadow: 0 2px 15px rgba(0,0,0,0.4);
        }
        
        .hero-actions {
          display: none;
        }

        .countdown-section {
          padding: 120px 0;
          text-align: center;
          background-color: var(--color-bg-green-soft);
          position: relative;
          overflow: hidden;
        }
        .countdown-texture {
          position: absolute;
          inset: 0;
          background-size: 400px;
          opacity: 0.2;
          background-repeat: repeat;
        }
        .save-the-date h3 {
          font-size: 3.5rem;
          margin-bottom: 5px;
        }
        .countdown-intro {
          font-size: 1.1rem;
          letter-spacing: 3px;
          color: var(--color-text-dark);
          text-transform: uppercase;
          margin-bottom: 50px;
          font-weight: 600;
          opacity: 0.9;
        }
        .countdown-modern {
          display: flex;
          gap: 60px;
          justify-content: center;
          align-items: center;
        }
        .countdown-item {
          display: flex;
          flex-direction: column;
        }
        .count { 
          font-size: 5rem; 
          line-height: 1; 
          font-weight: 200; 
          color: var(--color-text-dark); 
          font-family: var(--font-serif);
        }
        .countdown-item label { 
          font-size: 0.85rem; 
          text-transform: uppercase; 
          letter-spacing: 4px;
          color: var(--color-text-dark);
          margin-top: 15px;
          font-weight: 700;
        }

        .floral-separator-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 100px 0;
          background-color: var(--color-bg-white-soft);
          overflow: hidden;
        }
        .floral-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 700px; /* Enchanced size */
        }
        .floral-separator-mask {
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
        }
        .olive-floral-img {
          width: 100%;
          height: auto;
          display: block;
        }
        .separator-logo-container {
          position: absolute;
          width: 120px;
          height: auto;
          z-index: 2;
          /* Filter to make it look elegant on the white background */
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.8));
        }
        .separator-logo-img {
          width: 100%;
          height: auto;
        }

        .rings-container { 
          margin-bottom: 0;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Story Section Styles */
        .story-section {
          padding: 120px 0;
          background-color: var(--color-bg-white-soft);
          overflow: hidden;
          position: relative;
        }
        .olive-branch-top svg path, .olive-branch-bottom svg path {
          stroke: #4A5D23; /* Darker, more natural olive green */
        }
        .olive-branch-top svg circle, .olive-branch-bottom svg circle {
          fill: #4A5D23;
        }
        .olive-branch-top {
          position: absolute;
          top: -20px;
          left: -40px;
          width: 400px;
          height: 400px;
          z-index: 1;
        }
        .olive-branch-bottom {
          position: absolute;
          bottom: -40px;
          right: -20px;
          width: 500px;
          height: 500px;
          z-index: 1;
          transform: scaleX(-1);
        }
        .story-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .story-image-wrapper {
          position: relative;
          height: 600px;
          overflow: hidden;
          box-shadow: 20px 20px 60px rgba(0,0,0,0.05);
          border-radius: 4px;
        }
        .story-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .story-img-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0.2), transparent);
        }
        .story-content {
          padding-left: 20px;
        }
        .story-overline {
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: 600;
          font-size: 0.8rem;
          display: block;
          margin-bottom: 15px;
        }
        .story-title {
          font-size: 3.2rem;
          color: var(--color-text-dark);
          margin-bottom: 30px;
          line-height: 1.1;
        }
        .story-quote {
          font-size: 1.5rem;
          color: var(--color-gold);
          margin-bottom: 25px;
          line-height: 1.5;
          font-style: italic;
          position: relative;
        }
        .story-p {
          font-size: 1.15rem;
          color: var(--color-text-light);
          line-height: 1.8;
          margin-bottom: 30px;
        }
        .story-signature {
          font-size: 2.8rem;
          color: var(--color-gold);
          margin-top: 40px;
        }

        @media (max-width: 1024px) {
          .story-grid { grid-template-columns: 1fr; gap: 40px; }
          .story-content { text-align: center; padding-left: 0; }
          .story-image-wrapper { height: 450px; }
        }

        .wedding-rings-animated circle {
          stroke-width: 5px;
          opacity: 1;
        }

        .btn-green::after, .btn-gold::after {
          /* Inherited from global btn shine */
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
        }
        .mouse {
          width: 26px;
          height: 42px;
          border: 2px solid white;
          border-radius: 20px;
          position: relative;
        }
        .wheel {
          width: 4px;
          height: 8px;
          background: white;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
          animation: scroll-pill 1.5s infinite;
        }

        .welcome {
          padding: 80px 0 120px;
          text-align: center;
          max-width: 800px;
        }
        .welcome h2 { font-size: 4rem; margin-bottom: 10px; }
        .rings-icon-small { font-size: 1.5rem; margin-bottom: 20px; opacity: 0.6; }
        .welcome-text { font-size: 1.25rem; font-style: italic; color: var(--color-text-light); }

        @media (max-width: 768px) {
          .hero-title { font-size: 4.5rem; }
          .hero-intro { font-size: 2.2rem; }
          .countdown-modern { gap: 20px; }
          .count { font-size: 2.22rem; }
          .save-the-date h3 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default Home;
