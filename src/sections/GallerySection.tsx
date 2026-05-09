import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: '/images/divine-hailey.jpg', alt: 'Real stock photo Hailey', speed: 0.8, aspect: 'square' },
  { src: '/images/divine-freya.jpg', alt: 'Real stock photo Freya', speed: 1.2, aspect: 'tall' },
  { src: '/images/divine-elysia.jpg', alt: 'Real stock photo Elysia', speed: 0.9, aspect: 'square' },
  { src: '/images/divine-selene.jpg', alt: 'Real stock photo Selene', speed: 1.1, aspect: 'tall' },
  { src: '/images/divine-amara.jpg', alt: 'Real stock photo Amara', speed: 0.7, aspect: 'tall' },
  { src: '/images/divine-stella.jpg', alt: 'Real stock photo Stella', speed: 1.3, aspect: 'square' },
];

export function GallerySection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!gridRef.current || reduced) return;

    const items = gridRef.current.querySelectorAll('.gallery-item');
    gsap.set(items, { opacity: 0, scale: 1.05 });
    gsap.to(items, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    items.forEach((item) => {
      const speed = parseFloat((item as HTMLElement).dataset.speed || '1');
      gsap.to(item, {
        y: (1 - speed) * 80,
        ease: 'none',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }, [reduced]);

  return (
    <section id="gallery" className="bg-noir-700 py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <span className="text-label text-gold block mb-4">REAL PHOTOS & PROMO MATERIAL</span>
          <div className="w-[60px] h-[1px] bg-gold mx-auto mb-6" />
          <h2 className="text-display-h2 text-cream-100 mb-4">A Place for Photos, Videos, and Best-Selling Collages.</h2>
          <p className="text-body-large text-cream-200 max-w-2xl mx-auto">
            Real media should support trust, not interrupt the page. Use this section for warehouse photos, short phone videos, close-up details, and promotional grids like best-seller posters.
          </p>
        </div>

        <div ref={gridRef} className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="gallery-item break-inside-avoid mb-4 overflow-hidden group"
              data-speed={img.speed}
            >
              <div className={`relative ${img.aspect === 'square' ? 'aspect-square' : 'aspect-[3/4]'} overflow-hidden`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
