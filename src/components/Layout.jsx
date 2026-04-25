import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Menu, X, Heart, Church, Calendar, CakeSlice } from 'lucide-react';
import logo from '../assets/recursos/logo-transparent.png';
import marbleBg from '../assets/recursos/clean-weathered-marble.png';

const Layout = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Il matrimonio', path: '/matrimonio' },
    { name: 'Galleria', path: '/galleria' },
    { name: 'Trani', path: '/trani' },
    { name: 'Viaggio', path: '/viaggio' },
  ];

  return (
    <div className="layout-wrapper">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
            <NavLink to="/" className="nav-logo" style={{ background: 'transparent' }}>
              <img src={logo} alt="D&G Logo" className="logo-img" />
            </NavLink>
          
          <div className="nav-center nav-desktop">
            {navItems.map((item, index) => (
              <React.Fragment key={item.path}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.name}
                </NavLink>
                {index < navItems.length - 1 && (
                  <div className="nav-dot-circle"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="nav-right nav-desktop">
            <NavLink to="/rsvp" className="btn-gold btn-white-nav">
              RSVP <Heart size={14} className="heart-icon" />
            </NavLink>
          </div>

          <button className="nav-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`nav-mobile ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className="nav-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink to="/rsvp" className="nav-mobile-link rsvp-highlight" onClick={() => setIsOpen(false)}>
            RSVP
          </NavLink>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="footer" style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(${marbleBg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
        {/* Growing Leaves Animation - Edge-to-Edge positioning */}
        <motion.div 
          className="footer-branch-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <svg viewBox="0 0 250 450" className="footer-svg">
            <motion.path 
              d="M50,450 Q75,300 50,20" 
              stroke="var(--color-green)" 
              strokeWidth="8" 
              strokeLinecap="round"
              fill="none"
              variants={{
                hidden: { pathLength: 0 },
                visible: { pathLength: 1, transition: { duration: 2.5, ease: "easeOut" } }
              }}
            />
            <motion.path 
              d="M58,320 Q120,240 150,150" 
              stroke="var(--color-green)" 
              strokeWidth="6" 
              strokeLinecap="round"
              fill="none"
              variants={{
                hidden: { pathLength: 0 },
                visible: { pathLength: 1, transition: { duration: 2, delay: 1, ease: "easeOut" } }
              }}
            />
            {[
              { d: "M55,410 Q95,390 120,400 Q95,430 55,410", delay: 0.6, o: "55px 410px" },
              { d: "M45,360 Q5,340 -20,350 Q5,370 45,360", delay: 0.9, o: "45px 360px" },
              { d: "M55,300 Q105,270 135,280 Q105,310 55,300", delay: 1.2, o: "55px 300px" },
              { d: "M50,150 Q10,120 -20,130 Q10,160 50,150", delay: 1.5, o: "50px 150px" },
              { d: "M50,50 Q90,10 120,20 Q90,60 50,50", delay: 2.5, o: "50px 50px" },
              { d: "M85,280 Q130,250 160,260 Q130,290 85,280", delay: 1.4, o: "85px 280px" },
              { d: "M115,220 Q165,190 195,200 Q165,240 115,220", delay: 1.8, o: "115px 220px" },
              { d: "M145,160 Q195,120 225,130 Q195,170 145,160", delay: 2.2, o: "145px 160px" }
            ].map((leaf, i) => (
              <motion.path
                key={i}
                d={leaf.d}
                fill="var(--color-green)"
                style={{ transformOrigin: leaf.o }}
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { 
                    scale: 1, 
                    opacity: 0.7, 
                    transition: { duration: 1.2, delay: leaf.delay, ease: "backOut" } 
                  }
                }}
              />
            ))}
            {[
              { cx: 55, cy: 410, delay: 2.0 },
              { cx: 45, cy: 360, delay: 2.4 },
              { cx: 85, cy: 280, delay: 2.8 },
              { cx: 145, cy: 160, delay: 3.2 }
            ].map((olive, i) => (
              <motion.ellipse
                key={i}
                cx={olive.cx} cy={olive.cy} rx="8" ry="10"
                fill="var(--color-green)"
                style={{ filter: 'brightness(0.6)' }}
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { 
                    scale: 1, 
                    opacity: 0.85, 
                    transition: { duration: 1.2, delay: olive.delay, type: "spring" } 
                  }
                }}
              />
            ))}
          </svg>
        </motion.div>

        <motion.div 
          className="footer-branch-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <svg viewBox="0 0 250 450" className="footer-svg mirrored">
            <motion.path 
              d="M50,450 Q75,300 50,20" 
              stroke="var(--color-green)" 
              strokeWidth="8" 
              strokeLinecap="round"
              fill="none"
              variants={{
                hidden: { pathLength: 0 },
                visible: { pathLength: 1, transition: { duration: 2.5, delay: 0.3, ease: "easeOut" } }
              }}
            />
            <motion.path 
              d="M58,320 Q120,240 150,150" 
              stroke="var(--color-green)" 
              strokeWidth="6" 
              strokeLinecap="round"
              fill="none"
              variants={{
                hidden: { pathLength: 0 },
                visible: { pathLength: 1, transition: { duration: 2, delay: 1.3, ease: "easeOut" } }
              }}
            />
            {[
              { d: "M55,410 Q95,390 120,400 Q95,430 55,410", delay: 0.9, o: "55px 410px" },
              { d: "M45,360 Q5,340 -20,350 Q5,370 45,360", delay: 1.2, o: "45px 360px" },
              { d: "M55,300 Q105,270 135,280 Q105,310 55,300", delay: 1.5, o: "55px 300px" },
              { d: "M50,150 Q10,120 -20,130 Q10,160 50,150", delay: 1.8, o: "50px 150px" },
              { d: "M50,50 Q90,10 120,20 Q90,60 50,50", delay: 2.8, o: "50px 50px" },
              { d: "M85,280 Q130,250 160,260 Q130,290 85,280", delay: 1.7, o: "85px 280px" },
              { d: "M115,220 Q165,190 195,200 Q165,240 115,220", delay: 2.1, o: "115px 220px" },
              { d: "M145,160 Q195,120 225,130 Q195,170 145,160", delay: 2.5, o: "145px 160px" }
            ].map((leaf, i) => (
              <motion.path
                key={i}
                d={leaf.d}
                fill="var(--color-green)"
                style={{ transformOrigin: leaf.o }}
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { 
                    scale: 1, 
                    opacity: 0.7, 
                    transition: { duration: 1.2, delay: leaf.delay, ease: "backOut" } 
                  }
                }}
              />
            ))}
            {[
              { cx: 55, cy: 410, delay: 2.3 },
              { cx: 45, cy: 360, delay: 2.7 },
              { cx: 85, cy: 280, delay: 3.1 },
              { cx: 145, cy: 160, delay: 3.5 }
            ].map((olive, i) => (
              <motion.ellipse
                key={i}
                cx={olive.cx} cy={olive.cy} rx="8" ry="10"
                fill="var(--color-green)"
                style={{ filter: 'brightness(0.6)' }}
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { 
                    scale: 1, 
                    opacity: 0.85, 
                    transition: { duration: 1.2, delay: olive.delay, type: "spring" } 
                  }
                }}
              />
            ))}
          </svg>
        </motion.div>

        <div className="container relative">
          
          {/* Growing Leaves Animation - Fix Clipping, Anchoring and Olives */}

          <div className="footer-elegant-wrapper">
            <div className="footer-top">
              <div className="footer-logo-sm">
                <img src={logo} alt="D&G" className="logo-tiny" />
              </div>
            </div>
            
            <div className="footer-event-info">
              <div className="footer-info-item">
                <Church size={64} className="footer-icon" />
                <span className="serif italic">Cerimonia a Trani</span>
              </div>
              <div className="footer-info-item">
                <Calendar size={64} className="footer-icon" />
                <span className="serif">15 Luglio 2026</span>
              </div>
              <div className="footer-info-item">
                <CakeSlice size={64} className="footer-icon" />
                <span className="serif italic">Ricevimento</span>
              </div>
            </div>

            <div className="footer-divider-elegant"></div>
            
            <div className="footer-bottom">
              <div className="footer-names serif">David & Giuliana</div>
              <p className="footer-tagline">Celebriamo l'amore sotto il sole del Mediterraneo</p>
              <div className="footer-signature">
                <span className="serif italic">Con amore</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .navbar {
          background-color: rgba(85, 107, 47, 0.85) !important; 
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 12px 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          padding: 8px 0;
        }
        .nav-content {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
        }
        .nav-left { justify-self: start; }
        .nav-center { 
          justify-self: center; 
          display: flex; 
          align-items: center; 
          gap: 40px; 
        }
        .nav-right { justify-self: end; }

        .nav-logo {
          background: transparent !important;
        }
        .logo-img {
          height: 100px;
          transition: var(--transition-smooth);
          display: block;
          filter: brightness(0) invert(1); /* Back to solid white as requested */
        }
        .scrolled .logo-img {
          height: 55px;
        }

        .nav-link {
          text-decoration: none;
          color: #FFFFFF !important;
          font-family: var(--font-serif);
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: var(--transition-smooth);
          position: relative;
          padding-bottom: 4px;
        }
        .nav-dot-circle {
          width: 6px;
          height: 6px;
          background-color: #FFFFFF;
          border-radius: 50%;
          margin: 0 5px;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
        }
        .nav-link:hover, .nav-link.active {
          color: #D4AF37 !important;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #D4AF37;
          transition: var(--transition-smooth);
        }
        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        .btn-white-nav {
          border-color: #FFFFFF !important;
          color: #FFFFFF !important;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50px; /* Rounded pill shape */
          padding: 10px 28px;
          font-weight: 600;
          backdrop-filter: blur(5px);
          border-width: 1.5px;
        }
        .btn-white-nav:hover {
          background-color: #D4AF37 !important;
          border-color: #D4AF37 !important;
          color: #FFFFFF !important;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
        }

        .nav-mobile-toggle {
          display: none;
          color: var(--text-primary);
        }

        .nav-mobile {
          display: none;
        }

        @media (max-width: 991px) {
          .nav-desktop { 
            display: none !important; 
          }
          .nav-mobile-toggle { 
            display: flex !important;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            background: rgba(0,0,0,0.15);
            padding: 10px;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,0.2);
          }
          .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            width: 100%;
          }
          .logo-img {
            height: 60px;
          }
          .scrolled .logo-img {
            height: 50px;
          }
          .nav-mobile {
            display: flex;
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1001;
            visibility: hidden;
          }
          .nav-mobile.open {
            right: 0;
            visibility: visible;
          }
          .nav-mobile-link {
            text-decoration: none;
            color: #1A1A1A; /* Dark text for white mobile background */
            font-size: 1.5rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            transition: var(--transition-smooth);
          }
          .nav-mobile-link:hover, .nav-mobile-link.active {
            color: var(--color-gold);
          }
        }

        /* Footer Styles */
        .footer {
          padding: 40px 0 30px; /* Compact vertical */
          height: auto;
          min-height: 35vh; /* Max around 35% screen height */
          background-color: #F9F7F2; 
          position: relative;
          border-top: 1px solid rgba(0,0,0,0.05);
          text-align: center;
          overflow: hidden;
          color: var(--color-text-dark);
          display: flex;
          align-items: center;
        }
        .footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.55); 
          pointer-events: none;
        }
        .footer-elegant-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px; /* Even tighter gap */
        }
        .footer-branch-left, .footer-branch-right {
          position: absolute;
          bottom: -30px;
          width: 340px; 
          height: 100%; /* Scale to footer height */
          pointer-events: none;
          z-index: 1;
        }
        .footer-svg {
          width: 100%;
          height: 100%;
          opacity: 0.6; /* Softer integration */
        }
        .mirrored {
          transform: scaleX(-1);
        }
        .footer-branch-left {
          left: 0; 
        }
        .footer-branch-right {
          right: 0; 
        }
        .relative {
          position: relative;
        }
        .logo-tiny {
          height: 120px; /* Compacted */
          filter: drop-shadow(0 0 5px rgba(255,255,255,0.8));
          opacity: 0.9;
        }
        .footer-event-info {
          display: flex;
          justify-content: center;
          gap: 60px; /* More compact horizontally too */
          flex-wrap: wrap;
          margin: 5px 0; /* Minimal vertical margin */
        }
        .footer-info-item {
          display: flex;
          flex-direction: row; /* Horizontal for items too */
          align-items: center;
          gap: 12px;
        }
        .footer-icon {
          color: var(--color-gold);
          opacity: 0.8;
          width: 32px;
          height: 32px;
        }
        .footer-info-item span {
          font-size: 1.1rem; 
          letter-spacing: 0.05em;
          color: var(--color-text-dark);
          font-weight: 500;
        }
        .footer-divider-elegant {
          width: 100px;
          height: 1px;
          background-color: var(--color-gold);
          opacity: 0.3;
          margin: 5px 0;
        }
        .footer-names {
          font-size: 2.8rem; 
          margin-bottom: 5px;
          color: var(--color-text-dark);
        }
        .footer-tagline {
          font-size: 0.95rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-text-light);
          margin-bottom: 15px;
        }
        .footer-signature {
          font-size: 1.8rem;
          color: var(--color-gold);
          font-style: italic;
        }
        @media (max-width: 768px) {
          .footer-event-info {
            gap: 30px;
          }
          .footer-names {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;