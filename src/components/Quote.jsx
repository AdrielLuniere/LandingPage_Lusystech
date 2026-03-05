import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
const Quote = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formspreeEndpoint = 'https://formspree.io/f/maqpwyob';

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Erro ao enviar o formulário.');
      }
    } catch (error) {
      console.error('Formspree Error:', error);
      alert('Houve um erro ao enviar. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="quote-section">
      <div className="container">
        <h2 className="section-title">{t('quote.title')}</h2>
        <div className="quote-container glass-card">
            <form className="quote-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        placeholder={t('quote.form.name')}
                        className="modern-input"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        placeholder={t('quote.form.email')}
                        className="modern-input"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder={t('quote.form.phone')}
                         className="modern-input"
                    />
                </div>
                <div className="form-group">
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        rows="4" 
                        placeholder={t('quote.form.message')}
                        className="modern-input"
                    ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`btn-glow submit-btn ${success ? 'success' : ''}`} 
                  disabled={loading || success}
                >
                  {loading ? 'Enviando...' : success ? 'Enviado com sucesso!' : t('quote.form.submit')}
                </button>
            </form>
        </div>
      </div>

      <style>{`
        .quote-section {
            padding-bottom: 6rem;
             /* Ensure it sits above the background mesh */
            position: relative;
        }
        .section-title {
            text-align: center;
            font-size: 1.2rem;
            letter-spacing: 2px;
            color: var(--color-text-primary);
            margin-bottom: 3rem;
        }
        .quote-container {
            max-width: 700px;
            margin: 0 auto;
            padding: 3rem;
            border: 1px solid rgba(100, 255, 218, 0.2);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .modern-input {
            width: 100%;
            padding: 1rem 1.5rem;
            background: rgba(2, 12, 27, 0.6);
            border: 1px solid rgba(136, 146, 176, 0.2);
            border-radius: 50px;
            color: var(--color-text-primary);
            font-family: inherit;
            transition: var(--transition);
        }
        
        textarea.modern-input {
            border-radius: 20px;
            resize: vertical;
        }

        .modern-input:focus {
            outline: none;
            border-color: var(--color-accent-cyan);
            background: rgba(2, 12, 27, 0.8);
            box-shadow: 0 0 15px rgba(100, 255, 218, 0.1);
        }
        
        .modern-input::placeholder {
            color: var(--color-text-secondary);
            font-size: 0.9rem;
        }

        .submit-btn.success {
            background: #2ecc71;
            border-color: #27ae60;
            cursor: default;
        }
        
        @media (max-width: 768px) {
            .quote-container {
                padding: 2rem 1.5rem;
            }
        }
      `}</style>
    </section>
  );
};

export default Quote;
