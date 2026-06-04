import { useEffect, useRef, useState, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PrimaryButton } from '@/components/PrimaryButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  homepageValueProducts,
  realLifeMediaCategories,
  type Product,
  type RealLifeMediaCategory,
  type VideoAsset,
  type PhotoAsset,
} from '@/data/products';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { buildTradeMeR18AdultSearchUrl } from '@/lib/trademe';

gsap.registerPlugin(ScrollTrigger);

const CONTACT_EMAIL = 'dollworldwide2023@gmail.com';

interface SelectedRealLifeMedia {
  product: Product;
  category: RealLifeMediaCategory;
}

function buildRealLifeRequestUrl(productName: string, categoryLabel: string) {
  const subject = `${categoryLabel} for ${productName}`;
  const body = `Hi Doll Worldwide,\n\nPlease send me the real-life media for ${productName}: ${categoryLabel}.\n\nThanks.`;

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
  onSelectRealLife: (category: RealLifeMediaCategory) => void;
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
          <span className="text-label text-xs px-3 py-1 bg-gold text-noir-900">
            {product.tag}
          </span>
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
        {product.tradeMeSearchCode && (
          <p className="font-body text-xs text-gold mb-2">
            Trade Me SKU: <span className="font-medium tracking-wide">{product.tradeMeSearchCode}</span>
          </p>
        )}
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
              {realLifeMediaCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => onSelectRealLife(category)}
                  className="flex items-center justify-between border border-cream-300/15 px-4 py-2.5 font-body text-sm text-cream-100 transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  <span>{category.label}</span>
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
  const storedMedia = selected?.product.realLifeMedia?.[selected.category.id] ?? [];
  const media =
    selected?.category.id === 'clothedPhotos' && storedMedia.length === 0
      ? [{ src: selected.product.image, title: `${selected.product.name} main photo` }]
      : storedMedia;
  const isVideoCategory = selected?.category.mediaType === 'videos';

  return (
    <Dialog open={Boolean(selected)} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="top-[max(0.5rem,2.5dvh)] max-h-[min(92dvh,880px)] translate-y-0 border-gold/30 bg-noir-900 text-cream-100 sm:max-w-3xl flex flex-col gap-3 overflow-hidden p-0 sm:p-6">
        {selected && (
          <>
            <DialogHeader className="shrink-0 space-y-2 px-6 pb-2 pt-6 pr-14 text-left sm:px-0 sm:pb-0 sm:pt-0 sm:pr-10">
              <DialogTitle className="font-display text-2xl text-cream-100">
                {selected.product.name} — {selected.category.label}
              </DialogTitle>
              <DialogDescription className="font-body text-cream-300">
                {selected.category.description}
              </DialogDescription>
              {media.length > 1 && (
                <p className="font-body text-xs text-cream-400">
                  Scroll sideways to browse; use trackpad shift-scroll or touch swipe on smaller screens.
                </p>
              )}
            </DialogHeader>

            {media.length > 0 ? (
              <div className="min-h-0 flex-1 overflow-x-auto overflow-y-auto overscroll-contain px-6 pb-6 [-webkit-overflow-scrolling:touch] sm:px-0 sm:pb-2">
                <div
                  className="flex w-max flex-row gap-4 snap-x snap-mandatory scroll-smooth pb-1"
                  tabIndex={0}
                  aria-label={`${selected.category.label} gallery`}
                >
                {isVideoCategory
                  ? (media as VideoAsset[]).map((item) => (
                      <div
                        key={item.src}
                        className="snap-center shrink-0 w-[min(88vw,520px)] max-w-[min(88vw,520px)] overflow-hidden rounded-md border border-cream-300/10 bg-noir-700"
                      >
                        <video
                          src={item.src}
                          poster={item.poster}
                          controls
                          playsInline
                          preload="metadata"
                          className="mx-auto max-h-[min(48vh,420px)] w-full object-contain"
                        />
                        {item.title && (
                          <p className="p-3 font-body text-sm text-cream-300">{item.title}</p>
                        )}
                      </div>
                    ))
                  : (media as PhotoAsset[]).map((item) => (
                      <div
                        key={item.src}
                        className="snap-center shrink-0 w-[min(88vw,520px)] max-w-[min(88vw,520px)] overflow-hidden rounded-md border border-cream-300/10 bg-noir-700"
                      >
                        <img
                          src={item.src}
                          alt={item.alt ?? item.title ?? `${selected.product.name} ${selected.category.label}`}
                          className="mx-auto max-h-[min(48vh,420px)] w-full object-contain"
                        />
                        {item.title && (
                          <p className="p-3 font-body text-sm text-cream-300">{item.title}</p>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div className="mx-6 mb-6 border border-gold/20 bg-noir-700 p-6 text-center sm:mx-0 sm:mb-0">
                <p className="font-display text-xl text-gold mb-3">{selected.category.label} opens here.</p>
                <p className="font-body text-sm text-cream-300 mb-5">
                  Add files for this product and this popup will show them inside the website, without sending buyers to Google Drive or another app.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <a
                    href={buildRealLifeRequestUrl(selected.product.name, selected.category.label)}
                    className="inline-flex items-center justify-center bg-gold px-5 py-3 text-button text-noir-900 transition-colors hover:bg-gold-light"
                  >
                    Request {selected.category.label}
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
            <div
              key={product.id}
              className="product-card relative overflow-hidden group will-change-transform bg-noir-600"
            >
              <ProductCardContent
                product={product}
                tradeMeUrl={tradeMeUrl}
                realLifeOpen={realLifeOpen}
                onToggleRealLife={() => setOpenRealLifeProduct(realLifeOpen ? null : product.id)}
                onSelectRealLife={(category) => setSelectedRealLifeMedia({ product, category })}
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
