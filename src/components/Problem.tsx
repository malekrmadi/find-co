import React from 'react';
import { Clock, User, BookOpen, AlertTriangle } from 'lucide-react';
import './Problem.css';

const problems = [
  {
    icon: Clock,
    title: 'Manque de temps',
    description: 'Vos journées sont trop courtes pour tout gérer efficacement. Les tâches administratives s\'accumulent.'
  },
  {
    icon: User,
    title: 'Ressources limitées',
    description: 'Recruter un spécialiste à temps plein n\'est pas toujours viable économiquement pour votre structure.'
  },
  {
    icon: BookOpen,
    title: 'Expertise manquante',
    description: 'Finance, RH, paie... Chaque domaine requiert des compétences spécifiques que vous n\'avez pas en interne.'
  },
  {
    icon: AlertTriangle,
    title: 'Risques opérationnels',
    description: 'Erreurs de paie, retards de facturation, non-conformité... Les risques sont réels et coûteux.'
  }
];

const Problem: React.FC = () => {
  return (
    <section id="problematique" className="problem section section-gray">
      <div className="container">
        <div className="problem-header">
          <span className="problem-label">La réalité des PME</span>
          <h2 className="section-title">
            Vous manquez de temps pour <span className="highlight">tout gérer</span> ?
          </h2>
          <p className="section-subtitle">
            En tant que dirigeant, vous jonglez entre développement commercial, gestion d'équipe 
            et tâches administratives. Ce n'est pas tenable.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div key={index} className="problem-card animate-on-scroll">
                <div className="problem-icon">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3 className="problem-title">{problem.title}</h3>
                <p className="problem-description">{problem.description}</p>
              </div>
            );
          })}
        </div>

        <div className="problem-cta">
          <p className="cta-text">
            <strong>Il existe une solution.</strong> Vous n'avez pas à tout porter seul.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
