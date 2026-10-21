import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LANGS } from '../i18n/content';
import { LanguageService } from '../i18n/language.service';

const ORIGIN = 'https://goparty.ae';

/**
 * Per-page SEO tags, prerendered into each page's HTML:
 * title, description, Open Graph, canonical, and hreflang links to the EN/AR versions.
 * `path` is the page path without a language prefix, e.g. "/contact-us".
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);
  private readonly i18n = inject(LanguageService);

  set(opts: {
    title: string;
    description: string;
    path: string;
    /** Absolute or site-relative image for social sharing */
    image?: string;
    /** 'article' for blog posts, otherwise 'website' */
    type?: 'website' | 'article';
    /** Structured data (schema.org) for this page */
    jsonLd?: object;
  }): void {
    const lang = this.i18n.lang();
    const url = ORIGIN + this.i18n.localize(opts.path, lang);

    this.title.setTitle(opts.title);
    this.meta.updateTag({ name: 'description', content: opts.description });
    this.meta.updateTag({ property: 'og:title', content: opts.title });
    this.meta.updateTag({ property: 'og:description', content: opts.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:locale', content: lang === 'ar' ? 'ar_AE' : 'en_AE' });
    this.meta.updateTag({ property: 'og:type', content: opts.type ?? 'website' });
    if (opts.image) {
      const img = opts.image.startsWith('http') ? opts.image : `${ORIGIN}/${opts.image.replace(/^\//, '')}`;
      this.meta.updateTag({ property: 'og:image', content: img });
    } else {
      this.meta.removeTag('property="og:image"');
    }
    this.jsonLd(opts.jsonLd);

    this.link('canonical', url);
    for (const l of LANGS) this.link('alternate', ORIGIN + this.i18n.localize(opts.path, l), l);
    this.link('alternate', ORIGIN + this.i18n.localize(opts.path, 'en'), 'x-default');
  }

  private jsonLd(data?: object): void {
    let el = this.doc.head.querySelector<HTMLScriptElement>('script#page-jsonld');
    if (!data) {
      el?.remove();
      return;
    }
    if (!el) {
      el = this.doc.createElement('script');
      el.setAttribute('type', 'application/ld+json');
      el.setAttribute('id', 'page-jsonld');
      this.doc.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data).replace(/</g, '\\u003c');
  }

  /** Full URL of a localized page path, always with a trailing slash: "/blog/x" -> "https://goparty.ae/ar/blog/x/" */
  absolute(path: string): string {
    return ORIGIN + this.i18n.localize(path);
  }

  private link(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
    let el = this.doc.head.querySelector<HTMLLinkElement>(selector);
    if (!el) {
      el = this.doc.createElement('link');
      el.setAttribute('rel', rel);
      if (hreflang) el.setAttribute('hreflang', hreflang);
      this.doc.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }
}
