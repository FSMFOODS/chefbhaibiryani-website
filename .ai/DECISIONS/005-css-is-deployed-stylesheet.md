# Decision

Treat `assets/css/styles.css` as the authoritative stylesheet; `assets/scss/styles.scss` is retained but not compiled by any repository tooling.

# Context

The page loads only `assets/css/styles.css`. The SCSS file mirrors the base template but omits later rules that were added directly to the CSS (marquee animation, Swiggy/Zomato buttons, order button layout, Lobster font, `.footer__logo__img`, `.menu__content__text`).

# Reason

Not documented; inferred from implementation. No Sass compiler, package.json, or build script is present, and recent style commits modified only the CSS file.

# Consequences

- Style changes must be made in `styles.css` or they will not appear on the site.
- If SCSS is edited, it must be manually compiled and the CSS updated; otherwise the two files diverge further.
- The SCSS file can mislead contributors into editing a non-deployed source.
- A future cleanup should either add a documented Sass build or retire the SCSS file.
