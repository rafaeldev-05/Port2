'use client';

import { useEffect } from 'react';

type AppState = {
  currentLang: 'en' | 'pt';
  currentTheme: 'dark' | 'light';
  currentSection: string;
  isMenuOpen: boolean;
  isReducedMotion: boolean;
};

const HERO_PROFILE_SPIN_VARIANT: 'default' | 'clockwise-2d' | 'clockwise' | 'counterclockwise' = 'clockwise-2d';

export function ClientEffects() {
  useEffect(() => {
    const state: AppState = {
      currentLang: 'en',
      currentTheme: 'dark',
      currentSection: 'home',
      isMenuOpen: false,
      isReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    };

    loadPreferences(state);
    setLanguage(state, state.currentLang);
    setTheme(state, state.currentTheme);
    initLanguage(state);
    initTheme(state);
    initNavigation(state);
    initMobileMenu(state);
    const contactSubmitHandler = (event: Event) => {
      void handleFormSubmit(event, state);
    };

    initFormHandlers(contactSubmitHandler);
    initProjectsCarousel();
    generateParticles(state);
    initLoader();
    initBasicAnimations(state);

    return () => {
      document.getElementById('contactForm')?.removeEventListener('submit', contactSubmitHandler);
    };
  }, []);

  return null;
}

function loadPreferences(state: AppState) {
  const savedLang = localStorage.getItem('portfolio-lang');
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedLang === 'en' || savedLang === 'pt') state.currentLang = savedLang;
  if (savedTheme === 'dark' || savedTheme === 'light') state.currentTheme = savedTheme;
}

function initLanguage(state: AppState) {
  document.getElementById('langToggle')?.addEventListener('click', () => {
    const nextLang = state.currentLang === 'en' ? 'pt' : 'en';
    setLanguage(state, nextLang);
    localStorage.setItem('portfolio-lang', nextLang);
  });
}

function setLanguage(state: AppState, lang: 'en' | 'pt') {
  state.currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', 'ltr');
  document.body.setAttribute('data-lang', lang);
  document.body.setAttribute('data-dir', 'ltr');

  document.querySelectorAll<HTMLElement>('[data-text-en], [data-text-pt]').forEach((element) => {
    const nextText = element.getAttribute(`data-text-${lang}`) || element.getAttribute('data-text-en');
    if (nextText) element.textContent = nextText;
  });

  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-placeholder-en], [data-placeholder-pt]').forEach((element) => {
    const nextPlaceholder = element.getAttribute(`data-placeholder-${lang}`) || element.getAttribute('data-placeholder-en');
    if (nextPlaceholder) element.placeholder = nextPlaceholder;
  });

  const langToggle = document.getElementById('langToggle');
  const langText = langToggle?.querySelector('.lang-text');
  const nextLang = lang === 'en' ? 'Portuguese' : 'English';

  if (langText) langText.textContent = lang === 'en' ? 'PT' : 'EN';
  langToggle?.setAttribute('aria-label', `Switch language to ${nextLang}`);
}

function initTheme(state: AppState) {
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const nextTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(state, nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  });
}

function setTheme(state: AppState, theme: 'dark' | 'light') {
  state.currentTheme = theme;
  document.body.setAttribute('data-theme', theme);

  const themeToggle = document.getElementById('themeToggle');
  const icon = themeToggle?.querySelector('i');
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  themeToggle?.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
}

function initNavigation(state: AppState) {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetSection = document.querySelector<HTMLElement>(targetId);
      if (!targetSection) return;

      event.preventDefault();
      const headerHeight = document.querySelector<HTMLElement>('.main-header')?.offsetHeight || 0;
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top: targetPosition, behavior: state.isReducedMotion ? 'auto' : 'smooth' });
      setActiveSection(state, targetSection.id);

      if (state.isMenuOpen) setMobileMenuState(state, false);
    });
  });

  window.addEventListener('scroll', throttleWithRaf(() => updateScrollState(state)), { passive: true });
  updateScrollState(state);
}

function updateScrollState(state: AppState) {
  document.querySelector('.main-header')?.classList.toggle('scrolled', window.scrollY > 50);

  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  const headerHeight = document.querySelector<HTMLElement>('.main-header')?.offsetHeight || 0;
  const scrollPosition = window.scrollY + headerHeight + 80;
  let activeSection = state.currentSection;

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
      activeSection = section.id;
    }
  });

  if (activeSection !== state.currentSection) setActiveSection(state, activeSection);
}

