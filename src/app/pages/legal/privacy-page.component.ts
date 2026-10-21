import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { SeoService } from '../../shared/seo.service';
import { LegalDocumentComponent } from './legal-document.component';

@Component({
  selector: 'gp-privacy-page',
  imports: [LegalDocumentComponent],
  template: `<gp-legal-document [doc]="doc()" />`,
})
export class PrivacyPageComponent {
  private readonly i18n = inject(LanguageService);
  protected readonly doc = computed(() => this.i18n.c().privacy);

  constructor() {
    const d = this.doc();
    inject(SeoService).set({ title: d.pageTitle, description: d.metaDescription, path: d.path });
  }
}
