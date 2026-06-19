import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PrimaryButton } from '@/components/PrimaryButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Truck, Package, DollarSign, ShieldCheck, BadgeCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const sellingPoints = [
  {
    icon: Package,
    title: 'NZ READY STOCK',
    subtitle: 'Auckland warehouse. Ships today.',
    color: '#D4AF37',
  },
  {
    icon: Truck,
    title: 'MULTIPLE MODELS',
    subtitle: 'Photos, specs, and viewing available.',
    color: '#C8503C',
  },
  {
    icon: DollarSign,
    title: '$999',
    subtitle: 'Best price in NZ ready stock.',
    color: '#50A078',
  },
  {
    icon: ShieldCheck,
    title: 'REAL MEDIA',
    subtitle: 'Actual photos and videos available.',
    color: '#8C64B4',
  },
  {
    icon: BadgeCheck,
    title: 'TRADE ME VERIFIED',
    subtitle: '100% positive. $15K+ sold.',
    color: '#3C82B4',
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current) return;

    const scrollTriggers: ScrollTrigger[] = [];

    if (reduced) {
      const visible = sectionRef.current.querySelectorAll('.hero-scroll-fade, .sp-card, .sp-icon');
      gsap.set(visible, { opacity: 1, y: 0, scale: 1, clearProps: 'transform' });
      if (ctaRef.current) {
        gsap.set(ctaRef.current, { opacity: 1, y: 0, clearProps: 'transform' });
      }
      if (pointsRef.current) {
        gsap.set(pointsRef.current, { opacity: 1, y: 0 });
      }
      return;
    }

    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.05,
        duration: 20,
        ease: 'none',
        yoyo: true,
        repeat: -1,
      });
    }

    if (headlineRef.current) {
      const textItems = headlineRef.current.querySelectorAll('.hero-scroll-fade');
      gsap.set(textItems, { opacity: 0, y: 30 });
      gsap.to(textItems, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.3,
      });
    }

    if (ctaRef.current) {
      gsap.set(ctaRef.current, { opacity: 0, y: 20 });
      gsap.to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.75,
      });
    }

    if (pointsRef.current) {
      const cards = pointsRef.current.querySelectorAll('.sp-card');
      const icons = pointsRef.current.querySelectorAll('.sp-icon');

      gsap.set(cards, { opacity: 0, y: 60, scale: 0.4 });
      gsap.set(icons, { scale: 0 });

      cards.forEach((card, i) => {
        const icon = icons[i];
        const color = sellingPoints[i].color;

        const cardTl = gsap.timeline({ delay: 0.95 + i * 0.18 });

        cardTl.fromTo(card,
          { backgroundColor: 'rgba(10,10,10,0.9)' },
          { backgroundColor: color, duration: 0.08, ease: 'power4.out' },
        )
          .to(card, {
            opacity: 1,
            y: 0,
            scale: 1.12,
            duration: 0.3,
            ease: 'back.out(2.5)',
          }, '-=0.02')
          .to(card, {
            backgroundColor: 'rgba(10,10,10,0.8)',
            duration: 0.15,
            ease: 'power2.out',
          }, '-=0.15')
          .to(card, {
            scale: 1,
            duration: 0.4,
            ease: 'elastic.out(1, 0.5)',
          }, '-=0.05')
          .to(icon, {
            scale: 1,
            duration: 0.35,
            ease: 'back.out(3)',
          }, '-=0.3');
      });
    }

    if (headlineRef.current) {
      const fadeItems = headlineRef.current.querySelectorAll('.hero-scroll-fade');
      const textFade = gsap.fromTo(
        fadeItems,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -24,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: '18% top',
            end: '72% top',
            scrub: true,
          },
        },
      );
      scrollTriggers.push(textFade.scrollTrigger!);
    }

    if (pointsRef.current) {
      const pointsFade = gsap.fromTo(
        pointsRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: '25% top',
            end: '70% top',
            scrub: true,
          },
        },
      );
      scrollTriggers.push(pointsFade.scrollTrigger!);
    }

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 1600);

    return () => {
      window.clearTimeout(refreshTimer);
      scrollTriggers.forEach((st) => st.kill());
    };
  }, [reduced]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] flex flex-col justify-end overflow-hidden pb-6 md:pb-10"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{ transformOrigin: 'center center' }}
      >
        <img
          src="/images/hero-bg.jpg"
          alt="Doll Worldwide Auckland ready stock"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.15) 35%, rgba(10,10,10,0.5) 65%, rgba(10,10,10,0.92) 90%, rgba(10,10,10,0.98) 100%)',
          }}
        />
        {!reduced && <div className="absolute inset-0 shimmer-overlay" />}
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-10">
        <div ref={headlineRef} className="mb-5 md:mb-7">
          <h1 className="hero-scroll-fade font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-none tracking-wide text-gold mb-5 md:mb-6">
            DOLL WORLDWIDE
          </h1>
          <div ref={ctaRef} className="flex flex-wrap gap-3">
            <SecondaryButton href="#product">See Ready Stock</SecondaryButton>
            <PrimaryButton href="tel:02885146884">Call 028 8514 6884</PrimaryButton>
          </div>
        </div>

        <div
          ref={pointsRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4"
        >
          {sellingPoints.map((sp, i) => (
            <div
              key={i}
              className="sp-card relative border p-4 md:p-5 text-center overflow-hidden group hover:border-gold transition-all duration-300"
              style={{
                backgroundColor: 'rgba(10,10,10,0.9)',
                borderColor: `${sp.color}40`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ backgroundColor: sp.color }}
              />

              <div className="relative z-10">
                <sp.icon
                  className="sp-icon w-8 h-8 md:w-9 md:h-9 mx-auto mb-2 group-hover:scale-125 transition-transform duration-300"
                  style={{ color: sp.color }}
                  strokeWidth={1.5}
                />
                <h3 className="font-accent text-[12px] md:text-[13px] font-semibold tracking-[0.1em] uppercase text-cream-100 leading-tight mb-1">
                  {sp.title}
                </h3>
                <p className="font-body text-[11px] md:text-xs text-cream-300 leading-snug">
                  {sp.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
