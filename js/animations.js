const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.addEventListener('load', () => {
    window.setTimeout(initLoaderAnimation, 100);
});

function inView(element, callback, options = {}) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callback(entry);

                if (options.once !== false) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        threshold: options.amount || 0.1,
        rootMargin: options.rootMargin || '0px'
    });

    observer.observe(element);
    return () => observer.unobserve(element);
}

function initLoaderAnimation() {
    const loader = document.getElementById('loader');
    const loaderPercent = document.getElementById('loaderPercent');

    if (!loader || !loaderPercent) return;

    if (prefersReducedMotion) {
        loaderPercent.textContent = '100%';
        loader.classList.add('hidden');
        initPageAnimations();
        return;
    }

    let progress = 0;
    const progressInterval = window.setInterval(() => {
        progress += Math.random() * 15;

        if (progress >= 100) {
            progress = 100;
            window.clearInterval(progressInterval);

            window.setTimeout(() => {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: loader,
                        opacity: [1, 0],
                        duration: 500,
                        easing: 'easeInOutQuad',
                        complete: () => {
                            loader.classList.add('hidden');
                            initPageAnimations();
                        }
                    });
                } else {
                    loader.classList.add('hidden');
                    initPageAnimations();
                }
            }, 300);
        }

        loaderPercent.textContent = `${Math.floor(progress)}%`;
    }, 100);
}

function initPageAnimations() {
    if (prefersReducedMotion) {
        document.querySelectorAll('.section, .fade-in').forEach((element) => element.classList.add('visible'));
        return;
    }

    window.setTimeout(() => {
        initHeroAnimations();
        initSkillAnimations();
        initTimelineAnimations();
        initProjectAnimations();
        initScrollAnimations();
        initContactAnimations();
        animateStats();
        initParallax();
    }, 300);
}

function initHeroAnimations() {
    if (typeof anime === 'undefined') return;

    const heroName = document.getElementById('heroName');
    const nameValue = heroName?.querySelector('.name-value');

    if (nameValue) {
        const originalText = nameValue.textContent;
        nameValue.textContent = '';

        anime({
            targets: { value: 0 },
            value: originalText.length,
            duration: 1500,
            delay: 500,
            easing: 'easeInOutQuad',
            update: (animation) => {
                const length = Math.floor(animation.animatables[0].target.value);
                nameValue.textContent = originalText.substring(0, length);
            },
            complete: () => {
                const cursor = document.createElement('span');
                cursor.className = 'name-cursor';
                cursor.textContent = '|';
                nameValue.appendChild(cursor);
                window.setTimeout(() => cursor.remove(), 2000);
            }
        });
    }

    animateTargets('.hero-title', { opacity: [0, 1], translateX: [-30, 0], delay: 800 });
    animateTargets('.hero-description', { opacity: [0, 1], translateY: [20, 0], delay: 1200 });
    animateTargets('.hero-buttons .btn', { opacity: [0, 1], scale: [0.8, 1], delay: anime.stagger(100, { start: 1500 }), easing: 'easeOutBack' });
    animateTargets('.hero-social .social-icon', { opacity: [0, 1], scale: [0, 1], rotate: [180, 0], delay: anime.stagger(100, { start: 2000 }), easing: 'easeOutBack' });
    animateTargets('#profileImage', { opacity: [0, 1], scale: [0.8, 1], rotate: [180, 0], delay: 1000, duration: 1500, easing: 'easeOutElastic(1, .8)' });
    animateTargets('.floating-badge', { opacity: [0, 1], scale: [0, 1], delay: anime.stagger(200, { start: 1500 }), easing: 'easeOutBack' });
}

function animateTargets(selectorOrElement, props) {
    const targets = typeof selectorOrElement === 'string'
        ? document.querySelectorAll(selectorOrElement)
        : selectorOrElement;

    if (!targets || typeof anime === 'undefined') return;

    anime({
        targets,
        duration: props.duration || 1000,
        easing: props.easing || 'easeOutExpo',
        ...props
    });
}

