import { wooProductTokenMap } from '../data/wooProductRedirectMap';

export function resolveWooProductDestination(wooSlug: string): string {
  const normalized = wooSlug.replace(/^\//, '').replace(/\/$/, '').toLowerCase();
  if (!normalized) return '/dolls';

  if (wooProductTokenMap[normalized]) {
    return wooProductTokenMap[normalized];
  }

  const markerSegment = normalized.split('_-').pop() ?? normalized;
  if (wooProductTokenMap[markerSegment]) {
    return wooProductTokenMap[markerSegment];
  }

  const segments = markerSegment.split('-').filter(Boolean);
  const tokens = Object.keys(wooProductTokenMap).sort((a, b) => b.length - a.length);

  for (const token of tokens) {
    if (normalized.includes(token) || segments.includes(token)) {
      return wooProductTokenMap[token];
    }
  }

  return '/dolls';
}
