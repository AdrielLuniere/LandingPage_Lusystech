import React from 'react';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/img/Logo.png';

const Footer = () => {
    const { t } = useTranslation();
    const [isPrivacyOpen, setIsPrivacyOpen] = React.useState(false);
    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-col">
            <a href="#home" className="footer-logo-link">
               <img src={logoImg} alt="NeoTech" className="footer-logo-img" />
            </a>
            <p>{t('footer.slogan')}</p>
        </div>
        <div className="footer-col">
            <h4>{t('footer.contact')}</h4>
            <p>lusystech@hotmail.com</p>
            <p>+55 (31) 99615-7050</p>
            <p>Belo Horizonte, MG</p>
        </div>
        <div className="footer-col">
             <h4>{t('footer.follow')}</h4>
             <a href="https://www.instagram.com/lusystech?igsh=bmo1dG9teWdlMW10&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link">
                Instagram ↗
             </a>
        </div>
      </div>

      <div className="container">
          <div className="privacy-wrapper" onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}>
              <div className={`privacy-content ${isPrivacyOpen ? 'expanded' : ''}`}>
                  <strong>{t('footer.privacy.title')}</strong> {t('footer.privacy.text')}
              </div>
              <div className={`privacy-toggle-icon ${isPrivacyOpen ? 'rotated' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
              </div>
          </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} {t('footer.rights')}</p>
        <p className="legal-note">Lei nº 13.709/2018</p>
      </div>

      <a href="https://wa.me/5531996157050" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
         <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
             <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.6.329 1.64.67 2.796.67 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.769-5.768-5.757zm0 10.153c-1.065 0-1.878-.293-2.392-.563l-1.996.523.535-1.944c-.722-.843-.722-1.002-.722-2.388 0-2.454 1.996-4.45 4.545-4.437 2.528.012 4.475 2.052 4.474 4.502-.001 2.37-2.022 4.307-4.444 4.307z"/>
             <path d="M12 2C6.48 2 2 6.48 2 12c0 2.169.706 4.195 1.914 5.865L2.245 22.5l4.81-1.26A9.962 9.962 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.27c-1.614 0-3.123-.466-4.417-1.28l-.316-.2-.318.083-2.653.695.709-2.584.07-.324-.213-.339A8.257 8.257 0 0 1 12 3.73c4.56 0 8.27 3.71 8.27 8.27 0 4.56-3.71 8.27-8.27 8.27z"/>
         </svg>
      </a>

    </footer>
  );
};

export default Footer;
