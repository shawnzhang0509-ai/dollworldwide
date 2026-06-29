import { Navigate, useParams } from 'react-router';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { PageMeta } from '@/components/PageMeta';
import { ProductJsonLd } from '@/components/ProductJsonLd';
import { ProductGrid } from '@/sections/ProductSection';
import { findProductBySlug, getProductSlug, getRelatedProducts } from '@/data/products';
import { getProductImageAlt, getProductMetaDescription, getProductMetaTitle } from '@/lib/seo';

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? findProductBySlug(slug) : undefined;

  if (!product) {
    return <Navigate to="/dolls" replace />;
  }

  const path = `/dolls/${getProductSlug(product)}`;
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Sex Dolls', path: '/dolls' },
    { name: product.name, path },
  ];

  return (
    <main className="bg-noir-900 pt-[120px]">
      <PageMeta
        title={getProductMetaTitle(product)}
        description={getProductMetaDescription(product)}
        path={path}
        type="product"
        image={product.image}
      />
      <ProductJsonLd product={product} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <section className="relative overflow-hidden pb-[120px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_68%)]" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <nav className="mb-8 font-body text-sm text-cream-300" aria-label="Breadcrumb">
            <a href="/" className="hover:text-gold">Home</a>
            <span className="mx-2">/</span>
            <a href="/dolls" className="hover:text-gold">Sex Dolls</a>
            <span className="mx-2">/</span>
            <span className="text-cream-100">{product.name}</span>
          </nav>

          <div className="mb-10 max-w-3xl">
            <span className="mb-4 block text-label text-gold">PRODUCT PAGE</span>
            <h1 className="mb-4 text-display-h2 text-cream-100">{product.name}</h1>
            <p className="text-body-large text-cream-200">
              {getProductMetaDescription(product)}
            </p>
          </div>

          <ProductGrid
            products={[product]}
            dualImagePreview
            className="grid max-w-xl grid-cols-1 gap-6"
          />

          <div className="mt-12">
            <img
              src={product.image}
              alt={getProductImageAlt(product)}
              className="sr-only"
              loading="eager"
              fetchPriority="high"
            />
            <h2 className="mb-6 text-display-h3 text-cream-100">Related models</h2>
            <ProductGrid
              products={getRelatedProducts(product)}
              dualImagePreview
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
