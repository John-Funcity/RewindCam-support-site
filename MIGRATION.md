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
- Cloudflare deployment, custom domain, HTTPS, public page status and 404:
  pending production verification; update this section after deployment.

## Compatibility and follow-up

Keep the GitHub Pages workflow active so existing public App Store links remain
usable during migration. Do not remove it until App Store metadata has moved to
the new URLs and compatibility requirements have been reviewed. This task does
not change App Store Connect metadata or app code.
