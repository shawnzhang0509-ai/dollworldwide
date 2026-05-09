import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeaderProps {
  label: string;
  heading: string;
  subtext?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ label, heading, subtext, centered = false, light = false }: SectionHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current || reduced) return;

    const elements = containerRef.current.querySelectorAll('.animate-item');

    gsap.set(elements, { opacity: 0, y: 30 });

    const tween = gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    return () => { tween.kill(); };
  }, [reduced]);

  return (
    <div
      ref={containerRef}
      className={`mb-16 ${centered ? 'text-center flex flex-col items-center' : ''}`}
    >
      <span className={`animate-item text-label text-gold block mb-4 ${light ? 'text-gold-light' : ''}`}>
        {label}
      </span>
      <div className={`animate-item w-[60px] h-[1px] bg-gold mb-6 ${centered ? 'mx-auto' : ''}`} />
      <h2 className={`animate-item text-display-h2 text-cream-100 ${light ? 'text-white' : ''}`}>
        {heading}
      </h2>
      {subtext && (
        <p className={`animate-item text-body-large text-cream-200 mt-6 max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtext}
        </p>
      )}
    </div>
  );
}
