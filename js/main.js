const AppState = {
    currentLang: 'en',
    currentTheme: 'dark',
    currentSection: 'home',
    isMenuOpen: false,
    isReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
};

document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    loadPreferences();
    setLanguage(AppState.currentLang);
    setTheme(AppState.currentTheme);
    initLanguage();
    initTheme();
    initNavigation();
    initMobileMenu();
    initFormHandlers();
    generateParticles();
}

function loadPreferences() {
    const savedLang = localStorage.getItem('portfolio-lang');
    const savedTheme = localStorage.getItem('portfolio-theme');

    if (savedLang === 'en' || savedLang === 'pt') {
        AppState.currentLang = savedLang;
    }

    if (savedTheme === 'dark' || savedTheme === 'light') {
        AppState.currentTheme = savedTheme;
    }
}

function initLanguage() {
    document.getElementById('langToggle')?.addEventListener('click', toggleLanguage);
}

function toggleLanguage() {
    const newLang = AppState.currentLang === 'en' ? 'pt' : 'en';
    setLanguage(newLang);
    localStorage.setItem('portfolio-lang', newLang);
}

function setLanguage(lang) {
    AppState.currentLang = lang;

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', 'ltr');
    document.body.setAttribute('data-lang', lang);
    document.body.setAttribute('data-dir', 'ltr');

    updateLanguageUI();
}

function updateLanguageUI() {
    document.querySelectorAll('[data-text-en], [data-text-pt]').forEach((element) => {
        const nextText = element.getAttribute(`data-text-${AppState.currentLang}`) || element.getAttribute('data-text-en');
        if (nextText) {
            element.textContent = nextText;
        }
    });

    document.querySelectorAll('[data-placeholder-en], [data-placeholder-pt]').forEach((element) => {
        const nextPlaceholder = element.getAttribute(`data-placeholder-${AppState.currentLang}`) || element.getAttribute('data-placeholder-en');
        if (nextPlaceholder) {
            element.placeholder = nextPlaceholder;
        }
    });

    const langToggle = document.getElementById('langToggle');
    const langText = langToggle?.querySelector('.lang-text');
    const nextLang = AppState.currentLang === 'en' ? 'Portuguese' : 'English';

    if (langText) {
        langText.textContent = AppState.currentLang === 'en' ? 'PT' : 'EN';
    }

    langToggle?.setAttribute('aria-label', `Switch language to ${nextLang}`);
}

function initTheme() {
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const newTheme = AppState.currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
}

function setTheme(theme) {
    AppState.currentTheme = theme;
    document.body.setAttribute('data-theme', theme);
    updateThemeUI();
}

function updateThemeUI() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle?.querySelector('i');
    const nextTheme = AppState.currentTheme === 'dark' ? 'light' : 'dark';

    if (icon) {
        icon.className = AppState.currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    themeToggle?.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
}

function initNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', handleAnchorClick);
    });

    window.addEventListener('scroll', throttleWithRaf(updateScrollState), { passive: true });
    updateScrollState();
}

function handleAnchorClick(event) {
    const link = event.currentTarget;
    const targetId = link.getAttribute('href');

    if (!targetId || targetId === '#') return;

    const targetSection = document.querySelector(targetId);
    if (!targetSection) return;

    event.preventDefault();
    scrollToSection(targetSection);
    setActiveSection(targetSection.id);

    if (AppState.isMenuOpen) {
        closeMobileMenu();
    }
}

function scrollToSection(section) {
    const headerHeight = document.querySelector('.main-header')?.offsetHeight || 0;
    const targetPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;

    if (AppState.isReducedMotion) {
        window.scrollTo(0, targetPosition);
        return;
    }

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

function updateScrollState() {
    updateHeaderOnScroll();
    updateActiveSectionOnScroll();
}

function updateHeaderOnScroll() {
    document.querySelector('.main-header')?.classList.toggle('scrolled', window.scrollY > 50);
}

function updateActiveSectionOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const headerHeight = document.querySelector('.main-header')?.offsetHeight || 0;
    const scrollPosition = window.scrollY + headerHeight + 80;
    let activeSection = AppState.currentSection;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSection = section.id;
        }
    });

    if (activeSection !== AppState.currentSection) {
        setActiveSection(activeSection);
    }
}

function setActiveSection(sectionId) {
    AppState.currentSection = sectionId;

    document.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
    });
}

function initMobileMenu() {
    document.getElementById('menuToggle')?.addEventListener('click', toggleMobileMenu);

    document.addEventListener('click', (event) => {
        const navMenu = document.getElementById('navMenu');
        const menuToggle = document.getElementById('menuToggle');

        if (
            AppState.isMenuOpen &&
            navMenu &&
            menuToggle &&
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    setMobileMenuState(!AppState.isMenuOpen);
}

function closeMobileMenu() {
    setMobileMenuState(false);
}

function setMobileMenuState(isOpen) {
    AppState.isMenuOpen = isOpen;

    document.getElementById('navMenu')?.classList.toggle('active', isOpen);

    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    }
}

function initFormHandlers() {
    document.getElementById('contactForm')?.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const status = document.getElementById('formStatus');

    const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        message
    ].join('\n');

    const mailto = new URL('mailto:rafaelfreitas1009@gmail.com');
    mailto.searchParams.set('subject', subject || 'Portfolio contact');
    mailto.searchParams.set('body', body);

    if (status) {
        status.textContent = AppState.currentLang === 'pt'
            ? 'Seu app de e-mail será aberto para enviar a mensagem.'
            : 'Your email app will open so you can send the message.';
    }

    window.location.href = mailto.toString();
}

function generateParticles() {
    const particlesContainer = document.getElementById('particles');

    if (!particlesContainer || AppState.isReducedMotion || window.innerWidth < 768) {
        return;
    }

    const codeSymbols = ['{', '}', '[', ']', '(', ')', '<', '>', '/', '*', '=', '+', '-', ';', ':'];
    const particleCount = window.innerWidth < 1024 ? 10 : 16;

    particlesContainer.textContent = '';

    for (let index = 0; index < particleCount; index += 1) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${10 + Math.random() * 10}s`;
        particlesContainer.appendChild(particle);
    }
}

function throttleWithRaf(callback) {
    let ticking = false;

    return () => {
        if (ticking) return;

        window.requestAnimationFrame(() => {
            callback();
            ticking = false;
        });

        ticking = true;
    };
}
