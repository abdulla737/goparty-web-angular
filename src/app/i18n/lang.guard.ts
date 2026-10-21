import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Lang } from './content';
import { LanguageService, pagePathFromUrl } from './language.service';

/** Sets the page language from route data before the page renders. */
export const langGuard: CanActivateFn = (route, state) => {
  const lang = (route.data['lang'] as Lang | undefined) ?? 'en';
  inject(LanguageService).setLang(lang, pagePathFromUrl(state.url));
  return true;
};