function setActiveSection(state: AppState, sectionId: string) {
  state.currentSection = sectionId;
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
  });
}

function initMobileMenu(state: AppState) {
  document.getElementById('menuToggle')?.addEventListener('click', () => setMobileMenuState(state, !state.isMenuOpen));

  document.addEventListener('click', (event) => {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    const target = event.target as Node;

    if (state.isMenuOpen && navMenu && menuToggle && !navMenu.contains(target) && !menuToggle.contains(target)) {
      setMobileMenuState(state, false);
    }
  });
}

function setMobileMenuState(state: AppState, isOpen: boolean) {
  state.isMenuOpen = isOpen;
  document.getElementById('navMenu')?.classList.toggle('active', isOpen);

  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  }
}

function initFormHandlers(handler: EventListener) {
  document.getElementById('contactForm')?.addEventListener('submit', handler);
}

async function handleFormSubmit(event: Event, state: AppState) {
  event.preventDefault();

  const form = event.currentTarget as HTMLFormElement;
  const status = document.getElementById('formStatus');
  const submitButton = form.querySelector<HTMLButtonElement>('.btn-submit');
  const submitText = submitButton?.querySelector('span');
  const defaultSubmitText = submitText?.textContent || 'Send Message';

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const formData = new FormData(form);
  const payload = {
    name: String(formData.get('name') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    subject: String(formData.get('subject') || '').trim(),
    message: String(formData.get('message') || '').trim()
  };

  if (status) {
    status.className = 'form-status';
    status.textContent = state.currentLang === 'pt' ? 'Enviando...' : 'Sending...';
  }

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.setAttribute('aria-busy', 'true');
  }

  if (submitText) submitText.textContent = state.currentLang === 'pt' ? 'Enviando...' : 'Sending...';

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) throw new Error(result.message || 'Could not send message');

    form.reset();
    if (status) {
      status.className = 'form-status success';
      status.textContent = state.currentLang === 'pt'
        ? 'Mensagem enviada com sucesso. Responderei em breve.'
        : 'Message sent successfully. I will get back to you soon.';
    }
  } catch {
    if (status) {
      status.className = 'form-status error';
      status.textContent = state.currentLang === 'pt'
        ? 'Não foi possível enviar sua mensagem agora. Tente novamente ou fale comigo pelo WhatsApp.'
        : 'Could not send your message right now. Please try again or contact me on WhatsApp.';
    }
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-busy');
    }
    if (submitText) submitText.textContent = defaultSubmitText;
  }
}

function generateParticles(state: AppState) {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer || state.isReducedMotion || window.innerWidth < 768) return;

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

function initProjectsCarousel() {
  const track = document.querySelector<HTMLElement>('.projects-track');
  if (!track || track.dataset.cloned === 'true') return;

  Array.from(track.querySelectorAll('.project-card')).forEach((card) => {
    const clone = card.cloneNode(true) as HTMLElement;
    clone.setAttribute('aria-hidden', 'true');
    clone.dataset.carouselClone = 'true';
    clone.querySelectorAll('a, button').forEach((element) => element.setAttribute('tabindex', '-1'));
    track.appendChild(clone);
  });

  track.dataset.cloned = 'true';
}

function initLoader() {
  const loader = document.getElementById('loader');
  const percentage = document.getElementById('loaderPercent');
  let progress = 0;

  const interval = window.setInterval(() => {
    progress += 10;
    if (percentage) percentage.textContent = `${Math.min(progress, 100)}%`;
    if (progress >= 100) {
      window.clearInterval(interval);
      window.setTimeout(() => {
        loader?.classList.add('hidden');
        if (HERO_PROFILE_SPIN_VARIANT !== 'default') {
          document.body.classList.add(`hero-profile-spin-${HERO_PROFILE_SPIN_VARIANT}`);
        }
        window.setTimeout(() => document.body.classList.add('hero-profile-ready'), 520);
      }, 300);
    }
  }, 80);
}

function initBasicAnimations(state: AppState) {
  if (state.isReducedMotion) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll('.skill-category, .timeline-item, .project-card, .faq-item, .faq-cta, .section-header').forEach((element) => observer.observe(element));
}

function throttleWithRaf(callback: () => void) {
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
