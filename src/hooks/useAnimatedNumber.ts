'use client';

import { useEffect, useState } from 'react';

type UseAnimatedNumberOptions = {
  duration?: number;
  enabled: boolean;
  prefersReducedMotion?: boolean;
};

export function useAnimatedNumber(target: number, { duration = 900, enabled, prefersReducedMotion = false }: UseAnimatedNumberOptions) {
  const [value, setValue] = useState(prefersReducedMotion ? target : 0);

  useEffect(() => {
    if (!enabled) return;

    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(target * easedProgress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [duration, enabled, prefersReducedMotion, target]);

  return value;
}
