import type { CSSProperties } from 'react';
import { projects } from '@/lib/constants';
import { ProjectCard } from './ProjectCard';
import { SectionHeader } from './SectionHeader';

export function Projects() {
  return (
    <section id="projects" className="section projects-section" data-reveal="section">
      <div className="section-container">
        <SectionHeader number="04" title="Projects" titlePt="Projetos" />

        <p className="projects-intro" data-reveal="up" data-text-en="Selected projects combining software engineering, automation, and digital product design." data-text-pt="Projetos selecionados que combinam engenharia de software, automação e design de produtos digitais.">
          Selected projects combining software engineering, automation, and digital product design.
        </p>

        <div className="projects-carousel" aria-label="Featured projects carousel" data-reveal="up" style={{ '--reveal-delay': '120ms' } as CSSProperties}>
          <div className="projects-track">
            {projects.map((project, index) => <ProjectCard key={project.title} project={project} revealDelay={`${index * 80}ms`} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
