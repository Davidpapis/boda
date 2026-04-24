import React from 'react';
import { MapPin, Clock, Info } from 'lucide-react';

const Matrimonio = () => {
  const schedule = [
    {
      time: '17:00',
      title: 'La Cerimonia',
      location: 'Cattedrale di Trani',
      description: 'Una suggestiva cerimonia religiosa fronte mare in una delle cattedrali più belle d\'Italia.'
    },
    {
      time: '19:00',
      title: 'Aperitivo di Benvenuto',
      location: 'Villa al Castello',
      description: 'Finger food locali e bollicine pugliesi per iniziare la serata.'
    },
    {
      time: '20:30',
      title: 'Il Ricevimento',
      location: 'Villa al Castello',
      description: 'Cena servita con i sapori della terra di Puglia e della Spagna.'
    },
    {
      time: '00:00',
      title: 'Taglio della Torta & Party',
      location: 'Poolside',
      description: 'Musica, cocktail e balli per tutta la notte!'
    }
  ];

  return (
    <div className="matrimonio-page container">
      <header className="page-header" data-aos="fade-down">
        <h1 className="serif">Il Matrimonio</h1>
        <p className="subtitle text-sage italic">Tutto ciò che c'è da sapere per il nostro giorno speciale</p>
      </header>

      <section className="info-grid">
        {schedule.map((item, index) => (
          <div key={index} className="info-card" data-aos="zoom-in" data-offset="100">
            <div className="card-header">
              <Clock className="card-icon text-pink" />
              <span className="serif text-pink">{item.time}</span>
            </div>
            <h3 className="serif">{item.title}</h3>
            <div className="card-location">
              <MapPin className="small-icon" />
              <span>{item.location}</span>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      <section className="dress-code" data-aos="fade-up">
        <div className="dress-code-content">
          <Info className="dress-icon" />
          <h2 className="serif">Dress Code</h2>
          <p className="subtitle italic">Elegante e Formale</p>
          <div className="divider"></div>
          <p className="text-light">
            Per gli uomini: Completo scuro o smoking. <br />
            Per le donne: Abito lungo o cocktail elegante.
          </p>
        </div>
      </section>

      <style>{`
        .matrimonio-page { padding: 150px 20px 80px; }
        .page-header { text-align: center; margin-bottom: 80px; }
        .page-header h1 { font-size: 4rem; color: var(--color-primary); }
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 100px;
        }
        .info-card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          border: 1px solid rgba(138, 154, 91, 0.1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          text-align: center;
          transition: var(--transition-smooth);
        }
        .info-card:hover { transform: translateY(-10px); box-shadow: 0 15px 40px rgba(0,0,0,0.08); }
        .card-header { display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 15px; }
        .card-header span { font-size: 1.5rem; letter-spacing: 1px; }
        .card-icon { width: 30px; }
        .info-card h3 { font-size: 2rem; color: var(--color-primary); margin-bottom: 15px; }
        .card-location { display: flex; align-items: center; justify-content: center; gap: 5px; color: var(--color-text-light); margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px; font-size: 0.8rem; }
        .small-icon { width: 15px; }
        .dress-code {
          background: rgba(226, 169, 161, 0.1);
          border-radius: 30px;
          padding: 80px 40px;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .dress-icon { width: 40px; height: 40px; color: var(--color-secondary); margin-bottom: 20px; }
        .dress-code h2 { font-size: 3rem; color: var(--color-secondary); }
        .divider { width: 40px; height: 2px; background: var(--color-secondary); margin: 20px auto; }
      `}</style>
    </div>
  );
};

export default Matrimonio;
