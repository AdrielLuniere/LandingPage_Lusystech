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

    </section>
  );
};

export default Quote;
