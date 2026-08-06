# mamacircle-website

The public marketing site for MamaCircle, deployed via GitHub Pages to `mamacircle.no`.

Plain HTML/CSS/JS, no build step. `index.html` holds both Norwegian and English copy inline (`data-i18n` attributes); `i18n.js` swaps the visible language client-side and remembers the choice in `localStorage`. Colors and fonts mirror the app's own theme (`app/lib/theme/app_theme.dart` in `mamacircle-app`): Fraunces + Karla via Google Fonts, same light/dark palette (dark applies automatically via `prefers-color-scheme`).

Phone screenshots in `assets/screenshots/` are downscaled copies of the app's real Play Store screenshots (source: `~/Downloads/mamacircle-screenshots/phone/`). App icon variants in `assets/icons/` are generated from `mamacircle-app/app/assets/icon/icon.png`.

The Play Store button links to the internal-testing opt-in URL, since the app isn't in public production yet — update it once MamaCircle has a real public listing.

To preview locally:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

To deploy: push to `main`. GitHub Pages serves directly from the repo root (no Actions build). `CNAME` pins the custom domain; DNS for `mamacircle.no` needs an A/ALIAS record (apex) or CNAME (subdomain) pointed at GitHub Pages, set up outside this repo (see the org's Webhuset account).