function initSkillAnimations() {
    const skillItems = document.querySelectorAll('#skills .skill-item');

    skillItems.forEach((skillItem) => {
        inView(skillItem, () => {
            const progressBar = skillItem.querySelector('.skill-progress');
            const percentElement = skillItem.querySelector('.skill-percent');
            const percent = Number.parseInt(skillItem.getAttribute('data-percent') || '0', 10);

            if (progressBar && typeof anime !== 'undefined') {
                anime({
                    targets: progressBar,
                    width: ['0%', `${percent}%`],
                    duration: 2000,
                    easing: 'easeOutExpo',
                    delay: 300
                });

                anime({
                    targets: { value: 0 },
                    value: percent,
                    duration: 2000,
                    easing: 'easeOutExpo',
                    delay: 300,
                    update: (animation) => {
                        if (percentElement) {
                            percentElement.textContent = `${Math.floor(animation.animatables[0].target.value)}%`;
                        }
                    }
                });
            }
        }, { amount: 0.5 });
    });
}

function initTimelineAnimations() {
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        inView(item, () => {
            animateTargets(item, {
                opacity: [0, 1],
                translateX: [-50, 0],
                delay: index * 120,
                duration: 900
            });
        }, { amount: 0.3 });
    });
}

function initProjectAnimations() {
    document.querySelectorAll('.project-card').forEach((card, index) => {
        inView(card, () => {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: card,
                    opacity: [0, 1],
                    translateY: [40, 0],
                    scale: [0.95, 1],
                    delay: index * 90,
                    duration: 900,
                    easing: 'easeOutExpo'
                });
            }
        }, { amount: 0.2 });
    });
}

function initScrollAnimations() {
    document.querySelectorAll('.section').forEach((section) => {
        inView(section, () => {
            const sectionHeader = section.querySelector('.section-header');
            if (sectionHeader && typeof anime !== 'undefined') {
                anime({
                    targets: sectionHeader,
                    opacity: [0, 1],
                    translateY: [-20, 0],
                    duration: 600,
                    easing: 'easeOutExpo'
                });
            }
        }, { amount: 0.2 });
    });

    document.querySelectorAll('.project-card, .contact-item').forEach((card, index) => {
        inView(card, () => {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: card,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    delay: index * 30,
                    duration: 500,
                    easing: 'easeOutExpo'
                });
            }
        }, { amount: 0.2 });
    });
}

function animateStats() {
    document.querySelectorAll('.stat-number').forEach((stat) => {
        const target = Number.parseInt(stat.getAttribute('data-count') || '0', 10);

        inView(stat, () => {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: { value: 0 },
                    value: target,
                    duration: 2000,
                    easing: 'easeOutExpo',
                    update: (animation) => {
                        stat.textContent = Math.floor(animation.animatables[0].target.value);
                    }
                });
            } else {
                stat.textContent = String(target);
            }
        }, { amount: 0.5 });
    });
}

function initContactAnimations() {
    document.querySelectorAll('.contact-item').forEach((item) => {
        item.addEventListener('mouseenter', () => {
            if (typeof anime !== 'undefined') {
                anime({ targets: item, scale: [1, 1.02], duration: 200, easing: 'easeOutQuad' });
            }
        });

        item.addEventListener('mouseleave', () => {
            if (typeof anime !== 'undefined') {
                anime({ targets: item, scale: [1.02, 1], duration: 200, easing: 'easeOutQuad' });
            }
        });
    });
}

function initParallax() {
    const profileImage = document.getElementById('profileImage');
    const gridBg = document.querySelector('.code-grid-bg');

    if (!profileImage && !gridBg) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (ticking) return;

        window.requestAnimationFrame(() => {
            const scrolled = window.scrollY;

            if (profileImage && window.innerWidth >= 768) {
                profileImage.style.transform = `translateY(${Math.min(scrolled * 0.3, 100)}px)`;
            }

            if (gridBg) {
                gridBg.style.transform = `translateY(${scrolled * 0.2}px)`;
            }

            ticking = false;
        });

        ticking = true;
    }, { passive: true });
}
