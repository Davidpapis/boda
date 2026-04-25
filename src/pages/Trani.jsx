import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Utensils, Camera, Bed, Compass, ExternalLink } from 'lucide-react';

const Trani = () => {
  const sections = {
    see: [
      {
        name: 'Cattedrale di San Nicola Pellegrino',
        desc: 'Un capolavoro del romanico pugliese, unica per la sua posizione a ridosso del mare. La sua pietra bianca splende sotto il sole della Puglia.',
        img: '/images/trani/cathedral.png',
        map: 'https://www.google.com/maps/search/?api=1&query=Cattedrale+di+San+Nicola+Pellegrino+Trani'
      },
      {
        name: 'Castello Svevo',
        desc: "Costruito da Federico II, questa imponente fortezza affaccia direttamente sull'Adriatico. Un tuffo nella storia medievale con una vista mozzafiato.",
        img: '/images/trani/castle.png',
        map: 'https://www.google.com/maps/search/?api=1&query=Castello+Svevo+di+Trani'
      },
      {
        name: 'Il Porto e il Centro Storico',
        desc: 'Il cuore pulsante di Trani. Perdetevi tra i vicoli del quartiere ebraico e passeggiate lungo il porto ammirando i pescherecci al tramonto.',
        img: '/images/trani/port.png',
        map: 'https://www.google.com/maps/search/?api=1&query=Porto+di+Trani'
      }
    ],
    eat: [
      {
        name: 'CorteinFiore',
        type: 'Ristorante di Pesce',
        desc: 'Un giardino incantato dove gustare il miglior crudo di pesce della zona. Raffinato e romantico.',
        img: '/images/trani/corteinfiore.png',
        map: 'https://www.google.com/maps/search/?api=1&query=CorteinFiore+Trani'
      },
      {
        name: 'Quintessenza',
        type: 'Stella Michelin',
        desc: 'Un percorso gastronomico che celebra i sapori pugliesi con creatività e tecnica impeccabile.',
        img: '/images/trani/quintessenza.png',
        map: 'https://www.google.com/maps/search/?api=1&query=Quintessenza+Ristorante+Trani'
      },
      {
        name: 'Pizzeria Il Vecchio e il Mare',
        type: 'Pizzeria Gourmet',
        desc: 'Per chi cerca una pizza eccezionale con ingredienti locali ricercati, proprio di fronte al porto.',
        img: '/images/trani/pizza.png',
        map: 'https://www.google.com/maps/search/?api=1&query=Pizzeria+Il+Vecchio+e+il+Mare+Trani'
      }
    ],
    nearby: [
      {
        name: 'Castel del Monte',
        dist: '25 min',
        desc: "L'enigmatica corona di pietra di Federico II, Patrimonio UNESCO a pochi chilometri da Trani.",
        img: '/images/trani/castel_del_monte.png',
        map: 'https://www.google.com/maps/search/?api=1&query=Castel+del+Monte+Andria'
      },
      {
        name: 'Polignano a Mare',
        dist: '45 min',
        desc: 'Famosa per le sue grotte marine e la spiaggia incastonata tra le scogliere. Un must-see.',
        img: '/images/trani/polignano.png',
        map: 'https://www.google.com/maps/search/?api=1&query=Polignano+a+Mare'
      }
    ]
  };

  return (
    <div className="trani-page">
      {/* Hero Header */}
      <header className="trani-hero">
        <div className="hero-overlay">
          <div className="container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.3 }
                }
              }}
            >
              <motion.span 
                className="script text-gold" 
                style={{ fontSize: '3.5rem', display: 'block', marginBottom: '10px' }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
                }}
              >
                Benvenuti a
              </motion.span>
              
              <motion.h1 
                className="serif"
                variants={{
                  hidden: { opacity: 0, scale: 0.9, letterSpacing: "0.2em" },
                  visible: { opacity: 1, scale: 1, letterSpacing: "normal", transition: { duration: 1.2, ease: "easeOut" } }
                }}
              >
                Trani
              </motion.h1>
              
              <motion.div 
                className="divider-gold"
                variants={{
                  hidden: { width: 0, opacity: 0 },
                  visible: { width: "80px", opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }
                }}
              ></motion.div>
              
              <motion.p 
                className="hero-desc"
                variants={{
                  hidden: { opacity: 0, letterSpacing: "20px" },
                  visible: { opacity: 1, letterSpacing: "8px", transition: { duration: 1.5, ease: "easeOut" } }
                }}
              >
                La Perla dell'Adriatico
              </motion.p>
            </motion.div>
          </div>
          
          <motion.div 
            className="scroll-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Intro */}
      <motion.section 
        className="intro container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="intro-content">
          <Compass className="icon-gold" size={40} />
          <h2 className="serif">Guida alla Città</h2>
          <p>
            Trani non è solo il luogo dove abbiamo scelto di celebrare il nostro amore, 
            è un pezzo del nuestro cuore. Qui la pietra bianca incontra l'azzurro profondo 
            creando un'atmosfera magica che non vediamo l'ora di condividere con voi.
          </p>
        </div>
      </motion.section>

      {/* Cosa Vedere */}
        <section className="guide-section bg-soft full-width">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Camera className="icon-green" size={30} />
            <h2 className="serif">Cosa Vedere</h2>
            <div className="divider-small"></div>
          </motion.div>
          <div className="guide-grid">
            {sections.see.map((item, i) => (
              <motion.div 
                key={i} 
                className="guide-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-image" style={{ backgroundImage: `url(${item.img})` }}></div>
                <div className="card-content">
                  <h3 className="serif">{item.name}</h3>
                  <p>{item.desc}</p>
                  <a href={item.map} target="_blank" rel="noopener noreferrer" className="card-link">
                    <MapPin size={16} /> VEDI SU MAPPA
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Dove Mangiare */}
        <section className="guide-section container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Utensils className="icon-green" size={30} />
            <h2 className="serif">Dove Mangiare</h2>
            <div className="divider-small"></div>
          </motion.div>
          <div className="guide-grid">
            {sections.eat.map((item, i) => (
              <motion.div 
                key={i} 
                className="guide-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-image" style={{ backgroundImage: `url(${item.img})` }}></div>
                <div className="card-content">
                  <span className="card-tag">{item.type}</span>
                  <h3 className="serif">{item.name}</h3>
                  <p>{item.desc}</p>
                  <a href={item.map} target="_blank" rel="noopener noreferrer" className="card-link">
                    <ExternalLink size={16} /> PRENOTA / MAPPA
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Dintorni */}
        <section className="guide-section bg-soft full-width">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MapPin className="icon-green" size={30} />
            <h2 className="serif">Nei Dintorni</h2>
            <div className="divider-small"></div>
          </motion.div>
          <div className="guide-grid cards-two">
            {sections.nearby.map((item, i) => (
              <motion.div 
                key={i} 
                className="guide-card horizontal"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-image" style={{ backgroundImage: `url(${item.img})` }}></div>
                <div className="card-content">
                  <div className="card-dist">{item.dist} da Trani</div>
                  <h3 className="serif">{item.name}</h3>
                  <p>{item.desc}</p>
                  <a href={item.map} target="_blank" rel="noopener noreferrer" className="card-link">
                    SCOPRI DI PIÙ
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Alloggio */}
        <section className="accommodation container">
          <motion.div 
            className="accommodation-box"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Bed className="icon-white" size={40} />
            <h2 className="serif">Dove Alloggiare</h2>
            <p>Abbiamo selezionato alcune strutture per voi per rendere il vostro soggiorno indimenticabile.</p>
            <div className="hotel-links">
              <a href="https://www.hotelregia.it/" target="_blank" rel="noopener noreferrer" className="hotel-btn">Hotel Regia ★★★★</a>
              <a href="https://www.mareresort.it/" target="_blank" rel="noopener noreferrer" className="hotel-btn">Marè Resort</a>
              <a href="https://www.palazzopaciotti.it/" target="_blank" rel="noopener noreferrer" className="hotel-btn">B&B Palazzo Paciotti</a>
            </div>
            <p className="note">Suggeriamo di prenotare quanto prima per assicurarvi la disponibilità!</p>
          </motion.div>
        </section>

        <style>{`
          .trani-page { background: var(--color-bg); padding-bottom: 100px; overflow-x: hidden; }
          .trani-hero {
            height: 100vh;
            background-image: url('/images/trani/hero.png');
            background-size: cover;
            background-position: center;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
          }
          .hero-overlay {
            position: absolute; top:0; left:0; width:100%; height:100%;
            background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2), rgba(0,0,0,0.5));
            display: flex; align-items: center; justify-content: center;
            flex-direction: column;
          }
          .divider-gold { width: 80px; height: 2px; background: var(--color-gold); margin: 20px auto; }
          .trani-hero h1 { font-size: 8rem; line-height: 0.9; margin: 0; text-shadow: 0 4px 30px rgba(0,0,0,0.5); }
          .hero-desc { font-size: 1.8rem; letter-spacing: 8px; text-transform: uppercase; font-weight: 300; }
          .scroll-hint { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); }
          .mouse { width: 30px; height: 50px; border: 2px solid rgba(255,255,255,0.4); border-radius: 20px; position: relative; }
          .wheel { width: 4px; height: 8px; background: white; border-radius: 2px; position: absolute; top: 10px; left: 50%; transform: translateX(-50%); animation: scroll-pill 2s infinite; }
          @keyframes scroll-pill { 0% { transform: translate(-50%, 0); opacity: 1; } 100% { transform: translate(-50%, 15px); opacity: 0; } }
          .intro { padding: 80px 0; text-align: center; max-width: 700px; }
          .intro-content p { font-size: 1.2rem; color: var(--color-text-light); line-height: 1.8; margin-top: 20px; font-style: italic; }
          .icon-gold { color: var(--color-gold); margin-bottom: 20px; }
          .guide-section { padding: 80px 0; }
          .guide-section.full-width { width: 100%; max-width: none; margin: 0; padding-left: 0; padding-right: 0; }
          .bg-soft { background: var(--color-bg-green-soft); width: 100vw; margin-left: calc(-50vw + 50%); padding-left: calc(50vw - 50%); padding-right: calc(50vw - 50%); }
          .guide-section.full-width .guide-grid { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
          .section-header { text-align: center; margin-bottom: 50px; }
          .section-header h2 { font-size: 3rem; color: var(--color-green); margin: 10px 0; }
          .divider-small { width: 50px; height: 2px; background: var(--color-gold); margin: 0 auto; }
          .icon-green { color: var(--color-green); }
          .guide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; }
          .guide-card { 
            background: white; 
            border-radius: 20px; 
            overflow: hidden; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.05); 
            transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1); 
          }
          .guide-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
          .card-image { height: 250px; background-size: cover; background-position: center; }
          .card-content { padding: 30px; }
          .card-content h3 { font-size: 1.8rem; color: var(--color-green); margin-bottom: 15px; }
          .card-content p { color: var(--color-text-light); font-size: 1rem; line-height: 1.6; margin-bottom: 20px; }
          .card-link { display: inline-flex; align-items: center; gap: 8px; color: var(--color-gold); font-weight: 600; font-size: 0.9rem; letter-spacing: 1px; }
          .card-tag { font-size: 0.75rem; text-transform: uppercase; color: var(--color-gold); letter-spacing: 2px; margin-bottom: 10px; display: block; }
          .cards-two { grid-template-columns: repeat(2, 1fr); }
          .guide-card.horizontal { display: flex; }
          .guide-card.horizontal .card-image { flex: 1; height: auto; min-height: 250px; }
          .guide-card.horizontal .card-content { flex: 1.2; }
          .card-dist { font-size: 0.8rem; color: var(--color-gold); margin-bottom: 10px; }
          .accommodation { padding: 80px 0; }
          .accommodation-box { background: var(--color-green); color: white; padding: 60px; border-radius: 40px; text-align: center; max-width: 900px; margin: 0 auto; }
          .accommodation-box h2 { font-size: 3.5rem; margin-bottom: 20px; }
          .accommodation-box p { margin-bottom: 40px; opacity: 0.9; }
          .hotel-links { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 40px; }
          .hotel-btn { border: 1px solid rgba(255,255,255,0.3); color: white; padding: 12px 30px; border-radius: 50px; transition: var(--transition-smooth); }
          .hotel-btn:hover { background: white; color: var(--color-green); }
          .note { font-size: 0.9rem; font-style: italic; }
          @media (max-width: 1024px) { .cards-two { grid-template-columns: 1fr; } .guide-card.horizontal { flex-direction: column; } }
          @media (max-width: 768px) { .trani-hero h1 { font-size: 4rem; } .hero-desc { font-size: 1rem; } .guide-grid { grid-template-columns: 1fr; } .accommodation-box { padding: 40px 20px; } .accommodation-box h2 { font-size: 2.5rem; } }
        `}</style>
      </div>
  );
};

export default Trani;
