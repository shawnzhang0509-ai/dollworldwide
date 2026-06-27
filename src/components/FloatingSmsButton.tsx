import { MessageSquare } from 'lucide-react';
import { SmsLink } from '@/components/SmsLink';
import { buildFloatingSmsUrl } from '@/lib/contact';
import { useSmsProduct } from '@/context/SmsProductContext';

export function FloatingSmsButton() {
  const { activeProductName } = useSmsProduct();
  const smsUrl = buildFloatingSmsUrl(activeProductName);

  return (
    <div className="pointer-events-none fixed bottom-0 right-0 z-[95] p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-5">
      <SmsLink
        href={smsUrl}
        ariaLabel="Text for stock and photos"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-red-700/80 bg-gradient-to-r from-red-700 to-noir-900 px-4 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_8px_32px_rgba(185,28,28,0.45)] transition-transform hover:scale-[1.02] hover:from-red-600 hover:to-noir-800 sm:gap-2.5 sm:px-5 sm:py-3.5 sm:text-base"
      >
        <span className="text-lg leading-none" aria-hidden="true">
          📱
        </span>
        <MessageSquare className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" aria-hidden="true" />
        <span className="whitespace-nowrap">Text for Stock &amp; Photos</span>
      </SmsLink>
    </div>
  );
}
