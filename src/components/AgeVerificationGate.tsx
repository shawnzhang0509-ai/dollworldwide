import { useState, useEffect } from 'react';
import gsap from 'gsap';

export function AgeVerificationGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const verified = sessionStorage.getItem('ageVerified');
    if (!verified) {
      setShow(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  useEffect(() => {
    if (show) {
      gsap.fromTo(
        '.age-modal-content',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [show]);

  const handleEnter = () => {
    sessionStorage.setItem('ageVerified', 'true');
    document.body.style.overflow = '';
    setShow(false);
  };

  const handleLeave = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-noir-900/95 backdrop-blur-sm">
      <div className="age-modal-content max-w-[480px] w-full mx-6 p-10 bg-noir-700 border border-noir-500 text-center">
        <h2 className="font-display text-display-h3 text-cream-100 mb-4">
          Age Verification
        </h2>
        <p className="text-body-large text-cream-200 mb-8">
          This website contains adult content. Are you 18 years or older?
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleEnter}
            className="px-10 py-3.5 text-button text-noir-900 bg-gold hover:bg-gold-light transition-colors duration-300"
          >
            Enter
          </button>
          <button
            onClick={handleLeave}
            className="px-10 py-3.5 text-button text-cream-200 border border-cream-300 hover:border-cream-100 hover:text-cream-100 transition-colors duration-300"
          >
            Leave
          </button>
        </div>
      </div>
    </div>
  );
}
