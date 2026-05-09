import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SecondaryButton } from '@/components/SecondaryButton';
import { PrimaryButton } from '@/components/PrimaryButton';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function ContactCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || reduced) return;
    const items = sectionRef.current.querySelectorAll('.cta-animate');
    gsap.set(items, { opacity: 0, y: 30 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, [reduced]);

  return (
    <section id="contact" ref={sectionRef} className="relative bg-noir-900 py-[120px] overflow-hidden">
      <div className="absolute inset-0 gold-glow pointer-events-none" />

      <div className="relative z-10 max-w-[700px] mx-auto px-6 md:px-10 text-center">
        <span className="cta-animate text-label text-gold block mb-4">
          READY TO ORDER?
        </span>
        <div className="cta-animate w-[60px] h-[1px] bg-gold mx-auto mb-6" />
        <h2 className="cta-animate text-display-h2 text-cream-100 mb-6">
          $999 Ready Stock. Real-Life Viewing. Private Pickup.
        </h2>
        <p className="cta-animate text-body-large text-cream-200 mb-10">
          Ask for the latest photos, short videos, Trade Me links, or a private Auckland viewing. We can help you compare silicone-head + TPE-body models and choose what is actually available now.
        </p>

        <div className="cta-animate flex flex-wrap justify-center gap-4 mb-8">
          <SecondaryButton href="tel:02885146884">
            Call 028 8514 6884
          </SecondaryButton>
          <PrimaryButton href="mailto:dollworldwide2023@gmail.com">
            Email Us
          </PrimaryButton>
        </div>

        <p className="cta-animate font-body text-sm text-cream-300">
          Auckland pickup available · Nationwide discreet shipping · Trade Me verified seller
        </p>
      </div>
    </section>
  );
}
