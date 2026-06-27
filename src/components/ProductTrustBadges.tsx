import { MapPin, Package, ShieldCheck } from 'lucide-react';

const badges = [
  { icon: MapPin, label: 'Auckland Warehouse' },
  { icon: Package, label: 'Plain Box Shipping' },
  { icon: ShieldCheck, label: 'No Brand Markings' },
] as const;

export function ProductTrustBadges() {
  return (
    <div className="mb-3 flex flex-wrap gap-2">
      {badges.map(({ icon: Icon, label }) => (
        <span
          key={label}
          className="inline-flex items-center gap-1.5 rounded-full border border-cream-300/10 bg-noir-900/50 px-2.5 py-1 font-body text-[10px] text-cream-300"
        >
          <Icon className="h-3 w-3 shrink-0 text-gold" aria-hidden="true" />
          {label}
        </span>
      ))}
    </div>
  );
}
