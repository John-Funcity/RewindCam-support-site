# Cloudflare migration — 2026-10-19

## Scope

Move the public support site from GitHub Pages to Cloudflare Pages with GitHub
automatic deployments. Production domain: `rewindcam.funtanstic.fun`.
The GitHub integration is limited to `John-Funcity/RewindCam-support-site`.

## Configuration

Production branch `main`, framework None, build `sh scripts/build.sh`, output
`dist`, root directory unset. The allowlist build includes five HTML pages and
two assets only. The Cloudflare 404 page uses domain-root paths; the legacy
GitHub Actions workflow adjusts those paths to its project prefix.

## Validation

- `sh scripts/build.sh`: passed.
- `sh -n scripts/build.sh`: passed.
- All local links and assets across five generated HTML pages: passed.
- `git diff --check`: passed.
- Cloudflare deployed source commit `e17be3a`; deployment ID
  `f9fb627b-c703-4341-9920-dfc6544c94de`.
- CNAME `rewindcam` -> `rewindcam-support-site.pages.dev`, proxied, automatic TTL.
- Cloudflare custom domain status: Active; SSL enabled.
- `https://rewindcam.funtanstic.fun/`, `/support/`, `/privacy/`, `/terms/`,
  `/assets/styles.css`, `/assets/site.js`: HTTP 200, curl TLS verification 0.
- `/missing-migration-check` and `/README.md`: HTTP 404 with the site's 404 title.
- The default `https://rewindcam-support-site.pages.dev` URL passed the same
  HTTP status and TLS checks.
- Edge loaded the custom-domain home page with working navigation. HTML page
  titles and asset bytes were checked against the build. Cloudflare's existing
  email protection rewrites email links and injects its decoding script, so
  HTML is not byte-identical to source; the browser resolves the contact link.
- Legacy GitHub Pages workflow run `39193788199`: success. The old terms URL
  still returns HTTP 200.
- Initial custom-domain requests returned 522 during provisioning; they returned
  200 after activation. Python urllib failed due to its local CA setup; final
  checks used curl with certificate verification enabled.

Verification occurred on 2026-10-19 around 11:18 China Standard Time. These are
point-in-time checks, not a guarantee of global propagation or availability.

## Compatibility and follow-up

Keep the GitHub Pages workflow active so existing public App Store links remain
usable during migration. Do not remove it until App Store metadata has moved to
the new URLs and compatibility requirements have been reviewed. This task does
not change App Store Connect metadata or app code.
