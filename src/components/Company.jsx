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

      <style>{`
        .company-section {
            background-color: var(--color-bg-primary);
            position: relative;
            padding: 5rem 0;
        }
        .section-title {
            text-align: center;
            font-size: 2rem;
            letter-spacing: 2px;
            color: var(--color-text-primary);
            margin-bottom: 4rem;
            text-transform: uppercase;
            font-weight: 800;
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 5rem;
        }
        .feature-card {
            padding: 3rem 2rem;
            text-align: center;
            transition: var(--transition);
        }
        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px -20px rgba(100, 255, 218, 0.4);
            border-color: rgba(100, 255, 218, 0.3);
        }
        .feature-icon-wrapper {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            background: linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(0, 112, 243, 0.1));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(100, 255, 218, 0.2);
        }
        .feature-icon {
            font-size: 2.5rem;
        }
        .feature-card h3 {
            margin-bottom: 1rem;
            font-size: 1.5rem;
            color: var(--color-text-primary);
        }
        .feature-card p {
            color: var(--color-text-secondary);
            font-size: 1rem;
            line-height: 1.6;
        }

        /* Detailed Sections Styles */
        .company-details {
            display: flex;
            flex-direction: column;
            gap: 3rem;
        }
        .detail-block {
            padding: 3rem;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            border-left: 4px solid var(--color-accent);
        }
        .detail-block.reversed {
            border-left: none;
            border-right: 4px solid var(--color-accent-purple);
            text-align: right;
        }
        .detail-content h3 {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            background: var(--gradient-main);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
        }
        .detail-content p {
            color: var(--color-text-secondary);
            font-size: 1.1rem;
            line-height: 1.8;
            max-width: 900px;
        }
      `}</style>
    </section>
  );
};


export default Company;
