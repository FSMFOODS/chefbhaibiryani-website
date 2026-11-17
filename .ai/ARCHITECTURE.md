# Architecture

## System Overview

Single-page static marketing website hosted on GitHub Pages under the custom domain `chefbhaibiryani.com`. There is no server-side code, database, authentication, API, build step, or package manager.

Content lives in `index.html`. The menu is generated in the browser from a JavaScript array with filtering and URL state. Direct orders go to WhatsApp; Swiggy and Zomato remain as delivery-platform options.

```text
Browser
  |
  | GET / (GitHub Pages)
  v
index.html
  |-- assets/css/styles.css        deployed styles
  |-- assets/js/main.js            navigation, scroll, reveals, clipboard, marquee
  |-- assets/js/menu.js            menu groups, prices, filtering, URL sync, section rendering
  |-- assets/img/logo.svg          brand emblem / favicon
  |-- assets/img/hero.png          transparent hero cutout
  |-- assets/img/menu/*.jpg        optimized menu photos
  |-- assets/img/gallery/*.png     transparent quality badges
  |
  |-- Google Fonts (Fraunces, Manrope)
  |-- order links -> WhatsApp / Swiggy / Zomato (external)
  |-- address link -> Google Maps (external)
```

## Repository Layout

```text
/
|-- index.html                  All page sections, copy, metadata, JSON-LD
|-- CNAME                       Custom domain: chefbhaibiryani.com
|-- README.md                   Placeholder
|-- AGENTS.md                   Pointer to .ai context
|-- .ai/                        Persistent agent context and decisions
|-- assets/
    |-- css/styles.css          Authoritative deployed stylesheet
    |-- scss/styles.scss        Stale SCSS; not compiled and not in sync
    |-- js/main.js              Page interactions and scroll behavior
    |-- js/menu.js              Menu data and rendering
    |-- img/
        |-- logo.svg
        |-- hero.png
        |-- gallery/            Five resized transparent quality badges
        |-- menu/               Nine optimized menu JPEGs
```

## Page Sections

| Section | ID | Notes |
|---|---|---|
| Home / hero | `home` | Primary "Order on WhatsApp" CTA; proof chips; floating hero image |
| Quality promise + marquee | none | Five badge images, duplicated track, pause/play control |
| Services | `services` | Three cards with inline SVG icons |
| Menu | `menu` | Empty `#menuContainer`, populated by `menu.js`; filters and count |
| About | `about` | Story copy plus a quote panel |
| Contact | `contact` | `tel:` call link, copy-number toast, address/directions, hours |
| Footer | none | Brand, explore links, order links, address, phone, hours |

A skip link targets `#main`. Section headings use `aria-labelledby`.

## JavaScript Responsibilities

Both files are classic scripts loaded at the end of `body`, in this order: `main.js`, then `menu.js`. They share the global lexical scope, so top-level identifiers must remain unique across both files.

`assets/js/main.js`:

- Toggles the mobile nav using `body.nav-open` and updates `aria-expanded`.
- Closes the nav on link click, Escape, outside click, or resize to desktop.
- Highlights the active nav link with `IntersectionObserver`.
- Toggles header elevation and the scroll-top button on scroll.
- Reveals `.reveal` elements with `IntersectionObserver`; skips animation under reduced motion.
- Copies the phone number and shows a toast with success/failure feedback.
- Toggles the quality marquee via `aria-pressed` and updates its label.
- Writes the current year into the footer.

`assets/js/menu.js`:

- Defines `menuGroups`: grouped sections with `title`, `category`, `description`, optional `image`/`imageAlt` or an `images` collage, `items`, an optional `note`, and optional `featured`/`cta` values.
- `items` entries are `{ name, price }` or `{ name, priceLabel, note }` for pre-order items without a listed price.
- Renders accessible grouped sections with price rows into `#menuContainer`; image groups alternate media/content sides, and Add-ons uses a four-image collage.
- Filters sections by category using buttons with `data-filter` and `aria-pressed`.
- Updates the live result count and the `?category=` query parameter via `history.replaceState`.
- Handles `popstate` and an empty-state fallback.
- Links each standard menu section to WhatsApp at `+91 96771 49451` with the section's item names, portions, and prices prefilled in the message; Swiggy and Zomato links remain with `rel="noopener"`, and the party/special section uses a `tel:` call CTA.

The menu markup is not duplicated in `index.html`; the `<noscript>` block summarizes the categories and links to the ordering site.

