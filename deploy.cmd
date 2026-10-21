@echo off
rem GoParty: build, check and deploy to Firebase Hosting (Windows).
rem Usage:  deploy.cmd                  (uses the project in .firebaserc)
rem         deploy.cmd your-project-id  (or name the Firebase project)
setlocal
cd /d "%~dp0"

where node >nul 2>nul || (echo Node.js is not installed. Get version 20 or newer from https://nodejs.org & exit /b 1)

echo ^> Installing packages...
call npm install || exit /b 1

echo ^> Building the site (prerendering every page)...
call npm run build || exit /b 1

echo ^> Checking canonical, hreflang, og:url, JSON-LD and links...
call npm run verify || exit /b 1

echo ^> Deploying to Firebase Hosting...
if "%~1"=="" (
  call npx --yes firebase-tools deploy --only hosting || exit /b 1
) else (
  call npx --yes firebase-tools deploy --only hosting --project %1 || exit /b 1
)

echo Done. Check https://goparty.ae/blog/ and resubmit https://goparty.ae/sitemap.xml in Search Console.
endlocal
