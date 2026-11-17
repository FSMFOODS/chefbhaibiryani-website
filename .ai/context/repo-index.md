# Repository Context Index

No Repomix snapshot was generated because Repomix is not installed in this environment. The repository is small enough to read directly. Use this inventory to locate files.

## Root

| File | Purpose |
|---|---|
| `index.html` | Single page: header, hero, quality marquee, services, filterable menu, about, contact, footer, toast, scroll-top |
| `CNAME` | Custom domain `chefbhaibiryani.com` |
| `README.md` | Placeholder (title only) |
| `AGENTS.md` | Pointer to the canonical `.ai/` context |
| `.ai/` | Project context, decisions, tasks, session handoff, repository inventory |

## JavaScript

| File | Purpose |
|---|---|
| `assets/js/main.js` | Mobile nav, active link, header/scroll-top state, IntersectionObserver reveals, marquee pause/play, clipboard toast, footer year |
| `assets/js/menu.js` | `menuGroups` data; grouped section and price-row rendering; category filtering; live section count; `?category=` URL sync; order/call CTAs |

## Styles

| File | Purpose |
|---|---|
| `assets/css/styles.css` | Deployed stylesheet, about 1,770 lines; authoritative design system, grouped menu sections, and responsive rules |
| `assets/scss/styles.scss` | 543-line stale SCSS; not compiled and not in sync with the CSS |

## Images

| Path | Notes |
|---|---|
| `assets/img/logo.svg` | Brand emblem and favicon |
| `assets/img/hero.png` | Transparent hero cutout, 443x440 |
| `assets/img/gallery/*.png` | Five quality/halal/freshness badges, resized to 400x400 with transparency |
| `assets/img/menu/*.jpg` | Nine optimized menu photos, 720x480, roughly 60-90 KB each |

Removed: `assets/img/hero/` high-resolution photo set, old menu PNGs, and unused template SVGs (`culinary`, `dish`, `pizza`, `truck`).

## External Resources

- Google Fonts: Fraunces (display) and Manrope (body)
- WhatsApp direct orders (`https://wa.me/919677149451`), Swiggy, Zomato order links
- Google Maps directions link

Boxicons and ScrollReveal are no longer used.

## Verification

No repository test tooling exists. The latest menu/ordering update was verified with a temporary Playwright/Edge script outside the repository at 390, 768, 900, and 1440px widths, including grouped section/price-row counts, filters, URL sync, party pre-order copy, WhatsApp links with prefilled menu text and no Petpooja links, mobile nav, clipboard, marquee, skip link, reduced motion, broken images, failed requests, and console/page errors.

## Excluded From Context

`.git`, binary image content, no secrets present. There are no `.env` files, credentials, or tokens in the repository.
