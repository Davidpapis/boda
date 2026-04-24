import React from 'react';

const Storia = () => {
  const events = [
    {
      date: 'Gugno 2020',
      title: 'Il Primo Incontro',
      description: 'Ci siamo incontrati a Marbella, dove tutto è cominciato. Un caffè veloce si è trasformato in ore di conversazione.'
    },
    {
      date: 'Luglio 2021',
      title: 'La Nostra Prima Estate',
      description: 'Abbiamo esplorato le coste della Puglia, innamorandoci non solo della terra ma anche l\'uno dell\'altro.'
    },
    {
      date: 'Dicembre 2023',
      title: 'La Proposta',
      description: 'Sotto le luci di Trani, David ha chiesto a Giuliana di camminare insieme per il resto della vita. Ha detto SÌ!'
    },
    {
      date: '15 Luglio 2026',
      title: 'Il Nostro Sì',
      description: 'Il capitolo più bello sta per essere scritto, e non vediamo l\'ora di avervi al nostro fianco.'
    }
  ];

  return (
    <div className="storia-page container">
      <header className="page-header" data-aos="fade-down">
        <h1 className="serif">La Nostra Storia</h1>
        <p className="subtitle text-sage italic">Un viaggio d'amore tra Spagna e Italia</p>
      </header>

      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
            <div className="timeline-content">
              <span className="timeline-date serif text-pink">{event.date}</span>
              <h3 className="serif">{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .storia-page { padding: 150px 20px 80px; }
        .page-header { text-align: center; margin-bottom: 100px; }
        .page-header h1 { font-size: 4rem; color: var(--color-primary); }
        .timeline { position: relative; max-width: 1000px; margin: 0 auto; }
        .timeline::after {
          content: '';
          position: absolute;
          width: 1px;
          background: var(--color-secondary);
          top: 0; bottom: 0; left: 50%;
          margin-left: -0.5px;
        }
        .timeline-item {
          padding: 10px 40px;
          position: relative;
          background-color: inherit;
          width: 50%;
        }
        .timeline-item::after {
          content: '♥';
          position: absolute;
          width: 25px; height: 25px;
          right: -13px; top: 15px;
          background-color: var(--color-bg);
          border: 1px solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
          display: flex; align-items: center; justify-content: center;
          color: var(--color-primary);
          font-size: 0.8rem;
        }
        .left { left: 0; text-align: right; }
        .right { left: 50%; text-align: left; }
        .right::after { left: -14px; }
        .timeline-content {
          padding: 20px 30px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          border: 1px solid rgba(138, 154, 91, 0.1);
        }
        .timeline-date { font-size: 1.1rem; display: block; margin-bottom: 10px; }
        .timeline-item h3 { font-size: 1.8rem; color: var(--color-primary); margin-bottom: 15px; }
        @media (max-width: 768px) {
          .timeline::after { left: 31px; }
          .timeline-item { width: 100%; padding-left: 70px; padding-right: 25px; text-align: left; }
          .timeline-item::after { left: 18px; }
          .right { left: 0; }
        }
      `}</style>
    </div>
  );
};

export default Storia;
