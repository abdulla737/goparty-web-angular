import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LINKS } from '../../data/links';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';
import { LogoComponent } from '../../shared/logo.component';

@Component({
  selector: 'gp-header',
  imports: [RouterLink, IconComponent, LogoComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly ui = this.i18n.ui;
  protected readonly nav = computed(() =>
    this.i18n.c().site.NAV_ITEMS.map((i) => ({ ...i, route: this.i18n.route(i.href) })),
  );
  protected readonly home = computed(() => this.i18n.route(LINKS.home));
  protected readonly plan = computed(() => this.i18n.route(LINKS.planParty));
  protected readonly contact = computed(() => this.i18n.route(LINKS.contact));
  protected readonly open = signal(false);
  protected readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  toggle(): void {
    this.open.update((v) => !v);
  }

  close(): void {
    this.open.set(false);
  }
}
