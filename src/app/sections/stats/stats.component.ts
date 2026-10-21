import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'gp-stats',
  template: `
    <section class="stats" [attr.aria-label]="i18n.ui().statsLabel">
      <dl class="container stats__grid">
        @for (s of stats(); track s.label) {
          <div class="stats__item">
            <dt>{{ s.label }}</dt>
            <dd>{{ s.value }}</dd>
          </div>
        }
      </dl>
    </section>
  `,
})
export class StatsComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly stats = computed(() => this.i18n.c().site.STATS);
}
