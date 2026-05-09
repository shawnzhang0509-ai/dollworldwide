import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from '@/components/SectionHeader';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Silicone Head + TPE Body',
    desc: 'This is the value sweet spot: realistic silicone-head detail with a soft TPE body, priced for buyers who want the best deal in NZ.',
  },
  {
    title: '$999 Clear Price',
    desc: 'All current models are $999. No inflated luxury markup, no confusing price ladder, just the strongest ready-stock price we can offer.',
  },
  {
    title: 'NZ Ready Stock',
    desc: 'No 4-week overseas wait. No customs risk. Already here in Auckland. Same-day pickup or next-day delivery nationwide.',
  },
  {
    title: 'Real Media Before You Buy',
    desc: 'Ask for current photos, short videos, Trade Me links, or private Auckland viewing so you can compare actual models before ordering.',
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
          heading="$999 Ready Stock with the Right Materials."
          subtext="The offer is simple: silicone head, TPE body, realistic look and feel, real media, Trade Me proof, and Auckland stock at a price that is hard to beat."
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
