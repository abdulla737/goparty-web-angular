#!/usr/bin/env node
/**
 * Checks the built site before it is deployed, so Google never sees a redirect.
 * For every URL in public/sitemap.xml it checks that:
 *   - the page was built (dist/goparty/browser/<path>/index.html exists)
 *   - <link rel="canonical"> and og:url equal that exact URL (with trailing slash)
 *   - every hreflang link (en, ar, x-default) ends with a slash
 * Exits with an error (and the deploy stops) if anything is wrong.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = process.argv[2] || 'dist/goparty/browser';
const ORIGIN = 'https://goparty.ae';
const sitemapFile = [join(DIST, 'sitemap.xml'), 'public/sitemap.xml'].find((f) => existsSync(f));

// firebase.json must deploy the built site, not the source "public" folder.
const firebase = existsSync('firebase.json') ? JSON.parse(readFileSync('firebase.json', 'utf8')) : null;
const deployDir = firebase?.hosting?.public;
if (deployDir && deployDir.replace(/\/$/, '') !== DIST) {
  console.error(`✗ firebase.json deploys "${deployDir}", but the site is built into "${DIST}".\n  Set "public": "${DIST}" in firebase.json (this often happens after running "firebase init").`);
  process.exit(1);
}
if (!existsSync(join(DIST, 'index.html'))) {
  console.error(`✗ ${DIST}/index.html not found. Run "npm run build" first and check it finished without errors.`);
  process.exit(1);
}
if (!existsSync(join(DIST, '404.html'))) console.warn(`! ${DIST}/404.html missing (should be copied from public/404.html).`);

if (!sitemapFile) {
  console.error('✗ sitemap.xml not found (expected public/sitemap.xml).');
  process.exit(1);
}
const sitemap = readFileSync(sitemapFile, 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
const attr = (tag, name) => new RegExp(`${name}="([^"]*)"`).exec(tag)?.[1];
const problems = [];

for (const url of urls) {
  if (!url.endsWith('/')) problems.push(`${url}: sitemap URL has no trailing slash`);
  const path = url.replace(ORIGIN, '');
  const file = join(DIST, path, 'index.html');
  if (!existsSync(file)) {
    problems.push(`${url}: page not built (${file} missing)`);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  const links = html.match(/<link[^>]+>/g) || [];
  const metas = html.match(/<meta[^>]+>/g) || [];
  const canonical = links.find((l) => /rel="canonical"/.test(l));
  const ogUrl = metas.find((m) => /property="og:url"/.test(m));
  const alternates = links.filter((l) => /rel="alternate"/.test(l) && /hreflang=/.test(l));

  if (attr(canonical || '', 'href') !== url) problems.push(`${url}: canonical is ${attr(canonical || '', 'href') ?? 'missing'}`);
  if (attr(ogUrl || '', 'content') !== url) problems.push(`${url}: og:url is ${attr(ogUrl || '', 'content') ?? 'missing'}`);
  const langs = alternates.map((l) => attr(l, 'hreflang')).sort().join(',');
  if (langs !== 'ar,en,x-default') problems.push(`${url}: hreflang set is "${langs}"`);
  for (const l of alternates) {
    const href = attr(l, 'href') || '';
    if (!href.endsWith('/')) problems.push(`${url}: hreflang ${attr(l, 'hreflang')} → ${href} has no trailing slash`);
  }
  for (const m of html.matchAll(/"url"\s*:\s*"(https:\/\/goparty\.ae[^"]*)"/g)) {
    if (!m[1].endsWith('/')) problems.push(`${url}: JSON-LD url ${m[1]} has no trailing slash`);
  }
  for (const m of html.matchAll(/<a [^>]*href="(\/[^"#?]*)/g)) {
    const href = m[1];
    if (!href.endsWith('/') && !/\.[a-z0-9]{2,5}$/i.test(href)) problems.push(`${url}: internal link ${href} has no trailing slash`);
  }
}

if (problems.length) {
  console.error(`✗ ${problems.length} problem(s) found in the build — not deploying:\n  ${problems.slice(0, 40).join('\n  ')}`);
  process.exit(1);
}
console.log(`✓ ${urls.length} pages checked: canonical, og:url, hreflang, JSON-LD and links all use trailing-slash URLs.`);
