import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LINKS } from '../../data/links';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';
import { LogoComponent } from '../../shared/logo.component';

@Component({
  selector: 'gp-footer',
  imports: [RouterLink, IconComponent, LogoComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  private readonly i18n = inject(LanguageService);
  protected readonly ui = this.i18n.ui;
  protected readonly f = computed(() => this.i18n.c().site.FOOTER);
  protected readonly home = computed(() => this.i18n.route(LINKS.home));
  protected readonly columns = computed(() =>
    this.f().columns.map((c) => ({
      ...c,
      links: c.links.map((l) => ({ ...l, route: this.i18n.route(l.href) })),
    })),
  );
}
