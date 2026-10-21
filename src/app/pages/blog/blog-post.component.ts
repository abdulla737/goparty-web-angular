import { Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BlogBlock } from '../../data/blog-types';
import { LINKS } from '../../data/links';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';
import { SeoService } from '../../shared/seo.service';
import { formatDate, readTime } from './blog-utils';

type Rendered =
  | { kind: 'h2'; text: string; id: string }
  | { kind: 'p'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'tip'; title: string; text: string }
  | { kind: 'figure'; src: string; alt: string; caption?: string; phone: boolean };

/** /blog/:slug — one article. */
@Component({
  selector: 'gp-blog-post',
  imports: [RouterLink, IconComponent],
  templateUrl: './blog-post.component.html',
})
export class BlogPostComponent {
  protected readonly i18n = inject(LanguageService);
  private readonly seo = inject(SeoService);
  protected readonly t = computed(() => this.i18n.c().blog.BLOG_PAGE);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  /** Reactive, because Angular reuses this page when you open a related article. */
  private readonly slug = toSignal(this.route.paramMap.pipe(map((m) => m.get('slug') ?? '')), {
    initialValue: this.route.snapshot.paramMap.get('slug') ?? '',
  });

  protected readonly blogLink = computed(() => this.i18n.localize(LINKS.blog));
  protected readonly planLink = computed(() => this.i18n.route(LINKS.planParty));
  protected readonly copied = signal(false);

  protected readonly post = computed(() => {
    const p = this.i18n.c().blog.BLOG_POSTS.find((x) => x.slug === this.slug());
    if (!p) return null;
    const t = this.t();
    return {
      ...p,
      dateLabel: formatDate(p.date, t.dateLocale),
      readLabel: readTime(t.readTime, p.readMinutes),
      blocks: p.body.map((b) => this.render(b)),
      toc: p.body.filter((b): b is { h2: string; id: string } => 'h2' in b),
    };
  });

  /** Same category first, then the newest others; three in total. */
  protected readonly related = computed(() => {
    const cur = this.post();
    if (!cur) return [];
    const t = this.t();
    const others = this.i18n.c().blog.BLOG_POSTS.filter((p) => p.slug !== cur.slug).sort((a, b) => b.date.localeCompare(a.date));
    const ordered = [...others.filter((p) => p.category === cur.category), ...others.filter((p) => p.category !== cur.category)];
    return ordered.slice(0, 3).map((p) => ({
      ...p,
      link: this.i18n.localize(`${LINKS.blog}/${p.slug}`),
      dateLabel: formatDate(p.date, t.dateLocale),
      readLabel: readTime(t.readTime, p.readMinutes),
    }));
  });

  protected readonly url = computed(() => this.seo.absolute(`${LINKS.blog}/${this.slug()}`));
  protected readonly shareLinks = computed(() => {
    const u = encodeURIComponent(this.url());
    const title = encodeURIComponent(this.post()?.title ?? '');
    return {
      whatsapp: `https://wa.me/?text=${title}%20${u}`,
      x: `https://twitter.com/intent/tweet?url=${u}&text=${title}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    };
  });

  constructor() {
    effect(() => {
      const p = this.post();
      untracked(() => this.updatePage(p));
    });
  }

  private updatePage(p: ReturnType<BlogPostComponent["post"]>): void {
    this.copied.set(false);
    if (!p) {
      // Unknown article: go back to the blog list.
      this.router.navigateByUrl(this.blogLink(), { replaceUrl: true });
      return;
    }
    this.seo.set({
      title: `${p.title} | GoParty`,
      description: p.excerpt,
      path: `${LINKS.blog}/${p.slug}`,
      image: p.image,
      type: 'article',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.excerpt,
        image: `https://goparty.ae/${p.image}`,
        datePublished: p.date,
        inLanguage: this.i18n.lang(),
        author: { '@type': 'Organization', name: p.author },
        publisher: { '@type': 'Organization', name: 'GoParty', url: 'https://goparty.ae/' },
        url: this.url(),
        mainEntityOfPage: this.url(),
      },
    });
  }

  async copyLink(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.url());
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      this.copied.set(false);
    }
  }

  private render(b: BlogBlock): Rendered {
    if ('h2' in b) return { kind: 'h2', text: b.h2, id: b.id };
    if ('p' in b) return { kind: 'p', text: b.p };
    if ('list' in b) return { kind: 'list', items: b.list };
    if ('tip' in b) return { kind: 'tip', title: b.tip.title, text: b.tip.text };
    return { kind: 'figure', src: b.figure.src, alt: b.figure.alt, caption: b.figure.caption, phone: !!b.figure.phone };
  }
}
