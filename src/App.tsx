import { Route, Routes } from 'react-router';
import { useLenis } from '@/hooks/useLenis';
import { AgeVerificationGate } from '@/components/AgeVerificationGate';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageMeta } from '@/components/PageMeta';
import { LocalBusinessJsonLd } from '@/components/LocalBusinessJsonLd';
import { HeroSection } from '@/sections/HeroSection';
import { ProductSection } from '@/sections/ProductSection';
import { TrademeProofSection } from '@/sections/TrademeProofSection';
import { HowItWorksSection } from '@/sections/HowItWorksSection';
import { BlogPreviewSection } from '@/sections/BlogPreviewSection';
import { ContactCTASection } from '@/sections/ContactCTASection';
import { AllModelsPage } from '@/pages/AllModelsPage';
import { BlogIndexPage } from '@/pages/BlogIndexPage';
import { BlogArticlePage } from '@/pages/BlogArticlePage';
import { ShippingPolicyPage } from '@/pages/ShippingPolicyPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { VercelAnalytics } from '@/components/VercelAnalytics';

function HomePage() {
  return (
    <main>
      <PageMeta
        title="Sex Dolls NZ | $999 Auckland Ready Stock"
        description="Doll Worldwide offers realistic silicone head and TPE body sex dolls at $999 NZD. Auckland ready stock, real photos, Trade Me verified, discreet nationwide delivery."
        path="/"
      />
      <LocalBusinessJsonLd />
      <HeroSection />
      <ProductSection />
      <TrademeProofSection />
      <HowItWorksSection />
      <BlogPreviewSection />
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
        <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      <Footer />
      <VercelAnalytics />
    </>
  );
}

export default App;
