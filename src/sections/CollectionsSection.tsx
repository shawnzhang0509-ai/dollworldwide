import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from '@/components/SectionHeader';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    name: 'Signature Silicone',
    label: 'READY STOCK HIGHLIGHT',
    description: 'Premium full-silicone models selected from current Auckland stock.',
    image: '/images/collection-divine.jpg',
    link: '#contact',
  },
  {
    name: 'Velvet',
    label: 'THE VELVET COLLECTION',
    description: 'Soft, sensual, and irresistibly touchable. Premium TPE craftsmanship.',
    image: '/images/collection-velvet.jpg',
    link: '#contact',
  },
  {
    name: 'Luxor',
    label: 'THE LUXOR COLLECTION',
    description: 'Bold, opulent, and commanding presence. For those who desire the extraordinary.',
    image: '/images/collection-luxor.jpg',
    link: '#contact',
  },
];

export function CollectionsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!cardsRef.current || reduced) return;

    const cards = cardsRef.current.querySelectorAll('.collection-card');

    gsap.set(cards, { opacity: 0, y: 60, scale: 1.02 });

    const tween = gsap.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Card image parallax
    cards.forEach((card) => {
      const img = card.querySelector('.card-img');
      if (img) {
        gsap.to(img, {
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    });

    return () => { tween.kill(); };
  }, [reduced]);

  return (
    <section id="collections" className="bg-noir-700 py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader
          label="STOCK HIGHLIGHTS"
          heading="Different Looks, One Trusted NZ Seller"
          subtext="Use this area for themed groups, seasonal arrivals, or best-selling styles when more media is available."
          centered
        />

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className="collection-card group relative bg-noir-600 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="card-img w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-600"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 50%)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-label text-gold block mb-2">{collection.label}</span>
                <h3 className="font-display text-display-h3 text-cream-100 mb-2">{collection.name}</h3>
                <p className="font-body text-sm text-cream-200 mb-4">{collection.description}</p>
                <a
                  href={collection.link}
                  className="font-body text-sm text-gold hover:text-gold-light transition-colors duration-300"
                >
                  Explore {collection.name} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
