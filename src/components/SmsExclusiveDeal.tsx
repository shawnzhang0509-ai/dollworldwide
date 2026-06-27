import { SmsLink } from '@/components/SmsLink';
import { buildDoll30PromoSmsUrl, CONTACT_PHONE_DISPLAY } from '@/lib/contact';

export function SmsExclusiveDeal() {
  return (
    <div className="mb-4 rounded-lg border border-gold/25 bg-gradient-to-br from-noir-900 via-noir-800 to-noir-900 p-4 shadow-[inset_0_1px_0_rgba(212,175,55,0.12)]">
      <p className="mb-1 text-label text-gold">💬 SMS EXCLUSIVE DEAL</p>
      <p className="font-body text-sm text-cream-100">
        Text <span className="font-semibold text-gold">&quot;DOLL30&quot;</span> to {CONTACT_PHONE_DISPLAY}
      </p>
      <ul className="mt-2 space-y-1 font-body text-xs text-cream-200">
        <li>→ $30 Off Bank Transfer</li>
        <li>→ Real Photos Sent to Your Phone</li>
        <li>→ Reply in 5 Mins</li>
      </ul>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <SmsLink
          href={buildDoll30PromoSmsUrl()}
          className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2.5 text-center text-button text-noir-900 transition-colors hover:bg-gold-light"
        >
          Text DOLL30
        </SmsLink>
        <span className="font-body text-[10px] uppercase tracking-[0.14em] text-gold/80">
          Limited to this week
        </span>
      </div>
    </div>
  );
}
