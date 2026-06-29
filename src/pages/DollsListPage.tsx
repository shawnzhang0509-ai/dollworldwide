import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { PageMeta } from '@/components/PageMeta';
import { ProductGrid } from '@/sections/ProductSection';
import { products } from '@/data/products';

export function DollsListContent() {
  return (
    <section className="relative overflow-hidden pb-[120px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_68%)]" />
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <a href="/" className="text-label text-gold transition-colors hover:text-gold-light">
            ← Back to homepage
          </a>
          <span className="mb-4 mt-8 block text-label text-gold">SEX DOLLS COLLECTION</span>
          <h1 className="mb-5 text-display-h2 text-cream-100">
            Sex Dolls Collection — TPE &amp; Silicone Head Hybrids
          </h1>
          <p className="text-body-large text-cream-200">
            Every model is $999 NZD with silicone head and TPE body construction, Auckland ready stock,
            and discreet nationwide delivery. Browse our{' '}
            <a href="/blog/best-value-sex-dolls-new-zealand-2026-buyers-guide" className="text-gold hover:text-gold-light">
              NZ buyer&apos;s guide
            </a>{' '}
            or text us for live stock and real photos.
          </p>
        </div>

        <ProductGrid
          products={products}
          dualImagePreview
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        />
      </div>
    </section>
  );
}

export function DollsListPage() {
  return (
    <main className="bg-noir-900 pt-[120px]">
      <PageMeta
        title="Buy Realistic TPE & Silicone Sex Dolls"
        description="Browse NZ's largest selection of lifelike sex dolls. Silicone head and TPE body hybrids, discreet packaging, Auckland stock from $999. Shop the collection now."
        path="/dolls"
        includeNzInTitle
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Sex Dolls', path: '/dolls' },
        ]}
      />
      <DollsListContent />
    </main>
  );
}
