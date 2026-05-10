import { useMemo, useState } from 'react';
import { ProductGrid } from '@/sections/ProductSection';
import { products, type ProductTier } from '@/data/products';

const filters: Array<{ label: string; value: 'all' | ProductTier }> = [
  { label: 'All Models', value: 'all' },
  { label: '$999 Best Value', value: 'best-value' },
  { label: 'Flagship', value: 'flagship' },
];

export function AllModelsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | ProductTier>('all');

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return products;
    return products.filter((product) => product.tier === activeFilter);
  }, [activeFilter]);

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
              Keep the homepage focused on fast decisions. Use this page for the full 30+ model catalogue, with $999 best-value stock separated from flagship premium models.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`border px-5 py-3 text-button transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'border-gold bg-gold text-noir-900'
                    : 'border-gold/40 text-gold hover:border-gold hover:bg-gold hover:text-noir-900'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <ProductGrid
            products={filteredProducts}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          />
        </div>
      </section>
    </main>
  );
}
