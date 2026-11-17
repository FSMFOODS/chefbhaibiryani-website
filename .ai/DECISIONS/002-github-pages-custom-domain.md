# Decision

Host the site on GitHub Pages under the custom domain `chefbhaibiryani.com`.

# Context

The repository is `FSMFOODS/chefbhaibiryani-website` on GitHub and includes a `CNAME` file containing `chefbhaibiryani.com`.

# Reason

Not documented; inferred from the `CNAME` file and repository layout. No Pages workflow file exists, so deployment likely uses the repository branch directly.

# Consequences

- The site is served as static files; there is no server runtime.
- The `CNAME` file must be preserved or the custom domain breaks.
- Deployment occurs on push to the Pages source branch (assumed `main`; exact source is UNKNOWN).
- No secrets or environment configuration should be added to the repository.
