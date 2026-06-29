import { Route, Routes } from 'react-router';
import { useLenis } from '@/hooks/useLenis';
import { AgeVerificationGate } from '@/components/AgeVerificationGate';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageMeta } from '@/components/PageMeta';
import { SiteJsonLd } from '@/components/SiteJsonLd';
import { HeroSection } from '@/sections/HeroSection';
import { ProductSection } from '@/sections/ProductSection';
import { TrademeProofSection } from '@/sections/TrademeProofSection';
import { HowItWorksSection } from '@/sections/HowItWorksSection';
import { BlogPreviewSection } from '@/sections/BlogPreviewSection';
import { ContactCTASection } from '@/sections/ContactCTASection';
import { AllModelsPage } from '@/pages/AllModelsPage';
import { DollsListPage } from '@/pages/DollsListPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { FaqPage } from '@/pages/FaqPage';
import { BlogIndexPage } from '@/pages/BlogIndexPage';
import { BlogArticlePage } from '@/pages/BlogArticlePage';
import { ShippingPolicyPage } from '@/pages/ShippingPolicyPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { TermsAndConditionsPage } from '@/pages/TermsAndConditionsPage';
import { VercelAnalytics } from '@/components/VercelAnalytics';
import { HashScrollHandler } from '@/components/HashScrollHandler';
import { SmsProductProvider } from '@/context/SmsProductContext';
import { FloatingSmsButton } from '@/components/FloatingSmsButton';

function HomePage() {
  return (
    <main>
      <PageMeta
        title="Premium Sex Dolls NZ | Discreet Shipping"
        description="Shop NZ's trusted collection of realistic sex dolls. Silicone head and TPE body hybrids from $999, Auckland stock, discreet NZ-wide delivery. Browse and text today."
        path="/"
      />
      <SiteJsonLd />
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
    <SmsProductProvider>
      <AgeVerificationGate />
      <HashScrollHandler />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dolls" element={<DollsListPage />} />
        <Route path="/dolls/:slug" element={<ProductDetailPage />} />
        <Route path="/models" element={<AllModelsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
      </Routes>
      <Footer />
      <FloatingSmsButton />
      <VercelAnalytics />
    </SmsProductProvider>
  );
}

export default App;
