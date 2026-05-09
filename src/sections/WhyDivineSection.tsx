import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from '@/components/SectionHeader';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'All Body Silicone',
    desc: 'Not silicone-head-TPE-body knock-offs. Full platinum silicone from head to toe — the real deal from QianYou factory.',
  },
  {
    title: 'Hand-Inspected in NZ',
    desc: 'Every unit is unboxed and inspected in our Auckland warehouse before it ever reaches you. Zero defects shipped.',
  },
  {
    title: 'NZ Ready Stock',
    desc: 'No 4-week overseas wait. No customs risk. Already here in Auckland. Same-day pickup or next-day delivery nationwide.',
  },
  {
    title: 'QianYou Factory Direct',
    desc: 'We source directly from QianYou — one of China\'s top silicone doll manufacturers. No middlemen. Best price guaranteed.',
  },
];

export function WhyDivineSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!cardsRef.current || reduced) return;
    const cards = cardsRef.current.querySelectorAll('.feature-card');
    gsap.set(cards, { opacity: 0, y: 50 });
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, [reduced]);

  return (
    <section id="why-us" className="bg-noir-900 py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader
          label="WHY DOLL WORLDWIDE"
          heading="Real Stock. Real Photos. Clear Choices."
          subtext="The site should feel like a trusted NZ stockroom, not a single product line. We show current models, factory details, real media, Trade Me proof, and simple ways to inspect or order."
          centered
        />

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {features.map((f) => (
            <div key={f.title} className="feature-card bg-noir-600 p-8 border-t-2 border-gold">
              <h3 className="font-display text-display-h4 text-cream-100 mb-3">{f.title}</h3>
              <p className="font-body text-sm text-cream-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
