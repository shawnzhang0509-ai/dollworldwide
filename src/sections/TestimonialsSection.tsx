import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "I can't express how impressed I am with Doll Worldwide. From the moment I placed my order, their customer service was outstanding. The doll itself is a masterpiece — the craftsmanship and realistic feel exceeded all expectations.",
    name: 'Paul Robinson',
    location: 'USA',
  },
  {
    quote: "Finding Doll Worldwide was a game-changer. Their attention to detail and the quality of their dolls are unparalleled. The lifelike features and realistic textures make their dolls incredibly captivating.",
    name: 'Alicia Stone',
    location: 'UK',
  },
  {
    quote: "As someone who values privacy, I was delighted by the discreet and professional service. Their customization process allowed me to personalize my doll to exact specifications. It surpassed all expectations.",
    name: 'Matthew John',
    location: 'Australia',
  },
  {
    quote: "Doll Worldwide offers an unforgettable experience. The dolls are more than just products — they are true works of art. The weight, texture, and overall feel are incredibly lifelike.",
    name: 'Luis Carlos',
    location: 'Spain',
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const visibleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  useEffect(() => {
    if (!sectionRef.current || reduced) return;

    const cards = sectionRef.current.querySelectorAll('.testimonial-card');
    gsap.set(cards, { opacity: 0, y: 40 });
    gsap.to(cards, {
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

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section id="testimonials" ref={sectionRef} className="bg-noir-700 py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader
          label="CLIENT STORIES"
          heading="What Our Clients Say"
          centered
        />

        <div className="relative">
          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="testimonial-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-noir-600 p-10 h-full">
                    <span className="font-display text-7xl text-gold/30 leading-none block mb-4">
                      "
                    </span>
                    <p className="font-body text-lg text-cream-100 italic leading-relaxed mb-6">
                      {t.quote}
                    </p>
                    <p className="font-body text-sm font-semibold text-gold">{t.name}</p>
                    <p className="font-body text-sm text-cream-300">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              disabled={current === 0}
              className="p-2 text-gold hover:text-cream-100 disabled:text-cream-300/30 transition-colors duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="p-2 text-gold hover:text-cream-100 disabled:text-cream-300/30 transition-colors duration-300"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
