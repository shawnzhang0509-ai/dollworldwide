import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { scrollToSection } from '@/lib/scrollToSection';

export function HashScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return;

    const timer = window.setTimeout(() => {
      scrollToSection(location.hash);
    }, 150);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
}
