import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { BlogArticleBody } from '@/components/BlogArticleBody';
import { JsonLd } from '@/components/JsonLd';
import { PageMeta } from '@/components/PageMeta';
import { faqPageBlocks, faqSchemaItems } from '@/data/faqPage';

export function FaqPage() {
  return (
    <main className="bg-noir-900 pt-[120px]">
      <PageMeta
        title="Sex Doll FAQ | Shipping, Payment & Care"
        description="Got questions? Find answers about NZ delivery times, discreet packaging, payment options, doll maintenance, and returns. Read our FAQ."
        path="/faq"
        includeNzInTitle
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' },
        ]}
      />
      <JsonLd
        id="faq-jsonld"
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqSchemaItems,
        }}
      />

      <section className="relative overflow-hidden pb-[120px]">
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mx-auto max-w-3xl">
            <a href="/" className="text-label text-gold transition-colors hover:text-gold-light">
              ← Back to homepage
            </a>
            <header className="mb-12 mt-8 border-b border-noir-500 pb-10">
              <span className="mb-4 block text-label text-gold">FAQ</span>
              <h1 className="text-display-h2 text-cream-100">Sex Doll FAQ for NZ Buyers</h1>
              <p className="mt-5 text-body-large text-cream-200">
                Shipping, payment, care, and what to expect when buying from DollWorldwide.
              </p>
            </header>
            <BlogArticleBody blocks={faqPageBlocks} />
          </div>
        </div>
      </section>
    </main>
  );
}
