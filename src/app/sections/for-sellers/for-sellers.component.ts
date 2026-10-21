import { Component, computed, inject } from '@angular/core';
import { SELLER_APP } from '../../data/links';
import { LanguageService } from '../../i18n/language.service';
import { FeatureTabsComponent } from '../../shared/feature-tabs.component';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'gp-for-sellers',
  imports: [FeatureTabsComponent, IconComponent],
  template: `
    <section id="for-sellers" class="section" aria-labelledby="sellers-title">
      <div class="container">
        <header class="section-head">
          <p class="eyebrow">{{ s().eyebrow }}</p>
          <h2 id="sellers-title">{{ s().h2 }}</h2>
          <p class="section-head__sub">{{ s().subtext }}</p>
        </header>
        <gp-feature-tabs [tabs]="tabs()" idPrefix="sell" [label]="i18n.ui().sellerFeaturesLabel" />

        <!-- Seller app download (App Store + Google Play) -->
        <div class="seller-app" id="seller-app">
          <span class="seller-app__icon" aria-hidden="true"><gp-icon name="badge-check" [size]="26" /></span>
          <div class="seller-app__text">
            <h3>{{ s().appTitle }}</h3>
            <p>{{ s().appText }}</p>
          </div>
          <div class="seller-app__badges">
            @for (b of badges(); track b.id) {
              @if (b.url) {
                <a class="store-badge" [href]="b.url" target="_blank" rel="noopener">
                  <img [src]="b.img" [alt]="b.alt" width="180" height="60" loading="lazy" />
                </a>
              } @else {
                <span class="store-badge store-badge--soon" [attr.aria-label]="b.alt + ' (' + s().comingSoon + ')'">
                  <img [src]="b.img" alt="" width="180" height="60" loading="lazy" />
                  <span class="store-badge__soon">{{ s().comingSoon }}</span>
                </span>
              }
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ForSellersComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly s = computed(() => this.i18n.c().site.SELLERS_SECTION);
  protected readonly tabs = computed(() => this.i18n.c().site.SELLER_TABS);
  protected readonly badges = computed(() => [
    { id: 'ios', url: SELLER_APP.ios.trim(), img: 'images/badges/app-store.png', alt: this.s().appStoreAlt },
    { id: 'android', url: SELLER_APP.android.trim(), img: 'images/badges/google-play.png', alt: this.s().googlePlayAlt },
  ]);
}
