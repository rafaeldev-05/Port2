const navItems = [
  { href: '#home', section: 'home', icon: 'fas fa-home', en: 'Home', pt: 'Home' },
  { href: '#about', section: 'about', icon: 'fas fa-user', en: 'About', pt: 'Sobre' },
  { href: '#skills', section: 'skills', icon: 'fas fa-code', en: 'Skills', pt: 'Habilidades' },
  { href: '#experience', section: 'experience', icon: 'fas fa-briefcase', en: 'Experience', pt: 'Experiência' },
  { href: '#projects', section: 'projects', icon: 'fas fa-rocket', en: 'Projects', pt: 'Projetos' },
  { href: '#services', section: 'services', icon: 'fas fa-screwdriver-wrench', en: 'Services', pt: 'Serviços' },
  { href: '#faq', section: 'faq', icon: 'fas fa-circle-question', en: 'FAQ', pt: 'Dúvidas' }
];

export function Header() {
  return (
    <header className="main-header" id="header">
      <nav className="nav-container">
        <div className="nav-brand">
          <div className="brand-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">Dev</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
        </div>

        <div className="nav-menu" id="navMenu">
          {navItems.map((item) => (
            <a key={item.section} href={item.href} className={`nav-link${item.section === 'home' ? ' active' : ''}`} data-section={item.section}>
              <i className={item.icon} />
              <span className="nav-text" data-text-en={item.en} data-text-pt={item.pt}>
                {item.en}
              </span>
            </a>
          ))}
        </div>

        <div className="nav-controls">
          <button className="lang-toggle" id="langToggle" type="button" title="Toggle Language" aria-label="Switch language to Portuguese">
            <i className="fas fa-language" />
            <span className="lang-text">PT</span>
          </button>
          <button className="theme-toggle" id="themeToggle" type="button" title="Toggle Theme" aria-label="Switch to light theme">
            <i className="fas fa-moon" />
          </button>
          <button className="menu-toggle" id="menuToggle" type="button" title="Toggle Menu" aria-label="Open navigation menu" aria-controls="navMenu" aria-expanded="false">
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
