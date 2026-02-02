import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-find">Find</span>
              <span className="logo-and">&</span>
              <span className="logo-co">Co</span>
            </div>
            <p className="footer-tagline">
              Votre partenaire fonctions support
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Finance & Administration</a></li>
                <li><a href="#services">Ressources Humaines</a></li>
                <li><a href="#services">Support Opérationnel</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Entreprise</h4>
              <ul>
                <li><a href="#solution">À propos</a></li>
                <li><a href="#pourquoi">Pourquoi nous</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:contact@findandco.fr">contact@findandco.fr</a></li>
                <li><a href="#contact">Formulaire de contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Find&Co. Tous droits réservés.</p>
          <div className="footer-legal">
            <a href="#">Mentions légales</a>
            <span>•</span>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
