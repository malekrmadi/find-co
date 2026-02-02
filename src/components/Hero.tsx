import React from 'react';
import './Hero.css';
import logoMain from '../assets/logo findco.png';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <span className="badge-icon">✦</span>
            Votre partenaire fonctions support
          </div>

          <h1 className="hero-title">
            Externalisez vos fonctions support.
            <br />
            <span className="title-highlight">Concentrez-vous sur l'essentiel.</span>
          </h1>

          <p className="hero-subtitle">
            Find&Co accompagne les PME et startups en croissance en prenant en charge
            leurs fonctions support – Finance, RH, Administration – pour leur permettre
            de se concentrer sur leur cœur de métier.
          </p>
        </div>

        <div className="hero-visual animate-fade-in-delayed">
          <div className="hero-logo-wrapper">
            <img src={logoMain} alt="Find&Co" className="hero-logo-image" />
            <div className="hero-logo-tagline">Votre partenaire fonctions support</div>
          </div>

          <div className="hero-visual-cta">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Parler à un expert
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn btn-secondary" onClick={scrollToServices}>
              Découvrir nos services
            </button>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
