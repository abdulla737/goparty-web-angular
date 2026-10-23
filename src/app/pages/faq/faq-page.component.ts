import { Component, afterNextRender, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LINKS, SUPPORT_EMAIL } from '../../data/links';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';
import { SeoService } from '../../shared/seo.service';

/**
 * Customer FAQ page (/faq/ and /ar/faq/).
 * Every question is prerendered into the HTML (closed <details>), with FAQPage JSON-LD for search engines.
 * Each question has its own anchor, e.g. /faq/#refund, which opens it on load.
 */
@Component({
  selector: 'gp-faq-page',
  imports: [RouterLink, IconComponent],
  templateUrl: './faq-page.component.html',
})
export class FaqPageComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly t = computed(() => this.i18n.c().faq.FAQ_PAGE);
  protected readonly categories = computed(() => this.i18n.c().faq.FAQ_CATEGORIES);
  protected readonly pageLink = computed(() => this.i18n.localize(LINKS.faq));
  protected readonly contactLink = computed(() => this.i18n.localize(LINKS.contact));
  protected readonly email = SUPPORT_EMAIL;

  protected readonly query = signal('');
  /** Question opened from the URL fragment (/faq/#refund). */
  protected readonly openId = signal('');

  /** Categories with only the questions that match the search. */
  protected readonly visible = computed(() => {
    const words = this.normalize(this.query()).split(' ').filter(Boolean);
    if (!words.length) return this.categories();
    return this.categories()
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => {
          const text = this.normalize(
            [cat.title, item.q, ...item.a, ...(item.list ?? []).map((l) => `${l.term} ${l.text}`)].join(' '),
          );
          return words.every((w) => text.includes(w));
        }),
      }))
      .filter((cat) => cat.items.length);
  });
  protected readonly searching = computed(() => this.query().trim().length > 0);
  protected readonly count = computed(() => this.visible().reduce((n, c) => n + c.items.length, 0));

  constructor() {
    const t = this.t();
    const seo = inject(SeoService);
    seo.set({
      title: t.title,
      description: t.metaDescription,
      path: LINKS.faq,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        url: seo.absolute(LINKS.faq),
        inLanguage: this.i18n.lang(),
        mainEntity: this.categories().flatMap((cat) =>
          cat.items.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: [...item.a, ...(item.list ?? []).map((l) => `${l.term}: ${l.text}`)].join(' '),
            },
          })),
        ),
      },
    });

    afterNextRender(() => {
      const id = decodeURIComponent(location.hash.slice(1));
      if (id && this.categories().some((c) => c.items.some((i) => i.id === id))) {
        this.openId.set(id);
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }));
      }
    });
  }

  protected onSearch(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  protected clear(input: HTMLInputElement): void {
    input.value = '';
    this.query.set('');
    input.focus();
  }

  protected resultsText(): string {
    return this.t().results.replace('{n}', String(this.count()));
  }

  /** Lower-case, and ignore Arabic diacritics and letter variants so "الاسترداد" finds "استرداد" etc. */
  private normalize(s: string): string {
    return s
      .toLowerCase()
      .replace(/[ً-ْـ]/g, '')
      .replace(/[أإآ]/g, 'ا')
      .replace(/ى/g, 'ي')
      .replace(/ة/g, 'ه')
      .replace(/[^\p{L}\p{N}%]+/gu, ' ')
      .trim();
  }
}
