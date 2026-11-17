# Decision

Render the menu as grouped category sections with price rows instead of one card per dish.

# Context

The owner supplied a new menu with 33 price rows across chicken, mutton, plain/egg/65, bucket, starters, add-ons, and party/special orders. The repository has only 9 menu photos, and several dishes are portion or add-on variants without their own image. The previous `menuItems` model assumed one image and one description per card.

# Reason

Grouping items by menu-board section lets every price appear without inventing one photo per dish or repeating a mismatched image 33 times. It preserves a scannable menu hierarchy and keeps the menu data in one JavaScript source.

# Consequences

- `menu.js` now owns `menuGroups`, with `items` arrays for price rows, an optional single image or image collage, and optional `note`/`featured`/`cta` fields.
- Filters operate on menu sections rather than individual dishes; result counts describe sections.
- Standard sections link to WhatsApp, Swiggy, and Zomato; the party/special section uses a `tel:` call CTA because those orders are customized.
- Adding a new dish means adding an item to the relevant group, not creating a new card or image.
- The Add-ons group uses a four-image collage because no single photo represents all add-ons.
