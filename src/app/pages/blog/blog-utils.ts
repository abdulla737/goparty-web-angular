/** Formats an ISO date like '2026-10-12' as "12 Oct 2026" (or the Arabic equivalent). */
export function formatDate(iso: string, locale: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  // Noon UTC avoids the date shifting across time zones during prerender.
  const date = new Date(Date.UTC(y, m - 1, d, 12));
  return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date);
}

export function readTime(template: string, minutes: number): string {
  return template.replace('{n}', String(minutes));
}
