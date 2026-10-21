# GoParty — Angular website

Landing page for **goparty.ae**, rebuilt in Angular 19 (standalone components) with all copy
updated to the *GoParty Website: Figma Copy Edit Guide* and a refreshed UI.

## Run it

```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # static, prerendered site in dist/goparty/browser
```

`npm run build` prerenders the page to static HTML (`outputMode: "static"`), so every heading,
tab panel and alt text is in the page source at load — what the guide asks for under
"Tab content". Deploy the contents of `dist/goparty/browser` to any static host.

## URLs: always with a trailing slash

Firebase Hosting serves every page from a folder (`blog/index.html`) and redirects `/blog` → `/blog/`.
So every URL the site publishes uses the trailing-slash form: links, canonical, hreflang, og:url,
JSON-LD and the sitemap (e.g. `https://goparty.ae/blog/`, `https://goparty.ae/ar/blog/`; the homepage
stays `https://goparty.ae/`).

- `LanguageService.localize()` (`src/app/i18n/language.service.ts`) builds every page path and always
  adds the slash. Use it (or `route()`) for any new link; never hard-code `"/blog"`.
- `TrailingSlashUrlSerializer` (`src/app/shared/trailing-slash.ts`) makes Angular's router keep the slash
  in every `routerLink` and history entry, and treat `/blog` and `/blog/` as the same page (no redirect).
- `public/sitemap.xml` lists every page with a trailing slash. Add new pages (and blog posts) there the same way.

## Build and deploy to Firebase Hosting

One command builds, checks and deploys:

- **Windows:** double-click `deploy.cmd` (or run `deploy.cmd your-project-id`)
- **macOS / Linux:** `./deploy.sh` (or `./deploy.sh your-project-id`)
- **Any system:** `npm run deploy`

The Firebase project is **gopartyweb-6a33b** (set in `.firebaserc`), so no project ID is needed.
The first time, sign in to Firebase with `npx firebase-tools login`.

Steps it runs: `npm install` → `npm run build` → `npm run verify` → `firebase deploy --only hosting`.
Always deploy with these scripts (or `npm run deploy`), not a bare `firebase deploy`, so the site is rebuilt and checked first.
Use Node.js 22 LTS (Angular 19 supports Node 18, 20 and 22).
`npm run verify` (`scripts/verify-build.mjs`) opens every page listed in the sitemap and stops the
deploy if any canonical, og:url, hreflang, JSON-LD url or internal link lacks the trailing slash.

Automatic deploys on every push to GitHub: see `.github/workflows/deploy.yml`.

`firebase.json` serves `dist/goparty/browser` with `"trailingSlash": true`.

## Pages

| URL | Page | Content file |
|---|---|---|
| `/` | Home | `src/app/data/en/site-content.ts` |
| `/contact-us` | Contact Us + Help Center (`/contact-us#help-center`) | `src/app/data/en/contact.ts` |
| `/termsOfServiceEn` | Terms of Service (Legal Guide v1 – 2026, chapters 1–15, + platform rules 16–20) | `src/app/data/en/terms.ts` |
| `/privacyPolicyEn` | Privacy Policy (Chapter 10 of the Legal Guide + operational details) | `src/app/data/en/privacy.ts` |
| `/refundPolicyEn` | Refund Policy (Chapters 7, 8, 9 and 12 of the Legal Guide) | `src/app/data/en/refund.ts` |

Each page is prerendered to its own `index.html` (for example `dist/goparty/browser/contact-us/index.html`),
so any static host serves them directly. Each page sets its own title, description and canonical URL.

The contact form has no backend: it opens the visitor's email app addressed to Help@goparty.ae.
Replace `send()` in `pages/contact/contact-page.component.ts` with an API call if you add one.

## Blog

| URL | Page |
|---|---|
| `/blog`, `/ar/blog` | List of articles: featured post, category filter, search |
| `/blog/<slug>`, `/ar/blog/<slug>` | Article: header image, contents, tip boxes, screenshots, share links, related posts |

- Articles live in `src/app/data/en/blog.ts` and `src/app/data/ar/blog.ts` (same `slug` in both).
- To add an article: copy a post object in both files, give it a new `slug`, and add its two URLs
  to `public/sitemap.xml`. Every article is prerendered automatically at build time.
- Each article sets its own title, description, social image and `BlogPosting` structured data for Google.
- The six launch articles are starter content written for GoParty; review or replace them.

## Telegram support bot (@GoPartyEventBot)

**Now runs on n8n:** import `n8n/goparty-telegram-support-bot.json` and follow `n8n/README.md`.
The `telegram-bot/` Node.js version below is kept as an alternative; run only one of them.

The website links to https://t.me/GoPartyEventBot from the Contact Us page, the Help Center and the footer.
The bot itself is a small Node.js program in `telegram-bot/` that runs separately from the website.

**Keep the token out of the website.** The site is public; the token lives only in `telegram-bot/.env`
on the server that runs the bot.

