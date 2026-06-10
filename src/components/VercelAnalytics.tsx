import { Analytics } from '@vercel/analytics/react';
import { useLocation } from 'react-router';

export function VercelAnalytics() {
  const { pathname } = useLocation();

  return <Analytics path={pathname} route={pathname} />;
}
