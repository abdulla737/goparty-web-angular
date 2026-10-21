import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';
import { RouteLink, toRoute } from '../shared/route-link';
import { withTrailingSlash, withoutTrailingSlash } from '../shared/trailing-slash';
import { CONTENT, DEFAULT_LANG, Lang } from './content';

/**
 * Current language (EN/AR), its content, and language-aware links.
 * English lives at "/…", Arabic at "/ar/…". The language is set by langGuard
 * before each page renders, so prerendered HTML and hydration always agree.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly doc = inject(DOCUMENT);

  readonly lang = signal<Lang>(DEFAULT_LANG);
  /** Current page path without the language prefix, e.g. "/contact-us". */
  readonly pagePath = signal('/');

  readonly dir = computed(() => (this.lang() === 'ar' ? 'rtl' : 'ltr'));
  readonly other = computed<Lang>(() => (this.lang() === 'ar' ? 'en' : 'ar'));
  /** Everything translatable for the current language. */
  readonly c = computed(() => CONTENT[this.lang()]);
  readonly ui = computed(() => this.c().site.UI);
  /** Link to this same page in the other language. */
  readonly switchLink = computed(() => this.localize(this.pagePath(), this.other()));

  setLang(lang: Lang, pagePath: string): void {
    this.lang.set(lang);
    this.pagePath.set(pagePath);
    const html = this.doc.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }

  /**
   * The one place page paths are built. Always returns the trailing-slash form that
   * Firebase Hosting serves, so links, canonical, hreflang, og:url and JSON-LD all match:
   *   "/contact-us" -> "/contact-us/" (English) or "/ar/contact-us/" (Arabic); "/" -> "/" or "/ar/".
   */
  localize(path: string, lang: Lang = this.lang()): string {
    const p = withoutTrailingSlash(path || '/');
    if (lang === 'en') return withTrailingSlash(p);
    return withTrailingSlash(p === '/' ? '/ar' : `/ar${p}`);
  }

  /** Turns a content href ("/#services", "/contact-us#help-center") into a localized routerLink. */
  route(href: string): RouteLink {
    const r = toRoute(href);
    return { path: this.localize(r.path), fragment: r.fragment };
  }
}

/** Strips "/ar", query, fragment and trailing slash: "/ar/contact-us/#x" -> "/contact-us". */
export function pagePathFromUrl(url: string): string {
  const clean = url.split(/[?#]/)[0] || '/';
  const stripped = clean.replace(/^\/ar(?=\/|$)/, '');
  return withoutTrailingSlash(stripped || '/');
}
