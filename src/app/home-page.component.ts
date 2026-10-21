import { Component, inject } from '@angular/core';
import { SeoService } from './shared/seo.service';
import { LanguageService } from './i18n/language.service';
import { HeroComponent } from './sections/hero/hero.component';
import { StatsComponent } from './sections/stats/stats.component';
import { CategoriesComponent } from './sections/categories/categories.component';
import { ForCustomersComponent } from './sections/for-customers/for-customers.component';
import { ForSellersComponent } from './sections/for-sellers/for-sellers.component';
import { HowItWorksComponent } from './sections/how-it-works/how-it-works.component';
import { WhyGopartyComponent } from './sections/why-goparty/why-goparty.component';
import { CtaBannerComponent } from './sections/cta-banner/cta-banner.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';

@Component({
  selector: 'gp-home-page',
  imports: [
    HeroComponent,
    StatsComponent,
    CategoriesComponent,
    ForCustomersComponent,
    ForSellersComponent,
    HowItWorksComponent,
    WhyGopartyComponent,
    CtaBannerComponent,
    TestimonialsComponent,
  ],
  template: `
    <gp-hero />
    <gp-stats />
    <gp-categories />
    <gp-for-customers />
    <gp-for-sellers />
    <gp-how-it-works />
    <gp-why-goparty />
    <gp-cta-banner />
    <gp-testimonials />
  `,
})
export class HomePageComponent {
  constructor() {
    const seo = inject(LanguageService).c().site.SEO;
    inject(SeoService).set({ title: seo.title, description: seo.description, path: '/' });
  }
}
