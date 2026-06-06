import { Route, Routes } from 'react-router';
import { useLenis } from '@/hooks/useLenis';
import { AgeVerificationGate } from '@/components/AgeVerificationGate';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { ProductSection } from '@/sections/ProductSection';
import { TrademeProofSection } from '@/sections/TrademeProofSection';
import { HowItWorksSection } from '@/sections/HowItWorksSection';
import { ContactCTASection } from '@/sections/ContactCTASection';
import { AllModelsPage } from '@/pages/AllModelsPage';
import { BlogIndexPage } from '@/pages/BlogIndexPage';
import { BlogArticlePage } from '@/pages/BlogArticlePage';

function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProductSection />
      <TrademeProofSection />
      <HowItWorksSection />
      <ContactCTASection />
    </main>
  );
}

function App() {
  useLenis();

  return (
    <>
      <AgeVerificationGate />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/models" element={<AllModelsPage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
