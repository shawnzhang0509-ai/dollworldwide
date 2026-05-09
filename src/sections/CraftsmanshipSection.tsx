import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 500, suffix: '+', label: 'Hours of Craftsmanship' },
  { value: 50, suffix: '+', label: 'Customizable Features' },
  { value: 3, suffix: '-5', label: 'Days Local Delivery' },
];

export function CraftsmanshipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || reduced) return;

    // Text reveal
    const textElements = sectionRef.current.querySelectorAll('.craft-animate');
    gsap.set(textElements, { opacity: 0, y: 40 });
    gsap.to(textElements, {
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

    // Count-up animation
    if (statsRef.current) {
      const statElements = statsRef.current.querySelectorAll('.stat-number');
      statElements.forEach((el) => {
        const target = parseInt((el as HTMLElement).dataset.value || '0');
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            (el as HTMLElement).textContent = Math.round(obj.val).toString();
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === sectionRef.current || st.trigger === statsRef.current) {
          st.kill();
        }
      });
    };
  }, [reduced]);

  return (
    <section
      id="craft"
      ref={sectionRef}
      className="relative py-[120px] overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/about-workshop.jpg)' }}
      >
        <div className="absolute inset-0 bg-noir-900/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-10 text-center">
        <span className="craft-animate text-label text-gold block mb-4">
          THE CRAFT
        </span>
        <div className="craft-animate w-[60px] h-[1px] bg-gold mx-auto mb-6" />
        <h2 className="craft-animate text-display-h2 text-cream-100 mb-6">
          Where Art Meets Intimacy
        </h2>
        <p className="craft-animate text-body-large text-cream-200 mb-16">
          Every Doll Worldwide creation begins in our partner workshops, where master artisans sculpt, mold, and paint each piece by hand. From the internal skeleton engineering to the final makeup application, hundreds of hours of meticulous work go into ensuring your companion is as lifelike as humanly possible. We use only medical-grade TPE and platinum silicone — materials chosen for their safety, durability, and remarkably realistic skin-like texture.
        </p>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-baseline justify-center">
                <span
                  className="stat-number font-display text-5xl text-gold"
                  data-value={stat.value}
                >
                  {reduced ? stat.value : '0'}
                </span>
                <span className="font-display text-5xl text-gold">{stat.suffix}</span>
              </div>
              <p className="font-body text-sm text-cream-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
