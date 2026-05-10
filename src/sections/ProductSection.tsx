import { useEffect, useRef, useState, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PrimaryButton } from '@/components/PrimaryButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  flagshipProducts,
  homepageValueProducts,
  realLifeViews,
  type Product,
  type RealLifeView,
} from '@/data/products';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { buildTradeMeR18AdultSearchUrl } from '@/lib/trademe';

gsap.registerPlugin(ScrollTrigger);

const CONTACT_EMAIL = 'dollworldwide2023@gmail.com';

interface SelectedRealLifeMedia {
  product: Product;
  view: RealLifeView;
}

function buildRealLifeRequestUrl(productName: string, viewLabel: string) {
  const subject = `${viewLabel} for ${productName}`;
  const body = `Hi Doll Worldwide,\n\nPlease send me the real-life media for ${productName}: ${viewLabel}.\n\nThanks.`;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildTradeMeRequestUrl(productName: string) {
  const subject = `Trade Me link for ${productName}`;
  const body = `Hi Doll Worldwide,\n\nPlease send me the current Trade Me listing for ${productName}.\n\nThanks.`;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

interface ProductCardContentProps {
  product: Product;
  tradeMeUrl?: string;
  realLifeOpen: boolean;
  onToggleRealLife: () => void;
  onSelectRealLife: (view: RealLifeView) => void;
}

function ProductCardContent({
  product,
  tradeMeUrl,
  realLifeOpen,
  onToggleRealLife,
  onSelectRealLife,
}: ProductCardContentProps) {
  return (
    <>
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="text-label text-xs bg-gold text-noir-900 px-3 py-1">{product.tag}</span>
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 40%)',
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-display-h4 text-cream-100 mb-1">{product.name}</h3>
        <p className="font-body text-sm text-cream-300 mb-3">{product.specs}</p>
        <div className="flex items-center justify-between">
          <span className="font-display text-3xl text-gold">{product.price}</span>
          <span className="font-body text-xs text-cream-300">NZD</span>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-3">
          <a
            href={tradeMeUrl ?? buildTradeMeRequestUrl(product.name)}
            target={tradeMeUrl ? '_blank' : undefined}
            rel={tradeMeUrl ? 'noopener noreferrer' : undefined}
            className="inline-flex w-full items-center justify-center bg-gold px-5 py-3 text-button text-noir-900 transition-all duration-300 hover:bg-gold-light"
          >
            Trade Me
          </a>
          <button
            type="button"
            onClick={onToggleRealLife}
            aria-expanded={realLifeOpen}
            className="inline-flex w-full items-center justify-center border border-gold px-5 py-3 text-button text-gold transition-all duration-300 hover:bg-gold hover:text-noir-900"
          >
            See me in real life
          </button>
        </div>
        {realLifeOpen && (
          <div className="mt-4 border border-gold/30 bg-noir-900/60 p-3">
            <p className="font-body text-xs text-cream-300 mb-3">
              Choose what you want to see inside the site:
            </p>
            <div className="grid gap-2">
              {realLifeViews.map((view) => (
                <button
                  key={view.id}
                  type="button"
                  onClick={() => onSelectRealLife(view)}
                  className="flex items-center justify-between border border-cream-300/15 px-4 py-2.5 font-body text-sm text-cream-100 transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  <span>{view.label}</span>
                  <span className="text-gold">→</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function RealLifeMediaDialog({
  selected,
  onClose,
}: {
  selected: SelectedRealLifeMedia | null;
  onClose: () => void;
}) {
  const media = selected?.product.realLifeMedia?.[selected.view.id] ?? [];

  return (
    <Dialog open={Boolean(selected)} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="border-gold/30 bg-noir-900 text-cream-100 sm:max-w-3xl">
        {selected && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl text-cream-100">
                {selected.product.name} — {selected.view.label}
              </DialogTitle>
              <DialogDescription className="font-body text-cream-300">
                {selected.view.description}
              </DialogDescription>
            </DialogHeader>

            {media.length > 0 ? (
              <div className="grid gap-4">
                {media.map((item) => (
                  <div key={item.src} className="overflow-hidden bg-noir-700">
                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        poster={item.poster}
                        controls
                        playsInline
                        className="max-h-[70vh] w-full object-contain"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title ?? `${selected.product.name} ${selected.view.label}`}
                        className="max-h-[70vh] w-full object-contain"
                      />
                    )}
                    {item.title && (
                      <p className="p-3 font-body text-sm text-cream-300">{item.title}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-gold/20 bg-noir-700 p-6 text-center">
                <p className="font-display text-xl text-gold mb-3">Real media opens here.</p>
                <p className="font-body text-sm text-cream-300 mb-5">
                  Upload this product&apos;s video or photos and this popup will play them inside the website, without sending buyers to Google Drive or another app.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <a
                    href={buildRealLifeRequestUrl(selected.product.name, selected.view.label)}
                    className="inline-flex items-center justify-center bg-gold px-5 py-3 text-button text-noir-900 transition-colors hover:bg-gold-light"
                  >
                    Request this media
                  </a>
                  <a
                    href="tel:02885146884"
                    className="inline-flex items-center justify-center border border-gold px-5 py-3 text-button text-gold transition-colors hover:bg-gold hover:text-noir-900"
                  >
                    Call 028 8514 6884
                  </a>
                </div>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

interface ProductGridProps {
  products: Product[];
  gridRef?: RefObject<HTMLDivElement | null>;
  className?: string;
}

export function ProductGrid({ products, gridRef, className = 'grid grid-cols-1 md:grid-cols-3 gap-6' }: ProductGridProps) {
  const [openRealLifeProduct, setOpenRealLifeProduct] = useState<string | null>(null);
  const [selectedRealLifeMedia, setSelectedRealLifeMedia] = useState<SelectedRealLifeMedia | null>(null);

  return (
    <>
      <div ref={gridRef} className={className} style={{ perspective: '1200px' }}>
        {products.map((product) => {
          const tradeMeUrl = product.tradeMeSearchCode
            ? buildTradeMeR18AdultSearchUrl(product.tradeMeSearchCode)
            : undefined;
          const realLifeOpen = openRealLifeProduct === product.id;

          return (
            <div key={product.id} className="product-card bg-noir-600 overflow-hidden group will-change-transform">
              <ProductCardContent
                product={product}
                tradeMeUrl={tradeMeUrl}
                realLifeOpen={realLifeOpen}
                onToggleRealLife={() => setOpenRealLifeProduct(realLifeOpen ? null : product.id)}
                onSelectRealLife={(view) => setSelectedRealLifeMedia({ product, view })}
              />
            </div>
          );
        })}
      </div>
      <RealLifeMediaDialog
        selected={selectedRealLifeMedia}
        onClose={() => setSelectedRealLifeMedia(null)}
      />
    </>
  );
}

export function ProductSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current || reduced) return;
    const header = headerRef.current;
    const cards = cardsRef.current.querySelectorAll('.product-card');
    const images = cardsRef.current.querySelectorAll('.product-card img');

    gsap.set(header, { opacity: 0, y: 36 });
    gsap.set(cards, {
      opacity: 0,
      y: 110,
      scale: 0.88,
      rotateX: 14,
      filter: 'blur(12px)',
      transformOrigin: 'center bottom',
    });
    gsap.set(images, { scale: 1.12 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 76%',
        toggleActions: 'play none none none',
      },
    });

    tl.to(header, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: 'power3.out',
    })
      .to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 1.15,
        stagger: 0.18,
        ease: 'expo.out',
      }, '-=0.25')
      .to(images, {
        scale: 1,
        duration: 1.25,
        stagger: 0.18,
        ease: 'power3.out',
      }, '<');
  }, [reduced]);

  return (
    <section id="product" ref={sectionRef} className="relative bg-noir-700 py-[110px] md:py-[120px] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[280px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_68%)] pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-label text-gold block mb-4">FEATURED AUCKLAND STOCK</span>
          <div className="w-[60px] h-[1px] bg-gold mx-auto mb-6" />
          <h2 className="text-display-h2 text-cream-100 mb-4">$999 Models Ready to View or Ship.</h2>
          <p className="text-body-large text-cream-200 max-w-2xl mx-auto">
            Browse selected silicone-head + TPE-body models from current stock. Each card can link to the matching Trade Me listing or search code, so renewed listings can still be found when the title marker stays the same.
          </p>
        </div>

        {flagshipProducts.length > 0 && (
          <div className="mb-10">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <span className="text-label text-gold block mb-2">FLAGSHIP MODEL</span>
                <h3 className="font-display text-display-h3 text-cream-100">Premium full-silicone option</h3>
              </div>
              <span className="hidden sm:block font-body text-sm text-cream-300">Separate from the $999 best-value range</span>
            </div>
            <ProductGrid
              products={flagshipProducts}
              className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.72fr)] gap-6"
            />
          </div>
        )}

        <ProductGrid products={homepageValueProducts} gridRef={cardsRef} />

        <div className="text-center mt-12">
          <p className="font-body text-sm text-cream-300 mb-4">
            More models and real media are available on request. Call to see the latest photos, videos, and full catalogue.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <SecondaryButton href="/models">View All Models</SecondaryButton>
            <PrimaryButton href="tel:02885146884">Call to See Current Stock</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
