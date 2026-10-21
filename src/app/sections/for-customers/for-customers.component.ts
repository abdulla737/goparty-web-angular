import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { FeatureTabsComponent } from '../../shared/feature-tabs.component';

@Component({
  selector: 'gp-for-customers',
  imports: [FeatureTabsComponent],
  template: `
    <section id="for-customers" class="section section--tint" aria-labelledby="customers-title">
      <div class="container">
        <header class="section-head">
          <p class="eyebrow">{{ s().eyebrow }}</p>
          <h2 id="customers-title">{{ s().h2 }}</h2>
          <p class="section-head__sub">{{ s().subtext }}</p>
        </header>
        <gp-feature-tabs [tabs]="tabs()" idPrefix="cust" [label]="i18n.ui().customerFeaturesLabel" />
      </div>
    </section>
  `,
})
export class ForCustomersComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly s = computed(() => this.i18n.c().site.CUSTOMERS_SECTION);
  protected readonly tabs = computed(() => this.i18n.c().site.CUSTOMER_TABS);
}
