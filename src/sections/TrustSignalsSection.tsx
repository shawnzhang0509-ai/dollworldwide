import { useScrollReveal } from '@/hooks/useScrollReveal';
import { RefreshCw, Zap, CheckCircle, Lock, Phone } from 'lucide-react';

const signals = [
  {
    icon: RefreshCw,
    title: 'Free Cancellation',
    subtitle: 'Cancel within 48h, no charge',
  },
  {
    icon: Zap,
    title: 'Fast Shipping',
    subtitle: '3-5 days local stock delivery',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assured',
    subtitle: 'Uncompromising craftsmanship',
  },
  {
    icon: Lock,
    title: 'Discreet Service',
    subtitle: 'Your privacy is our priority',
  },
  {
    icon: Phone,
    title: '24/7 Support',
    subtitle: '028 8514 6884',
  },
];

export function TrustSignalsSection() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30, stagger: 0.1 });

  return (
    <section className="bg-noir-900 py-20">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {signals.map((signal) => (
            <div key={signal.title} className="text-center">
              <signal.icon className="w-12 h-12 text-gold mx-auto mb-3" strokeWidth={1.5} />
              <h4 className="font-body text-sm font-semibold text-cream-100 mb-1">
                {signal.title}
              </h4>
              <p className="font-body text-xs text-cream-300">{signal.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
