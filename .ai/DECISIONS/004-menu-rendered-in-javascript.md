# Decision

Render menu cards in the browser from an array in `assets/js/menu.js` rather than repeating markup in `index.html`.

# Context

Commit `fc383ed` ("Added js code for menu removing redandant html") moved menu items into a JavaScript data array and generates `.menu__content` cards into `#menuContainer`.

# Reason

Reduce duplicated HTML for each menu item and centralize menu data in one place.

# Consequences

- Editing the menu means editing the `items` array (`name`, `detail`, `image`) in `menu.js`.
- Menu content is not present in the HTML source, which can affect SEO and no-JS users.
- Card markup, including order buttons, lives inside the JS template string.
- `#menuContainer` must exist in `index.html` for rendering to work.
