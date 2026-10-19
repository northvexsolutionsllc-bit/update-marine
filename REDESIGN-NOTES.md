# Marine Pool Renovations - Signature Redesign

## Design direction
- Cinematic deep-jade hero with warm brass accents and editorial typography.
- New animated headline reveals, layered 3D image frame, orbital rings, floating glass detail cards, and trust/stat strip.
- Replaced the placeholder favicon with a custom wave mark and updated header branding.
- Site-wide card lift, image zoom, refined focus states, and reduced-motion fallback.
- Existing routes, page content, project/service data, and contact flows are retained.

## Deployment
- Vite is configured to emit production assets into `out/`.
- `vercel.json` explicitly sets Vercel's output directory to `out` to prevent the previous `dist` vs `out` mismatch.
- Vercel project settings should either use `out` or be reset to read this repository config.

## Verification status
The source edits were made, but dependency installation timed out in this environment, so a fresh production build could not be run here. Run `npm install` and `npm run build` before deploying. Review the external hero image URL and replace it with an owned optimized image if desired.
