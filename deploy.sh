#!/usr/bin/env bash
# GoParty: build, check and deploy to Firebase Hosting (macOS / Linux).
# Usage:  ./deploy.sh                 (uses the project in .firebaserc)
#         ./deploy.sh your-project-id (or name the Firebase project)
set -euo pipefail
cd "$(dirname "$0")"

command -v node >/dev/null || { echo "Node.js is not installed. Get version 20 or newer from https://nodejs.org"; exit 1; }
echo "▶ Node $(node -v)"

echo "▶ Installing packages…"
npm install

PROJECT_ARG=()
if [ "${1:-}" != "" ]; then PROJECT_ARG=(--project "$1"); fi

echo "▶ Building the site (prerendering every page)…"
npm run build

echo "▶ Checking canonical, hreflang, og:url, JSON-LD and links…"
npm run verify

echo "▶ Deploying to Firebase Hosting…"
npx --yes firebase-tools deploy --only hosting "${PROJECT_ARG[@]}"

echo "✓ Done. Check https://goparty.ae/blog/ and resubmit https://goparty.ae/sitemap.xml in Search Console."
