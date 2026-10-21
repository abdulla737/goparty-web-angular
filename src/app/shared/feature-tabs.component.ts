import { Component, OnInit, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../i18n/language.service';
import { RouteLink } from './route-link';
import { FeatureTab } from '../data/en/site-content';
import { IconComponent } from './icon.component';
import { TabVisualComponent } from './tab-visual.component';
import { TabState } from './tabs';

/**
 * Tabbed feature block used by "For Customers" and "For Sellers".
 * Every panel is always rendered; inactive panels are hidden with CSS only,
 * so all tab copy is in the prerendered HTML (guide §12: "Tab content").
 */
@Component({
  selector: 'gp-feature-tabs',
  imports: [RouterLink, IconComponent, TabVisualComponent],
  templateUrl: './feature-tabs.component.html',
})
export class FeatureTabsComponent implements OnInit {
  readonly tabs = input.required<FeatureTab[]>();
  readonly idPrefix = input.required<string>();
  readonly label = input.required<string>();
  protected state!: TabState;
  private readonly i18n = inject(LanguageService);

  /** Tab links point at homepage sections ('#services'): keep them on the page, in the current language. */
  protected link(href: string): RouteLink {
    return this.i18n.route(href.startsWith('#') ? `/${href}` : href);
  }

  ngOnInit(): void {
    this.state = new TabState(this.tabs().length);
  }
}
