/**
 * Opens Telegram links (https://t.me/...) straight in the Telegram app, skipping Telegram's web
 * landing page. If the app does not open within a moment (not installed, or desktop without
 * Telegram), it falls back to the normal https://t.me link.
 *
 * Installed once from AppComponent; works for every t.me link on the site
 * (Support Chat card, Help Center button, footer icon).
 */
export function installTelegramDirectLinks(doc: Document): () => void {
  const win = doc.defaultView;
  if (!win) return () => undefined;

  const onClick = (event: MouseEvent) => {
    // Let people open in a new tab / window with modifier keys or middle click.
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = (event.target as Element | null)?.closest?.('a[href^="https://t.me/"]') as HTMLAnchorElement | null;
    if (!anchor) return;

    const url = new URL(anchor.href);
    const username = url.pathname.replace(/^\//, '').split('/')[0];
    if (!username) return;
    event.preventDefault();

    const start = url.searchParams.get('start');
    const appLink = `tg://resolve?domain=${encodeURIComponent(username)}${start ? `&start=${encodeURIComponent(start)}` : ''}`;

    // If the page loses focus or is hidden, the Telegram app opened: don't fall back.
    let appOpened = false;
    const markOpened = () => (appOpened = true);
    win.addEventListener('blur', markOpened, { once: true });
    doc.addEventListener('visibilitychange', markOpened, { once: true });

    win.location.href = appLink;

    win.setTimeout(() => {
      win.removeEventListener('blur', markOpened);
      doc.removeEventListener('visibilitychange', markOpened);
      if (!appOpened && doc.visibilityState === 'visible') win.location.href = anchor.href;
    }, 1500);
  };

  doc.addEventListener('click', onClick);
  return () => doc.removeEventListener('click', onClick);
}
