import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-elements">
         <div className="glow-orb orb-1"></div>
         <div className="glow-orb orb-2"></div>
         <div className="grid-overlay"></div>
      </div>

      <div className="container hero-content">
        <h1 className="hero-title">
          INNOVATING <br />
          <span className="text-gradient">THE FUTURE</span>
        </h1>
        <p className="hero-subtitle">
          AI-Powered Solutions for a Digital Tomorrow.
          Secure, scalable, and intelligent systems.
        </p>
        <div className="hero-cta">
          <a href="#quote" className="btn-glow">Get Started Now</a>
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
            background: var(--color-accent-primary); /* Fallback or specific */
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

        .hero-content {
          max-width: 900px;
          z-index: 1;
        }
        .hero-title {
          font-size: clamp(48px, 8vw, 90px);
          line-height: 1.1;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-secondary);
          max-width: 500px;
          margin-bottom: 3rem;
          border-left: 3px solid var(--color-accent-cyan);
          padding-left: 1.5rem;
        }
      `}</style>
    </section>
  );
};

export default Hero;
