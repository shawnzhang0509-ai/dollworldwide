#!/usr/bin/env python3
"""Bake price masks into the Trade Me sold-list screenshot for public/images/trademe-recent-sales.jpg.

Usage:
  1. Save your phone screenshot as public/images/trademe-recent-sales-source.jpg
  2. python3 scripts/mask-trademe-screenshot.py

Mask regions match the four right-side price rows on a typical Trade Me Sold tab layout.
"""

from __future__ import annotations

from pathlib import Path

try:
    from PIL import Image, ImageDraw
except ImportError as exc:
    raise SystemExit('Install Pillow: pip install pillow') from exc

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'public/images/trademe-recent-sales-source.jpg'
OUTPUT = ROOT / 'public/images/trademe-recent-sales.jpg'

# Fractions of width/height — tuned for iPhone Trade Me Sold list (4 rows)
MASKS = [
    (0.56, 0.268, 0.96, 0.310),
    (0.56, 0.415, 0.96, 0.457),
    (0.56, 0.562, 0.96, 0.604),
    (0.56, 0.708, 0.96, 0.750),
]
FILL = (26, 26, 28)  # #1a1a1c — Trade Me dark list background


def main() -> None:
    if not SOURCE.exists():
        raise SystemExit(
            f'Missing source image: {SOURCE}\n'
            'Save your Trade Me Sold screenshot there, then run this script again.'
        )

    image = Image.open(SOURCE).convert('RGB')
    width, height = image.size
    draw = ImageDraw.Draw(image)

    for x1f, y1f, x2f, y2f in MASKS:
        box = (int(x1f * width), int(y1f * height), int(x2f * width), int(y2f * height))
        draw.rectangle(box, fill=FILL)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    image.save(OUTPUT, format='JPEG', quality=92, optimize=True)
    print(f'Wrote {OUTPUT} ({width}x{height})')


if __name__ == '__main__':
    main()
