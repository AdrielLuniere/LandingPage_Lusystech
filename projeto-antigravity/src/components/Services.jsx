import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Desenvolvimento de Apps Mobile',
      description: 'Nossa equipe cria soluções móveis que ajudam nossos clientes a se conectar com seus usuários de forma eficiente, tanto para Android quanto para iOS.',
      icon: '📱'
    },
    {
      title: 'Desenvolvimento Web',
      description: 'Usamos a tecnologia mais atual e performática para criar o seu site ou aplicação web o mais rápido e eficiente possível.',
      icon: '💻',
      highlight: true
    },
    {
      title: 'Cloud Computing',
      description: 'Oferecemos soluções de Cloud para ajudar nossos clientes a gerenciar seus dados e processos com segurança, eficiência e escalabilidade.',
      icon: '☁️'
    },
    {
      title: 'Automação',
      description: 'Serviços de automação de processos de negócios para ajudar a aumentar a eficiência e a produtividade de suas operações.',
      icon: '⚙️'
    },
    {
      title: 'Segurança da Informação',
      description: 'Soluções robustas de segurança para proteger seus dados e sistemas contra ameaças externas e vulnerabilidades.',
      icon: '🛡️'
    },
    {
      title: 'Análise de Dados',
      description: 'Serviços de análise para obter insights valiosos sobre seus negócios e tomar decisões mais estratégicas e informadas.',
      icon: '📊'
    },
    {
      title: 'Soluções Microsoft',
      description: 'Soluções simplificadas e poderosas utilizando Power BI, Excel, Power Apps e todo o ecossistema Microsoft.',
      icon: '🪟'
    },
    {
      title: 'Consultoria em TI',
      description: 'Consultoria especializada para ajudar a maximizar o potencial de seus sistemas, reduzir custos e melhorar a eficiência.',
      icon: '💼'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
           <h2 className="section-title">NOSSOS SERVIÇOS</h2>
           <p className="services-intro">
             Oferecemos uma ampla gama de serviços tecnológicos para ajudar os clientes a alcançar seus objetivos 
             e se manterem competitivos no mercado.
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
