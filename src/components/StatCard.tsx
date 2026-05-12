'use client';

import { useRef } from 'react';
import { useAnimatedNumber } from '@/hooks/useAnimatedNumber';
import { useInViewOnce } from '@/hooks/useInViewOnce';

type StatCardProps = {
  count: number;
  label: string;
  labelPt: string;
};

export function StatCard({ count, label, labelPt }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isInView, prefersReducedMotion } = useInViewOnce(ref);
  const animatedCount = useAnimatedNumber(count, {
    enabled: isInView,
    prefersReducedMotion,
    duration: 1000
  });

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number" data-count={count}>{animatedCount}</div>
      <div className="stat-label" data-text-en={label} data-text-pt={labelPt}>{label}</div>
    </div>
  );
}
