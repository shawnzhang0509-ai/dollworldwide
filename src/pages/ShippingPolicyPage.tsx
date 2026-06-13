import { BlogArticleBody } from '@/components/BlogArticleBody';
import { PageMeta } from '@/components/PageMeta';
import { shippingPolicyBlocks } from '@/data/shippingPolicy';

export function ShippingPolicyPage() {
  return (
    <main className="bg-noir-900 pt-[120px]">
      <PageMeta
        title="Shipping Policy"
        description="Doll Worldwide shipping policy for New Zealand — free Auckland pickup, nationwide freight delivery, discreet packaging, and delivery terms for oversized products."
        path="/shipping-policy"
      />

      <section className="relative overflow-hidden pb-[120px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_68%)]" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mx-auto max-w-3xl">
            <a href="/" className="text-label text-gold transition-colors hover:text-gold-light">
              ← Back to homepage
            </a>

            <header className="mb-12 mt-8 border-b border-noir-500 pb-10">
              <span className="mb-4 block text-label text-gold">LEGAL</span>
              <h1 className="text-display-h2 text-cream-100">Shipping Policy</h1>
              <p className="mt-5 text-body-large text-cream-200">
                Safe, discreet, and reliable delivery across New Zealand — including free Auckland pickup
                and nationwide freight options.
              </p>
            </header>

            <BlogArticleBody blocks={shippingPolicyBlocks} />
          </div>
        </div>
      </section>
    </main>
  );
}
