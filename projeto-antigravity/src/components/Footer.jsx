import React from 'react';

import logoImg from '../assets/img/Logo.png';

const Footer = () => {
    const [isPrivacyOpen, setIsPrivacyOpen] = React.useState(false);
    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-col">
            <a href="#home" className="footer-logo-link">
               <img src={logoImg} alt="NeoTech" className="footer-logo-img" />
            </a>
            <p>Advancing the world through code.</p>
        </div>
        <div className="footer-col">
            <h4>Contato</h4>
            <p>contact@lusystech.com</p>
            <p>+1 (555) 123-4567</p>
            <p>Tech Valley, CA</p>
        </div>
        <div className="footer-col">
             <h4>Siga-nos</h4>
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                Instagram ↗
             </a>
        </div>
      </div>

      <div className="container">
          <div className="privacy-wrapper" onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}>
              <div className={`privacy-content ${isPrivacyOpen ? 'expanded' : ''}`}>
                  <strong>Política de Privacidade da Lusystech:</strong> A Lusystech está comprometida em proteger a privacidade de seus usuários... Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos as informações que coletamos dos nossos usuários. Ao usar nossos serviços, você concorda com esta Política de Privacidade. Coleta de Informações: A Lusystech coleta informações pessoais que você fornece, tais como nome, endereço de e-mail, telefone, endereço e informações de pagamento, quando você se registra em nossos serviços ou realiza uma transação conosco. Também podemos coletar informações sobre como você usa nossos serviços, incluindo seu endereço IP, tipo de navegador, páginas acessadas e duração de uso. Uso de InformaçõesA Lusystech usa as informações coletadas para fornecer nossos serviços, processar transações, enviar comunicações sobre nossos serviços e responder a solicitações de suporte. Também podemos usar essas informações para melhorar nossos serviços e personalizar sua experiência com base em suas preferências.
Compartilhamento de Informações A Lusystech não vende nem aluga suas informações pessoais para terceiros. Podemos compartilhar informações com terceiros, como fornecedores de serviços, para fornecer nossos serviços, processar transações ou fornecer suporte ao cliente. Também podemos compartilhar informações para cumprir requisitos legais, proteger nossos direitos ou os direitos de nossos usuários, ou para investigar fraudes. Proteção de Informações A Lusystech adota medidas de segurança razoáveis para proteger as informações coletadas contra perda, uso indevido, acesso não autorizado, divulgação, alteração ou destruição. No entanto, nenhuma medida de segurança é completamente infalível e não podemos garantir a segurança absoluta das informações coletadas.  Alterações a esta Política de Privacidade A Lusystech reserva-se o direito de atualizar ou alterar esta Política de Privacidade a qualquer momento, sem aviso prévio. As alterações entrarão em vigor assim que forem publicadas nesta página. Contato Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre como a Lusystech usa suas informações, entre em contato conosco através do e-mail: lusystech@hotmail.com
              </div>
              <div className={`privacy-toggle-icon ${isPrivacyOpen ? 'rotated' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
              </div>
          </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Lusystech Solutions. All rights reserved.</p>
        <p className="legal-note">Lei nº 13.709/2018</p>
      </div>

      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
         <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
             <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.6.329 1.64.67 2.796.67 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.769-5.768-5.757zm0 10.153c-1.065 0-1.878-.293-2.392-.563l-1.996.523.535-1.944c-.722-.843-.722-1.002-.722-2.388 0-2.454 1.996-4.45 4.545-4.437 2.528.012 4.475 2.052 4.474 4.502-.001 2.37-2.022 4.307-4.444 4.307z"/>
             <path d="M12 2C6.48 2 2 6.48 2 12c0 2.169.706 4.195 1.914 5.865L2.245 22.5l4.81-1.26A9.962 9.962 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.27c-1.614 0-3.123-.466-4.417-1.28l-.316-.2-.318.083-2.653.695.709-2.584.07-.324-.213-.339A8.257 8.257 0 0 1 12 3.73c4.56 0 8.27 3.71 8.27 8.27 0 4.56-3.71 8.27-8.27 8.27z"/>
         </svg>
      </a>

      <style>{`
        .footer-section {
            background-color: var(--color-bg-primary);
            padding-top: 4rem;
            padding-bottom: 2rem;
            border-top: 1px solid rgba(100, 255, 218, 0.1);
            position: relative;
        }
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        .footer-logo-link {
            display: inline-block;
            margin-bottom: 1rem;
        }
        .footer-logo-img {
            height: 90px;
            object-fit: contain;
            filter: drop-shadow(0 0 5px rgba(100, 255, 218, 0.4));
            transition: var(--transition);
        }
        .footer-logo-img:hover {
            filter: drop-shadow(0 0 15px rgba(100, 255, 218, 0.6));
            transform: translateY(-3px) scale(1.02);
        }
        .footer-col h4 {
            color: var(--color-text-primary);
            margin-bottom: 1rem;
        }
        .footer-col p, .footer-col a {
            color: var(--color-text-secondary);
            font-size: 0.9rem;
            display: block;
            margin-bottom: 0.5rem;
        }
        .social-link:hover {
            color: var(--color-accent-blue);
        }
        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            font-size: 0.8rem;
            color: var(--color-text-secondary);
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .legal-note {
            font-size: 0.7rem;
            opacity: 0.6;
            margin-top: 0.5rem;
            text-decoration: underline;
        }

        /* Privacy Policy */
        .privacy-wrapper {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 1rem;
            cursor: pointer;
            transition: background 0.3s;
        }
        .privacy-wrapper:hover {
            background: rgba(255, 255, 255, 0.06);
        }
        .privacy-content {
            color: var(--color-text-secondary);
            font-size: 0.85rem;
            line-height: 1.6;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            transition: all 0.5s ease;
        }
        .privacy-content.expanded {
            display: block;
            -webkit-line-clamp: unset;
        }
        .privacy-toggle-icon {
            color: var(--color-text-primary);
            transition: transform 0.3s ease;
            margin-top: 2px;
        }
        .privacy-toggle-icon.rotated {
            transform: rotate(180deg);
        }

        /* Floating WhatsApp */
        .whatsapp-float {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: linear-gradient(135deg, #25d366, #128c7e);
            color: white;
            width: 70px; /* Slightly larger */
            height: 70px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
            z-index: 1000;
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 2px solid rgba(255,255,255,0.2);
            animation: pulse-green 2s infinite;
        }
        .whatsapp-float:hover {
            transform: scale(1.1);
            box-shadow: 0 10px 25px rgba(37, 211, 102, 0.6);
            animation: none; /* Stop pulsing on hover */
        }
        .whatsapp-float svg {
            fill: white;
            width: 38px;
            height: 38px;
        }
        
        /* Notification Dot */
        .whatsapp-float::after {
            content: '1';
            position: absolute;
            top: 2px;
            right: 2px;
            background-color: #ff3b30;
            color: white;
            font-size: 10px;
            font-weight: bold;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        @keyframes pulse-green {
            0% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            }
            70% {
                box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
