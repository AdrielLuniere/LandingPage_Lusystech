import React from 'react';
import awsLogo from '../assets/img/aws.png';
import microsoftLogo from '../assets/img/microsoft.png';
import oracleLogo from '../assets/img/database.png';
import pythonLogo from '../assets/img/python.png';
import vercelLogo from '../assets/img/vercel.jpg';
import vscodeLogo from '../assets/img/vscode.jpg';

const Suppliers = () => {
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
        <h2 className="section-title">OUR STRATEGIC PARTNERS</h2>
        
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

      <style>{`
        .suppliers-section {
          position: relative;
        }
        .section-title {
           text-align: center;
           margin-bottom: 3rem;
           font-size: 1.2rem;
           letter-spacing: 2px;
           text-transform: uppercase;
        }
        .partners-grid {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
           gap: 1.5rem;
        }
        .partner-card {
           height: 140px;
           display: flex;
           align-items: center;
           justify-content: center;
           transition: var(--transition);
           position: relative;
           overflow: hidden;
        }
        .partner-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(100,255,218,0.1), transparent);
            opacity: 0;
            transition: var(--transition);
        }
        .partner-card:hover::before {
            opacity: 1;
        }
        .partner-card:hover {
           transform: translateY(-5px);
           border-color: var(--color-accent-cyan);
           box-shadow: 0 0 20px rgba(100, 255, 218, 0.1);
        }
        
        .partner-logo-wrapper {
            width: 80%;
            height: 60%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 8px;
            padding: 1rem;
            z-index: 1;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .partner-logo-img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            filter: grayscale(100%);
            transition: var(--transition);
            opacity: 0.8;
        }
        
        .partner-card:hover .partner-logo-img {
            filter: grayscale(0%);
            opacity: 1;
            transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Suppliers;
