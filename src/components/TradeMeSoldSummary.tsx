import { CheckCircle2 } from 'lucide-react';
import { trademeSoldListSummary } from '@/data/trademeProofs';

export function TradeMeSoldSummary() {
  return (
    <div className="mx-auto mb-12 max-w-2xl overflow-hidden border border-noir-500 bg-[#0d0d0d] shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
      <div className="border-b border-noir-500 bg-[#141414] px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-accent text-sm font-bold text-[#2D6FB3]">trademe</p>
            <h3 className="mt-0.5 font-body text-lg font-semibold text-cream-100">Sold</h3>
          </div>
          <span className="font-body text-xs text-cream-400">
            {trademeSoldListSummary.length} listings
          </span>
        </div>

      </div>

      <ul className="divide-y divide-noir-500">
        {trademeSoldListSummary.map((listing) => (
          <li key={listing.id} className="flex gap-4 px-4 py-4 transition-colors hover:bg-noir-700/40">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden border border-noir-500 bg-noir-700">
              <img
                src={listing.thumbnail}
                alt={listing.product}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-mono text-[11px] text-cream-400">Ref #{listing.reference}</span>
                <span className="text-cream-600">·</span>
                <span className="font-body text-[11px] text-cream-400">{listing.timeLabel}</span>
              </div>
              <p className="mt-1.5 line-clamp-2 font-body text-sm leading-snug text-cream-100">
                {listing.product}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" strokeWidth={2} />
                  Sold
                </span>
                {listing.fulfillment && (
                  <span className="font-body text-[11px] text-cream-500">{listing.fulfillment}</span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
