import type { CSSProperties } from 'react';
import { timelineItems } from '@/lib/constants';
import { SectionHeader } from './SectionHeader';

export function Experience() {
  return (
    <section id="experience" className="section experience-section" data-reveal="section">
      <div className="section-container">
        <SectionHeader number="03" title="Experience" titlePt="Experiência" />

        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div className="timeline-item" key={`${item.year}-${item.title}`} data-reveal="item" style={{ '--reveal-delay': `${index * 120}ms` } as CSSProperties}>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-year">{item.year}</div>
                  {item.badge ? <div className="timeline-badge">{item.badge}</div> : null}
                </div>
                <h3 className="timeline-title" data-text-en={item.title} data-text-pt={item.titlePt}>{item.title}</h3>
                <div className="timeline-company">
                  <i className="fas fa-building" />
                  {item.company}
                </div>
                <p className="timeline-description" data-text-en={item.description} data-text-pt={item.descriptionPt}>
                  {item.description}
                </p>
                <div className="timeline-achievements">
                  {item.achievements.map((achievement) => (
                    <div className="achievement-item" key={achievement.text}>
                      <i className="fas fa-check-circle" />
                      <span data-text-en={achievement.text} data-text-pt={achievement.textPt}>{achievement.text}</span>
                    </div>
                  ))}
                </div>
                <div className="timeline-tags">
                  {item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
