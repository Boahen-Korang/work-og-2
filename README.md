# ExampleBet (sanitized SportyBet frontend)

This repo is a Vite + React static frontend. It was adapted from a SportyBet HTML snapshot and sanitized for local hosting.

## Build

Install dependencies and build the production bundle:

```bash
npm install
npm run build
```

The build output is in the `dist` directory.

## Deploy to Render (static site)

This repository includes `render.yaml` and a GitHub Actions workflow that triggers Render deploys on pushes to `master`.

Required GitHub repository secrets:

- `RENDER_API_KEY` — your Render API key (create in Render dashboard → Account → API Keys).
- `RENDER_SERVICE_ID` — the Render service ID for the static site (found on the Render service settings page).

How it works:

1. Push to `master`.
2. GitHub Actions builds the site and calls the Render API to create a new deploy.
3. Render serves the `dist` directory as a static site.

## Manual deploy (alternative)

If you prefer to deploy manually, you can use the `render` CLI or upload `dist` via the Render UI.

## Notes & Safety

- The repo contains many sanitized strings; some internal identifiers were preserved to avoid breaking runtime assets.
- If you want all brand tokens replaced, tell me and I will neutralize them (may break asset loading).
