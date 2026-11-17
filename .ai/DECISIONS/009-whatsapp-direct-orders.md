# Decision

Replace Petpooja direct ordering with WhatsApp orders sent to `+91 96771 49451`.

# Context

The site previously sent direct orders to `https://chefbhaibiryani.petpooja.com/`. The owner requested WhatsApp for direct orders. Swiggy and Zomato remain available as delivery-platform options, and the site still has no backend, cart, checkout, or payment code.

# Reason

Use the owner's requested direct-order channel and reduce the number of ordering platforms the site depends on.

# Consequences

- Direct-order CTAs in the header, hero, menu note, and footer link to `https://wa.me/919677149451`.
- Menu-section CTAs include a prefilled WhatsApp message listing that section's items, portions, notes, and prices via the `text` query parameter.
- Standard menu sections also link to Swiggy and Zomato; party/special orders still use the existing `tel:` call CTA because they are customized.
- Swiggy and Zomato URLs are unchanged.
- Changing the WhatsApp number requires editing both `index.html` and `assets/js/menu.js`.
- The site still owns no order state, pricing logic, payments, or customer data.
