# AI Context Entry Point

This file is the canonical entry point for AI coding agents working on this repository.

## Project

Static marketing website for **Chef Bhai Biriyani**, a biryani restaurant in Avadi, Chennai. Single-page site with a hero, quality marquee, services, dynamically rendered menu, about, contact, and footer. Direct orders go to WhatsApp, with Swiggy and Zomato as delivery-platform options; the site has no backend.

## Read Order

Before making changes, read:

1. `.ai/ARCHITECTURE.md` - how the site is structured and deployed
2. `.ai/CONVENTIONS.md` - actual code/style conventions
3. `.ai/TASKS.md` - current work, known issues, next steps
4. `.ai/sessions/CURRENT.md` - latest session handoff
5. `.ai/DECISIONS/` - architecture decision records
6. `.ai/context/repo-index.md` - file inventory

## Critical Rules

- There is **no build step, package manager, test suite, or CI**. Do not introduce one unless explicitly requested.
- `assets/css/styles.css` is the **deployed source of truth**. `assets/scss/styles.scss` is stale, uncompiled, and not in sync with the current design. When changing styles, edit the CSS only unless the owner explicitly asks to restore SCSS.
- The menu is rendered client-side from the `menuGroups` array in `assets/js/menu.js`; menu markup must not be duplicated into `index.html`.
- Keep interactions dependency-free: do not reintroduce Boxicons or ScrollReveal. Use inline SVG and native browser APIs.
- Preserve skip-link, focus-visible, ARIA, reduced-motion, and 44px touch-target behavior when changing UI.
- Keep external order links pointed at WhatsApp, Swiggy, and Zomato as configured in `index.html` and `menu.js`.
- Preserve the custom domain configuration: `CNAME` contains `chefbhaibiryani.com`.
- Do not commit secrets, API keys, or credentials.

## Where Things Live

- Architecture decisions: `.ai/DECISIONS/`
- Current work and issues: `.ai/TASKS.md`
- Session handoff: `.ai/sessions/CURRENT.md`
- Repository snapshot / inventory: `.ai/context/`

## Session Closeout

When finishing meaningful work, use the `ai-session-closeout` skill and update `.ai/sessions/CURRENT.md` plus any affected `.ai/` files.
