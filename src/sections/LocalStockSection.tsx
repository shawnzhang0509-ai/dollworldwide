import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from '@/components/SectionHeader';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const regions = [
  {
    flag: '🇺🇸',
    label: 'US STOCK',
    products: [
      { name: 'Indigo', desc: 'US Local Stock — All Body TPE Doll', price: '$1,099', image: '/images/product-indigo.jpg' },
      { name: 'Verity', desc: 'US Local Stock — 165cm TPE Doll', price: '$1,099', image: '/images/product-verity.jpg' },
      { name: 'Juniper', desc: 'US Local Stock — 165cm TPE Doll', price: '$1,099', image: '/images/product-juniper.jpg' },
    ],
  },
  {
    flag: '🇪🇺',
    label: 'EU STOCK',
    products: [
      { name: 'Ruby', desc: 'EU Local Stock — 153cm TPE Doll', price: '$1,099', image: '/images/collection-divine.jpg' },
      { name: 'Jessica', desc: 'EU Local Stock — 163cm TPE Doll', price: '$1,599', image: '/images/collection-velvet.jpg' },
      { name: 'Jenny', desc: 'EU Local Stock — 153cm TPE Doll', price: '$1,599', image: '/images/collection-luxor.jpg' },
    ],
  },
  {
    flag: '🇳🇿',
    label: 'NZ STOCK',
    products: [
      { name: 'Melody', desc: 'NZ Local Stock — 148cm Velvet Doll', price: '$1,329', image: '/images/gallery-2.jpg' },
      { name: 'Aria', desc: 'NZ Local Stock — 148cm Velvet Doll', price: '$1,329', image: '/images/gallery-3.jpg' },
      { name: 'Celeste', desc: 'NZ Local Stock — 148cm Velvet Doll', price: '$1,329', image: '/images/gallery-4.jpg' },
    ],
  },
];

export function LocalStockSection() {
  const [activeTab, setActiveTab] = useState(0);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!cardsRef.current || reduced) return;

    const cards = cardsRef.current.querySelectorAll('.product-card');
    gsap.set(cards, { opacity: 0, y: 40 });
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, [activeTab, reduced]);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;

    if (cardsRef.current && !reduced) {
      const cards = cardsRef.current.querySelectorAll('.product-card');
      gsap.to(cards, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => setActiveTab(index),
      });
    } else {
      setActiveTab(index);
    }
  };

  return (
    <section id="stock" className="bg-noir-700 py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader
          label="READY TO SHIP"
          heading="Local Stock, Swift Delivery"
          subtext="Skip the wait. Our US, EU, and NZ warehouses have premium dolls ready for immediate discreet dispatch."
          centered
        />

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-12">
          {regions.map((region, i) => (
            <button
              key={region.label}
              onClick={() => handleTabChange(i)}
              className={`text-label pb-2 border-b-2 transition-all duration-300 ${
                activeTab === i
                  ? 'text-cream-100 border-gold'
                  : 'text-cream-300 border-transparent hover:text-cream-200'
              }`}
            >
              <span className="mr-2">{region.flag}</span>
              {region.label}
            </button>
          ))}
        </div>

        {/* Products */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions[activeTab].products.map((product) => (
            <div
              key={product.name}
              className="product-card bg-noir-600 overflow-hidden group"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="font-display text-display-h4 text-cream-100 mb-1">{product.name}</h4>
                <p className="font-body text-sm text-cream-300 mb-3">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-gold">{product.price}</span>
                  <a
                    href="#contact"
                    className="font-body text-sm text-gold hover:text-gold-light transition-colors duration-300"
                  >
                    Inquire Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
