import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SecondaryButton } from '@/components/SecondaryButton';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { buildTradeMeR18AdultSearchUrl } from '@/lib/trademe';

gsap.registerPlugin(ScrollTrigger);

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
    name: 'Divine — Aria',
    image: '/images/divine-aria.jpg',
    price: '$2,559',
    tag: 'BEST SELLER',
    specs: '165cm · D-Cup · All Body Silicone · Platinum Grade',
    tradeMeSku: '01',
    tradeMeSearchCode: 'DWWD01',
  },
  {
    name: 'Divine — Nova',
    image: '/images/divine-nova.jpg',
    price: '$2,559',
    tag: 'ELITE',
    specs: '148cm · C-Cup · All Body Silicone · Platinum Grade',
  },
  {
    name: 'Divine — Celeste',
    image: '/images/divine-celeste.jpg',
    price: '$2,559',
    tag: 'NEW ARRIVAL',
    specs: '165cm · E-Cup · All Body Silicone · Platinum Grade',
  },
];

function ProductCardContent({ product }: { product: Product }) {
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
          <span className="font-body text-xs text-cream-300">NZD · From</span>
        </div>
        {(product.tradeMeSearchCode || product.tradeMeSku) && (
          <span className="mt-5 inline-flex w-full items-center justify-center border border-gold px-5 py-3 text-button text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-noir-900">
            View {product.tradeMeSearchCode ?? `SKU ${product.tradeMeSku}`} on Trade Me
          </span>
        )}
      </div>
    </>
  );
}

export function ProductSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!cardsRef.current || reduced) return;
    const cards = cardsRef.current.querySelectorAll('.product-card');
    gsap.set(cards, { opacity: 0, y: 60, scale: 1.02 });
    gsap.to(cards, {
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
  }, [reduced]);

  return (
    <section id="product" className="bg-noir-700 py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <span className="text-label text-gold block mb-4">THE DIVINE COLLECTION</span>
          <div className="w-[60px] h-[1px] bg-gold mx-auto mb-6" />
          <h2 className="text-display-h2 text-cream-100 mb-4">10 Models. All in Auckland. Ready Today.</h2>
          <p className="text-body-large text-cream-200 max-w-2xl mx-auto">
            Every Divine doll is full platinum silicone — head, body, hands, feet. No TPE fillers. No shortcuts. Choose your favourite, inspect in person, or we ship discreetly nationwide.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => {
            const tradeMeUrl = p.tradeMeSearchCode
              ? buildTradeMeR18AdultSearchUrl(p.tradeMeSearchCode)
              : undefined;

            if (tradeMeUrl) {
              return (
                <a
                  key={p.name}
                  href={tradeMeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${p.name} ${p.tradeMeSearchCode} on Trade Me`}
                  className="product-card block bg-noir-600 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-noir-700"
                >
                  <ProductCardContent product={p} />
                </a>
              );
            }

            return (
              <div key={p.name} className="product-card bg-noir-600 overflow-hidden group">
                <ProductCardContent product={p} />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-sm text-cream-300 mb-4">
            Plus 7 more models: Hailey, Freya, Elysia, Selene, Amara, Stella, Kira. Call to see full catalogue.
          </p>
          <SecondaryButton href="tel:02885146884">Call to See All 10 Models</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
