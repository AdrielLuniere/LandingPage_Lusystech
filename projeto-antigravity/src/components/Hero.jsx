import React from 'react';

import heroGraphic from '../assets/img/Logo.png'; // Placeholder

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
              Soluções com inteligência artificial para um futuro digital. <br className="hide-mobile" />
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
          background: radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 100% 100%, rgba(0, 112, 243, 0.2) 0%, transparent 50%);
          /* Add a subtle mesh grid for the tech feel */
          background-image: 
              linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .hero-bg-elements {
            display: none; /* Hide old orbs for cleaner look */
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
          z-index: 10;
        }
        
        .hero-title {
          font-size: clamp(3.5rem, 6vw, 5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          font-weight: 900;
          letter-spacing: -1px;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-secondary);
          margin-bottom: 2.5rem;
          border-left: 4px solid var(--color-accent-blue);
          padding-left: 1.5rem;
          max-width: 500px;
          line-height: 1.6;
        }

        .hero-image-wrapper {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            transform-style: preserve-3d;
            perspective: 1000px;
        }

        /* Isometric Platform Effect */
        .hero-image-glow {
            position: absolute;
            width: 80%;
            height: 80%;
            background: linear-gradient(45deg, var(--color-accent-blue), var(--color-accent-purple));
            opacity: 0.2;
            border-radius: 20px;
            transform: rotateX(60deg) rotateZ(-30deg) translateZ(-50px);
            filter: blur(20px);
            box-shadow: 0 0 50px rgba(0, 112, 243, 0.4);
            animation: pulse-platform 4s ease-in-out infinite alternate;
        }

        .hero-graphic {
            width: 100%;
            max-width: 550px; 
            height: auto;
            object-fit: contain;
            position: relative;
            z-index: 2;
            /* Isometric tilt for the image itself if it's 2D */
            transform: rotateX(10deg) rotateY(-10deg);
            /* Tinting Logo to #0060df from Black/Dark */
           filter: brightness(0) saturate(100%) invert(66%) sepia(44%) saturate(546%) hue-rotate(132deg) brightness(95%) contrast(96%)
            drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5));

animation: float-iso 6s ease-in-out infinite;
        }
        
        .hero-cta .btn-glow {
            background: var(--color-accent-blue);
            box-shadow: 0 10px 20px -10px rgba(0, 112, 243, 0.5);
            border-radius: 8px; /* More techy, less pill */
            padding: 1rem 2.5rem;
        }
        .hero-cta .btn-glow:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 30px -10px rgba(0, 112, 243, 0.7);
            background: #0060df;
        }

        @keyframes float-iso {
            0% { transform: rotateX(10deg) rotateY(-10deg) translateY(0px); }
            50% { transform: rotateX(10deg) rotateY(-10deg) translateY(-20px); }
            100% { transform: rotateX(10deg) rotateY(-10deg) translateY(0px); }
        }
        
        @keyframes pulse-platform {
            0% { opacity: 0.2; transform: rotateX(60deg) rotateZ(-30deg) translateZ(-50px) scale(0.95); }
            100% { opacity: 0.4; transform: rotateX(60deg) rotateZ(-30deg) translateZ(-50px) scale(1.05); }
        }

        @media (max-width: 968px) {
            .hero-section {
                padding-top: 120px;
                display: block;
            }
            .hero-container {
                flex-direction: column;
                text-align: center;
                gap: 4rem;
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
                perspective: none; /* Disable 3D on mobile for better fit */
            }
            .hero-graphic {
                transform: none; /* Flatten on mobile */
                animation: float 6s ease-in-out infinite;
            }
            .hero-image-glow {
                transform: scale(0.9);
                animation: none;
            }
             @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
                100% { transform: translateY(0px); }
            }
        }
      `}</style>
    </section>
  );
};

export default Hero;
