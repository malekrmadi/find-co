import React from 'react';
import { Clock, Gem, Rocket, Shield } from 'lucide-react';
import './WhyUs.css';

const reasons = [
  {
    icon: Clock,
    title: 'Gain de temps',
    description: 'Libérez-vous des tâches chronophages pour vous concentrer sur votre cœur de métier et votre développement.',
    stat: '40%',
    statLabel: 'de temps gagné en moyenne'
  },
  {
    icon: Gem,
    title: 'Réduction des coûts',
    description: 'Évitez les coûts fixes d\'un recrutement. Payez uniquement pour les services dont vous avez besoin.',
    stat: '-30%',
    statLabel: 'vs embauche interne'
  },
  {
    icon: Rocket,
    title: 'Expertise immédiate',
    description: 'Accédez instantanément à des spécialistes formés et expérimentés, sans période de formation.',
    stat: '48h',
    statLabel: 'pour être opérationnel'
  },
  {
    icon: Shield,
    title: 'Sérénité opérationnelle',
    description: 'Dormez tranquille. Vos fonctions support sont entre les mains de professionnels fiables.',
    stat: '0',
    statLabel: 'stress administratif'
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="pourquoi" className="why-us section">
      <div className="container">
        <span className="why-label">Vos avantages</span>
        <h2 className="section-title">
          Pourquoi choisir <span className="highlight">Find&Co</span> ?
        </h2>
        <p className="section-subtitle">
          Nous ne sommes pas qu'un prestataire. Nous devenons votre partenaire de croissance.
        </p>

        <div className="why-grid">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="why-card animate-on-scroll">
                <div className="why-icon">
                  <IconComponent size={40} strokeWidth={1.5} />
                </div>
                <div className="why-content">
                  <h3 className="why-title">{reason.title}</h3>
                  <p className="why-description">{reason.description}</p>
                </div>
                <div className="why-stat">
                  <span className="stat-value">{reason.stat}</span>
                  <span className="stat-label">{reason.statLabel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
