import { CUSTOM_ELEMENTS_SCHEMA, Component, afterNextRender, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ELEVENLABS_AGENT } from '../data/links';
import { LanguageService } from '../i18n/language.service';

/**
 * GoParty AI assistant: the ElevenLabs Agents widget (voice and text chat).
 * - Loads only in the browser, after the page has rendered, so it never slows the first paint
 *   or appears in the prerendered HTML.
 * - Hidden until ELEVENLABS_AGENT.agentId is set in data/links.ts.
 * - Sits bottom-right on English pages and bottom-left on Arabic pages.
 */
@Component({
  selector: 'gp-ai-assistant',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    @if (ready()) {
      <elevenlabs-convai
        [attr.agent-id]="agentId"
        variant="compact"
        [attr.placement]="i18n.lang() === 'ar' ? 'bottom-left' : 'bottom-right'"
      ></elevenlabs-convai>
    }
  `,
})
export class AiAssistantComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly agentId = ELEVENLABS_AGENT.agentId.trim();
  protected readonly ready = signal(false);

  constructor() {
    const doc = inject(DOCUMENT);
    afterNextRender(() => {
      if (!this.agentId) return;
      if (!doc.querySelector('script[data-elevenlabs-widget]')) {
        const s = doc.createElement('script');
        s.src = ELEVENLABS_AGENT.scriptUrl;
        s.async = true;
        s.type = 'text/javascript';
        s.setAttribute('data-elevenlabs-widget', '');
        doc.body.appendChild(s);
      }
      this.ready.set(true);
    });
  }
}
