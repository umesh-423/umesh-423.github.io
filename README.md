# Umesh Iyer · Portfolio (Static Site)

Plain HTML / CSS / JavaScript. No build step, no framework, no server. Drop the files on any static host.

## Files
- `index.html` — page markup
- `styles.css` — all styling (light + dark theme)
- `app.js` — theme toggle, scroll progress, typing effect, project filter, contact form
- `Umesh_Iyer_CV.pdf` — CV downloaded by the "Download CV" buttons
- `favicon.ico`

## Run locally
Just open `index.html` in a browser. Or serve the folder:

```bash
# Python 3
python -m http.server 8080
# then visit http://localhost:8080
```

## Deploy

### GitHub Pages
1. Create a repo, push these files to the root (or a `/docs` folder).
2. Repo → **Settings → Pages → Source: main / root** (or `/docs`). Save.
3. Site publishes at `https://<user>.github.io/<repo>/`.

### Custom domain
1. In your DNS provider, add a `CNAME` record pointing your (sub)domain to `<user>.github.io`.
   For an apex domain, use `A` records to GitHub Pages' IPs (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`).
2. In the repo add a file named `CNAME` (no extension) containing your domain, e.g. `umeshiyer.com`.
3. Repo → **Settings → Pages → Custom domain**: enter the same domain. Enable **Enforce HTTPS** once the cert provisions.

### Other hosts
Works as-is on Netlify, Vercel, Cloudflare Pages, S3, Nginx — upload the folder, no build command.

## Editing content
All content lives in `app.js` in the arrays at the top: `SKILLS`, `PROJECTS`, `EXPERIENCE`, `CERTS`, `TAGLINES`. Text-only edits (hero copy, about, contact links) live in `index.html`.
