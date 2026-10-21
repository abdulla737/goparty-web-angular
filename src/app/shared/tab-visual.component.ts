import { Component, computed, inject, input } from '@angular/core';
import { LanguageService } from '../i18n/language.service';
import { IconComponent } from './icon.component';

/**
 * Product mock-ups for each feature tab, built in HTML/CSS so they stay crisp,
 * theme-aware and translated. Sample data lives in data/en|ar/mocks.ts (labelled "Example").
 */
@Component({
  selector: 'gp-tab-visual',
  imports: [IconComponent],
  templateUrl: './tab-visual.component.html',
})
export class TabVisualComponent {
  readonly kind = input.required<string>();
  readonly alt = input.required<string>();

  protected readonly i18n = inject(LanguageService);
  protected readonly m = computed(() => this.i18n.c().mocks);
  protected readonly bars = [38, 52, 44, 68, 59, 82, 74];
  protected readonly days = Array.from({ length: 14 }, (_, i) => i + 9);
  protected readonly booked = [11, 14, 15, 20];
}
