import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Users, Utensils, Bus, Heart, Send, CheckCircle, MessageSquare, Info, Plus, Trash2, Gift, CreditCard, Mail, Home, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import marbleBg from '../assets/recursos/clean-weathered-marble.png';
import honeymoonPlane from '../assets/recursos/honeymoon-plane.png';

const RSVP = () => {
    const [submitted, setSubmitted] = useState(false);
    const [companions, setCompanions] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        attendance: 'yes',
        hasCompanion: 'no',
        allergies: '',
        bus: false,
        message: ''
    });

    const addCompanion = () => {
        if (companions.length < 5) {
            setCompanions([...companions, { name: '', surname: '', relation: 'Amico' }]);
        } else {
            alert("Puedes añadir un máximo de 5 acompañantes.");
        }
    };

    const removeCompanion = (index) => {
        const newCompanions = [...companions];
        newCompanions.splice(index, 1);
        setCompanions(newCompanions);
    };

    const updateCompanion = (index, field, value) => {
        const newCompanions = [...companions];
        newCompanions[index][field] = value;
        setCompanions(newCompanions);
    };

    const submitToGoogleSheets = async (templateParams) => {
        // SheetDB API URL - User should replace this ID with theirs
        const SHEETDB_URL = 'https://sheetdb.io/api/v1/w0kh2n21uj8ms'; 
        
        const data = {
            "Nombre": templateParams.from_name,
            "Email": templateParams.from_email,
            "Asistencia": templateParams.attendance,
            "Acompañantes (Sí/No)": templateParams.has_companion,
            "Nombres Acompañantes": templateParams.companions,
            "Alergias": templateParams.allergies,
            "Bus": templateParams.bus,
            "Mensaje": templateParams.message,
            "Fecha": new Date().toLocaleString()
        };

        try {
            await fetch(SHEETDB_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: [data] })
            });
        } catch (error) {
            console.error('Error submitting to SheetDB:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            attendance: formData.attendance === 'yes' ? 'Sì, ci sarò!' : 'No, purtroppo',
            has_companion: formData.hasCompanion === 'yes' ? 'Sì' : 'No',
            companions: companions.length > 0 
                ? companions.map(c => `${c.name} ${c.surname} (${c.relation})`).join(', ') 
                : 'Nessuno',
            allergies: formData.allergies || 'Nessuna',
            bus: formData.bus ? 'Sì' : 'No',
            message: formData.message || 'Nessun messaggio'
        };

        const btn = e.target.querySelector('button[type="submit"]');
        const originalBtnText = btn.innerHTML;
        btn.innerHTML = 'INVIO IN CORSO...';
        btn.disabled = true;

        // Send to Google Sheets and EmailJS in parallel
        Promise.all([
            emailjs.send('service_bdyjfnh', 'template_8klg2ne', templateParams, 'NI9XTDPdVpjbIipNb'),
            submitToGoogleSheets(templateParams)
        ])
        .then(() => {
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#C5A059', '#556B2F', '#F9F7F2']
            });
        })
        .catch((err) => {
            console.error('FAILED...', err);
            btn.innerHTML = originalBtnText;
            btn.disabled = false;
            alert("Oops! Qualcosa è andato storto. Riprova più tardi.");
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
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    if (submitted) {
        return (
            <div className="rsvp-page success-view" style={{ 
                backgroundColor: '#F9F7F2',
                backgroundImage: `linear-gradient(to bottom, rgba(249, 247, 242, 0.94), rgba(249, 247, 242, 0.98)), url(${marbleBg})`,
                backgroundSize: '400px repeat',
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 80px)', 
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                <div className="container success-container" style={{ padding: '0 20px' }}>
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }} 
                        animate={{ scale: 1, opacity: 1 }} 
                        className="success-card shadow-premium"
                        style={{ margin: '0 auto', maxWidth: '500px', padding: '40px', background: 'white', borderRadius: '30px', textAlign: 'center' }}
                    >
                        <div className="success-icon-wrapper" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
                            >
                                <CheckCircle size={60} className="text-gold" strokeWidth={1.5} />
                            </motion.div>
                        </div>
                        <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '15px', color: '#1A1A1A' }}>Grazie di cuore!</h2>
                        <p className="sans" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#666' }}>La tua conferma è stata ricevuta con successo.</p>
                        <p className="sans italic m-t-10" style={{ opacity: 0.8, color: '#C5A059' }}>Non vediamo l'ora di festeggiare insieme a te!</p>
                        
                        <div className="success-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
                            <Link to="/" className="btn-green-premium" style={{ textDecoration: 'none', padding: '15px', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                <Home size={18} /> TORNA ALLA HOME
                            </Link>
                            <button 
                                className="btn-gold-outline" 
                                onClick={() => setSubmitted(false)}
                                style={{ 
                                    background: 'transparent', 
                                    border: '1px solid var(--color-gold)', 
                                    color: 'var(--color-gold)',
                                    padding: '12px',
                                    borderRadius: '50px',
                                    fontWeight: '600',
                                    fontSize: '0.85rem',
                                    cursor: 'pointer'
                                }}
                            >
                                MODIFICA RISPOSTA
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="rsvp-page" style={{ backgroundColor: '#FAF9F6' }}>
            <div className="nav-spacer"></div>
            
            <header className="rsvp-header">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="container"
                >
                    <span className="section-subtitle block text-center italic">R.S.V.P.</span>
                    <h1 className="serif text-center">Conferma la tua presenza</h1>
                    <div className="decorative-divider">
                        <span className="leaf-icon">🌿</span>
                    </div>
                </motion.div>
            </header>

            <div className="container rsvp-main-grid">
                {/* Form Section */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="rsvp-form-column"
                >
                    <div className="rsvp-form-card shadow-premium">
                        <form className="rsvp-form" onSubmit={handleSubmit}>
                            <div className="form-sections">
                                {/* Informazioni Personali */}
                                <div className="form-section">
                                    <div className="section-title">
                                        <div className="icon-circle"><User size={20} /></div>
                                        <h3 className="serif">Chi sei?</h3>
                                    </div>
                                    <div className="form-group">
                                        <label>Nome e Cognome</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            required 
                                            placeholder="Il tuo nome completo"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="form-section">
                                    <div className="section-title">
                                        <div className="icon-circle"><Mail size={20} /></div>
                                        <h3 className="serif">La tua Email</h3>
                                    </div>
                                    <div className="form-group">
                                        <label>Indirizzo Email</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            required 
                                            placeholder="ejemplo@gmail.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        <p className="sans text-xs italic opacity-70">Ti invieremo una conferma automatica.</p>
                                    </div>
                                </div>

                                {/* Presenza */}
                                <div className="form-section">
                                    <div className="section-title">
                                        <div className="icon-circle"><Heart size={20} /></div>
                                        <h3 className="serif">Verrai al matrimonio?</h3>
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
                                                <p className="sans text-xs italic">Certo che ci sono!</p>
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
                                                <p className="sans text-xs italic">Brindate anche per me</p>
                                            </div>
                                            <div className="radio-indicator"></div>
                                        </label>
                                    </div>
                                </div>

                                {formData.attendance === 'yes' && (
                                    <motion.div 
                                        layout
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="attendance-details"
                                    >
                                        {/* Accompagnatore Selector */}
                                        <div className="form-section m-t-30">
                                            <div className="section-title">
                                                <div className="icon-circle"><Users size={20} /></div>
                                                <h3 className="serif">Vieni con qualcuno?</h3>
                                            </div>
                                            <div className="radio-group-modern">
                                                <label className={`radio-card sm ${formData.hasCompanion === 'no' ? 'selected' : ''}`}>
                                                    <input type="radio" name="hasCompanion" value="no" checked={formData.hasCompanion === 'no'} onChange={handleChange} />
                                                    <span className="serif">Vengo Solo/a</span>
                                                    <div className="radio-indicator"></div>
                                                </label>
                                                <label className={`radio-card sm ${formData.hasCompanion === 'yes' ? 'selected' : ''}`}>
                                                    <input type="radio" name="hasCompanion" value="yes" checked={formData.hasCompanion === 'yes'} onChange={handleChange} />
                                                    <span className="serif">Con Accompagnatori</span>
                                                    <div className="radio-indicator"></div>
                                                </label>
                                            </div>

                                            {formData.hasCompanion === 'yes' && (
                                                <motion.div 
                                                    layout
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="companions-list m-t-20"
                                                >
                                                    <AnimatePresence>
                                                        {companions.map((comp, index) => (
                                                            <motion.div 
                                                                key={index}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                exit={{ opacity: 0, x: 10 }}
                                                                className="companion-item"
                                                            >
                                                                <div className="companion-header">
                                                                    <span className="companion-number serif">Invitato #{index + 1}</span>
                                                                    <button type="button" onClick={() => removeCompanion(index)} className="remove-btn">
                                                                        <Trash2 size={16} />
                                                                    </button>
                                                                </div>
                                                                <div className="companion-fields">
                                                                    <div className="form-group">
                                                                        <input 
                                                                            type="text" 
                                                                            placeholder="Nome"
                                                                            value={comp.name}
                                                                            onChange={(e) => updateCompanion(index, 'name', e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input 
                                                                            type="text" 
                                                                            placeholder="Cognome"
                                                                            value={comp.surname}
                                                                            onChange={(e) => updateCompanion(index, 'surname', e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <select 
                                                                            value={comp.relation}
                                                                            onChange={(e) => updateCompanion(index, 'relation', e.target.value)}
                                                                        >
                                                                            <option value="Amico">Amico</option>
                                                                            <option value="Famiglia">Famiglia</option>
                                                                            <option value="Figlio/a">Figlio/a</option>
                                                                            <option value="Partner">Partner</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </AnimatePresence>
                                                    <button type="button" onClick={addCompanion} className="add-companion-btn">
                                                        <Plus size={18} /> Aggiungi Invitato
                                                    </button>
                                                </motion.div>
                                            )}
                                        </div>

                                        {/* Esigenze Alimentari */}
                                        <div className="form-section m-t-30">
                                            <div className="section-title">
                                                <div className="icon-circle"><Utensils size={20} /></div>
                                                <h3 className="serif">Menu Speciali</h3>
                                            </div>
                                            <div className="form-group">
                                                <label>Allergie o Intolleranze</label>
                                                <textarea 
                                                    name="allergies" 
                                                    placeholder="Esempio: Vegetariano, Celiaco, Allergie ai crostacei..."
                                                    rows="2"
                                                    value={formData.allergies}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>

                                        {/* Navetta */}
                                        <div className="form-section m-t-30">
                                            <div className="section-title">
                                                <div className="icon-circle"><Bus size={20} /></div>
                                                <h3 className="serif">Trasporto</h3>
                                            </div>
                                            <div className="checkbox-card">
                                                <input type="checkbox" id="bus-shuttle" name="bus" checked={formData.bus} onChange={handleChange} />
                                                <label htmlFor="bus-shuttle">
                                                    <div className="checkbox-custom-box"></div>
                                                    <div className="checkbox-text">
                                                        <span className="serif">Servizio Navetta</span>
                                                        <p className="sans text-xs">Riserva un posto sulla navetta per il matrimonio.</p>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Messaggio */}
                                <div className="form-section">
                                    <div className="section-title">
                                        <div className="icon-circle"><MessageSquare size={20} /></div>
                                        <h3 className="serif">Un messaggio per noi</h3>
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                            name="message" 
                                            placeholder="Dicci qualcosa, suggerisci una canzone o semplicemente mandaci un saluto!"
                                            rows="3"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="form-footer">
                                <motion.button 
                                    whileHover={{ scale: 1.02, translateY: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit" 
                                    className="btn-green-premium"
                                >
                                    <Send size={18} />
                                    CONFERMA ORA
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </motion.div>

                {/* Gift & Info Column */}
                <motion.aside 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="rsvp-info-column"
                >
                    <div className="gift-card shadow-premium">
                        <div className="gift-header">
                            <Gift className="gift-icon" size={32} />
                            <h3 className="serif">Un pensiero per noi</h3>
                        </div>
                        <p className="gift-intro sans italic">
                            "Diremo che il regalo più grande sarà la vostra presenza... ma sapendo che non ci ascolterete..."
                        </p>
                        <p className="gift-message sans">
                            Se volete aiutarci con la nostra luna di miele (o con le bollette che ci aspettano al ritorno!), 
                            potete farlo tramite un bonifico o, se preferite il metodo classico, lasciando una busta durante il ricevimento.
                        </p>
                        
                        <div className="iban-section">
                            <div className="iban-label serif">Codice IBAN</div>
                            <div className="iban-box">
                                <CreditCard size={18} className="text-gold" />
                                <code id="iban-code" style={{ fontWeight: '800', fontSize: '0.95rem' }}>IT59 Y 03069 78634 10000 00060 08</code>
                                <button 
                                    className="copy-btn"
                                    onClick={() => {
                                        navigator.clipboard.writeText('IT59Y0306978634100000006008');
                                        const btn = document.querySelector('.copy-btn');
                                        const originalContent = btn.innerHTML;
                                        btn.innerHTML = '<span style="color: #27AE60">✓</span>';
                                        setTimeout(() => btn.innerHTML = originalContent, 2000);
                                    }}
                                    title="Copia IBAN"
                                    style={{
                                        background: 'rgba(197, 160, 89, 0.1)',
                                        padding: '5px 10px',
                                        borderRadius: '5px',
                                        marginLeft: '10px',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <Copy size={16} className="text-gold" />
                                </button>
                            </div>
                            <p className="iban-info text-xs">Intestato a: Giuliana la Monaca</p>
                        </div>

                        <div className="funny-footer">
                            <p className="serif italic">Promettiamo di non spenderlo tutto in gelato al pistacchio!</p>
                        </div>

                        {/* Honeymoon Image in the green card */}
                        <motion.div 
                            className="honeymoon-image-container"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1 }}
                            style={{ height: '220px', marginTop: '30px', overflow: 'hidden' }}
                        >
                            <img 
                                src={honeymoonPlane} 
                                alt="Honeymoon travel" 
                                className="honeymoon-plane-img" 
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover', 
                                    objectPosition: 'center 30%' 
                                }}
                            />
                        </motion.div>
                        <motion.div 
                            className="honeymoon-message-footer"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            style={{ textAlign: 'center', marginTop: '20px' }}
                        >
                            <span className="script" style={{ fontSize: '2.5rem', color: 'var(--color-gold)' }}>Prossima fermata: Amore</span>
                        </motion.div>
                    </div>
                </motion.aside>
            </div>

            <style>{`
                .rsvp-page {
                    min-height: 100vh;
                    background-color: var(--color-bg);
                    padding-bottom: 120px;
                }
                .rsvp-header { padding: 60px 20px 40px; }
                .rsvp-main-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 60px;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .section-subtitle {
                    color: var(--color-gold);
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    font-weight: 600;
                    margin-bottom: 15px;
                }
                .rsvp-header h1 { font-size: 3rem; color: #1A1A1A; margin: 0; font-weight: 400; }
                .decorative-divider {
                    display: flex; align-items: center; justify-content: center; margin: 20px 0;
                }
                .decorative-divider::before, .decorative-divider::after {
                    content: ''; height: 1px; width: 40px; background: var(--color-gold); opacity: 0.4;
                }
                .leaf-icon { margin: 0 10px; font-size: 1.2rem; }

                /* Form Column */
                .rsvp-form-card {
                    background: #FFFFFF;
                    border-radius: 30px;
                    padding: 50px;
                    border: 1px solid rgba(255, 255, 255, 1);
                }
                .form-sections { display: flex; flex-direction: column; gap: 40px; }
                .section-title { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
                .icon-circle {
                    width: 38px; height: 38px; background: rgba(197, 160, 89, 0.1);
                    color: var(--color-gold); border-radius: 50%; display: flex; align-items: center; justify-content: center;
                }
                .section-title h3 { font-size: 1.4rem; color: #1A1A1A; margin: 0; }
                
                .form-group { display: flex; flex-direction: column; gap: 10px; flex: 1; }
                .form-group label {
                    font-size: 0.7rem; font-weight: 600; text-transform: uppercase;
                    letter-spacing: 1.2px; color: var(--color-text-light);
                    margin-bottom: 4px;
                }
                .form-group input, .form-group textarea, .form-group select {
                    background: #FAF9F6; border: 1px solid #EEE; padding: 14px 18px;
                    border-radius: 10px; font-family: var(--font-sans); font-size: 0.9rem;
                    transition: all 0.3s ease;
                }
                .form-group input:focus, .form-group textarea:focus {
                    outline: none; border-color: var(--color-gold); background: white;
                    box-shadow: 0 8px 20px rgba(197, 160, 89, 0.08);
                }

                .radio-group-modern { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
                .radio-card {
                    background: #FAF9F6; border: 1px solid #EEE; border-radius: 15px;
                    padding: 20px; cursor: pointer; position: relative; transition: all 0.3s ease;
                }
                .radio-card.sm { padding: 15px 20px; }
                .radio-card input { display: none; }
                .radio-card.selected {
                    border-color: var(--color-gold); background: white;
                    box-shadow: 0 10px 25px rgba(197, 160, 89, 0.1);
                    transform: translateY(-2px);
                }
                .radio-card .serif { font-size: 1.1rem; color: #1A1A1A; }
                .radio-indicator {
                    position: absolute; top: 15px; right: 15px; width: 18px; height: 18px;
                    border: 1.5px solid #DDD; border-radius: 50%;
                }
                .radio-card.selected .radio-indicator { border-color: var(--color-gold); }
                .radio-card.selected .radio-indicator::after {
                    content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    width: 8px; height: 8px; background: var(--color-gold); border-radius: 50%;
                }

                /* Companions List */
                .companion-item {
                    background: #FDFBF7; border: 1px solid #F1EFEA;
                    border-radius: 15px; padding: 20px; margin-bottom: 15px;
                }
                .companion-header {
                    display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;
                }
                .companion-number { font-size: 1rem; color: var(--color-gold); font-weight: 600; }
                .companion-fields { display: flex; gap: 10px; }
                .remove-btn { color: #E74C3C; opacity: 0.6; transition: 0.3s; padding: 5px; }
                .remove-btn:hover { opacity: 1; transform: scale(1.1); }
                .add-companion-btn {
                    width: 100%; padding: 12px; border: 2px dashed #DDD; border-radius: 12px;
                    color: var(--color-text-light); font-weight: 600; display: flex; align-items: center;
                    justify-content: center; gap: 8px; transition: 0.3s; margin-top: 10px;
                }
                .add-companion-btn:hover { border-color: var(--color-gold); color: var(--color-gold); background: white; }

                /* Checkbox Card */
                .checkbox-card {
                    background: #FAF9F6; border: 1px solid #EEE; border-radius: 18px;
                    padding: 20px; cursor: pointer; transition: all 0.3s ease;
                }
                .checkbox-card input { display: none; }
                .checkbox-card label { display: flex; align-items: center; gap: 15px; cursor: pointer; }
                .checkbox-custom-box {
                    min-width: 22px; height: 22px; border: 2px solid #DDD; border-radius: 6px;
                    position: relative; transition: all 0.3s ease;
                }
                .checkbox-card input:checked + label .checkbox-custom-box {
                    background: var(--color-gold); border-color: var(--color-gold);
                }
                .checkbox-card input:checked + label .checkbox-custom-box::after {
                    content: '✓'; color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 12px;
                }

                /* Info Column */
                .gift-card {
                    background: #556B2F; 
                    color: white; 
                    border-radius: 30px; 
                    padding: 40px;
                    box-shadow: 0 20px 50px rgba(85, 107, 47, 0.3);
                }

                .gift-header { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; }
                .gift-icon { color: var(--color-gold); }
                .gift-header h3 { margin: 0; font-size: 1.8rem; color: #F9F7F2; }
                .gift-intro { font-size: 1.1rem; opacity: 0.9; margin-bottom: 15px; line-height: 1.5; color: var(--color-gold); }
                .gift-message { font-size: 0.95rem; line-height: 1.7; opacity: 0.85; margin-bottom: 30px; }
                
                .iban-section { background: rgba(0,0,0,0.15); border-radius: 20px; padding: 25px; }
                .iban-label { font-size: 1.1rem; margin-bottom: 12px; color: var(--color-gold); }
                .iban-box {
                    display: flex; align-items: center; gap: 10px; background: white;
                    padding: 12px 15px; border-radius: 10px; margin-bottom: 8px;
                }
                .iban-box code { color: #1A1A1A; font-family: monospace; font-size: 0.85rem; flex: 1; }
                .iban-info { color: white; opacity: 0.6; font-size: 0.75rem; }
                
                .funny-footer { margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; }
                .funny-footer p { font-size: 1.1rem; color: var(--color-gold); }

                /* Buttons */
                .btn-green-premium {
                    background: var(--color-green); color: white; width: 100%; padding: 18px;
                    border-radius: 50px; font-weight: 700; letter-spacing: 2px;
                    display: flex; align-items: center; justify-content: center; gap: 12px;
                    box-shadow: 0 15px 30px rgba(85, 107, 47, 0.2); transition: 0.3s;
                    border: none; cursor: pointer;
                }
                .btn-green-premium:hover { transform: translateY(-3px); box-shadow: 0 20px 40px rgba(85, 107, 47, 0.3); }

                .form-footer { margin-top: 40px; }
                .m-t-20 { margin-top: 20px; }
                .m-t-30 { margin-top: 30px; }
                .shadow-premium { 
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04); 
                    border: 1px solid rgba(255, 255, 255, 0.8);
                }

                /* Honeymoon Image Styles */
                .honeymoon-image-container {
                    margin-top: 30px;
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    height: 180px;
                    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
                }
                .honeymoon-plane-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    transition: transform 1.2s ease;
                }
                .honeymoon-image-container:hover .honeymoon-plane-img {
                    transform: scale(1.05);
                }
                .honeymoon-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%);
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    padding-bottom: 20px;
                }
                .honeymoon-overlay .script {
                    color: white;
                    font-size: 2rem;
                    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
                }

                .success-view { 
                    display: flex; 
                    flex-direction: column; 
                    min-height: 100vh;
                    justify-content: center;
                    align-items: center;
                }
                .success-container { 
                    width: 100%;
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    padding: 40px 20px; 
                }
                .success-card { background: white; padding: 60px 40px; border-radius: 30px; text-align: center; max-width: 550px; width: 100%; border: 1px solid rgba(197, 160, 89, 0.2); }
                .success-icon-wrapper { margin-bottom: 25px; display: flex; justify-content: center; }

                @media (max-width: 991px) {
                    .rsvp-header h1 { font-size: 2.8rem; }
                }
                @media (max-width: 768px) {
                    .rsvp-form-card { padding: 30px 20px; }
                    .radio-group-modern { grid-template-columns: 1fr; }
                    .companion-fields { flex-direction: column; }
                }
            `}</style>
        </div>
    );
};

export default RSVP;
