import type Lenis from 'lenis';

const NAVBAR_OFFSET = 72;

let lenisInstance: Lenis | null = null;

export function setLenisInstance(lenis: Lenis | null) {
  lenisInstance = lenis;
}

export function scrollToSection(hash: string, offset = NAVBAR_OFFSET) {
  const id = hash.replace(/^#/, '');
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -offset });
  } else {
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  return true;
}

export function getHashFromHref(href: string) {
  const hashIndex = href.indexOf('#');
  if (hashIndex === -1) return null;
  return href.slice(hashIndex);
}
