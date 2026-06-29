import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { PageMeta } from '@/components/PageMeta';
import { PrimaryButton } from '@/components/PrimaryButton';
import { buildGeneralInquirySmsUrl, CONTACT_PHONE_DISPLAY } from '@/lib/contact';

export function ContactPage() {
  return (
    <main className="bg-noir-900 pt-[120px]">
      <PageMeta
        title="Contact DollWorldwide NZ | Discreet Support & Enquiries"
        description="Get in touch with DollWorldwide NZ. Discreet SMS support for sex dolls, shipping, stock, and orders. We only reply via SMS — fast and private."
        path="/contact"
        includeNzInTitle
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />

      <section className="relative overflow-hidden pb-[120px]">
        <div className="relative mx-auto max-w-[700px] px-6 text-center md:px-10">
          <span className="mb-4 block text-label text-gold">CONTACT</span>
          <h1 className="mb-6 text-display-h2 text-cream-100">Text us for stock, photos, and support</h1>
          <p className="mb-8 text-body-large text-cream-200">
            We only reply via SMS. Discreet and fast. Ask about Auckland stock, real photos, Trade Me listings,
            or delivery anywhere in New Zealand.
          </p>
          <PrimaryButton href={buildGeneralInquirySmsUrl()}>Text {CONTACT_PHONE_DISPLAY}</PrimaryButton>
          <p className="mt-8 font-body text-sm text-cream-300">
            Prefer to browse first? Visit our{' '}
            <a href="/dolls" className="text-gold hover:text-gold-light">sex dolls collection</a>{' '}
            or read the{' '}
            <a href="/faq" className="text-gold hover:text-gold-light">FAQ</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
