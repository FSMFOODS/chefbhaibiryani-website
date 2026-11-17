# Decision

Build navigation, scroll reveals, menu filtering, marquee control, and icons with native browser APIs and inline SVG. Do not load Boxicons or ScrollReveal.

# Context

The previous site loaded Boxicons from jsDelivr and ScrollReveal from unpkg. Both were only used for decorative icons and reveal animations. The site has no build step and is deployed directly from the repository root.

# Reason

Removing the CDNs reduces runtime requests and third-party failure points. `IntersectionObserver`, CSS transitions, and inline SVG cover the same needs without adding tooling or dependencies.

# Consequences

- The page depends only on Google Fonts at runtime, in addition to ordering and map links.
- Icons are maintained inline in `index.html`; update the markup directly when changing them.
- Reveal, menu, and marquee behavior must continue to honor `prefers-reduced-motion` and keyboard/ARIA expectations.
- There is no framework or build system to absorb future interaction complexity; keep new interactions small and native.
