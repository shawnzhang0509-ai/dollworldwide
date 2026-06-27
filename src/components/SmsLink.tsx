import { useState, type MouseEvent, type ReactNode } from 'react';
import { isSmsCapableDevice } from '@/lib/device';
import { CONTACT_PHONE_DISPLAY } from '@/lib/contact';

interface SmsLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export function SmsLink({ href, children, className = '', onClick, ariaLabel }: SmsLinkProps) {
  const [showDesktopHint, setShowDesktopHint] = useState(false);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    if (isSmsCapableDevice()) return;

    event.preventDefault();
    setShowDesktopHint(true);
  };

  return (
    <>
      <a href={href} className={className} onClick={handleClick} aria-label={ariaLabel}>
        {children}
      </a>

      {showDesktopHint && (
        <div
          className="fixed inset-0 z-[250] flex items-center justify-center bg-noir-900/80 p-6 backdrop-blur-sm"
          onClick={() => setShowDesktopHint(false)}
          role="dialog"
          aria-modal="true"
          aria-label="SMS instructions"
        >
          <div
            className="max-w-sm rounded-lg border border-gold/30 bg-noir-800 p-6 text-center shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="mb-2 text-2xl" aria-hidden="true">
              📱
            </p>
            <p className="font-display text-xl text-cream-100 mb-3">Text us from your phone</p>
            <p className="font-body text-sm text-cream-300 mb-5">
              Please open this site on your phone to text {CONTACT_PHONE_DISPLAY}, or save our number and message us directly.
            </p>
            <button
              type="button"
              onClick={() => setShowDesktopHint(false)}
              className="inline-flex items-center justify-center border border-gold px-6 py-2.5 text-button text-gold transition-colors hover:bg-gold hover:text-noir-900"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
