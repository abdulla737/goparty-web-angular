import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LINKS } from '../../data/links';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'gp-cta-banner',
  imports: [RouterLink, IconComponent],
  template: `
    <section class="section section--tight" aria-labelledby="cta-title">
      <div class="container">
        <div class="cta">
          <p class="eyebrow eyebrow--light">{{ c().eyebrow }}</p>
          <h2 id="cta-title">{{ c().h2 }}</h2>
          <p class="cta__sub">{{ c().subtext }}</p>
          <div class="btn-row btn-row--center">
            <a class="btn btn--marigold btn--lg" [routerLink]="plan().path" [fragment]="plan().fragment">{{ c().primary }}<gp-icon name="arrow-right" [size]="18" /></a>
            <a class="btn btn--outline-light btn--lg" [routerLink]="join().path" [fragment]="join().fragment">{{ c().secondary }}</a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CtaBannerComponent {
  private readonly i18n = inject(LanguageService);
  protected readonly c = computed(() => this.i18n.c().site.CTA);
  protected readonly plan = computed(() => this.i18n.route(LINKS.planParty));
  protected readonly join = computed(() => this.i18n.route(LINKS.joinSeller));
}
