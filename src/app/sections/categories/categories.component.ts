import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LINKS } from '../../data/links';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'gp-categories',
  imports: [RouterLink, IconComponent],
  template: `
    <section id="services" class="section" aria-labelledby="services-title">
      <div class="container">
        <header class="section-head">
          <p class="eyebrow">{{ s().eyebrow }}</p>
          <h2 id="services-title">{{ s().h2 }}</h2>
          <p class="section-head__sub">{{ s().subtext }}</p>
        </header>
        <ul class="categories">
          @for (c of categories(); track c.icon) {
            <li>
              <a class="category" [routerLink]="forCustomers().path" [fragment]="forCustomers().fragment">
                <span class="category__icon"><gp-icon [name]="c.icon" [size]="26" /></span>
                <span class="category__label">{{ c.label }}</span>
              </a>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class CategoriesComponent {
  private readonly i18n = inject(LanguageService);
  protected readonly s = computed(() => this.i18n.c().site.CATEGORIES_SECTION);
  protected readonly categories = computed(() => this.i18n.c().site.CATEGORIES);
  protected readonly forCustomers = computed(() => this.i18n.route(LINKS.planParty));
}
