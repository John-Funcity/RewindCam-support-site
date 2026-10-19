# RewindCam support site

Public support, privacy policy, and terms of service for RewindCam. Plain HTML,
CSS, and JavaScript; no third-party runtime dependencies.

## Cloudflare Pages

- Production domain: `https://rewindcam.funtanstic.fun`
- Repository: `John-Funcity/RewindCam-support-site`
- Production branch: `main`
- Framework preset: None
- Build command: `sh scripts/build.sh`
- Build output directory: `dist`
- Root directory: repository root (leave empty)

The build copies only public site files into `dist/`; repository documentation,
scripts and workflow files are excluded from the deployment. Cloudflare's GitHub
integration automatically deploys future commits to `main` after setup.

Production URLs:

- Home: `https://rewindcam.funtanstic.fun/`
- Support: `https://rewindcam.funtanstic.fun/support/`
- Privacy: `https://rewindcam.funtanstic.fun/privacy/`
- Terms: `https://rewindcam.funtanstic.fun/terms/`

Build and preview locally:

```sh
sh scripts/build.sh
python3 -m http.server 8080 --directory dist
```

GitHub Pages remains available at
`https://john-funcity.github.io/RewindCam-support-site/` during migration so
existing App Store links keep working. Its workflow adapts the 404 page to the
legacy project prefix. Updating App Store Connect URLs is a separate step.

See `MIGRATION.md` for the actual deployment and verification status.
