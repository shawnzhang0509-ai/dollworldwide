# Product upload guide

Products are managed in `src/data/products.ts`.

## Add product images or videos

Put files under `public/media/<product-id>/`.

Example:

Use the same simple folders as the R2 bucket:

```txt
public/media/DWWD06/主图/01.webp
public/media/DWWD06/聊天图/01.webp
public/media/DWWD06/聊天图/02.webp
public/media/DWWD06/视频/01.mp4
public/media/DWWD06/视频/02.mp4
```

Files in `public` are available on the website with paths like:

```txt
/media/DWWD06/主图/01.webp
/media/DWWD06/聊天图/01.webp
/media/DWWD06/视频/01.mp4
```

## Add a product

Add one object to the `products` array in `src/data/products.ts`:

```ts
{
  id: 'aria',
  name: 'Aria',
  image: '/media/aria/main.jpg',
  price: '$999',
  tag: 'BEST SELLER',
  specs: '165cm · D-Cup · Silicone Head · TPE Body',
  tier: 'best-value',
  featured: true,
  tradeMeSku: '01',
  tradeMeSearchCode: 'DWWD01',
  realLifeMedia: {
    clothedPhotos: [
      { src: '/media/DWWD01/主图/01.webp', title: 'Clothed photo 01' },
    ],
    nakedPhotos: [
      { src: '/media/DWWD01/聊天图/01.webp', title: 'Naked photo 01' },
      { src: '/media/DWWD01/聊天图/02.webp', title: 'Naked photo 02' },
    ],
    videos: [
      { src: '/media/DWWD01/视频/01.mp4', title: 'Video 01', poster: '/media/DWWD01/主图/01.webp' },
    ],
  },
}
```

Each `See me in real life` popup now maps directly to your R2 folders:

- `Clothed Photos`: `主图` or `Clothed Photos` (e.g. `DWWD01/Clothed Photos/…`)
- `Naked Photos`: `聊天图`, `Naked Photos`, or `Naked/photos` (e.g. `DWWD06/Naked/photos/…`)
- `Videos`: `视频` or `Videos`

### Generate draft JSON from R2

Copy `.env.example` to `.env`, fill in R2 API credentials and your public `r2.dev` base URL, then run `npm run r2:scan`. The script skips root prefixes `DWWD06/` and `flagship-skin-texture/` by default (override with `R2_IGNORE_PREFIXES`), walks nested keys under each other root folder, maps `主图` / `聊天图` / `视频` plus common aliases (e.g. `视频1`, `聊天视频`), and writes `scripts/r2-scan-output.json` for you to merge into `products` in `src/data/products.ts`.

## Recommended structured feed

When sending products in bulk, use this JSON shape. Use full public R2 URLs, not bucket-internal paths like `dollworldwide-media/DWWD06/...`.

```json
[
  {
    "id": "DWWD06",
    "name": "Xina",
    "image": "https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD06/Naked/photos/2236145526.jpg",
    "price": "$999",
    "tag": "READY STOCK",
    "specs": "Silicone Head · TPE Body",
    "tier": "best-value",
    "featured": false,
    "tradeMeSearchCode": "DWWD06",
    "realLifeMedia": {
      "clothedPhotos": [
        {
          "src": "https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD06/主图/01.webp",
          "title": "Xina clothed photo 01"
        }
      ],
      "nakedPhotos": [
        {
          "src": "https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD06/聊天图/01.webp",
          "title": "Xina naked photo 01"
        }
      ],
      "videos": [
        {
          "src": "https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD06/视频/01.mp4",
          "title": "Xina video 01",
          "poster": "https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD06/主图/01.webp"
        }
      ]
    }
  }
]
```

Required fields:

- `id`: same as the Trade Me marker, e.g. `DWWD06`.
- `name`: display name.
- `image`: main product card image.
- `price`: e.g. `$999`.
- `tier`: `best-value` (all models are $999).
- `tradeMeSearchCode`: same marker used in the Trade Me title.

Optional fields:

- `featured`: `true` shows the product on the homepage; `false` keeps it on `/models` only.
- `realLifeMedia`: `clothedPhotos`, `nakedPhotos`, and `videos` for the in-site popup.

## Product tiers

- `best-value`: the $999 silicone-head + TPE-body range.
- `tradeMeSearchCode`: display on the site card and used for Trade Me search links (e.g. `DWWD01`).

Set `featured: true` for products that should appear on the homepage. All products appear on `/models`.

## Video hosting recommendation

For SEO and buyer trust, avoid Google Drive links on the live site. Use direct video URLs that can play inside the website:

- local files under `public/media` for small files,
- Vercel Blob,
- Cloudflare R2,
- Bunny CDN/Stream.

The buyer should stay on the website when opening `See me in real life`.
