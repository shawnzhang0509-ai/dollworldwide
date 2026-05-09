import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  scale?: number;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current || reduced) return;

    const {
      y = 40,
      duration = 0.8,
      delay = 0,
      stagger = 0.15,
      start = 'top 85%',
      scale,
    } = options;

    const children = ref.current.children;
    const targets = children.length > 1 ? Array.from(children) : ref.current;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      y,
    };
    if (scale) {
      fromVars.scale = scale;
    }

    gsap.set(targets, fromVars);

    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      delay,
      stagger: children.length > 1 ? stagger : 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      tween.kill();
    };
  }, [reduced, options.y, options.duration, options.delay, options.stagger, options.start, options.scale]);

  return ref;
}
