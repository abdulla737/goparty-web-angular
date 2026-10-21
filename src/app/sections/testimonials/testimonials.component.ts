import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'gp-testimonials',
  template: `
    <section class="section section--tint" aria-labelledby="stories-title">
      <div class="container">
        <header class="section-head">
          <p class="eyebrow">{{ s().eyebrow }}</p>
          <h2 id="stories-title">{{ s().h2 }}</h2>
          <p class="section-head__sub">{{ s().subtext }}</p>
        </header>
        <ul class="stories">
          @for (t of items(); track t.name) {
            <li class="story" [class.is-placeholder]="t.placeholder">
              @if (t.placeholder) { <span class="story__flag">{{ i18n.ui().placeholderReview }}</span> }
              <blockquote>“{{ t.quote }}”</blockquote>
              <p class="story__who">
                <span class="mock-avatar">{{ initials(t.name) }}</span>
                <span><b>{{ t.name }}</b><small>{{ t.role }} · {{ t.city }}</small></span>
              </p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class TestimonialsComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly s = computed(() => this.i18n.c().site.TESTIMONIALS_SECTION);
  protected readonly items = computed(() => this.i18n.c().site.TESTIMONIALS);

  protected initials(name: string): string {
    const parts = name.split(' ').filter(Boolean);
    // Arabic initials read better as a single letter
    if (this.i18n.lang() === 'ar') return parts[0]?.[0] ?? '';
    return ((parts[0]?.[0] ?? '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
  }
}
