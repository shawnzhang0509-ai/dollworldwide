import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { BlogArticleBody } from '@/components/BlogArticleBody';
import { PageMeta } from '@/components/PageMeta';
import { PrimaryButton } from '@/components/PrimaryButton';
import { aboutPageBlocks } from '@/data/aboutPage';

export function AboutPage() {
  return (
    <main className="bg-noir-900 pt-[120px]">
      <PageMeta
        title="About DollWorldwide | NZ's Trusted Sex Doll Store"
        description="DollWorldwide is NZ's leading sex doll retailer. Discreet shipping, premium quality, expert support. Learn why thousands of Kiwis trust us."
        path="/about"
        includeNzInTitle
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />

      <section className="relative overflow-hidden pb-[120px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_68%)]" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mx-auto max-w-3xl">
            <a href="/" className="text-label text-gold transition-colors hover:text-gold-light">
              ← Back to homepage
            </a>
            <header className="mb-12 mt-8 border-b border-noir-500 pb-10">
              <span className="mb-4 block text-label text-gold">ABOUT US</span>
              <h1 className="text-display-h2 text-cream-100">About DollWorldwide</h1>
              <p className="mt-5 text-body-large text-cream-200">
                Built for New Zealand buyers who want better value, honest communication, and local support.
              </p>
            </header>
            <BlogArticleBody blocks={aboutPageBlocks} />
            <div className="mt-10">
              <PrimaryButton href="/dolls">Browse our sex dolls collection</PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
