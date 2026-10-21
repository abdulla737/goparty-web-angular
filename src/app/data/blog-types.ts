/** Blocks an article body is made of. */
export type BlogBlock =
  /** Section heading. `id` is the anchor used by "On this page". */
  | { h2: string; id: string }
  | { p: string }
  | { list: string[] }
  /** Highlighted tip box */
  | { tip: { title: string; text: string } }
  /** Image inside the article. `phone: true` frames an app screenshot like a phone. */
  | { figure: { src: string; alt: string; caption?: string; phone?: boolean } };

export interface BlogPost {
  /** URL part: /blog/<slug>. Keep the same slug in English and Arabic. */
  slug: string;
  category: string;
  title: string;
  /** One or two sentences shown on cards and used as the meta description. */
  excerpt: string;
  /** ISO date, e.g. '2026-10-12' */
  date: string;
  readMinutes: number;
  /** Image path under /public */
  image: string;
  imageAlt: string;
  /** Shown large at the top of the blog list */
  featured?: boolean;
  author: string;
  body: BlogBlock[];
}

export interface BlogPageText {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  subtext: string;
  searchLabel: string;
  searchPlaceholder: string;
  categoriesLabel: string;
  all: string;
  featured: string;
  latest: string;
  readArticle: string;
  /** {n} is replaced with the number of minutes */
  readTime: string;
  noResults: string;
  blog: string;
  onThisPage: string;
  backToBlog: string;
  share: string;
  copyLink: string;
  linkCopied: string;
  related: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  /** Locale for dates, e.g. 'en-GB' */
  dateLocale: string;
}
