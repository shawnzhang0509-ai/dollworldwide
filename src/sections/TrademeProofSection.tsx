import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const proofs = [
  { image: '/images/trademe-1.jpg', label: 'Sold Jan 2026 · $2,559' },
  { image: '/images/trademe-2.jpg', label: 'Sold Dec 2025 · $2,559' },
  { image: '/images/trademe-3.jpg', label: 'Sold Nov 2025 · $2,559' },
  { image: '/images/trademe-4.jpg', label: '$15,000+ sold this quarter' },
];

export function TrademeProofSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || reduced) return;
    const items = sectionRef.current.querySelectorAll('.proof-item');
    gsap.set(items, { opacity: 0, y: 40, scale: 1.02 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, [reduced]);

  return (
    <section id="proof" ref={sectionRef} className="bg-noir-900 py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <span className="text-label text-gold block mb-4">REAL SALES. REAL KIWIS. REAL DELIVERY.</span>
          <div className="w-[60px] h-[1px] bg-gold mx-auto mb-6" />
          <h2 className="text-display-h2 text-cream-100 mb-4">Sold on Trade Me. Trusted by NZ Buyers.</h2>
          <p className="text-body-large text-cream-200 max-w-2xl mx-auto">
            We do not just talk. We sell. Kiwis buy from Doll Worldwide on Trade Me, view current listings, and receive discreet delivery from Auckland stock. Here is the proof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofs.map((p, i) => (
            <div key={i} className="proof-item bg-noir-600 overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.label}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <span className="font-body text-sm text-gold font-semibold">{p.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-noir-600 p-8 md:p-12 text-center">
          <p className="font-display text-4xl md:text-5xl text-gold mb-2">$15,000+</p>
          <p className="font-body text-lg text-cream-200 mb-1">Total sales this quarter on Trade Me</p>
          <p className="font-body text-sm text-cream-300">100% positive feedback · Auckland based · Ships nationwide</p>
        </div>
      </div>
    </section>
  );
}
