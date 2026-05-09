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
  const pointsRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current) return;

    // Ken Burns
    if (!reduced && bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.05,
        duration: 20,
        ease: 'none',
        yoyo: true,
        repeat: -1,
      });
    }

    // Headline entrance
    if (headlineRef.current) {
      const items = headlineRef.current.querySelectorAll('.hero-animate');
      gsap.set(items, { opacity: 0, y: 30 });
      gsap.timeline({ delay: 0.3 })
        .to(items[0], { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
        .to(items[1], { opacity: 1, scaleX: 1, duration: 0.8, ease: 'power2.out' }, '-=0.3')
        .to(items[2], { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' }, '-=0.4')
        .to(items[3], { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .to(items[4], { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
        .to(items[5], { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');
    }

    // ====== 5-CARD SEQUENTIAL EXPLOSION ======
    if (pointsRef.current) {
      const cards = pointsRef.current.querySelectorAll('.sp-card');
      const icons = pointsRef.current.querySelectorAll('.sp-icon');

      // Initial: invisible, below, tiny
      gsap.set(cards, { opacity: 0, y: 60, scale: 0.4 });
      gsap.set(icons, { scale: 0 });

      // Each card gets its own mini-timeline, staggered by 0.18s
      cards.forEach((card, i) => {
        const icon = icons[i];
        const color = sellingPoints[i].color;

        // Build per-card timeline with absolute delay (sequential)
        const cardTl = gsap.timeline({ delay: 1.2 + i * 0.18 });

        // Step 1: COLOR FLASH — background briefly lights up
        cardTl.fromTo(card,
          { backgroundColor: 'rgba(10,10,10,0.9)' },
          { backgroundColor: color, duration: 0.08, ease: 'power4.out' }
        )
        // Step 2: POP OUT — card appears + explodes upward
        .to(card, {
          opacity: 1,
          y: 0,
          scale: 1.12,
          duration: 0.3,
          ease: 'back.out(2.5)',
        }, '-=0.02')
        // Step 3: Flash fades back to dark
        .to(card, {
          backgroundColor: 'rgba(10,10,10,0.8)',
          duration: 0.15,
          ease: 'power2.out',
        }, '-=0.15')
        // Step 4: SETTLE — elastic bounce to final size
        .to(card, {
          scale: 1,
          duration: 0.4,
          ease: 'elastic.out(1, 0.5)',
        }, '-=0.05')
        // Step 5: ICON bounces in
        .to(icon, {
          scale: 1,
          duration: 0.35,
          ease: 'back.out(3)',
        }, '-=0.3');
      });
    }

    // Scroll fade-out
    if (headlineRef.current) {
      gsap.to(headlineRef.current.children, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    if (pointsRef.current) {
      gsap.to(pointsRef.current, {
        opacity: 0,
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '60% top',
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === sectionRef.current) st.kill();
      });
    };
  }, [reduced]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] flex flex-col justify-end overflow-hidden pb-6 md:pb-10"
    >
      {/* Background */}
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

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-10">
        {/* Headline */}
        <div ref={headlineRef} className="mb-6 md:mb-8">
          <span className="hero-animate text-label text-gold block mb-3 opacity-0">
            NZ READY STOCK — AUCKLAND BASED
          </span>
          <div
            className="hero-animate w-[60px] h-[1px] bg-gold mb-5 origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
          <h1 className="hero-animate text-display-h1 text-cream-100 mb-4 max-w-[650px] opacity-0">
            Silicone Head + TPE Body. $999 Auckland Ready Stock.
          </h1>
          <p className="hero-animate text-body-large text-cream-200 mb-4 max-w-[550px] opacity-0">
            Doll Worldwide focuses on the strongest value: realistic silicone-head detail, soft TPE body, real photos, Trade Me proof, and discreet NZ delivery at the best price.
          </p>
          <p className="hero-animate text-label text-cream-200/90 mb-6 max-w-[620px] opacity-0">
            Why us: $999 clear price · Real media before you buy · Auckland pickup or discreet nationwide shipping
          </p>
          <div className="hero-animate flex flex-wrap gap-3 opacity-0">
            <SecondaryButton href="#product">See Ready Stock</SecondaryButton>
            <PrimaryButton href="tel:02885146884">Call 028 8514 6884</PrimaryButton>
          </div>
        </div>

        {/* ====== 5 SEQUENTIAL EXPLOSIVE CARDS ====== */}
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
              {/* Colored top accent line */}
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
