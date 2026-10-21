import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'gp-why-goparty',
  imports: [IconComponent],
  template: `
    <section id="why-goparty" class="section" aria-labelledby="why-title">
      <div class="container why">
        <div class="why__media">
          <img src="images/hall-table.svg" [alt]="s().imageAlt" width="560" height="640" loading="lazy" />
          <div class="float float--why">
            <span class="float__icon float__icon--green"><gp-icon name="lock" [size]="18" /></span>
            <div>
              <p class="float__meta">{{ s().floating.title }}</p>
              <p class="float__title">{{ s().floating.status }}</p>
            </div>
          </div>
        </div>
        <div class="why__copy">
          <header class="section-head section-head--left">
            <p class="eyebrow">{{ s().eyebrow }}</p>
            <h2 id="why-title">{{ s().h2 }}</h2>
            <p class="section-head__sub">{{ s().subtext }}</p>
          </header>
          <ul class="why__cards">
            @for (c of cards(); track c.icon) {
              <li class="why-card">
                <span class="why-card__icon"><gp-icon [name]="c.icon" [size]="22" /></span>
                <h3>{{ c.title }}</h3>
                <p>{{ c.body }}</p>
              </li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class WhyGopartyComponent {
  private readonly i18n = inject(LanguageService);
  protected readonly s = computed(() => this.i18n.c().site.WHY_SECTION);
  protected readonly cards = computed(() => this.i18n.c().site.WHY_CARDS);
}
