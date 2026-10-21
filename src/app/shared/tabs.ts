/**
 * Accessible tab helper. Every panel stays in the DOM (hidden with CSS, not @if),
 * so all tab copy is in the prerendered HTML and indexable by search engines.
 */
import { signal } from '@angular/core';

export class TabState {
  readonly active = signal(0);

  constructor(private readonly count: number) {}

  select(i: number): void {
    this.active.set(i);
  }

  /** Arrow-key navigation per WAI-ARIA tabs pattern. */
  onKeydown(event: KeyboardEvent, tablist: HTMLElement): void {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    let next: number | null = null;
    // In Arabic (RTL) the left/right arrows are reversed.
    const rtl = getComputedStyle(tablist).direction === 'rtl';
    if (event.key in keys) {
      const step = keys[event.key] * (rtl && event.key.startsWith('Arrow') && /Left|Right/.test(event.key) ? -1 : 1);
      next = (this.active() + step + this.count) % this.count;
    }
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = this.count - 1;
    if (next === null) return;
    event.preventDefault();
    this.select(next);
    tablist.querySelectorAll<HTMLElement>('[role="tab"]')[next]?.focus();
  }
}
