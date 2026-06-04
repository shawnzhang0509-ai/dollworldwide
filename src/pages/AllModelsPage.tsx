import { ProductGrid } from '@/sections/ProductSection';
import { products } from '@/data/products';

export function AllModelsPage() {
  return (
    <main className="bg-noir-900 pt-[120px]">
      <section className="relative overflow-hidden pb-[120px]">
        <div className="absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_68%)] pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="mb-12 max-w-3xl">
            <a href="/" className="text-label text-gold hover:text-gold-light transition-colors">
              ← Back to homepage
            </a>
            <span className="text-label text-gold block mt-8 mb-4">ALL MODELS</span>
            <h1 className="text-display-h2 text-cream-100 mb-5">Browse the full Doll Worldwide catalogue.</h1>
            <p className="text-body-large text-cream-200">
              Every model is $999 NZD. Where a Trade Me listing exists, the SKU code on each card (for example DWWD01) matches the search code used on Trade Me.
            </p>
          </div>

          <ProductGrid
            products={products}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          />
        </div>
      </section>
    </main>
  );
}
