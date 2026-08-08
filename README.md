# mamacircle-website

The public marketing site for MamaCircle, deployed to `mamacircle.no` via Webhuset hosting (not GitHub Pages — a GitHub-wide Actions/Pages outage blocked the original Pages deploy, so this pivoted to direct hosting; DNS points at Webhuset's IP, not GitHub's).

Plain HTML/CSS/JS, no build step. Multi-page: `index.html` is the homepage (hero, about, features, stats, privacy teaser, a compact community teaser, and the newsletter/join CTA), with `faq.html`, `contact.html`, `founder.html`, `note.html`, and `community.html` as their own pages, all sharing the same `styles.css`/`i18n.js`/`site.js` and a duplicated header/footer (no templating step — see each file's own `<header>`/`<footer>` if the nav ever needs to change, and update all six). Old in-page anchors (`#faq`, `#contact`, `#founder`) still resolve on the homepage as short teaser stubs linking to the full pages, so nothing already shared breaks. Every page holds both Norwegian and English copy inline (`data-i18n` attributes); `i18n.js` swaps the visible language client-side and remembers the choice in `localStorage`. Colors and fonts mirror the app's own theme (`app/lib/theme/app_theme.dart` in `mamacircle-app`): Fraunces + Karla via Google Fonts, same light/dark palette (dark applies automatically via `prefers-color-scheme`).

Phone screenshots in `assets/screenshots/` are downscaled copies of the app's real Play Store screenshots (source: `~/Downloads/mamacircle-screenshots/phone/`). App icon variants in `assets/icons/` are generated from `mamacircle-app/app/assets/icon/icon.png`.

`site.js` talks directly to the same production Supabase project the app uses (anon key, public/anon-safe RLS only — no service role key on this site) for three features: the newsletter signup form (insert-only into `newsletter_subscribers`), the real member-count stats strip (`public_circle_stats()`, an aggregate-only RPC), and `note.html`'s leave-a-note form (insert-only into `little_note_submissions` — not publicly readable via the API; submissions are reviewed by hand in the Supabase dashboard before ever being added to the rotating quotes `i18n.js` displays). All three were added to the live schema specifically to support this site; see `mamacircle-app/PROJECT.md`'s forty-third and forty-fifth continuation entries.

The Play Store button links to the `mamacircle-testers` Google Group join page (`https://groups.google.com/g/mamacircle-testers`), not the Play Store directly: the app is in Closed Testing, which requires joining that tester group before Play Store access is granted at all. Update it to a direct Play Store listing link once MamaCircle reaches public production.

To preview locally:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

To deploy: push to `main`. `.github/workflows/deploy.yml` uploads the repo root to Webhuset via SFTP (`wangyucode/sftp-upload-action@v3`, remote path `www/`), no build step. `CNAME` is a leftover from the original GitHub Pages setup and is no longer used for deployment; DNS for `mamacircle.no` is managed directly in Webhuset's panel, not through this repo.
