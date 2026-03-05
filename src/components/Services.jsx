import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.list.mobile.title'),
      description: t('services.list.mobile.desc'),
      icon: '📱'
    },
    {
      title: t('services.list.web.title'),
      description: t('services.list.web.desc'),
      icon: '💻',
      highlight: true
    },
    {
      title: t('services.list.cloud.title'),
      description: t('services.list.cloud.desc'),
      icon: '☁️'
    },
    {
      
       title: t('services.list.automation.title'),
       description: t('services.list.automation.desc'),
       icon: '⚙️'
    },
    {
      title: t('services.list.security.title'),
      description: t('services.list.security.desc'),
      icon: '🛡️'
    },
    {
      title: t('services.list.analytics.title'),
      description: t('services.list.analytics.desc'),
      icon: '📊'
    },
    {
      title: t('services.list.microsoft.title'),
      description: t('services.list.microsoft.desc'),
      icon: '🪟'
    },
    {
      title: t('services.list.consulting.title'),
      description: t('services.list.consulting.desc'),
      icon: '💼'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
           <h2 className="section-title">{t('services.title')}</h2>
           <p className="services-intro">
             {t('services.intro')}
           </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card glass-card ${service.highlight ? 'highlighted' : ''}`}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Services;
