import { DefaultUrlSerializer, UrlTree } from '@angular/router';

/**
 * goparty.ae is served by Firebase Hosting, which 301-redirects "/blog" to "/blog/".
 * Every URL the site publishes (links, canonical, hreflang, og:url, JSON-LD, sitemap) must therefore
 * use the trailing-slash form, so Google never meets a redirect.
 *
 *   withTrailingSlash('/blog')             -> '/blog/'
 *   withTrailingSlash('/ar')               -> '/ar/'
 *   withTrailingSlash('/blog#top')         -> '/blog/#top'
 *   withTrailingSlash('/')                 -> '/'
 *   withTrailingSlash('/images/logo.svg')  -> unchanged (files keep their name)
 */
export function withTrailingSlash(url: string): string {
  const match = /^([^?#]*)(.*)$/.exec(url);
  const path = match?.[1] ?? '';
  const rest = match?.[2] ?? '';
  if (!path || path.endsWith('/')) return (path || '/') + rest;
  const last = path.slice(path.lastIndexOf('/') + 1);
  if (/\.[a-z0-9]{2,5}$/i.test(last)) return path + rest; // a file, e.g. /sitemap.xml
  return `${path}/${rest}`;
}

/** '/blog/' -> '/blog' (root stays '/'). Used to normalise paths before comparing them. */
export function withoutTrailingSlash(path: string): string {
  return path.length > 1 ? path.replace(/\/+$/, '') : path;
}

/**
 * Router URL serializer that writes every in-app URL with a trailing slash
 * (routerLink hrefs, history entries) and reads both forms the same way, so the router
 * never strips the slash and never redirects between "/blog" and "/blog/".
 */
export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {
  override parse(url: string): UrlTree {
    const match = /^([^?#]*)(.*)$/.exec(url);
    const path = withoutTrailingSlash(match?.[1] ?? '');
    return super.parse(path + (match?.[2] ?? ''));
  }

  override serialize(tree: UrlTree): string {
    return withTrailingSlash(super.serialize(tree));
  }
}
