import { useLenis } from '@/hooks/useLenis';
import { AgeVerificationGate } from '@/components/AgeVerificationGate';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { WhyDivineSection } from '@/sections/WhyDivineSection';
import { ProductSection } from '@/sections/ProductSection';
import { GallerySection } from '@/sections/GallerySection';
import { TrademeProofSection } from '@/sections/TrademeProofSection';
import { HowItWorksSection } from '@/sections/HowItWorksSection';
import { ContactCTASection } from '@/sections/ContactCTASection';

function App() {
  useLenis();

  return (
    <>
      <AgeVerificationGate />
      <Navbar />
      <main>
        <HeroSection />
        <WhyDivineSection />
        <ProductSection />
        <GallerySection />
        <TrademeProofSection />
        <HowItWorksSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}

export default App;
