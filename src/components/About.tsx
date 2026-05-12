import type { CSSProperties } from 'react';
import { SectionHeader } from './SectionHeader';
import { StatCard } from './StatCard';

export function About() {
  return (
    <section id="about" className="section about-section" data-reveal="section">
      <div className="section-container">
        <SectionHeader number="01" title="About Me" titlePt="Sobre mim" />

        <div className="about-content">
          <div className="about-text-wrapper" data-reveal="left">
            <div className="about-intro">
              <p className="about-text" data-text-en="I'm a Full Stack Developer with over 3 years of experience building modern web applications and mobile solutions. I work with JavaScript technologies, React, Node.js, and user interfaces designed for clarity and usability." data-text-pt="Sou Desenvolvedor Full Stack com mais de 3 anos de experiência na construção de aplicações web modernas e soluções mobile. Trabalho com tecnologias JavaScript, React, Node.js e interfaces pensadas para clareza e usabilidade.">
                I&apos;m a Full Stack Developer with over 3 years of experience building modern web applications and mobile solutions. I work with JavaScript technologies, React, Node.js, and user interfaces designed for clarity and usability.
              </p>
            </div>

            <div className="about-stats">
              <StatCard count={20} label="Projects" labelPt="Projetos" revealDelay="80ms" />
              <StatCard count={3} label="Years of Experience" labelPt="Anos de Experiência" revealDelay="160ms" />
              <StatCard count={30} label="Satisfied Clients" labelPt="Clientes satisfeitos" revealDelay="240ms" />
            </div>
          </div>

          <div className="about-image-wrapper" data-reveal="right" style={{ '--reveal-delay': '160ms' } as CSSProperties}>
            <div className="about-image-container">
              <div className="code-block">
                <div className="code-line">
                  <span className="code-keyword">const</span> <span className="code-variable">developer</span> <span className="code-operator">=</span> <span className="code-brace">{'{'}</span>
                </div>
                <div className="code-line indent">
                  <span className="code-property">name</span><span className="code-operator">:</span> <span className="code-string">&apos;Rafael Freitas&apos;</span><span className="code-comma">,</span>
                </div>
                <div className="code-line indent">
                  <span className="code-property">skills</span><span className="code-operator">:</span> <span className="code-bracket">[</span><span className="code-string">&apos;React&apos;</span><span className="code-comma">,</span> <span className="code-string">&apos;Node.js&apos;</span><span className="code-comma">,</span> <span className="code-string">&apos;TypeScript&apos;</span><span className="code-bracket">]</span><span className="code-comma">,</span>
                </div>
                <div className="code-line indent">
                  <span className="code-property">passion</span><span className="code-operator">:</span> <span className="code-string">&apos;Coding&apos;</span>
                </div>
                <div className="code-line">
                  <span className="code-brace">{'}'}</span><span className="code-semicolon">;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
