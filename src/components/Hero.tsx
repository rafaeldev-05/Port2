import Image from 'next/image';
import { socialLinks } from '@/lib/constants';
import { FloatingBadge } from './FloatingBadge';

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="code-grid-bg" />
        <div className="floating-particles" id="particles" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="greeting-text" data-text-en="Hello, I'm" data-text-pt="Olá, eu sou">Hello, I&apos;m</span>
            <span className="greeting-cursor">|</span>
          </div>

          <h1 className="hero-name" id="heroName">
            <span className="name-prefix">const</span>
            <span className="name-operator">=</span>
            <span className="name-value">Software Engineer</span>
            <span className="name-suffix">;</span>
          </h1>

          <div className="hero-title">
            <span className="title-prefix">{'//'}</span>
            <span className="title-text" data-text-en="Full Stack Developer & UI/UX Designer" data-text-pt="Desenvolvedor Full Stack & UI/UX Designer">
              Full Stack Developer & UI/UX Designer
            </span>
          </div>

          <p className="hero-description" data-text-en="Software Engineer creating modern, reliable digital experiences with current technologies." data-text-pt="Engenheiro de Software criando experiências digitais modernas e confiáveis com tecnologias atuais.">
            Software Engineer creating modern, reliable digital experiences with current technologies.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <span data-text-en="Get in Touch" data-text-pt="Entrar em contato">Get in Touch</span>
              <i className="fas fa-arrow-right" />
            </a>
            <a href="#projects" className="btn btn-secondary">
              <span data-text-en="View Projects" data-text-pt="Ver projetos">View Projects</span>
              <i className="fas fa-code" />
            </a>
          </div>

          <div className="hero-social">
            <a target="_blank" href={socialLinks.github} rel="noopener noreferrer" className="social-icon" title="GitHub" aria-label="GitHub profile">
              <i className="fab fa-github" />
            </a>
            <a target="_blank" href={socialLinks.linkedin} rel="noopener noreferrer" className="social-icon" title="LinkedIn" aria-label="LinkedIn profile">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href={socialLinks.email} className="social-icon" title="Email" aria-label="Send email to Rafael Freitas">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <div className="profile-image-glow" />
            <div className="profile-image-frame">
              <div className="profile-image" id="profileImage">
                <Image src="/assets/profile-rafael.webp" alt="Rafael Freitas, Software Engineer" className="profile-photo" width={400} height={400} priority />
              </div>
            </div>
            <FloatingBadge className="badge-1" icon="fab fa-react" title="React" libs="Redux, Router, Hooks" />
            <FloatingBadge className="badge-2" icon="fab fa-node-js" title="Node.js" libs="Express, Socket.io, MongoDB" />
            <FloatingBadge className="badge-3" icon="fab fa-js" title="JavaScript" libs="ES6+, TypeScript, jQuery" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-text" data-text-en="Scroll Down" data-text-pt="Role para baixo">Scroll Down</span>
      </div>
    </section>
  );
}
