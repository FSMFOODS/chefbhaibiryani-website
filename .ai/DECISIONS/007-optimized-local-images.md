# Decision

Serve menu photos as 720x480 JPEGs at roughly 82% quality, keep gallery badges as 400x400 PNGs with transparency, and keep `hero.png` and `logo.svg` as transparent assets. Remove superseded and unused images.

# Context

Menu PNGs were 1.3-2.7 MB each and gallery badges were 1094x1094. The menu photos are opaque and displayed at small card sizes. Gallery badges and the hero cutout rely on transparency.

# Reason

The displayed sizes do not require full-resolution PNGs. JPEG cuts menu image weight to roughly 60-90 KB per item while preserving visual quality. PNG remains necessary where alpha is used. Removing unused high-resolution hero/template images reduces repository size without affecting the page.

# Consequences

- The old menu PNGs were deleted; the JPEGs are now the available source images.
- Gallery badges were resized in place to 400x400 PNG and retain transparent corners.
- There is still no automated image pipeline. Future image replacements should follow the same format and size policy.
- Reintroducing large source images requires a deliberate update to this policy.
