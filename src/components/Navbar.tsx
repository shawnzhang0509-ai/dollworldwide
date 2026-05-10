import { useState, useEffect } from 'react';
import gsap from 'gsap';

const navLinks = [
  { label: 'Ready Stock', href: '#product' },
  { label: 'All Models', href: '/models' },
  { label: 'Proof', href: '#proof' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo('.mobile-menu', { x: '100%' }, { x: '0%', duration: 0.5, ease: 'power3.inOut' });
      gsap.fromTo('.mobile-link', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, delay: 0.2 });
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;

    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center transition-all duration-400 ${
          scrolled ? 'bg-noir-900/95 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="/" className="font-display text-2xl text-gold tracking-wide">
            DOLL WORLDWIDE
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-nav transition-colors duration-300 ${
                  activeSection === link.href ? 'text-gold' : 'text-cream-200 hover:text-gold'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="tel:02885146884"
            className="hidden lg:inline-block text-label text-gold border border-gold px-4 py-2 hover:bg-gold hover:text-noir-900 transition-all duration-300"
          >
            028 8514 6884
          </a>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
            <span className={`block w-6 h-[2px] bg-cream-100 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-cream-100 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-cream-100 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu fixed inset-0 z-[99] bg-noir-900 flex flex-col items-center justify-center gap-8 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="mobile-link font-display text-display-h3 text-cream-100 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:02885146884" className="mobile-link text-label text-gold border border-gold px-6 py-3 mt-4">
            028 8514 6884
          </a>
        </div>
      )}
    </>
  );
}
