/**
 * Turns an href from site-content.ts into routerLink parts, so header/footer links
 * work from every page: '/#services' -> { path: '/', fragment: 'services' }.
 */
export interface RouteLink {
  path: string;
  fragment?: string;
}

export function toRoute(href: string): RouteLink {
  const [rawPath, fragment] = href.split('#');
  return { path: rawPath || '/', fragment: fragment || undefined };
}
