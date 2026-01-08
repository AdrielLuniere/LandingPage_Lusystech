import React from 'react';

const Company = () => {
    // Features array kept for visual layout, but text can be static or removed if desired. 
    // Keeping them as "Values" icons for now or just visual candy.
    const features = [
        {
          title: 'Confiança',
          description: 'Segurança e estabilidade em primeiro lugar.',
          icon: '🛡️'
        },
        {
          title: 'Inovação',
          description: 'Sempre à frente das tendências do mercado.',
          icon: '💡'
        },
        {
          title: 'Profissionalismo',
          description: 'Excelência e dedicação em cada projeto.',
          icon: '🤝'
        }
    ];

  return (
    <section id="company" className="company-section">
      <div className="container">
        <h2 className="section-title">Empresa</h2>
        
        <div className="company-details">
            {/* Sobre */}
            <div className="detail-block glass-card">
                <div className="detail-content">
                    <h3>Sobre a Lusystech</h3>
                    <p>
                        A Lusystech foi criada com o intuito de fazer com que pequenos, médios e grandes negócios alcancem seus objetivos por meio de soluções tecnológicas e inovadoras na qual temos pleno conhecimento e maneiras diferenciadas de tratar os projetos a qual somos submetidas. Somos uma organização voltada a desenvolver softwares para automatizar de maneira significativa as atividades de empresas que possuem grande potencial, porém, possuem dificuldades de gerenciar suas atividades e assim ter resultados mais eficazes.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Baseado nisso, cruzamos as necessidades de nossos clientes com as estratégias de negócio, gerando um produto de alta performance, usabilidade e alinhado a proposta de valor de seu negócio.
                    </p>
                </div>
            </div>

            {/* Propósito */}
            <div className="detail-block glass-card reversed">
                <div className="detail-content">
                    <h3>Propósito</h3>
                    <p>
                        A missão da Lusystech é fornecer soluções inovadoras de alta qualidade através da tecnologia que atendam às necessidades dos nossos clientes. Nós buscamos constantemente aprimorar nossos produtos e serviços, proporcionando experiências excepcionais para nossos usuários, ajudando-os a alcançar seus objetivos.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Na Lusystech, nossa visão é ser uma das principais empresas de tecnologia e desenvolvimento de soluções computacionais reconhecida pela excelência em soluções inovadoras e de alta qualidade que ajudam nossos clientes a alcançar seus objetivos. Queremos ser a primeira escolha de nossos clientes e parceiros quando se tratar de tecnologia e inovação, oferecendo serviços personalizados e de alto valor agregado.
                    </p>
                </div>
            </div>

            {/* Valores (Bottom Left in image) */}
            <div className="detail-block glass-card">
                <div className="detail-content">
                    <h3>Nossos Valores</h3>
                    <p>
                        Na Lusystech, valorizamos a excelência, a inovação, a ética e a responsabilidade. Desenvolvendo soluções para melhorar o futuro, mas respeitando o passado. Nós valorizamos a inovação e estamos sempre buscando maneiras de melhorar nossas soluções e atender melhor nossos clientes.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                         Nós acreditamos que a ética é fundamental para a construção de relacionamentos de longo prazo com nossos clientes e parceiros, e que a responsabilidade social é um aspecto essencial do nosso papel como empresa líder no mercado de tecnologia.
                    </p>
                </div>
            </div>
        </div>
      </div>

      <style>{`
        .company-section {
            background-color: var(--color-bg-primary);
            position: relative;
            padding: 5rem 0;
        }
        .section-title {
            text-align: center;
            font-size: 2rem;
            letter-spacing: 2px;
            color: var(--color-text-primary);
            margin-bottom: 4rem;
            text-transform: uppercase;
            font-weight: 800;
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 5rem;
        }
        .feature-card {
            padding: 3rem 2rem;
            text-align: center;
            transition: var(--transition);
        }
        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px -20px rgba(100, 255, 218, 0.4);
            border-color: rgba(100, 255, 218, 0.3);
        }
        .feature-icon-wrapper {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            background: linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(0, 112, 243, 0.1));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(100, 255, 218, 0.2);
        }
        .feature-icon {
            font-size: 2.5rem;
        }
        .feature-card h3 {
            margin-bottom: 1rem;
            font-size: 1.5rem;
            color: var(--color-text-primary);
        }
        .feature-card p {
            color: var(--color-text-secondary);
            font-size: 1rem;
            line-height: 1.6;
        }

        /* Detailed Sections Styles */
        .company-details {
            display: flex;
            flex-direction: column;
            gap: 3rem;
        }
        .detail-block {
            padding: 3rem;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            border-left: 4px solid var(--color-accent);
        }
        .detail-block.reversed {
            border-left: none;
            border-right: 4px solid var(--color-accent-purple);
            text-align: right;
        }
        .detail-content h3 {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            background: var(--gradient-main);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
        }
        .detail-content p {
            color: var(--color-text-secondary);
            font-size: 1.1rem;
            line-height: 1.8;
            max-width: 900px;
        }
      `}</style>
    </section>
  );
};


export default Company;
