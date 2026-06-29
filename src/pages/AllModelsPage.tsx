import { PageMeta } from '@/components/PageMeta';
import { DollsListContent } from '@/pages/DollsListPage';

export function AllModelsPage() {
  return (
    <>
      <PageMeta
        title="Buy Realistic TPE & Silicone Sex Dolls"
        description="Browse NZ's largest selection of lifelike sex dolls. Silicone head and TPE body hybrids, discreet packaging, Auckland stock from $999. Shop the collection now."
        path="/models"
        canonicalPath="/dolls"
        includeNzInTitle
      />
      <main className="bg-noir-900 pt-[120px]">
        <DollsListContent />
      </main>
    </>
  );
}

