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

      <style>{`
        .services-section {
            padding: 5rem 0;
            position: relative;
        }
        .services-header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 4rem auto;
        }
        .services-intro {
            color: var(--color-text-secondary);
            font-size: 1.1rem;
            line-height: 1.6;
        }
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
        }
        .service-card {
            padding: 2.5rem 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: var(--transition);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .service-card:hover {
            transform: translateY(-10px);
            background: rgba(255, 255, 255, 0.05);
            border-color: var(--color-accent);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .service-card.highlighted {
            background: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(100, 255, 218, 0.05) 100%);
            border: 1px solid var(--color-accent);
            box-shadow: 0 0 20px rgba(100, 255, 218, 0.1);
        }
        .service-card.highlighted:hover {
             box-shadow: 0 0 30px rgba(100, 255, 218, 0.2);
        }
        .service-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
            filter: drop-shadow(0 0 10px rgba(100, 255, 218, 0.3));
        }
        .service-card h3 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            color: var(--color-text-primary);
        }
        .service-card p {
            color: var(--color-text-secondary);
            font-size: 0.95rem;
            line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default Services;
