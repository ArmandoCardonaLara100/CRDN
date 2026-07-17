# CRDN — Architecture Studio

A premium, minimalist portfolio website for the CRDN architecture studio.
Single-page experience with an editorial "monograph plate" design system:
every image is a numbered, hairline-framed plate with a drafting-style caption.

## Stack

- **Next.js 16** (App Router, static prerender) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (design tokens in `src/app/globals.css`)
- **Framer Motion** (scroll reveals, counters, modal choreography — honours `prefers-reduced-motion`)
- **Radix UI Dialog** (accessible modals: focus trap, escape, labelling)
- **Lucide** icons + hand-drawn brand glyphs
- **next/font** (Instrument Serif · Instrument Sans · IBM Plex Mono)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
```

Deploy on Vercel: import the repo, no configuration needed.

## Project structure

```
src/
  app/
    layout.tsx          # fonts, metadata, skip link
    page.tsx            # section composition
    globals.css         # palette tokens, type stacks, shell/eyebrow utilities
    icon.svg            # favicon
  lib/
    content.ts          # ⟵ ALL copy & data — edit this to publish real content
    motion.ts           # shared easing, variants, viewport config
  components/
    layout/             # Header (nav, scrollspy, mobile menu), Footer, MotionShell
    sections/           # Hero, About, Services, Projects (+Modal), Gallery,
                        # Process, Stats, Testimonials, Contact
    ui/                 # Plate, PlateArt, PlateCarousel, Modal, Reveal,
                        # SectionHeader, ButtonLink, Counter, BrandIcon
```

## Palette (brand-locked)

| Token     | Hex       | Use                              |
| --------- | --------- | -------------------------------- |
| `bone`    | `#FAF6F0` | primary background               |
| `plaster` | `#F4EAE0` | secondary background             |
| `sand`    | `#F4DFC8` | accent surface                   |
| `ink`     | `#000000` | primary text                     |
| `umber`   | `#5B5347` | derived neutral — secondary text |
| `night`   | `#14110C` | derived neutral — inverted bands |

## Replacing the placeholder images

Every image on the site is a **plate**: until a photograph is supplied, an
architectural line drawing (SVG) renders in its place. To swap in real
photography, edit `src/lib/content.ts` and add a `src` to any plate:

```ts
plates: [
  {
    motif: "facade",                    // fallback drawing
    src: "/images/casa-umbral-01.jpg",  // ⟵ add this line
    caption: "South elevation — stone volumes toward the lake",
    alt: "Casa Umbral seen from the lake at dusk",
  },
],
```

Drop the files in `public/images/`. The component switches to a fully
optimized `next/image` automatically — no markup changes needed.
The same applies to the hero plate, the About portrait and every gallery item.

## Publishing real content

Everything editable lives in `src/lib/content.ts`:
studio details and links (`studio`), hero copy, biography, services,
the six projects, gallery captions, process steps, statistics,
testimonials and contact channels. Components never hard-code copy.

## Accessibility & performance

- Fully static output, zero third-party requests, self-hosted fonts
- Semantic landmarks, skip-to-content link, visible focus states
- All interactive elements are labelled; carousels are keyboard-navigable
- Animations disabled/reduced automatically under `prefers-reduced-motion`
- AA-checked text contrast on every surface, including the dark bands
