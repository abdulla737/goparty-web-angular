import { Component, afterNextRender, inject } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LanguageService } from './i18n/language.service';
import { installTelegramDirectLinks } from './shared/telegram-direct';
import { AiAssistantComponent } from './shared/ai-assistant.component';

@Component({
  selector: 'gp-root',
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent, AiAssistantComponent],
  template: `
    <a class="skip-link" [routerLink]="i18n.localize(i18n.pagePath())" fragment="main">{{ i18n.ui().skipToContent }}</a>
    <gp-header />
    <main id="main">
      <router-outlet />
    </main>
    <gp-footer />
    <gp-ai-assistant />
  `,
})
export class AppComponent {
  protected readonly i18n = inject(LanguageService);

  constructor() {
    // Keep anchor targets clear of the sticky header when navigating to /#section.
    inject(ViewportScroller).setOffset([0, 88]);

    // Browser only: Support Chat links open the chat directly in the Telegram app.
    const doc = inject(DOCUMENT);
    afterNextRender(() => installTelegramDirectLinks(doc));
  }
}
