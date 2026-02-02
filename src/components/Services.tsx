import React from 'react';
import { Check } from 'lucide-react';
import './Services.css';

import financeCover from '../assets/finance-cover.jpg';
import hrCover from '../assets/hr_cover.jpg';
import supportCover from '../assets/support_cover.jpg';
import surmesureCover from '../assets/surmesure_cover.jpg';

const services = [
  {
    image: financeCover,
    title: 'Finance & Administration',
    description: 'Comptabilité, facturation, trésorerie, reporting financier. Gardez le contrôle sans gérer l\'opérationnel.',
    features: ['Comptabilité courante', 'Gestion de trésorerie', 'Facturation clients', 'Reporting mensuel']
  },
  {
    image: hrCover,
    title: 'Ressources Humaines & Paie',
    description: 'Recrutement, administration du personnel, gestion de la paie. Concentrez-vous sur vos équipes, pas sur la paperasse.',
    features: ['Paie et déclarations', 'Administration RH', 'Recrutement', 'Formation']
  },
  {
    image: supportCover,
    title: 'Support Opérationnel',
    description: 'Assistanat de direction, gestion des achats, logistique. Fluidifiez vos opérations quotidiennes.',
    features: ['Assistanat direction', 'Gestion des achats', 'Coordination logistique', 'Gestion de projet']
  },
  {
    image: surmesureCover,
    title: 'Solutions Sur Mesure',
    description: 'Un besoin spécifique ? Nous construisons avec vous la solution adaptée à votre organisation.',
    features: ['Analyse de vos besoins', 'Proposition dédiée', 'Mise en place agile', 'Évolution continue']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services section section-gray">
      <div className="container">
        <span className="services-label">Nos expertises</span>
        <h2 className="section-title">
          Des services adaptés à <span className="highlight">vos besoins</span>
        </h2>
        <p className="section-subtitle">
          Externalisez une ou plusieurs fonctions support selon vos priorités.
          Nous nous adaptons à votre organisation.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card animate-on-scroll">
              <div className="service-cover">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={16} strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
