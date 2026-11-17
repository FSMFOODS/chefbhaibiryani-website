# Tasks and Project State

## Current Work

The latest session updated the menu to the owner's new two-board menu while preserving the static, no-build architecture.

Completed:

- Replaced the old 9-item `menuItems` card model with a grouped `menuGroups` model: 7 sections and 33 price rows.
- Added Chicken, Mutton, Plain/Egg/65, Bucket, Starters, Add-ons, and Party & Special sections.
- Added price-row rendering with portions/notes, a four-image Add-ons collage, alternating media/content sections, and a featured party panel with a call CTA.
- Updated filters to `all`, `biryani`, `bucket`, `starters`, `addons`, and `party`, including live counts and `?category=` URL sync.
- Updated the menu lead, count text, `<noscript>` fallback, and price/order note in `index.html`.
- Updated menu styling in `assets/css/styles.css` for grouped sections, price rows, collage, featured panel, responsive stacking, hover, and reduced motion.
- Replaced Petpooja direct-order links with WhatsApp ordering at `+91 96771 49451` across the header, hero, menu sections, menu note, and footer; menu-section CTAs prefill a WhatsApp message with that section's items and prices. Swiggy and Zomato links remain.
- Verified in Edge headless via Playwright at 390, 768, 900, and 1440 widths: 7 sections, 33 price rows, filter counts, URL sync, party pre-order copy, mobile add-ons filter, WhatsApp links with prefilled menu text and no Petpooja links, clipboard, mobile nav, marquee, skip link, no overflow, no broken images, and no console/page errors.

Previously completed:

- Full frontend overhaul, dependency removal, accessibility fixes, asset optimization, and responsive verification.

## Confirmed TODO / Incomplete Work

1. **Owner review of the new menu.** Confirm all transcribed item names, portions, prices, and the pre-order/minimum-order wording before publishing.
2. **Real-device QA.** Test on iOS Safari, Android Chrome, desktop Safari, and Firefox; only Edge headless was verified.
3. **SCSS decision.** Either retire `assets/scss/styles.scss` or explicitly bring it back into sync. It is stale and not compiled.
4. **README.** Replace the placeholder with local preview and deployment instructions if desired.
5. **Optional smoke test.** Add a standalone browser test outside the site if a repeatable check is wanted; do not add a build system to the site itself.

## Known Issues

1. **CSS/SCSS divergence.** `assets/css/styles.css` is the deployed source of truth. `assets/scss/styles.scss` predates the overhaul and does not match it.
2. **No repository verification tooling.** No package.json, linter, formatter, tests, or CI. Verification was manual/temporary.
3. **Placeholder README.** `README.md` contains only the project title.
4. **Manual price transcription.** Menu prices came from owner-supplied menu-board images; the ordering platforms remain the source of truth for availability and current pricing.
5. **Limited menu photography.** There are 9 menu photos for 7 menu sections. Some sections group multiple dishes or share a representative photo; Add-ons uses a collage.

## Recently Resolved

- Menu updated to 33 price rows across 7 sections with new filters and party/special-order details.
- Old 9-card menu layout, `sides`/`desserts` filters, and per-item card CSS replaced.
- Oversized menu PNGs replaced with 720x480 JPEGs.
- Gallery badges resized to 400x400 with alpha preserved.
- Unused `assets/img/hero/` photos and template SVGs removed.
- Boxicons and ScrollReveal CDN dependencies removed.
- Mobile-nav, clipboard feedback, skip link, focus, touch-target, and reduced-motion issues addressed.

## Next Steps (Suggestions, Not Commitments)

1. Have the owner confirm the transcribed menu prices and party/special-order details.
2. Run cross-browser and physical-device QA.
3. Decide whether to retire or rebuild the SCSS source.
4. Write a concise README with preview/deployment steps.
5. Consider a lightweight smoke test kept outside the deployed site.

## Confirmed vs Suggested

- Confirmed by this session: the menu update, responsive menu rendering, filter/URL behavior, and Edge-based verification.
- Suggested above: owner price confirmation, cross-browser QA, SCSS retirement, README, optional smoke test.
- No commit has been made.
