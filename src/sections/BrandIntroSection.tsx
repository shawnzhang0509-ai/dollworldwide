import { Shield, Palette, Package, Globe } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  {
    icon: Shield,
    title: 'Medical-Grade Materials',
    description: 'Premium TPE & silicone, safe and durable',
  },
  {
    icon: Palette,
    title: 'Fully Customizable',
    description: 'Eyes, hair, skin tone, body type & more',
  },
  {
    icon: Package,
    title: 'Discreet Shipping',
    description: 'Plain packaging, no external markings',
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    description: 'US, EU & NZ local stock available',
  },
];

export function BrandIntroSection() {
  const featureRef = useScrollReveal<HTMLDivElement>({ y: 40, stagger: 0.15, delay: 0.5 });

  return (
    <section className="bg-noir-900 py-[120px] md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <SectionHeader
              label="OUR PHILOSOPHY"
              heading="Crafted with Passion, Delivered with Discretion"
            />
          </div>

          {/* Right Column */}
          <div>
            <p className="text-body-large text-cream-200">
              At Doll Worldwide, we believe in the art of companionship. Each doll is meticulously crafted from premium medical-grade TPE and silicone, offering an unparalleled level of realism and touch. Our commitment to quality extends from the factory floor to your doorstep — with discreet packaging and seamless worldwide shipping.
            </p>

            {/* Feature Grid */}
            <div ref={featureRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <feature.icon className="w-8 h-8 text-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-body text-base font-semibold text-cream-100 mb-1">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm text-cream-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
