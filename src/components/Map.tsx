import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Map.css';

const Map: React.FC = () => {
  return (
    <section id="localisation" className="map-section section">
      <div className="container">
        <span className="map-label">Notre localisation</span>
        <h2 className="section-title">
          Venez nous <span className="highlight">rencontrer</span>
        </h2>
        <p className="section-subtitle">
          Nos bureaux sont situés au cœur de Paris, à proximité des Champs-Élysées.
        </p>

        <div className="map-content">
          <div className="map-info">
            <div className="info-card">
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div className="info-text">
                  <h4>Adresse</h4>
                  <p>Place Charles de Gaulle<br />75008 Paris, France</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div className="info-text">
                  <h4>Téléphone</h4>
                  <p>+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>contact@findandco.fr</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div className="info-text">
                  <h4>Horaires</h4>
                  <p>Lun - Ven : 9h00 - 18h00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.0158687994493!2d2.2922926157431966!3d48.873792279288896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec746f8f61%3A0xe3ccb8bed6e4c67!2sArc%20de%20Triomphe!5e0!3m2!1sfr!2sfr!4v1707000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Find&Co Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
