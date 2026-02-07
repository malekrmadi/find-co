import React, { useState } from 'react';
import './Contact.css';

//const GOOGLE_APPS_SCRIPT_URL =
//  'https://script.google.com/macros/s/AKfycbwSEfpeN83AU8wXJQ2bsDwGHA8UAr05uYnt8EzwxjbKgjlvalhApBXfcd-Ppq2R-lJraw/exec';
const GOOGLE_APPS_SCRIPT_URL ='https://script.google.com/macros/s/AKfycbyzr-3B2r3OGOM6LN6JiRBL9igI8g6Jod6PLTfOfuSVt8EIfUQaO4P8I6rlt3RCURboaQ/exec'

const API_KEY = 'CONTACT_FORM_2025';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      api_key: API_KEY,
      name: formData.name,
      company: formData.company,
      email: formData.email,
      message: formData.message
    };

    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      setIsSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        message: ''
      });

      // Reset success après 5s (comportement original conservé)
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error) {
      console.error('Erreur envoi formulaire', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="contact-label">Parlons de vous</span>
            <h2 className="contact-title">
              Prêt à vous <span className="highlight">libérer</span> ?
            </h2>
            <p className="contact-description">
              Un échange simple, sans engagement. Prenons 15 minutes pour 
              comprendre vos défis et voir comment Find&Co peut vous aider.
            </p>

            <div className="contact-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Diagnostic gratuit</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Sans engagement</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Réponse sous 24h</span>
              </div>
            </div>

            <div className="contact-direct">
              <p>Ou contactez-nous directement :</p>
              <a href="mailto:contact@findandco.fr" className="contact-email">
                contact@findandco.fr
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message envoyé !</h3>
                <p>Nous reviendrons vers vous rapidement.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Votre nom *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Entreprise *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email professionnel *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jean@entreprise.fr"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Votre message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Décrivez brièvement vos besoins..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer mon message
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
