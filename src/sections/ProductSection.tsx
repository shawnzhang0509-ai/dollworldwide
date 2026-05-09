import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SecondaryButton } from '@/components/SecondaryButton';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { buildTradeMeR18AdultSearchUrl } from '@/lib/trademe';

gsap.registerPlugin(ScrollTrigger);

const CONTACT_EMAIL = 'dollworldwide2023@gmail.com';

const realLifeViews = [
  'See naked full body',
  'See clothed full body',
  'See head',
];

interface Product {
  name: string;
  image: string;
  price: string;
  tag: string;
  specs: string;
  tradeMeSku?: string;
  tradeMeSearchCode?: string;
}

const products: Product[] = [
  {
    name: 'Aria',
    image: '/images/divine-aria.jpg',
    price: '$999',
    tag: 'BEST SELLER',
    specs: '165cm · D-Cup · Silicone Head · TPE Body',
    tradeMeSku: '01',
    tradeMeSearchCode: 'DWWD01',
  },
  {
    name: 'Nova',
    image: '/images/divine-nova.jpg',
    price: '$999',
    tag: 'ELITE',
    specs: '148cm · C-Cup · Silicone Head · TPE Body',
  },
  {
    name: 'Celeste',
    image: '/images/divine-celeste.jpg',
    price: '$999',
    tag: 'NEW ARRIVAL',
    specs: '165cm · E-Cup · Silicone Head · TPE Body',
  },
];

function buildRealLifeRequestUrl(productName: string, viewType: string) {
  const subject = `${viewType} for ${productName}`;
  const body = `Hi Doll Worldwide,\n\nPlease send me the real-life media for ${productName}: ${viewType}.\n\nThanks.`;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildTradeMeRequestUrl(productName: string) {
  const subject = `Trade Me link for ${productName}`;
  const body = `Hi Doll Worldwide,\n\nPlease send me the current Trade Me listing for ${productName}.\n\nThanks.`;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

interface ProductCardContentProps {
  product: Product;
  tradeMeUrl?: string;
  realLifeOpen: boolean;
  onToggleRealLife: () => void;
}

function ProductCardContent({
  product,
  tradeMeUrl,
  realLifeOpen,
  onToggleRealLife,
}: ProductCardContentProps) {
  return (
    <>
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="text-label text-xs bg-gold text-noir-900 px-3 py-1">{product.tag}</span>
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 40%)',
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-display-h4 text-cream-100 mb-1">{product.name}</h3>
        <p className="font-body text-sm text-cream-300 mb-3">{product.specs}</p>
        <div className="flex items-center justify-between">
          <span className="font-display text-3xl text-gold">{product.price}</span>
          <span className="font-body text-xs text-cream-300">NZD</span>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-3">
          <a
            href={tradeMeUrl ?? buildTradeMeRequestUrl(product.name)}
            target={tradeMeUrl ? '_blank' : undefined}
            rel={tradeMeUrl ? 'noopener noreferrer' : undefined}
            className="inline-flex w-full items-center justify-center bg-gold px-5 py-3 text-button text-noir-900 transition-all duration-300 hover:bg-gold-light"
          >
            Trade Me
          </a>
          <button
            type="button"
            onClick={onToggleRealLife}
            aria-expanded={realLifeOpen}
            className="inline-flex w-full items-center justify-center border border-gold px-5 py-3 text-button text-gold transition-all duration-300 hover:bg-gold hover:text-noir-900"
          >
            See me in real life
          </button>
        </div>
        {realLifeOpen && (
          <div className="mt-4 border border-gold/30 bg-noir-900/60 p-3">
            <p className="font-body text-xs text-cream-300 mb-3">
              Choose what you want to see before buying:
            </p>
            <div className="grid gap-2">
              {realLifeViews.map((view) => (
                <a
                  key={view}
                  href={buildRealLifeRequestUrl(product.name, view)}
                  className="flex items-center justify-between border border-cream-300/15 px-4 py-2.5 font-body text-sm text-cream-100 transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  <span>{view}</span>
                  <span className="text-gold">→</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export function ProductSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [openRealLifeProduct, setOpenRealLifeProduct] = useState<string | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current || reduced) return;
    const header = headerRef.current;
    const cards = cardsRef.current.querySelectorAll('.product-card');
    const images = cardsRef.current.querySelectorAll('.product-card img');

    gsap.set(header, { opacity: 0, y: 36 });
    gsap.set(cards, {
      opacity: 0,
      y: 110,
      scale: 0.88,
      rotateX: 14,
      filter: 'blur(12px)',
      transformOrigin: 'center bottom',
    });
    gsap.set(images, { scale: 1.12 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 76%',
        toggleActions: 'play none none none',
      },
    });

    tl.to(header, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: 'power3.out',
    })
      .to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 1.15,
        stagger: 0.18,
        ease: 'expo.out',
      }, '-=0.25')
      .to(images, {
        scale: 1,
        duration: 1.25,
        stagger: 0.18,
        ease: 'power3.out',
      }, '<');
  }, [reduced]);

  return (
    <section id="product" ref={sectionRef} className="relative bg-noir-700 py-[110px] md:py-[120px] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[280px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_68%)] pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-label text-gold block mb-4">FEATURED AUCKLAND STOCK</span>
          <div className="w-[60px] h-[1px] bg-gold mx-auto mb-6" />
          <h2 className="text-display-h2 text-cream-100 mb-4">$999 Models Ready to View or Ship.</h2>
          <p className="text-body-large text-cream-200 max-w-2xl mx-auto">
            Browse selected silicone-head + TPE-body models from current stock. Each card can link to the matching Trade Me listing or search code, so renewed listings can still be found when the title marker stays the same.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
          {products.map((p) => {
            const tradeMeUrl = p.tradeMeSearchCode
              ? buildTradeMeR18AdultSearchUrl(p.tradeMeSearchCode)
              : undefined;

            const realLifeOpen = openRealLifeProduct === p.name;

            return (
              <div key={p.name} className="product-card bg-noir-600 overflow-hidden group will-change-transform">
                <ProductCardContent
                  product={p}
                  tradeMeUrl={tradeMeUrl}
                  realLifeOpen={realLifeOpen}
                  onToggleRealLife={() => setOpenRealLifeProduct(realLifeOpen ? null : p.name)}
                />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-sm text-cream-300 mb-4">
            More models and real media are available on request. Call to see the latest photos, videos, and full catalogue.
          </p>
          <SecondaryButton href="tel:02885146884">Call to See Current Stock</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
