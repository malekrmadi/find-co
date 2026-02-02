import React, { useState, useEffect } from 'react';
import './Header.css';
import logoNavbar from '../assets/logo findco navbar.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo" onClick={() => scrollToSection('hero')}>
          <img src={logoNavbar} alt="Find&Co" className="logo-image" />
        </div>

        <nav className={`header-nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <button className="nav-link" onClick={() => scrollToSection('services')}>
            Services
          </button>
          <button className="nav-link" onClick={() => scrollToSection('pourquoi')}>
            Pourquoi nous
          </button>
          <button className="nav-link" onClick={() => scrollToSection('process')}>
            Notre méthode
          </button>
          <button className="nav-link" onClick={() => scrollToSection('faq')}>
            FAQ
          </button>
          <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
            Nous contacter
          </button>
        </nav>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'menu-open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
