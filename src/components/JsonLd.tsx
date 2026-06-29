import { useEffect, useMemo } from 'react';

interface JsonLdProps {
  id: string;
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ id, data }: JsonLdProps) {
  const serialized = useMemo(() => JSON.stringify(data), [data]);

  useEffect(() => {
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = serialized;
    document.head.appendChild(script);

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [id, serialized]);

  return null;
}
