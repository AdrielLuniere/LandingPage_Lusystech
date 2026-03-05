import React from 'react';

import heroGraphic from '../assets/img/Logo.png'; // Placeholder

import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-elements">
         <div className="glow-orb orb-1"></div>
         <div className="glow-orb orb-2"></div>
         <div className="grid-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
            <h1 className="hero-title">
              {t('hero.title').split(' ')[0]} <br />
              <span className="text-gradient">{t('hero.title').split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="hero-subtitle">
              {t('hero.subtitle')}
            </p>
            <div className="hero-cta">
              <a href="#quote" className="btn-glow">{t('hero.cta')}</a>
            </div>
        </div>
        
        <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <img src={heroGraphic} alt="Innovative Technology" className="hero-graphic" />
        </div>
      </div>

    </section>
  );
};

export default Hero;
