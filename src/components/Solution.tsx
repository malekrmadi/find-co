import React from 'react';
import './Solution.css';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="solution section">
      <div className="container">
        <div className="solution-content">
          <div className="solution-text">
            <span className="solution-label">Notre mission</span>
            <h2 className="section-title solution-title">
              Find&Co, votre partenaire <span className="highlight">fonctions support</span>
            </h2>
            <p className="solution-description">
              Find&Co est une entreprise spécialisée dans l'externalisation des fonctions 
              support. Nous devenons une extension naturelle de votre équipe, en prenant 
              en charge les tâches qui freinent votre croissance.
            </p>
            
            <div className="solution-benefits">
              <div className="benefit-item">
                <div className="benefit-check">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <strong>Externalisation sur mesure</strong>
                  <span>Solutions adaptées à votre taille et vos besoins spécifiques</span>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-check">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <strong>Expertise métier</strong>
                  <span>Des spécialistes formés et expérimentés dans chaque domaine</span>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-check">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <strong>Flexibilité totale</strong>
                  <span>Ajustez vos ressources en fonction de votre activité</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="solution-visual">
            <div className="visual-wrapper">
              <div className="visual-main">
                <div className="visual-icon-large">🎯</div>
                <h3>Votre focus</h3>
                <p>Développement commercial, innovation, croissance</p>
              </div>
              <div className="visual-arrow">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <div className="visual-secondary">
                <div className="visual-icon-small">📋</div>
                <span>Find&Co gère le reste</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
