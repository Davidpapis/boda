import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Users, Utensils, Bus, Heart, Send, CheckCircle, MessageSquare, Info } from 'lucide-react';
import confetti from 'canvas-confetti';

const RSVP = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        companion: '',
        attendance: 'yes',
        allergies: '',
        bus: false,
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#C5A059', '#556B2F', '#F9F7F2']
        });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    if (submitted) {
        return (
            <div className="rsvp-page">
                <div className="nav-spacer"></div>
                <div className="container success-container">
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }} 
                        animate={{ scale: 1, opacity: 1 }} 
                        className="success-card shadow-premium"
                    >
                        <div className="success-icon-wrapper">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
                            >
                                <CheckCircle size={80} className="text-gold" strokeWidth={1.5} />
                            </motion.div>
                        </div>
                        <h2 className="serif">Grazie di cuore!</h2>
                        <p className="sans">La tua conferma è stata ricevuta con successo.</p>
                        <p className="sans italic m-t-10">Non vediamo l'ora di festeggiare insieme a te sotto il sole della Puglia!</p>
                        <button className="btn-gold m-t-40" onClick={() => setSubmitted(false)}>
                            INVIA UN'ALTRA RISPOSTA
                        </button>
                    </motion.div>
                </div>
                <style>{`
                    .rsvp-page { min-height: 100vh; background-color: var(--color-bg); }
                    .success-container { display: flex; align-items: center; justify-content: center; padding: 100px 20px; }
                    .success-card { 
                        background: white; 
                        padding: 80px 40px; 
                        border-radius: 40px; 
                        text-align: center; 
                        max-width: 600px;
                        width: 100%;
                        border: 1px solid var(--glass-border);
                        position: relative;
                        overflow: hidden;
                    }
                    .success-card::before {
                        content: '';
                        position: absolute;
                        top: 0; left: 0; right: 0; height: 10px;
                        background: linear-gradient(90deg, var(--color-gold), var(--color-green));
                    }
                    .success-icon-wrapper { margin-bottom: 30px; display: flex; justify-content: center; }
                    .success-card h2 { font-size: 3rem; margin-bottom: 20px; color: var(--color-text-dark); }
                    .success-card p { font-size: 1.2rem; color: var(--color-text-light); line-height: 1.6; }
                    .m-t-10 { margin-top: 10px; }
                    .m-t-40 { margin-top: 40px; }
                    .shadow-premium { box-shadow: 0 40px 100px rgba(0,0,0,0.08); }
                `}</style>
            </div>
        );
    }

    return (
        <div className="rsvp-page">
            <div className="nav-spacer"></div>
            
            <header className="rsvp-header">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="container"
                >
                    <span className="section-subtitle block text-center italic">R.S.V.P.</span>
                    <h1 className="serif text-center">Conferma la tua presenza</h1>
                    <div className="decorative-divider">
                        <span className="leaf-icon">🌿</span>
                    </div>
                    <p className="description text-center sans">
                        Saremmo onorati di celebrare questa giornata speciale insieme a te.<br/>
                        Per favore, facci sapere se potrai esserci entro il <span className="bold text-gold">15 Maggio 2026</span>.
                    </p>
                </motion.div>
            </header>

            <div className="container">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="rsvp-content-wrapper"
                >
                    <div className="rsvp-form-card">
                        <form className="rsvp-form" onSubmit={handleSubmit}>
                            <div className="form-sections">
                                {/* Sezione Anagrafica */}
                                <div className="form-section">
                                    <div className="section-title">
                                        <div className="icon-circle"><User size={20} /></div>
                                        <h3 className="serif">Informazioni Personali</h3>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Nome Completo</label>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                required 
                                                placeholder="Il tuo nome e cognome"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Accompagnatore</label>
                                            <input 
                                                type="text" 
                                                name="companion" 
                                                placeholder="Nome dell'accompagnatore (facoltativo)"
                                                value={formData.companion}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Sezione Presenza */}
                                <div className="form-section">
                                    <div className="section-title">
                                        <div className="icon-circle"><Heart size={20} /></div>
                                        <h3 className="serif">La tua partecipazione</h3>
                                    </div>
                                    <div className="radio-group-modern">
                                        <label className={`radio-card ${formData.attendance === 'yes' ? 'selected' : ''}`}>
                                            <input 
                                                type="radio" 
                                                name="attendance" 
                                                value="yes" 
                                                checked={formData.attendance === 'yes'} 
                                                onChange={handleChange} 
                                            />
                                            <div className="radio-content">
                                                <span className="serif">Sì, ci sarò!</span>
                                                <p className="sans text-xs">Non vedo l'ora di festeggiare</p>
                                            </div>
                                            <div className="radio-indicator"></div>
                                        </label>
                                        <label className={`radio-card ${formData.attendance === 'no' ? 'selected' : ''}`}>
                                            <input 
                                                type="radio" 
                                                name="attendance" 
                                                value="no" 
                                                checked={formData.attendance === 'no'} 
                                                onChange={handleChange} 
                                            />
                                            <div className="radio-content">
                                                <span className="serif">No, purtroppo</span>
                                                <p className="sans text-xs">Mi dispiace, non potrò venire</p>
                                            </div>
                                            <div className="radio-indicator"></div>
                                        </label>
                                    </div>
                                </div>

                                {/* Sezione Alimentare */}
                                <div className="form-section">
                                    <div className="section-title">
                                        <div className="icon-circle"><Utensils size={20} /></div>
                                        <h3 className="serif">Esigenze Alimentari</h3>
                                    </div>
                                    <div className="form-group">
                                        <label>Allergie o Intolleranze</label>
                                        <textarea 
                                            name="allergies" 
                                            placeholder="Esempio: Vegetariano, Celiaco, Allergia alle arachidi..."
                                            rows="2"
                                            value={formData.allergies}
                                            onChange={handleChange}
                                        ></textarea>
                                        <div className="hint-text"><Info size={12} /> Aiutaci a preparare il menu perfetto per te.</div>
                                    </div>
                                </div>

                                {/* Sezione Trasporto */}
                                <div className="form-section">
                                    <div className="section-title">
                                        <div className="icon-circle"><Bus size={20} /></div>
                                        <h3 className="serif">Logistica</h3>
                                    </div>
                                    <div className="checkbox-card">
                                        <input 
                                            type="checkbox" 
                                            id="bus-shuttle"
                                            name="bus" 
                                            checked={formData.bus} 
                                            onChange={handleChange} 
                                        />
                                        <label htmlFor="bus-shuttle">
                                            <div className="checkbox-custom-box"></div>
                                            <div className="checkbox-text">
                                                <span className="serif">Servizio Navetta</span>
                                                <p className="sans text-xs">Desidero riservare un posto sulla navetta per il matrimonio.</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* Sezione Messaggio */}
                                <div className="form-section">
                                    <div className="section-title">
                                        <div className="icon-circle"><MessageSquare size={20} /></div>
                                        <h3 className="serif">Un pensiero per noi</h3>
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                            name="message" 
                                            placeholder="Scrivici un messaggio, una dedica o una canzone che vorresti ballare..."
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="form-footer">
                                <motion.button 
                                    whileHover={{ scale: 1.03, translateY: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit" 
                                    className="btn-green btn-submit-rsvp"
                                >
                                    <Send size={20} />
                                    CONFERMA PRESENZA
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>

            <style>{`
                .rsvp-page {
                    background-color: var(--color-bg);
                    padding-bottom: 200px;
                }
                .rsvp-header {
                    padding: 80px 20px 60px;
                }
                .section-subtitle {
                    color: var(--color-gold);
                    letter-spacing: 5px;
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    font-weight: 600;
                    margin-bottom: 10px;
                }
                .rsvp-header h1 {
                    font-size: 4rem;
                    color: var(--color-text-dark);
                    margin: 0;
                }
                .decorative-divider {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 30px 0;
                }
                .decorative-divider::before, 
                .decorative-divider::after {
                    content: '';
                    height: 1px;
                    width: 60px;
                    background: var(--color-gold);
                    opacity: 0.5;
                }
                .leaf-icon {
                    margin: 0 15px;
                    font-size: 1.5rem;
                }
                .description {
                    max-width: 600px;
                    margin: 0 auto;
                    color: var(--color-text-light);
                    font-size: 1.15rem;
                    line-height: 1.8;
                }
                .rsvp-content-wrapper {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                .rsvp-form-card {
                    background: white;
                    border-radius: 40px;
                    padding: 60px;
                    box-shadow: 0 30px 100px rgba(0,0,0,0.06);
                    border: 1px solid rgba(197, 160, 89, 0.1);
                    position: relative;
                }
                .form-sections {
                    display: flex;
                    flex-direction: column;
                    gap: 50px;
                }
                .section-title {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 25px;
                }
                .icon-circle {
                    width: 40px;
                    height: 40px;
                    background: rgba(197, 160, 89, 0.1);
                    color: var(--color-gold);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .section-title h3 {
                    font-size: 1.5rem;
                    color: var(--color-text-dark);
                    margin: 0;
                }
                .form-row {
                    display: flex;
                    gap: 20px;
                    margin-bottom: 15px;
                }
                .form-group {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .form-group label {
                    font-family: var(--font-sans);
                    font-size: 0.85rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: var(--color-text-light);
                    margin-bottom: 10px;
                }
                .form-group input, 
                .form-group textarea {
                    background: #FDFBF7;
                    border: 1px solid #F1EFEA;
                    padding: 18px 25px;
                    border-radius: 15px;
                    font-family: var(--font-sans);
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }
                .form-group input:focus, 
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--color-gold);
                    background: white;
                    box-shadow: 0 10px 25px rgba(197, 160, 89, 0.08);
                }
                .radio-group-modern {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }
                .radio-card {
                    background: #FDFBF7;
                    border: 1px solid #F1EFEA;
                    border-radius: 20px;
                    padding: 25px;
                    cursor: pointer;
                    position: relative;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }
                .radio-card input { display: none; }
                .radio-card.selected {
                    border-color: var(--color-gold);
                    background: white;
                    box-shadow: 0 15px 35px rgba(197, 160, 89, 0.1);
                    transform: translateY(-2px);
                }
                .radio-card .serif {
                    font-size: 1.25rem;
                    display: block;
                    color: var(--color-text-dark);
                }
                .radio-indicator {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    width: 20px;
                    height: 20px;
                    border: 2px solid #DDD;
                    border-radius: 50%;
                }
                .radio-card.selected .radio-indicator {
                    border-color: var(--color-gold);
                }
                .radio-card.selected .radio-indicator::after {
                    content: '';
                    position: absolute;
                    top: 50%; left: 50%; transform: translate(-50%, -50%);
                    width: 10px; height: 10px;
                    background: var(--color-gold);
                    border-radius: 50%;
                }
                .checkbox-card {
                    background: #FDFBF7;
                    border: 1px solid #F1EFEA;
                    border-radius: 20px;
                    padding: 25px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .checkbox-card input { display: none; }
                .checkbox-card label {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    cursor: pointer;
                }
                .checkbox-custom-box {
                    min-width: 25px;
                    height: 25px;
                    border: 2px solid #DDD;
                    border-radius: 8px;
                    position: relative;
                    transition: all 0.3s ease;
                }
                .checkbox-card input:checked + label .checkbox-custom-box {
                    background: var(--color-gold);
                    border-color: var(--color-gold);
                }
                .checkbox-card input:checked + label .checkbox-custom-box::after {
                    content: '✓';
                    color: white;
                    position: absolute;
                    top: 50%; left: 50%; transform: translate(-50%, -50%);
                    font-size: 14px;
                }
                .checkbox-text .serif { font-size: 1.25rem; display: block; color: var(--color-text-dark); }
                .text-xs { font-size: 0.85rem; color: var(--color-text-light); margin-top: 2px; }
                .hint-text {
                    font-size: 0.8rem;
                    color: var(--color-text-light);
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                .form-footer {
                    margin-top: 60px;
                    display: flex;
                    justify-content: center;
                }
                .btn-submit-rsvp {
                    width: 100%;
                    max-width: 400px;
                    padding: 20px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    border-radius: 50px;
                    justify-content: center;
                }
                .bold { font-weight: 700; }
                .text-gold { color: var(--color-gold); }
                @media (max-width: 768px) {
                    .rsvp-header h1 { font-size: 2.8rem; }
                    .rsvp-form-card { padding: 40px 20px; }
                    .radio-group-modern { grid-template-columns: 1fr; }
                    .form-row { flex-direction: column; }
                }
            `}</style>
        </div>
    );
};

export default RSVP;
