import { socialLinks } from '@/lib/constants';
import { SectionHeader } from './SectionHeader';

const serviceCards = [
  {
    title: 'Websites',
    titlePt: 'Websites',
    description:
      'Modern, responsive, and strategic websites built to strengthen your digital presence and turn visitors into opportunities.',
    descriptionPt:
      'Criação de sites modernos, responsivos e estratégicos para fortalecer sua presença digital e transformar visitantes em oportunidades.',
    icon: 'fas fa-globe',
    items: [
      { text: 'Landing Pages', textPt: 'Landing Pages' },
      { text: 'Institutional Websites', textPt: 'Sites institucionais' },
      { text: 'Professional Portfolios', textPt: 'Portfólios profissionais' },
      { text: 'Conversion Pages', textPt: 'Páginas de conversão' }
    ]
  },
  {
    title: 'Web Systems',
    titlePt: 'Sistemas Web',
    description:
      'Custom systems, administrative platforms, and solutions for process automation.',
    descriptionPt:
      'Desenvolvimento de sistemas personalizados, plataformas administrativas e soluções para automação de processos.',
    icon: 'fas fa-layer-group',
    items: [
      { text: 'Custom systems', textPt: 'Sistemas sob medida' },
      { text: 'Dashboards', textPt: 'Dashboards' },
      { text: 'Admin panels', textPt: 'Painéis administrativos' },
      { text: 'Integrations & automations', textPt: 'Integrações e automações' }
    ]
  },
  {
    title: 'Mobile Apps',
    titlePt: 'Aplicativos Mobile',
    description:
      'Android and iOS apps focused on usability, performance, and user experience.',
    descriptionPt:
      'Criação de aplicativos para Android e iOS com foco em usabilidade, performance e experiência do usuário.',
    icon: 'fas fa-mobile-screen-button',
    items: [
      { text: 'Android', textPt: 'Android' },
      { text: 'iOS', textPt: 'iOS' },
      { text: 'Cross-platform apps', textPt: 'Apps multiplataforma' },
      { text: 'Custom mobile solutions', textPt: 'Soluções mobile personalizadas' }
    ]
  }
];

const serviceChips = [
  { text: 'Custom development', textPt: 'Desenvolvimento sob medida', icon: 'fas fa-sliders' },
  { text: 'Responsive design', textPt: 'Design responsivo', icon: 'fas fa-display' },
  { text: 'Integrations & automations', textPt: 'Integrações e automações', icon: 'fas fa-diagram-project' },
  { text: 'Performance & scalability', textPt: 'Performance e escalabilidade', icon: 'fas fa-gauge-high' },
  { text: 'Free quote', textPt: 'Orçamento gratuito', icon: 'fas fa-comment-dollar' },
  { text: 'Android and iOS', textPt: 'Android e iOS', icon: 'fas fa-mobile-screen-button' }
];

const commercialServices = [
  {
    title: 'Institutional Websites',
    titlePt: 'Sites institucionais',
    description: 'Professional, personalized websites for companies that want a solid and trustworthy online presence.',
    descriptionPt: 'Sites profissionais e personalizados para empresas que desejam ter uma presença online sólida e confiável.'
  },
  {
    title: 'Optimized Landing Pages',
    titlePt: 'Landing pages otimizadas',
    description: 'High-conversion pages for campaigns and lead capture, designed to drive measurable results.',
    descriptionPt: 'Páginas de alta conversão para campanhas e captação de leads, projetadas para impulsionar resultados.'
  },
  {
    title: 'Online Stores / E-commerce',
    titlePt: 'Lojas virtuais / E-commerce',
    description: 'Complete online sales platforms with modern features and a polished shopping experience.',
    descriptionPt: 'Plataformas completas para venda online, com funcionalidades modernas e uma experiência de compra bem cuidada.'
  },
  {
    title: 'Custom Systems',
    titlePt: 'Sistemas personalizados',
    description: 'Tailored solutions for the specific needs of your business, with efficiency, automation, and innovation.',
    descriptionPt: 'Soluções sob medida para atender às necessidades específicas do seu negócio, com eficiência, automação e inovação.'
  },
  {
    title: 'Apps',
    titlePt: 'Aplicativos',
    description: 'Modern and functional Android and iOS apps designed to engage users.',
    descriptionPt: 'Desenvolvimento de aplicativos modernos e funcionais para Android e iOS, projetados para engajar usuários.'
  }
];

