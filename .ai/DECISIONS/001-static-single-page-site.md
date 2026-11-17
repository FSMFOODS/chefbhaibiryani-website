# Decision

Build the site as a single static HTML page with plain CSS and JavaScript, with no backend or application framework.

# Context

The website is a restaurant marketing page: hero, quality badges, services, menu, about, contact, and footer. Ordering is handled by external platforms.

# Reason

Not documented; inferred from implementation. The repository contains only `index.html` and static assets, and has no server, API, database, or framework configuration.

# Consequences

- Content changes are direct edits to HTML/JS/CSS.
- No server-side logic, authentication, or data persistence.
- Any dynamic behavior must run in the browser.
- Changes require manual browser verification because there are no automated checks.
