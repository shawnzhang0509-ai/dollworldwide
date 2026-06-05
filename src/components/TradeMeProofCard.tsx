import { BadgeCheck } from 'lucide-react';
import type { TradeMeSaleProof } from '@/data/trademeProofs';

interface TradeMeProofCardProps {
  proof: TradeMeSaleProof;
}

export function TradeMeProofCard({ proof }: TradeMeProofCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden border border-noir-500 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.35)]">
      <div className="h-[3px] bg-gradient-to-r from-[#2D6FB3] via-gold to-[#E87722]" />

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-accent text-[15px] font-bold tracking-tight text-[#2D6FB3]">trademe</p>
            <p className="mt-1 font-body text-[11px] text-cream-400">Sale confirmation</p>
          </div>
          <span className="shrink-0 border border-[#E87722]/40 bg-[#E87722]/10 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.08em] text-[#E87722]">
            Paid
          </span>
        </div>

        <div className="mb-4 rounded-none border border-noir-500 bg-noir-700/80 p-4">
          <p className="font-body text-[11px] uppercase tracking-[0.1em] text-cream-400">Reference</p>
          <p className="mt-1 font-mono text-sm text-cream-100">#{proof.reference}</p>
        </div>

        <h3 className="mb-5 flex-1 font-body text-sm font-medium leading-relaxed text-cream-100">
          {proof.product}
        </h3>

        <dl className="space-y-2.5 border-t border-noir-500 pt-4 font-body text-xs">
          <div className="flex items-center justify-between gap-3">
            <dt className="text-cream-400">Status</dt>
            <dd className="flex items-center gap-1.5 font-semibold text-emerald-400">
              <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2} />
              Payment received
            </dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-cream-400">Sold</dt>
            <dd className="text-cream-200">{proof.soldLabel}</dd>
          </div>
          {proof.paymentMethod && (
            <div className="flex items-center justify-between gap-3">
              <dt className="text-cream-400">Via</dt>
              <dd className="text-cream-200">{proof.paymentMethod}</dd>
            </div>
          )}
          <div className="flex items-center justify-between gap-3">
            <dt className="text-cream-400">Buyer</dt>
            <dd className="text-cream-300">Verified NZ buyer</dd>
          </div>
        </dl>


      </div>
    </article>
  );
}
