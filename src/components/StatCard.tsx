'use client';

import type { CSSProperties } from 'react';
import { useRef } from 'react';
import { useAnimatedNumber } from '@/hooks/useAnimatedNumber';
import { useInViewOnce } from '@/hooks/useInViewOnce';

type StatCardProps = {
  count: number;
  label: string;
  labelPt: string;
  revealDelay?: string;
};

export function StatCard({ count, label, labelPt, revealDelay }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isInView, prefersReducedMotion } = useInViewOnce(ref);
  const animatedCount = useAnimatedNumber(count, {
    enabled: isInView,
    prefersReducedMotion,
    duration: 1000
  });

  return (
    <div className="stat-item" ref={ref} data-reveal="card" style={{ '--reveal-delay': revealDelay } as CSSProperties}>
      <div className="stat-number" data-count={count}>{animatedCount}</div>
      <div className="stat-label" data-text-en={label} data-text-pt={labelPt}>{label}</div>
    </div>
  );
}