export function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="section-container">
        <SectionHeader number="05" title="Services" titlePt="Serviços" />

        <div className="services-cards">
          {serviceCards.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card-icon">
                <i className={service.icon} />
              </div>
              <h3 data-text-en={service.title} data-text-pt={service.titlePt}>{service.title}</h3>
              <p data-text-en={service.description} data-text-pt={service.descriptionPt}>{service.description}</p>
              <ul className="service-card-list">
                {service.items.map((item) => (
                  <li key={item.text}>
                    <i className="fas fa-check" />
                    <span data-text-en={item.text} data-text-pt={item.textPt}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="services-chips">
          {serviceChips.map((chip) => (
            <div className="service-feature-pill" key={chip.text}>
              <i className={chip.icon} />
              <span data-text-en={chip.text} data-text-pt={chip.textPt}>{chip.text}</span>
            </div>
          ))}
        </div>

        <div className="services-commercial">
          <div className="services-commercial-copy">
            <h3>
              <span data-text-en="Let's build your " data-text-pt="Vamos construir o seu ">Let&apos;s build your </span>
              <span className="services-highlight" data-text-en="digital success" data-text-pt="sucesso digital">digital success</span>
            </h3>
            <p data-text-en="Contact me today and find out how I can help your business grow online. Request a free proposal." data-text-pt="Entre em contato agora e descubra como posso ajudar seu negócio a crescer online. Solicite uma proposta gratuita.">
              Contact me today and find out how I can help your business grow online. Request a free proposal.
            </p>

            <div className="services-budget-card">
              <h4 className="services-budget-title" data-text-en="Request your free quote" data-text-pt="Solicite seu orçamento gratuito">
                Request your free quote
              </h4>
              <p className="services-budget-text" data-text-en="Tell me your idea and I will help you define the best technical path to create your website, system, or app." data-text-pt="Me conte sua ideia e eu ajudo você a definir o melhor caminho técnico para criar seu site, sistema ou aplicativo.">
                Tell me your idea and I will help you define the best technical path to create your website, system, or app.
              </p>
              <ul className="services-budget-list">
                <li>
                  <i className="fas fa-check" />
                  <span data-text-en="Free initial analysis" data-text-pt="Análise inicial sem custo">Free initial analysis</span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span data-text-en="Personalized technical suggestion" data-text-pt="Sugestão técnica personalizada">Personalized technical suggestion</span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span data-text-en="Direct WhatsApp response" data-text-pt="Resposta direta pelo WhatsApp">Direct WhatsApp response</span>
                </li>
              </ul>
              <a
                href={socialLinks.whatsappBudget}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary services-budget-button"
                aria-label="Solicitar orçamento gratuito pelo WhatsApp"
              >
                <span data-text-en="Talk on WhatsApp" data-text-pt="Falar no WhatsApp">Talk on WhatsApp</span>
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          <div className="commercial-services-list">
            {commercialServices.map((service) => (
              <article className="commercial-service-item" key={service.title}>
                <div>
                  <h4 data-text-en={service.title} data-text-pt={service.titlePt}>{service.title}</h4>
                  <p data-text-en={service.description} data-text-pt={service.descriptionPt}>{service.description}</p>
                </div>
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>

        <div className="services-final-cta">
          <div>
            <h3 data-text-en="Need a website, system, or app? Let's talk." data-text-pt="Precisa de um site, sistema ou aplicativo? Vamos conversar.">
              Need a website, system, or app? Let&apos;s talk.
            </h3>
            <p data-text-en="Tell me what you want to build and I will help you design the best technical path." data-text-pt="Me conte o que você quer construir e eu ajudo a desenhar o melhor caminho técnico.">
              Tell me what you want to build and I will help you design the best technical path.
            </p>
          </div>
          <a
            href={socialLinks.whatsappBudget}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary services-cta-button"
            aria-label="Solicitar orçamento gratuito pelo WhatsApp"
          >
            <span data-text-en="Request a Quote" data-text-pt="Solicitar orçamento">Request a Quote</span>
            <i className="fab fa-whatsapp" />
          </a>
        </div>
      </div>
    </section>
  );
}
