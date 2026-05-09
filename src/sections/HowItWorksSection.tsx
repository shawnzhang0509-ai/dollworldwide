import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Truck, Package, CheckCircle } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Phone,
    title: 'Call or Message',
    desc: 'Dial 028 8514 6884 or email us. Ask about current stock, view photos, or book an in-person inspection in Auckland.',
  },
  {
    icon: CheckCircle,
    title: 'Confirm Your Order',
    desc: 'Choose the model you want from current stock. We accept bank transfer, cash on pickup, or Trade Me Pay Now where available.',
  },
  {
    icon: Package,
    title: 'Same-Day Dispatch',
    desc: 'If paid before 2pm, your doll ships the same day from our Auckland warehouse. Plain box. No markings. 100% discreet.',
  },
  {
    icon: Truck,
    title: 'Delivered to Your Door',
    desc: 'North Island: next business day. South Island: 2-3 days. Tracking provided. Signature required for your privacy.',
  },
];

export function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current || reduced) return;
    const items = ref.current.querySelectorAll('.step-item');
    gsap.set(items, { opacity: 0, y: 40 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, [reduced]);

  return (
    <section id="how-it-works" className="bg-noir-700 py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <span className="text-label text-gold block mb-4">HOW IT WORKS</span>
          <div className="w-[60px] h-[1px] bg-gold mx-auto mb-6" />
          <h2 className="text-display-h2 text-cream-100">From Call to Door in 24–48 Hours</h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="step-item bg-noir-600 p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gold text-noir-900 font-accent text-sm font-bold flex items-center justify-center rounded-full">
                {i + 1}
              </div>
              <s.icon className="w-10 h-10 text-gold mx-auto mb-4 mt-2" strokeWidth={1.5} />
              <h4 className="font-display text-xl text-cream-100 mb-3">{s.title}</h4>
              <p className="font-body text-sm text-cream-300 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
