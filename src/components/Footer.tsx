import { socialLinks } from '@/lib/constants';

const footerSocialLinks = [
  {
    href: socialLinks.tiktok,
    label: 'Acessar TikTok de Rafael Freitas',
    title: 'TikTok',
    icon: 'fab fa-tiktok',
    className: 'footer-social-link footer-social-link-tiktok'
  },
  {
    href: socialLinks.instagram,
    label: 'Acessar Instagram de Rafael Freitas',
    title: 'Instagram',
    icon: 'fab fa-instagram',
    className: 'footer-social-link footer-social-link-instagram'
  },
  {
    href: socialLinks.youtube,
    label: 'Acessar YouTube de Rafael Freitas',
    title: 'YouTube',
    icon: 'fab fa-youtube',
    className: 'footer-social-link footer-social-link-youtube'
  },
  {
    href: socialLinks.linkedin,
    label: 'Acessar LinkedIn de Rafael Freitas',
    title: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    className: 'footer-social-link footer-social-link-linkedin'
  },
  {
    href: socialLinks.github,
    label: 'Acessar GitHub de Rafael Freitas',
    title: 'GitHub',
    icon: 'fab fa-github',
    className: 'footer-social-link footer-social-link-github'
  }
];

export function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-text-wrapper">
            <p className="footer-text">
              <span className="footer-copyright">&copy; 2026 Rafael Freitas</span>
              <span className="footer-divider" aria-hidden="true">/</span>
              <span className="footer-built" data-text-en="Built with passion and code" data-text-pt="Desenvolvido com dedicação e código">Built with passion and code</span>
            </p>
            <p className="footer-description" data-text-en="Software Engineer creating digital solutions for websites, systems, and apps." data-text-pt="Software Engineer criando soluções digitais para web, sistemas e aplicativos.">
              Software Engineer creating digital solutions for websites, systems, and apps.
            </p>
            <p className="footer-author">
              <span className="footer-by-text" data-text-en="by" data-text-pt="por">by</span>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="footer-author-link">
                <i className="fas fa-code" />
                <span>Rafael</span>
              </a>
            </p>
          </div>

          <div className="footer-social-area" aria-label="Redes sociais">
            <p className="footer-social-title" data-text-en="Follow me" data-text-pt="Me acompanhe">Follow me</p>
            <div className="footer-social">
              {footerSocialLinks.map((link) => (
                <a key={link.title} target="_blank" href={link.href} rel="noopener noreferrer" className={link.className} title={link.title} aria-label={link.label}>
                  <i className={link.icon} />
                </a>
              ))}
              <a href={socialLinks.email} className="footer-social-link footer-social-link-email" title="E-mail" aria-label="Enviar e-mail para Rafael Freitas">
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
