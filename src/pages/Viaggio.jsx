import React from 'react';
import { Plane, Train, Hotel, Car } from 'lucide-react';

const Viaggio = () => {
  const travelTips = [
    {
      title: 'In Aereo',
      desc: 'L\'aeroporto più vicino è quello di Bari (Palese), a soli 40 minuti da Trani.',
      icon: <Plane className="travel-icon" />
    },
    {
      title: 'In Treno',
      desc: 'La stazione di Trani è ben collegata con treni Alta Velocità da Roma e Milano.',
      icon: <Train className="travel-icon" />
    },
    {
      title: 'In Auto',
      desc: 'Trani è facilmente raggiungibile dall\'autostrada A14 Adriatica (uscita Trani).',
      icon: <Car className="travel-icon" />
    }
  ];

  const hotels = [
    { name: 'Hotel Regia', stars: '4*', link: '#', desc: 'Situato proprio di fronte alla Cattedrale.' },
    { name: 'Hotel Maré', stars: '4*', link: '#', desc: 'Design moderno e vista panoramica sul porto.' },
    { name: 'Palazzo Paolillo', stars: 'B&B Elite', link: '#', desc: 'Dimora storica nel cuore del centro antico.' }
  ];

  return (
    <div className="viaggio-page container">
      <header className="page-header" data-aos="fade-down">
        <h1 className="serif">Informazioni di Viaggio</h1>
        <p className="subtitle text-sage italic">Come raggiungerci e dove soggiornare</p>
      </header>

      <div className="travel-grid">
        {travelTips.map((tip, idx) => (
          <div key={idx} className="travel-card" data-aos="fade-up" data-aos-delay={idx * 100}>
            {tip.icon}
            <h3 className="serif">{tip.title}</h3>
            <p>{tip.desc}</p>
          </div>
        ))}
      </div>

      <section className="accommodation" data-aos="fade-up">
        <div className="section-title">
          <Hotel className="hotel-icon text-pink" />
          <h2 className="serif">Dove Soggiornare</h2>
        </div>
        <p className="subtitle italic">Abbiamo selezionato alcune strutture per voi</p>
        
        <div className="hotel-list">
          {hotels.map((hotel, i) => (
            <div key={i} className="hotel-card" data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="hotel-info">
                <h4 className="serif text-primary">{hotel.name} <small>{hotel.stars}</small></h4>
                <p>{hotel.desc}</p>
              </div>
              <button className="btn-hotel">SITO WEB</button>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .viaggio-page { padding: 150px 20px 80px; }
        .page-header h1 { font-size: 4rem; color: var(--color-primary); text-align: center; margin-bottom: 80px; }
        .travel-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 120px;
        }
        .travel-card {
          text-align: center;
          padding: 40px;
          background: white;
          border-radius: 20px;
          border: 1px solid rgba(138, 154, 91, 0.1);
        }
        .travel-icon { width: 45px; height: 45px; color: var(--color-primary); margin-bottom: 20px; }
        .travel-card h3 { font-size: 1.8rem; margin-bottom: 15px; color: var(--color-primary); }
        .accommodation { text-align: center; }
        .accommodation .section-title { display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 10px; }
        .accommodation h2 { font-size: 3rem; color: var(--color-primary); }
        .hotel-icon { width: 35px; height: 35px; }
        .hotel-list { max-width: 900px; margin: 60px auto 0; display: flex; flex-direction: column; gap: 20px; }
        .hotel-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px;
          background: white;
          border-radius: 20px;
          border-left: 5px solid var(--color-secondary);
          box-shadow: 0 5px 15px rgba(0,0,0,0.03);
          text-align: left;
        }
        .hotel-info h4 { font-size: 1.5rem; margin-bottom: 5px; }
        .hotel-info small { font-size: 0.9rem; color: var(--color-secondary); margin-left: 10px; font-weight: normal; }
        .btn-hotel {
          padding: 10px 25px;
          border: 1px solid var(--color-primary);
          color: var(--color-primary);
          border-radius: 50px;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          white-space: nowrap;
          transition: var(--transition-smooth);
        }
        .btn-hotel:hover { background: var(--color-primary); color: white; }
        @media (max-width: 600px) {
          .hotel-card { flex-direction: column; text-align: center; gap: 20px; border-left: none; border-top: 5px solid var(--color-secondary); }
        }
      `}</style>
    </div>
  );
};

export default Viaggio;
