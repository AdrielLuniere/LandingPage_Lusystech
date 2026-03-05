import React from 'react';
import { useTranslation } from 'react-i18next';

const Company = () => {
    const { t } = useTranslation();

    const features = [
        {
          title: t('company.features.trust.title'),
          description: t('company.features.trust.desc'),
          icon: '🛡️'
        },
        {
          title: t('company.features.innovation.title'),
          description: t('company.features.innovation.desc'),
          icon: '💡'
        },
        {
          title: t('company.features.professionalism.title'),
          description: t('company.features.professionalism.desc'),
          icon: '🤝'
        }
    ];

  return (
    <section id="company" className="company-section">
      <div className="container">
        <h2 className="section-title">{t('company.title')}</h2>
        
        <div className="features-grid">
            {features.map((feature, index) => (
                <div key={index} className="feature-card glass-card">
                    <div className="feature-icon-wrapper">
                        <div className="feature-icon">{feature.icon}</div>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>

        <div className="company-details">
            {/* Sobre */}
            <div className="detail-block glass-card">
                <div className="detail-content">
                    <h3>{t('company.about.title')}</h3>
                    <p>
                        {t('company.about.text1')}
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        {t('company.about.text2')}
                    </p>
                </div>
            </div>

            {/* Propósito */}
            <div className="detail-block glass-card reversed">
                <div className="detail-content">
                    <h3>{t('company.purpose.title')}</h3>
                    <p>
                        {t('company.purpose.text1')}
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        {t('company.purpose.text2')}
                    </p>
                </div>
            </div>

            {/* Valores (Bottom Left in image) */}
            <div className="detail-block glass-card">
                <div className="detail-content">
                    <h3>{t('company.values.title')}</h3>
                    <p>
                        {t('company.values.text1')}
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                         {t('company.values.text2')}
                    </p>
                </div>
            </div>
        </div>
      </div>

    </section>
  );
};


export default Company;
