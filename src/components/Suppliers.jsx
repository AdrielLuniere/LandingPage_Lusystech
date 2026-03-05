import React from 'react';
import awsLogo from '../assets/img/aws.png';
import microsoftLogo from '../assets/img/microsoft.png';
import oracleLogo from '../assets/img/database.png';
import pythonLogo from '../assets/img/python.png';
import vercelLogo from '../assets/img/vercel.jpg';
import vscodeLogo from '../assets/img/vscode.jpg';
import { useTranslation } from 'react-i18next';

const Suppliers = () => {
  const { t } = useTranslation();
  const partners = [
    { name: 'AWS', logo: awsLogo },
    { name: 'Microsoft', logo: microsoftLogo },
    { name: 'Oracle', logo: oracleLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'Vercel', logo: vercelLogo },
    { name: 'VS Code', logo: vscodeLogo },
  ];

  return (
    <section id="suppliers" className="suppliers-section">
      <div className="container">
        <h2 className="section-title">{t('suppliers.title')}</h2>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card glass-card">
              <div className="partner-logo-wrapper">
                  <img src={partner.logo} alt={partner.name} className="partner-logo-img" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Suppliers;