Setup (Node.js 20.6 or newer, no packages to install; full guide in `telegram-bot/README.md`):
1. Create a Telegram group for your support team and add @GoPartyEventBot to it. In @BotFather turn **Group Privacy off** for the bot so it can see agents' replies.
2. `cd telegram-bot && cp .env.example .env`, then put the token in `TELEGRAM_BOT_TOKEN`.
3. `npm start`, then send `/id` in the support group. Put that number in `SUPPORT_CHAT_ID` and restart.
4. Keep it running with a process manager, e.g. `pm2 start "npm start" --name goparty-bot`.

How it works:
- `/start` greets customers in Arabic or English (from their Telegram language, switchable) with buttons for FAQs, talking to support, the website and the Help Center.
- Customer messages (text, photos, files, voice) are copied to the support group with their name and id.
- Agents **reply** to a customer's message in the group and the bot sends the answer back to that customer.
  Fallback: `/reply <customer id> <text>`.
- The bot polls Telegram, so it needs no public URL or webhook.

## Languages (English / العربية)

| English | Arabic |
|---|---|
| `/` | `/ar` |
| `/contact-us` | `/ar/contact-us` |
| `/termsOfServiceEn` | `/ar/termsOfServiceEn` |
| `/privacyPolicyEn` | `/ar/privacyPolicyEn` |
| `/refundPolicyEn` | `/ar/refundPolicyEn` |

- The header has an **English / العربية** switch that opens the same page in the other language.
- Arabic pages render right-to-left (`<html lang="ar" dir="rtl">`) with Arabic fonts (Readex Pro and
  IBM Plex Sans Arabic). Arrows mirror, and the layout uses logical CSS properties so it flips automatically.
- Every page is prerendered in both languages, with `hreflang` links between them for Google.
- **Edit text** in `src/app/data/en/*` and `src/app/data/ar/*`. Both folders must have the same fields.
  The build fails if an Arabic field is missing, so nothing goes out half-translated.
- How it works: `src/app/i18n/` — `LanguageService` (current language, content, localized links),
  `langGuard` (sets the language from the route before the page renders), `content.ts` (EN/AR registry).
- To add another language, add a `data/<code>/` folder, register it in `i18n/content.ts`,
  and add its routes in `app.routes.ts`.

The Arabic text is a translation draft. Have a native Arabic copywriter review the marketing copy,
and your legal adviser review the Arabic Terms and Privacy Policy, before launch.

## Structure

```
src/
  index.html                 <title>, meta description, Open Graph, JSON-LD, fonts
  styles.css                 design tokens (light + dark) and all component styles
  main.ts / main.server.ts   browser + prerender bootstraps
  app/
    data/en/, data/ar/       ALL page copy per language — edit text here, not in templates
    data/links.ts            internal paths + support email (language-neutral)
    i18n/                    language service, route guard, EN/AR content registry
    app.component.ts         shell: header, <router-outlet>, footer
    home-page.component.ts   section order + sets title/meta
    layout/header, footer
    sections/                hero, stats, categories, for-customers, for-sellers,
                             how-it-works, why-goparty, cta-banner, testimonials
    shared/                  icon set, logo, accessible tabs, feature-tabs, product mock-ups
public/
  images/hero-balloons.svg   hero illustration
  images/hall-table.svg      Why GoParty illustration
```

## SEO rules applied (guide §12)

- Title: `GoParty | Book Verified Party & Event Sellers in the UAE`
- Meta description: the ~140-character text from the guide
- One `<h1>` (hero), one `<h2>` per section, `<h3>` for tab and card titles; eyebrows are `<p>`
- All tab panels render into the HTML; inactive ones are hidden with CSS only
- Alt text from the guide on the balloons, hall table, dashboard and wallet visuals
- "Explore this feature →" replaced with the new link text everywhere

## Before launch (search the code for `TODO`; apply each change in both `data/en` and `data/ar`)

1. **Legal pages (Arabic prevails)** — the Legal Guide makes the Arabic text the official version.
   `data/ar/terms.ts`, `refund.ts` and `privacy.ts` are translations of the English guide: have them
   reviewed by your legal adviser, or paste in your official Arabic text. Also confirm the Privacy
   Policy sections not in the guide (information collected, cookies) and add your published
   cancellation rules to the Refund Policy if you have them.
2. **Testimonials** — replace the three placeholder cards with real reviews in
   `site-content.ts` and set `placeholder: false` (guide §10).
3. **Hero rating line** — confirm "Rated 5★ by 100+ UAE customers" is your real figure.
4. **Copy the guide didn't specify** — Dashboard tab body, Packages and Wallet bullets 1–3,
   and seller steps 1 and 3 in How It Works. Check these against your Figma frames.
5. **Social links** and real URLs for Blog and Careers. (Refund Policy points to *Payments and Fees* in the Terms.)
6. Optional: swap the inline logo in `shared/logo.component.ts` for `/images/GoParty.svg`, and
   the SVG illustrations for real photos (keep the alt text).
