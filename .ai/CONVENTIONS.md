# Conventions

These conventions reflect the current repository after the frontend overhaul.

## HTML

- Single `index.html`; sections are stacked in `main` in visual order and linked by IDs.
- Use semantic landmarks (`header`, `main`, `section`, `footer`, `nav`) and `aria-labelledby` for section headings.
- Keep the skip link as the first focusable element.
- Section wrappers use a section class plus `section`, for example `class="section menu"` with an `id`.
- Layout wrapper is `.container`, not the old `bd-container`.
- In-page navigation uses anchor hrefs (`#home`, `#menu`, etc.).
- Icons are inline SVG with `aria-hidden="true"` unless the icon is the only content of a labelled control.
- Use `alt=""` for decorative images and descriptive alt text for meaningful images.
- External links use `target="_blank"` and `rel="noopener"`.
- Give images explicit `width` and `height`; use `loading="lazy"` below the fold and `fetchpriority="high"` for the hero.
- Controls must have accessible names; icon-only buttons use `aria-label`.
- Keep the menu container empty in HTML; it is populated by `menu.js`.
- The `<noscript>` fallback must stay usable without JavaScript.

## CSS

- `assets/css/styles.css` is the authoritative stylesheet. Do not edit `assets/scss/styles.scss` expecting a site change; it is stale and not compiled.
- Use the existing custom properties for color, font, spacing, radius, shadow, and easing. Avoid introducing one-off values when a token fits.
- BEM-style naming is used for blocks/elements/modifiers, plus state classes such as `.is-visible`, `.is-scrolled`, `.nav-open`, `.active-link`, `.is-paused`, and `.is-swapping`.
- CSS is organized in this order: reset/tokens, base elements, layout, header/nav, buttons, hero, shared headings, promise/marquee, services, menu, about, contact, footer, fixed UI, reveal, keyframes, media queries, reduced motion.
- Use fluid values with `clamp()` and `text-wrap: balance` for display headings.
- Visual lift/transform hover effects live behind `@media (hover: hover) and (pointer: fine)` to avoid sticky touch states. Functional hover behaviors such as the marquee pause are allowed outside that query.
- Always provide `:focus-visible` styles; use `--saffron` for focus on dark panels.
- Primary interactive controls should meet a 44px minimum touch size.
- Use transform/opacity for motion. Avoid animating layout properties.
- Every new animation or transition must be neutralized or reduced under `prefers-reduced-motion: reduce`.
- Keep the mobile nav breakpoint at 899px and the desktop layout at 900px unless the navigation design changes.
- No `@import` for fonts; use `<link>` tags with preconnect.

## JavaScript

- Plain browser JavaScript; no modules, bundler, framework, or package manager.
- Scripts load at the end of `body`: `main.js`, then `menu.js`.
- Use `const`/`let`, arrow functions, `querySelector`/`getElementById`, and `forEach`.
- Top-level identifiers are shared across classic scripts. Check for name collisions before adding new top-level constants or functions.
- Use feature checks (`"IntersectionObserver" in window`) and media queries for progressive enhancement.
- Menu content is data-driven. Edit `menuGroups` in `menu.js`; use grouped sections with `title`, `category`, `description`, a single `image`/`imageAlt` or an `images` collage, `items`, and optional `note`, `featured`, and `cta`.
- Menu item shapes are `{ name, price }` or `{ name, priceLabel, note }` for pre-order/price-on-request rows.
- Category values are lowercase filter keys: `biryani`, `bucket`, `starters`, `addons`, `party`.
- Filter buttons use `data-filter`; selected state is `aria-pressed="true"`.
- Keep the `?category=` URL state in sync with filters.
- Menu sections are rendered with template strings into `#menuContainer`; image sections stack below 900px, alternate sides at 900px and above, while the party/special section is a full-width featured panel.
- Standard menu sections link to WhatsApp at `+91 96771 49451` with that section's items, portions, and prices prefilled via the `text` query parameter; Swiggy and Zomato links remain, and party/special orders use a `tel:` CTA.
- Avoid adding dependencies; the site should remain dependency-free apart from Google Fonts and outbound order links.
- Clipboard code must include a fallback and user feedback.
- Interactive controls must remain usable with keyboard and reduced motion enabled.

## Assets

- Images live under `assets/img/` with `menu/` and `gallery/` subfolders.
- Menu photos are 720x480 JPEGs at roughly 82% quality.
- Gallery badges are 400x400 PNGs with transparency preserved.
- Hero and logo stay as `hero.png` and `logo.svg`; transparency must be preserved.
- File names use lowercase snake_case for photos.
- There is no image pipeline. Match the existing format and dimensions when replacing assets.
- Do not reintroduce the removed `assets/img/hero/` photo set or unused template SVGs.
- Remove unused assets instead of keeping duplicates.

## Content

- Brand name uses "Chef Bhai Biriyani"; body copy uses "Biryani" where it refers to the dish.
- Do not rewrite brand spelling variants without owner approval.
- Menu categories are "Biryani", "Bucket Biryani", "Starters", "Add-ons", and "Party & Special".
- Phone number: `+91 80007 86767`.
- Timings: 11 AM - 11 PM, daily.
- Address: No. 1/1, Muthukumaran Street, Kamaraj Nagar, Avadi, Chennai 600071.
- Do not invent prices, availability, offers, ratings, or other unverified claims.

## Git

- Commit messages are short, imperative-ish descriptions.
- Work happens directly on the default branch; no branch naming convention is established.
- Do not commit temporary screenshots, test scripts, or generated verification output.

## Avoid

- Do not add a build system, framework, package manager, or CI for routine edits.
- Do not reintroduce Boxicons or ScrollReveal.
- Do not move menu markup into HTML or duplicate it.
- Do not hard-code colors or spacing when a custom property fits.
- Do not add secrets or environment configuration.
- Do not claim SCSS is current; it is not.
- Do not remove reduced-motion, focus, or ARIA behavior when adjusting styles.
