'use client';

import type { CSSProperties } from 'react';
import { useRef } from 'react';
import { useAnimatedNumber } from '@/hooks/useAnimatedNumber';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { skillCategories } from '@/lib/constants';
import { SectionHeader } from './SectionHeader';

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const { isInView, prefersReducedMotion } = useInViewOnce(ref, { threshold: 0.18 });

  return (
    <section id="skills" className="section skills-section" data-reveal="section">
      <div className="section-container">
        <SectionHeader number="02" title="Skills" titlePt="Habilidades" />

        <div className="skills-grid" ref={ref}>
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={category.title} data-reveal="card" style={{ '--reveal-delay': `${index * 100}ms` } as CSSProperties}>
              <h3 className="category-title" data-text-en={category.title} data-text-pt={category.titlePt}>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill) => <SkillItem key={skill.name} name={skill.name} percent={skill.percent} isInView={isInView} prefersReducedMotion={prefersReducedMotion} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type SkillItemProps = {
  name: string;
  percent: number;
  isInView: boolean;
  prefersReducedMotion: boolean;
};

function SkillItem({ name, percent, isInView, prefersReducedMotion }: SkillItemProps) {
  const animatedPercent = useAnimatedNumber(percent, {
    enabled: isInView,
    prefersReducedMotion,
    duration: 1000
  });

  return (
    <div className="skill-item" data-skill={name} data-percent={percent}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{animatedPercent}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: isInView ? `${percent}%` : '0%' }} />
      </div>
    </div>
  );
}
