import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { UrlSerializer, provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { TrailingSlashUrlSerializer } from './shared/trailing-slash';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      // Resolve the route (and its language) before the first render, so hydration matches the prerendered HTML.
      withEnabledBlockingInitialNavigation(),
    ),
    // Every in-app URL keeps its trailing slash ("/blog/"), matching Firebase Hosting. See shared/trailing-slash.ts.
    { provide: UrlSerializer, useClass: TrailingSlashUrlSerializer },
    // Page is prerendered to static HTML at build time, then hydrated in the browser.
    provideClientHydration(withEventReplay()),
  ],
};
