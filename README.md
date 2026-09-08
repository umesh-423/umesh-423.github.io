# Umesh Iyer · Portfolio (Static Export)

This is a pre-built static export of the [Lovable](https://lovable.dev)/TanStack Start React project — pre-rendered HTML plus a hashed, bundled JS/CSS build. GitHub Pages just serves the files as-is; there's no build step or server at request time.

## Files
- `index.html` — pre-rendered page markup + script/link tags for the hashed bundle
- `assets/` — bundled, content-hashed JS and CSS (do not edit directly — these are build output)
- `Umesh_Iyer_CV.pdf` — CV downloaded by the "Download CV" buttons
- `favicon.ico`, `og-image.png` — icons/social preview image
- `CNAME` — custom domain (`umeshiyer.live`)
- `.nojekyll` — tells GitHub Pages not to run Jekyll on the `assets/` folder

## Editing content

Don't hand-edit the files in this repo — they're generated output and will be overwritten by the next export. Make changes in the source Lovable/React project, then rebuild and re-export:

```bash
bun run build            # or: NITRO_PRESET=node-server bun run build
```

Then regenerate the static export (pre-render `/`, copy the built `assets/`, keep `CNAME`/`.nojekyll`/CV/favicon/og-image) and push the result here.

## Run locally

Serve the folder with any static file server:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploy

Push to `main` — GitHub Pages (Settings → Pages → Source: `main` / root) auto-redeploys `umeshiyer.live`.
