import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LINKS } from '../../data/links';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';
import { SeoService } from '../../shared/seo.service';
import { CtaBannerComponent } from '../../sections/cta-banner/cta-banner.component';
import { formatDate, readTime } from './blog-utils';

/** /blog — list of articles with category filter and search. */
@Component({
  selector: 'gp-blog-list',
  imports: [RouterLink, IconComponent, CtaBannerComponent],
  templateUrl: './blog-list.component.html',
})
export class BlogListComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly t = computed(() => this.i18n.c().blog.BLOG_PAGE);

  /** null = all categories */
  protected readonly category = signal<string | null>(null);
  protected readonly query = signal('');

  protected readonly posts = computed(() => {
    const t = this.t();
    return [...this.i18n.c().blog.BLOG_POSTS]
      .sort((a, b) => b.date.localeCompare(a.date))
      .map((p) => ({
        ...p,
        link: this.i18n.localize(`${LINKS.blog}/${p.slug}`),
        dateLabel: formatDate(p.date, t.dateLocale),
        readLabel: readTime(t.readTime, p.readMinutes),
      }));
  });

  protected readonly categories = computed(() => [...new Set(this.posts().map((p) => p.category))]);

  protected readonly featured = computed(() => this.posts().find((p) => p.featured) ?? this.posts()[0]);

  /** The big featured card shows only when nothing is filtered. */
  protected readonly showFeatured = computed(() => !this.category() && !this.query().trim());

  protected readonly visible = computed(() => {
    const cat = this.category();
    const q = this.query().trim().toLowerCase();
    const featured = this.featured();
    return this.posts().filter((p) => {
      if (this.showFeatured() && p.slug === featured?.slug) return false;
      if (cat && p.category !== cat) return false;
      if (q && !`${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q)) return false;
      return true;
    });
  });

  constructor() {
    const t = this.t();
    const seo = inject(SeoService);
    seo.set({
      title: t.metaTitle,
      description: t.metaDescription,
      path: LINKS.blog,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: t.eyebrow,
        description: t.metaDescription,
        url: seo.absolute(LINKS.blog),
        inLanguage: this.i18n.lang(),
        publisher: { '@type': 'Organization', name: 'GoParty', url: 'https://goparty.ae/' },
      },
    });
  }

  protected pick(cat: string | null): void {
    this.category.set(cat);
  }

  protected onSearch(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }
}
