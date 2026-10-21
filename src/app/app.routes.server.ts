import { RenderMode, ServerRoute } from '@angular/ssr';
import { BLOG_POSTS } from './data/en/blog';

/** Every article slug, so each post is prerendered to its own HTML file. */
const blogSlugs = async () => BLOG_POSTS.map((p) => ({ slug: p.slug }));

// Prerender every route to static HTML so all copy (including every tab panel)
// is in the page source at load, which is what search engines index.
export const serverRoutes: ServerRoute[] = [
  { path: 'blog/:slug', renderMode: RenderMode.Prerender, getPrerenderParams: blogSlugs },
  { path: 'ar/blog/:slug', renderMode: RenderMode.Prerender, getPrerenderParams: blogSlugs },
  { path: '**', renderMode: RenderMode.Prerender },
];
