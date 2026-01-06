import React from 'react';

import heroGraphic from '../assets/img/Logo.png'; // Placeholder: Please replace with your image renamed to 'hero-graphic.png'

const Hero = () => {
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
              INOVANDO <br />
              <span className="text-gradient">O FUTURO</span>
            </h1>
            <p className="hero-subtitle">
              Soluções com inteligência artificial para um futuro digital.
              Sistemas seguros, escaláveis e inteligentes.
            </p>
            <div className="hero-cta">
              <a href="#quote" className="btn-glow">COMECE AGORA MESMO</a>
            </div>
        </div>
        
        <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <img src={heroGraphic} alt="Innovative Technology" className="hero-graphic" />
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px; 
          position: relative;
        }
        
        .hero-bg-elements {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
        }
        
        .glow-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.5;
        }
        
        .orb-1 {
            width: 300px;
            height: 300px;
            background: var(--color-accent-purple);
            top: -50px;
            right: -50px;
            opacity: 0.3;
        }
        
        .orb-2 {
            width: 500px;
            height: 500px;
            background: #0070f3;
            bottom: -100px;
            left: -100px;
            opacity: 0.2;
        }
        
        .grid-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            mask-image: radial-gradient(circle at center, black 40%, transparent 90%);
        }

        .hero-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 4rem;
            width: 100%;
        }

        .hero-content {
          flex: 1;
          max-width: 600px;
          z-index: 1;
        }
        
        .hero-title {
          font-size: clamp(3rem, 5vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-secondary);
          margin-bottom: 3rem;
          border-left: 3px solid var(--color-accent-cyan);
          padding-left: 1.5rem;
          max-width: 480px;
          line-height: 1.6;
        }

        .hero-image-wrapper {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            animation: float 6s ease-in-out infinite;
        }

        .hero-graphic {
            width: 100%;
            max-width: 600px; 
            height: auto;
            object-fit: contain;
            border-radius: 12px;
            position: relative;
            z-index: 2;
            /* Applying screen blend mode for glowing effect integration if fits, otherwise normal */
            mix-blend-mode: screen; 
            filter: drop-shadow(0 0 20px rgba(0, 112, 243, 0.3));
        }
        
        .hero-image-glow {
            position: absolute;
            width: 80%;
            height: 80%;
            background: var(--gradient-main);
            filter: blur(60px);
            opacity: 0.4;
            border-radius: 50%;
            z-index: 1;
        }

        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }

        @media (max-width: 968px) {
            .hero-container {
                flex-direction: column;
                text-align: center;
                gap: 3rem;
            }
            .hero-content {
                max-width: 100%;
            }
            .hero-subtitle {
                margin: 0 auto 3rem auto;
                text-align: left;
                display: inline-block;
            }
            .hero-image-wrapper {
                width: 100%;
            }
        }
      `}</style>
    </section>
  );
};

export default Hero;
