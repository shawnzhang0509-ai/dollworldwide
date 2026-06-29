import { useLocation } from 'react-router';
import { getHashFromHref, scrollToSection } from '@/lib/scrollToSection';

export function Footer() {
  const location = useLocation();

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = getHashFromHref(href);
    if (!hash) return;

    if (location.pathname !== '/') return;

    e.preventDefault();
    if (!scrollToSection(hash)) {
      window.location.href = `/${hash}`;
    }
  };

  return (
    <footer className="bg-noir-800 border-t border-noir-500 pb-24 sm:pb-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-16 pb-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a
              href="/"
              className="font-display text-2xl text-gold block mb-2"
            >
              DOLL WORLDWIDE
            </a>
            <p className="font-body text-sm text-cream-300">
              Bringing Dreams to Life
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-label text-cream-100 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Ready Stock', href: '/#product' },
                { label: 'Sex Dolls', href: '/dolls' },
                { label: 'Blog', href: '/blog' },
                { label: 'FAQ', href: '/faq' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Trade Me Proof', href: '/#proof' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleHashLinkClick(e, link.href)}
                  className="font-body text-sm text-cream-300 hover:text-cream-100 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-label text-cream-100 mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <a
                href="/shipping-policy"
                className="font-body text-sm text-cream-300 hover:text-cream-100 transition-colors duration-300"
              >
                Shipping Policy
              </a>
              <a
                href="/privacy-policy"
                className="font-body text-sm text-cream-300 hover:text-cream-100 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                className="font-body text-sm text-cream-300 hover:text-cream-100 transition-colors duration-300"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        {/* Row 2 - Bottom Bar */}
        <div className="border-t border-noir-500 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="font-body text-xs text-cream-300">
              © 2026 DollWorldwide.com. All rights reserved.
            </p>
            <p className="mt-1 font-body text-xs italic text-cream-300/90">
              We only reply via SMS. Discreet &amp; Fast.
            </p>
          </div>
          <p className="font-body text-xs text-cream-300">
            In NZ, for NZ
          </p>
        </div>
      </div>
    </footer>
  );
}