## Styling

- `assets/css/styles.css` is deployed directly and is the source of truth. `assets/scss/styles.scss` is stale, uncompiled, and intentionally unmaintained.
- CSS custom properties define the palette, typography, spacing, radii, shadows, and easing.
- Palette: forest greens (`#032c14` to `#1a6b3d`), saffron (`#e8a317`), cream surfaces, and warm neutrals.
- Fonts: Fraunces (display) and Manrope (body), loaded from Google Fonts with `display=swap`; preconnects are set.
- Layout uses CSS Grid, Flexbox, `clamp()` fluid sizing, and `text-wrap: balance`.
- Breakpoints: 599px, 700px, 800px, 899px (mobile nav), and 900px.
- Menu sections stack single-column below 900px and switch to alternating two-column media/content layouts at 900px and above; the party/special section remains full-width.
- Interactive elements use `:focus-visible`, hover styles behind `(hover: hover) and (pointer: fine)`, and a minimum 44px touch size for primary controls.
- Motion is limited to transform/opacity, staggered reveals, card entrances, a floating hero image, a slow dashed-ring rotation, and the marquee. All major motion is disabled or reduced under `prefers-reduced-motion: reduce`.
- The marquee pauses on hover and via its explicit button.

## Accessibility and SEO

- Semantic landmarks: header, main, sections, footer, nav, address.
- Skip link, visible focus styles, and ARIA labels on icon-only controls.
- Mobile nav uses `aria-expanded`, `aria-controls`, Escape handling, and an outside-click overlay.
- Filters use pressed state; results are announced with `aria-live`; the toast uses `role="status"`.
- Images have dimensions and descriptive alt text, with empty alt for decorative duplicates.
- Reduced-motion support covers animations, transitions, marquee, and smooth scrolling.
- Metadata includes description, canonical URL, Open Graph/Twitter tags, theme color, and favicon.
- Restaurant JSON-LD includes name, URL, image, phone, cuisine, menu anchor, address, and daily hours.

## Runtime Dependencies

| Dependency | Usage |
|---|---|
| Google Fonts | Fraunces and Manrope |
| WhatsApp | Direct ordering via `https://wa.me/919677149451` |
| Swiggy, Zomato | Delivery partner order links |
| Google Maps | Address directions |

Boxicons and ScrollReveal were removed. There are no other runtime CDNs.

## Data Flow

All content is static except:

1. Menu sections and price rows rendered from `menuGroups` at page load.
2. Category filtering and the `?category=` URL state.
3. Navigation, scroll, reveal, marquee, clipboard, and toast interactions.
4. Outbound navigation to ordering platforms and Google Maps.

There is no persistence, user account, analytics code, or server communication.

## Assets

- Menu photos: 720x480 JPEG, approximately 60-90 KB each.
- Gallery badges: 400x400 PNG with transparent corners.
- Hero: transparent PNG at 443x440; logo: SVG.
- There is no automated image optimization pipeline. Follow the existing format/size policy when replacing assets.
- Unused hero photos and template SVGs were removed.

## Deployment / Runtime

- GitHub Pages serves the repository root (inferred from repository layout and `CNAME`; no Pages workflow file exists).
- Custom domain `chefbhaibiryani.com` via `CNAME`.
- No environment variables, secrets, server, or process manager in the repository.

## Testing / Tooling

No repository test suite, linter, formatter, build script, or CI. The latest menu/ordering update was verified with a temporary Playwright/Edge script outside the repository:

- 390, 768, 900, and 1440px viewports; no horizontal overflow.
- Seven grouped menu sections and 33 price rows render without `undefined` text.
- Filter section counts, `?category=` sync, party pre-order copy, and add-ons filtering.
- WhatsApp order links present and no Petpooja links; Swiggy and Zomato links retained.
- Mobile nav open/close and Escape handling.
- Clipboard toast and copied value.
- Marquee pause/play state.
- Skip-link visibility on focus.
- Reduced-motion behavior.
- No console errors, page errors, failed requests, or broken images.

## Unknowns / Inferred

- GitHub Pages source branch/path: unknown; assumed default branch, root.
- Intended SCSS build process: unknown; the SCSS is stale and no compiler is configured.
- `README.md` remains a placeholder.
- Menu prices were manually transcribed from owner-supplied menu-board images; owner confirmation of the final transcription is pending.
- Cross-browser and physical-device behavior beyond Edge headless is unverified.
