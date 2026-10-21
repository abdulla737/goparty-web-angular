import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LINKS } from '../../data/links';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'gp-hero',
  imports: [RouterLink, IconComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  private readonly i18n = inject(LanguageService);
  protected readonly h = computed(() => this.i18n.c().site.HERO);
  protected readonly plan = computed(() => this.i18n.route(LINKS.planParty));
  protected readonly how = computed(() => this.i18n.route(LINKS.howItWorks));
  protected readonly stars = [1, 2, 3, 4, 5];
}
