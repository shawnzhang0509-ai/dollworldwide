import { PageMeta } from '@/components/PageMeta';
import { PrimaryButton } from '@/components/PrimaryButton';

export function NotFoundPage() {
  return (
    <main className="bg-noir-900 pt-[120px]">
      <PageMeta
        title="Page Not Found"
        description="The page you requested does not exist on DollWorldwide. Browse our sex dolls collection or return to the homepage."
        path="/404"
        robots="noindex, follow"
      />
      <section className="relative mx-auto max-w-[700px] px-6 pb-[120px] text-center md:px-10">
        <h1 className="mb-4 text-display-h2 text-cream-100">Page not found</h1>
        <p className="mb-8 text-body-large text-cream-200">
          This page is no longer available. If you followed an old link, we may have moved that content
          during our site rebuild.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <PrimaryButton href="/">Go to homepage</PrimaryButton>
          <PrimaryButton href="/dolls">Browse sex dolls</PrimaryButton>
        </div>
      </section>
    </main>
  );
}
