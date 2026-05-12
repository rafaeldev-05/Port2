import type { Project } from '@/types';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-image">
        <div className="project-overlay">
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.href} target="_blank" href={link.href} rel="noopener noreferrer" className="project-link" title={link.label} aria-label={link.label}>
                <i className={link.icon} />
              </a>
            ))}
          </div>
        </div>
        <div className="project-placeholder">
          <i className={project.icon} />
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title" data-text-en={project.title} data-text-pt={project.titlePt}>{project.title}</h3>
        <p className="project-description" data-text-en={project.description} data-text-pt={project.descriptionPt}>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </div>
    </div>
  );
}
