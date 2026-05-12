'use client';

import { RefObject, useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useInViewOnce<T extends Element>(ref: RefObject<T | null>, options?: IntersectionObserverInit) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const element = ref.current;
    if (!element || isInView) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options ?? { threshold: 0.35 });

    observer.observe(element);

    return () => observer.disconnect();
  }, [isInView, options, prefersReducedMotion, ref]);

  return { isInView, prefersReducedMotion };
}
