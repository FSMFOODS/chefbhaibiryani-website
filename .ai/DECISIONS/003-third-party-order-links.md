# Decision

> Direct-order portion superseded by `009-whatsapp-direct-orders.md`; Swiggy and Zomato remain.

Handle ordering through external links to Petpooja (direct ordering), Swiggy, and Zomato instead of building an in-site ordering flow.

# Context

The hero and every menu card link to `https://chefbhaibiryani.petpooja.com/`, plus Swiggy and Zomato brand/order links. The site has no cart, checkout, or payment code.

# Reason

Not documented; inferred from implementation. Using established ordering platforms avoids building and maintaining order/payment infrastructure.

# Consequences

- The site has no order state, pricing logic, or user data.
- Menu items on the site are marketing content, not authoritative inventory or prices.
- Changing a platform URL requires editing both `index.html` and `assets/js/menu.js` where applicable.
- Availability and pricing are controlled outside this repository.
