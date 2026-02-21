import React, { useState, useEffect } from 'react';
import logoImg from '../assets/img/Logo.png';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  const navLinks = [
    { name: t('navbar.home'), href: '#home' },
    { name: t('navbar.company'), href: '#company' },
    { name: t('navbar.services'), href: '#services' },
    { name: t('navbar.suppliers'), href: '#suppliers' },
    { name: t('navbar.quote'), href: '#quote' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo-link">
           <img src={logoImg} alt="lusystech Logo" className="logo-img" />
        </a>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#quote" className="btn-primary mobile-cta" onClick={() => setMobileMenuOpen(false)}>
            {t('navbar.cta')}
          </a>
        </div>

        <div className="nav-actions">
           {/* Language Switcher */}
           <div className="lang-switcher">
              <button 
                className="lang-btn" 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                aria-label="Select Language"
              >
                <Globe size={24} />
              </button>
              {langMenuOpen && (
                <div className="lang-dropdown">
                  <button onClick={() => changeLanguage('en')} className={`lang-option ${i18n.language === 'en' ? 'active' : ''}`}>
                    English
                  </button>
                  <button onClick={() => changeLanguage('pt')} className={`lang-option ${i18n.language === 'pt' ? 'active' : ''}`}>
                    Português
                  </button>
                </div>
              )}
           </div>

           <button 
             className="mobile-menu-btn" 
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             aria-label="Toggle Navigation"
           >
             <span className="bar"></span>
             <span className="bar"></span>
             <span className="bar"></span>
           </button>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: var(--transition);
          background-color: transparent;
        }
        .navbar.scrolled {
          background-color: var(--color-nav-bg);
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
          height: 70px;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-img {
          height: 80px;
          object-fit: contain;
          transition: var(--transition);
          /* Tinting Logo to #1ebad7 (Cyan/Turquoise that matches the new theme) */
          filter: brightness(0) saturate(100%) invert(77%) sepia(35%) saturate(763%) hue-rotate(147deg) brightness(88%) contrast(88%) drop-shadow(0 0 5px rgba(30, 186, 215, 0.4));
        }
        .logo-img:hover {
            transform: translateY(-3px) scale(1.02);
            filter: brightness(0) saturate(100%) invert(60%) sepia(82%) saturate(400%) hue-rotate(168deg) brightness(93%) contrast(95%) drop-shadow(0 0 15px rgba(46, 177, 232, 0.6));
        }
        .navbar.scrolled .logo-img {
           height: 70px;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-links a:not(.btn-primary) {
          font-size: 0.9rem;
          font-weight: 500;
        }
        .nav-links a:not(.btn-primary):hover {
          color: var(--color-accent);
        }
        .mobile-cta {
          display: none;
        }
        .mobile-menu-btn {
          display: none;
          background: transparent;
          flex-direction: column;
          gap: 6px;
          border: none;
          cursor: pointer;
        }
        .bar {
          width: 25px;
          height: 3px;
          background-color: var(--color-text-primary);
          transition: var(--transition);
          border-radius: 2px;
        }

        /* Language Switcher Styles */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .lang-switcher {
          position: relative;
        }
        .lang-btn {
          background: transparent;
          border: none;
          color: var(--color-text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 4px;
          transition: var(--transition);
        }
        .lang-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--color-accent);
        }
        .lang-dropdown {
          position: absolute;
          top: 120%;
          right: 0;
          background-color: #2b3040; /* Dark background matching the image */
          border-radius: 6px;
          padding: 8px 0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          min-width: 150px;
          z-index: 1001;
          display: flex;
          flex-direction: column;
        }
        .lang-option {
          background: transparent;
          border: none;
          color: #e2e8f0;
          padding: 8px 16px;
          text-align: left;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background-color 0.2s;
        }
        .lang-option:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--color-accent);
        }
        .lang-option.active {
          color: var(--color-accent);
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 75vw;
            background-color: var(--color-bg-secondary);
            flex-direction: column;
            justify-content: center;
            transform: translateX(100%);
            transition: var(--transition);
            box-shadow: -10px 0 30px -15px rgba(2, 12, 27, 0.7);
          }
          .nav-links.active {
            transform: translateX(0);
          }
          .mobile-menu-btn {
            display: flex;
            z-index: 1001;
          }
          .mobile-cta {
            display: inline-block;
            margin-top: 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
