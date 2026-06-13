import { BlogArticleBody } from '@/components/BlogArticleBody';
import { PageMeta } from '@/components/PageMeta';
import { privacyPolicyBlocks } from '@/data/privacyPolicy';

export function PrivacyPolicyPage() {
  return (
    <main className="bg-noir-900 pt-[120px]">
      <PageMeta
        title="Privacy Policy"
        description="Doll Worldwide privacy policy — how we collect, protect, and handle your personal information with discretion and respect across New Zealand."
        path="/privacy-policy"
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
              <h1 className="text-display-h2 text-cream-100">Privacy Policy</h1>
              <p className="mt-5 text-body-large text-cream-200">
                Your privacy is a core value — discreet packaging, confidential communication, and
                strict limits on how your information is used.
              </p>
            </header>

            <BlogArticleBody blocks={privacyPolicyBlocks} />
          </div>
        </div>
      </section>
    </main>
  );
}
