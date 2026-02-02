import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'Find&Co s\'adapte-t-elle à la taille de mon entreprise ?',
    answer: 'Absolument. Que vous soyez une startup de 5 personnes ou une PME de 200 collaborateurs, nos solutions sont modulables. Nous dimensionnons notre accompagnement selon votre réalité, pas selon un modèle rigide.'
  },
  {
    question: 'Peut-on externaliser une seule fonction ?',
    answer: 'Bien sûr. Vous pouvez commencer par externaliser uniquement la paie, la comptabilité ou l\'administratif RH. C\'est souvent par là que nos clients commencent, avant d\'élargir notre collaboration.'
  },
  {
    question: 'Quelles garanties de confidentialité offrez-vous ?',
    answer: 'La confidentialité est au cœur de notre métier. Tous nos collaborateurs signent des clauses de confidentialité strictes. Nous utilisons des outils sécurisés et conformes RGPD. Vos données sont protégées.'
  },
  {
    question: 'Quel est le délai de mise en place ?',
    answer: 'Nous sommes opérationnels rapidement. Après notre diagnostic initial (1-2 jours), la mise en place prend généralement entre 1 et 2 semaines selon la complexité des fonctions externalisées.'
  },
  {
    question: 'Y a-t-il un engagement de durée ?',
    answer: 'Nous proposons des contrats flexibles. Pas d\'engagement longue durée obligatoire. Nous croyons que c\'est la qualité de notre travail qui vous fidélise, pas une clause contractuelle.'
  },
  {
    question: 'Comment se passe la communication au quotidien ?',
    answer: 'Vous disposez d\'un interlocuteur dédié, joignable par email, téléphone ou messagerie instantanée. Nous nous adaptons à vos outils (Slack, Teams, etc.) et organisons des points réguliers selon vos préférences.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <span className="faq-label">Questions fréquentes</span>
        <h2 className="section-title">
          On répond à vos <span className="highlight">questions</span>
        </h2>
        <p className="section-subtitle">
          Vous hésitez encore ? Voici les réponses aux questions les plus fréquentes.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'faq-open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <div className="faq-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </div>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
