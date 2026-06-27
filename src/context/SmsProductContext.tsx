import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react';

interface SmsProductContextValue {
  activeProductName: string | null;
  setActiveProductName: (name: string | null) => void;
}

const SmsProductContext = createContext<SmsProductContextValue | null>(null);

export function SmsProductProvider({ children }: { children: ReactNode }) {
  const [activeProductName, setActiveProductName] = useState<string | null>(null);
  const value = useMemo(
    () => ({ activeProductName, setActiveProductName }),
    [activeProductName],
  );

  return <SmsProductContext.Provider value={value}>{children}</SmsProductContext.Provider>;
}

function useSmsProductContext() {
  const context = useContext(SmsProductContext);
  if (!context) {
    throw new Error('useSmsProduct must be used within SmsProductProvider');
  }
  return context;
}

export function useSmsProduct() {
  return useSmsProductContext();
}

export function useRegisterVisibleProduct(productName: string): RefObject<HTMLDivElement | null> {
  const { setActiveProductName } = useSmsProductContext();
  const ref = useRef<HTMLDivElement>(null);

  const registerProduct = useCallback(() => {
    setActiveProductName(productName);
  }, [productName, setActiveProductName]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          registerProduct();
        }
      },
      { threshold: [0.45, 0.6] },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [registerProduct]);

  return ref;
}
