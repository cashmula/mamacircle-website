# mamacircle-website

The public marketing site for MamaCircle, deployed to `mamacircle.no` via Webhuset hosting (not GitHub Pages: a GitHub-wide Actions/Pages outage blocked the original Pages deploy, so this pivoted to direct hosting; DNS points at Webhuset's IP, not GitHub's).

Plain HTML/CSS/JS, no build step. Multi-page: `index.html` is the homepage (hero, about, a short features teaser, stats, the "Sammen med MiR" partner card, privacy teaser, a compact community teaser, and the newsletter/join CTA), with `features.html`, `faq.html`, `contact.html`, `founder.html`, `note.html`, and `community.html` as their own pages, all sharing the same `styles.css`/`i18n.js`/`site.js` and a duplicated header/footer (no templating step: see each file's own `<header>`/`<footer>` if the nav ever needs to change, and update all seven). Since 2026-11-18 each of the seven also carries a trust strip just above the footer (`<section class="trust">`, keys `trust.*` in `i18n.js`): four tiles, each a fact the privacy policy states, linked to that section (database in the EU, no ads or tracking, optional ID check with Vipps, download or delete your data). The partner card (`#partners`, keys `partner.*`, images in `assets/partners/`) shows MiR, with whom the Lørenskog outdoor day of 2026-11-14 was hosted: their logo, one line from their business-register purpose, two photos from the day (adults' faces blurred, children from behind, re-encoded without location or camera data; each opens full size in a `<dialog>` from `site.js`, a plain link without it), and a link to mirnett.org. Say "together with", never "trusted by" or anything MiR has not agreed to, and get a partner's OK for its logo before it goes live. Trust tiles: keep them our own words: never add a seal, certification mark or award logo we have not been granted (no official "GDPR compliant" certificate exists, and showing a trust mark without authorisation is always unlawful under markedsføringsloven), and change a tile when the policy it points to changes. Old in-page anchors (`#faq`, `#contact`, `#founder`, `#features`) still resolve on the homepage as short teaser stubs linking to the full pages, so nothing already shared breaks. Every page holds both Norwegian and English copy inline (`data-i18n` attributes); `i18n.js` swaps the visible language client-side and remembers the choice in `localStorage`. Colors and fonts mirror the app's own theme (`app/lib/theme/app_theme.dart` in `mamacircle-app`): Fraunces + Karla, self-hosted in `assets/fonts/` since 2026-11-18 (variable woff2 files from Google Fonts, latin and latin-ext, `@font-face` at the top of `styles.css`, OFL licences alongside; never load them from fonts.googleapis.com again, which sent every visitor's IP address to Google), same light/dark palette (dark applies automatically via `prefers-color-scheme`).

Phone screenshots in `assets/screenshots/` are downscaled copies of the app's real Play Store screenshots (source: `~/Downloads/mamacircle-screenshots/phone/`). App icon variants in `assets/icons/` are generated from `mamacircle-app/app/assets/icon/icon.png`.

`site.js` talks directly to the same production Supabase project the app uses (anon key, public/anon-safe RLS only; no service role key on this site) for three features: the newsletter signup form (insert-only into `newsletter_subscribers`), the real member-count stats strip (`public_circle_stats()`, an aggregate-only RPC), and `note.html`'s leave-a-note form (insert-only into `little_note_submissions`, not publicly readable via the API; submissions are reviewed by hand in the Supabase dashboard before ever being added to the rotating quotes `i18n.js` displays). All three were added to the live schema specifically to support this site; see `mamacircle-app/PROJECT.md`'s forty-third and forty-fifth continuation entries.

The Play Store button links straight to the public Play listing (`https://play.google.com/store/apps/details?id=com.hafmulagroup.mamacircle.app`) since 2026-10-07, when 1.0.85 went live on Google Play's Production track (Norway, Sweden, Denmark). Before that the app was in Closed Testing, and the button, the hero's four-step "Slik får du tilgang til appen på Android" list and `faq.q1.a`/`faq.q5.a` walked people through joining the `mamacircle-testers` Google Group and accepting the Play tester invitation; all of that is gone, and the "Bli med i klubben" / "Bli med i kretsen" links that pointed at the tester group now go to the download buttons at the top of the homepage. Each visible string still lives in three places (the inline Norwegian fallback in the HTML, and the `nb` and `en` entries in `i18n.js`); change all three together or the page contradicts itself when the language is switched.

To preview locally:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

To deploy: push to `main`. `.github/workflows/deploy.yml` uploads the repo root to Webhuset via SFTP (`wangyucode/sftp-upload-action@v3`, remote path `www/`), no build step. `CNAME` is a leftover from the original GitHub Pages setup and is no longer used for deployment; DNS for `mamacircle.no` is managed directly in Webhuset's panel, not through this repo.

## Keeping the site current

Added 2026-11-18, after the site was found listing 9 of the app's 11 languages, calling the live events calendar "under development", and missing the trademark line in its no-JavaScript fallback.

**Automated:** `scripts/website_drift_check.py` in `mamacircle-app` reads the live site every Monday, and on any push that changes the app's languages, store ids or the check itself (`.github/workflows/website-drift.yml` there; a failure emails the owner). It fails when:

- the language badges, FAQ q8 or `privacy.item5` do not match the app's locales (`app/lib/l10n/`);
- `nb` and `en` keys differ, a page uses a key with no translation, or a page's inline Norwegian differs from `nb` in `i18n.js`;
- testing-period or unbuilt-feature wording appears ("beta", "tester", "kommer snart", "under utvikling", "in the works" and similar);
- the ® mark appears (MAMACIRCLE is applied for, not registered: use ™);
- a page loads anything (fonts, scripts, images, fetch) from a third party other than the production Supabase project and Cloudflare Turnstile;
- a Google Play or App Store link points at another app, or a privacy-policy anchor the site links to no longer exists;
- a link or file returns 404 or 410 (blocks and timeouts only warn).

Run it before every push here, against a local preview: `python3 ../mamacircle-app/scripts/website_drift_check.py --site http://127.0.0.1:8000/` (add `--no-links` offline).

**Manual, at every app release and before any campaign** (a script cannot judge these):

- the features page and FAQ cover what `FEATURES.md` in `mamacircle-app` lists as live (never the **(dev)** lines); as of 2026-11-18 the site still says nothing about events, Vipps sign-up and verification, pregnancy and the "Expecting" badge, stories or the baby registry;
- every privacy line agrees with the privacy policy (`mamacircle-legal`). Since 2026-11-18 the policy discloses Firebase Performance Monitoring (owner's choice: keep it and say so), so the site says "no tracking for advertising or across other apps and websites", never "no analytics"; the newsletter and note forms each carry a line about their data, and the policy's "Our website" section (`#website`) covers them;
- the country and availability wording agrees between FAQ q1 and q3;
- the partner card's "Siste treff" is still the latest meetup: replace it, or remove the card, about three months after the date;
- the screenshots in `assets/screenshots/` still look like the app;
- the rotating notes in `i18n.js` (`littleNotes`) are real, submitted notes;
- the held-back pages (`stopp.html`, `bekreft.html`, `arrangement.html`) before they go live.
