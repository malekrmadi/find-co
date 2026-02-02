import React from 'react';
import { Search, FileText, Zap, TrendingUp } from 'lucide-react';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Analyse des besoins',
    description: 'Nous échangeons pour comprendre votre situation, vos défis et vos priorités. Un diagnostic complet et gratuit.',
    icon: Search
  },
  {
    number: '02',
    title: 'Proposition sur mesure',
    description: 'Nous construisons une offre personnalisée, adaptée à votre structure, votre budget et vos objectifs.',
    icon: FileText
  },
  {
    number: '03',
    title: 'Mise en place rapide',
    description: 'Notre équipe s\'intègre à vos process existants. Opérationnel en quelques jours, pas en quelques mois.',
    icon: Zap
  },
  {
    number: '04',
    title: 'Suivi & optimisation',
    description: 'Points réguliers, reporting clair, ajustements continus. Nous évoluons avec vous.',
    icon: TrendingUp
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="process section section-gray">
      <div className="container">
        <span className="process-label">Notre méthode</span>
        <h2 className="section-title">
          Comment ça <span className="highlight">fonctionne</span> ?
        </h2>
        <p className="section-subtitle">
          Un process simple et transparent pour une collaboration efficace dès le premier jour.
        </p>

        <div className="process-timeline">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="process-step animate-on-scroll">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <div className="step-icon">
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
