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

    </nav>
  );
};

export default Navbar;
