import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TradeMeProofCard } from '@/components/TradeMeProofCard';
import { TradeMeSoldSummary } from '@/components/TradeMeSoldSummary';
import { trademeSaleProofs } from '@/data/trademeProofs';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const featuredProofs = trademeSaleProofs.slice(0, 3);
const moreProofs = trademeSaleProofs.slice(3);

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
            Real sales from our Trade Me seller account — recent sold listings and confirmation details below.
          </p>
        </div>

        <div className="proof-item">
          <TradeMeSoldSummary />
        </div>

        <p className="proof-item mb-6 text-center font-body text-sm text-cream-400">
          Sale confirmation details
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {featuredProofs.map((proof) => (
            <div key={proof.id} className="proof-item">
              <TradeMeProofCard proof={proof} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[860px] mx-auto">
          {moreProofs.map((proof) => (
            <div key={proof.id} className="proof-item">
              <TradeMeProofCard proof={proof} />
            </div>
          ))}
        </div>

        <div className="mt-12 bg-noir-600 border border-gold/15 p-8 md:p-12 text-center">
          <p className="font-display text-4xl md:text-5xl text-gold mb-2">$15,000+</p>
          <p className="font-body text-lg text-cream-200 mb-1">Total sales this quarter on Trade Me</p>
          <p className="font-body text-sm text-cream-300">100% positive feedback · Auckland based · Ships nationwide</p>
        </div>
      </div>
    </section>
  );
}
