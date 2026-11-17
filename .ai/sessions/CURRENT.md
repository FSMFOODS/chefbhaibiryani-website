# Current Session

## Current Objective

Keep the newly updated Chef Bhai Biriyani menu aligned with the owner's two menu-board images, and route direct orders to WhatsApp at `+91 96771 49451`.

## Recently Completed

- Replaced the old 9-card `menuItems` data with seven grouped `menuGroups`: Chicken Biryani, Mutton Biryani, Plain/Egg/65 Biryani, Bucket Biryani, Starters, Add-ons, and Party & Special Orders.
- Added all 33 price rows from the supplied menu boards, including regular/mini/kg portions, Chicken 65 add-ons, bucket sizes, starters, and add-ons.
- Added the pre-order-only Ghee Rice with Mutton Dalcha & Seeraga Samba Biryani entry with "Minimum order 2 kg" and no invented price.
- Added party-order details: per kg prices, per-plate serving size, 1:1.5 ratio, accompaniments, and bulk/party/corporate note.
- Rebuilt `assets/js/menu.js` rendering around grouped sections with price rows, alternating media/content layouts, a four-image Add-ons collage, and a featured party panel with a `tel:` CTA.
- Updated `index.html` filters to All/Biryani/Bucket/Starters/Add-ons/Party & Special, plus new lead copy, count text, `<noscript>` fallback, and price/order note.
- Replaced Petpooja direct-order links with WhatsApp ordering at `+91 96771 49451` in the header, hero, menu sections, menu note, and footer; menu-section CTAs prefill a WhatsApp message with that section's items and prices. Swiggy and Zomato remain unchanged.
- Updated `assets/css/styles.css` with `.menu-group`, `.menu-list`, collage, featured-panel, responsive, hover, and reduced-motion styles.
- Verified with the temporary Playwright/Edge script at 390, 768, 900, and 1440 widths: 7 sections, 33 price rows, filter counts, URL sync, party pre-order copy, mobile add-ons filter, WhatsApp links with prefilled menu text and no Petpooja links, clipboard, mobile nav, marquee, skip link, no horizontal overflow, no broken images, and no console/page errors.

## Current State

- The menu and WhatsApp direct-order update are implemented and pass the Edge headless smoke test.
- No application work is pending in this session.
- No commit has been made.
- The only remaining menu-specific risk is manual transcription accuracy against the owner's images.

## Important Files

- `index.html` - menu filters, lead/count copy, `<noscript>` fallback, order/price note.
- `assets/js/menu.js` - `menuGroups` data, price rows, grouped rendering, filters, URL sync, CTAs.
- `assets/css/styles.css` - authoritative stylesheet; menu styles are `.menu__grid`, `.menu-group`, `.menu-list`, and `.menu-group--feature`.
- `assets/scss/styles.scss` - stale SCSS; not compiled and not in sync with the grouped menu.
- `assets/img/menu/*.jpg` - nine existing menu photos used by the seven sections.
- `.ai/DECISIONS/008-grouped-menu-sections.md` - rationale for grouped sections and price rows.

## Known Problems

- Menu prices and item wording were manually transcribed from two JPEG menu boards; owner confirmation is still needed.
- There are only 9 menu photos for 7 sections; some groups are representative and Add-ons uses a collage.
- `assets/scss/styles.scss` remains stale and intentionally uncompiled.
- There is no repository test suite or CI. Verification used a temporary Playwright script outside the repository.
- Only Edge was tested. Safari, Firefox, and physical devices are unverified.

## Decisions Made

- Use grouped menu sections with price rows instead of one card per dish, because 33 items do not have individual photos.
- Use section-level filters and section counts rather than per-dish counts.
- Use WhatsApp at `+91 96771 49451` for direct orders, with section-specific prefilled menu messages; Swiggy/Zomato remain for delivery-platform orders and party/special orders use a phone CTA.
- Keep the site static, dependency-free, and menu-data-driven from `menuGroups`.

## Next Recommended Step

Ask the owner to review every transcribed price, portion, and party/special-order detail against the two menu-board images. Then run cross-browser/real-device QA and decide whether to retire the stale SCSS file.

## Things Not To Change

- Custom domain configuration in `CNAME`.
- Existing WhatsApp, Swiggy, and Zomato order URLs without explicit approval.
- Brand spelling variants ("Biriyani" brand, "Biryani" body) without owner approval.
- The no-build, no-framework static architecture.
- Menu content ownership in `menuGroups`; do not duplicate menu markup into HTML.
