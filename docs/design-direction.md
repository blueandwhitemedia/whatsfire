# What's FIRE? design direction (#12.14)

Draft for Jonathan's approval. The palette and fonts are already in `tailwind.config.ts`.

## Palette
| Role | Name | Hex |
|---|---|---|
| Primary, headers, footer | navy | #1B2A4A |
| Positive, links, success | forest | #2D6A4F |
| Accent, flame mark | amber | #F4A228 |
| Page background | cream | #F8F7F2 |
| Body text | charcoal | #1A1A2E |

Contrast rule: white text on amber-500 is only about 2:1. Button labels on amber use charcoal, or use amber-700 (#B56D0C) with white text. Check against #12.50.

## Fonts
- Headings: Lora (serif, via `font-display`). Warm and bookish, fits a "guide" voice.
- Body and UI: Inter.

## Feel
Calm and trustworthy, lots of whitespace, cream pages, navy anchors, one amber accent per screen. Real numbers in small tables and worked examples over decorative graphics. No stock photos of beaches or yachts.

## Reference sites
- Investopedia: clear definitions, glossary links, article structure.
- NerdWallet: calculators and comparison layout, clean cards.
- Mr. Money Mustache: plain, personal voice (take the tone, not the layout).
- Khan Academy: friendly teaching feel, step by step.
- Wikipedia: restrained typography and strong internal linking.

## Placeholders
Favicon, app icon and share image are placeholders (amber flame on navy) until the logo in #12.13 is ready.
