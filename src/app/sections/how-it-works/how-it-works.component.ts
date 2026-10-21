import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';
import { TabState } from '../../shared/tabs';

@Component({
  selector: 'gp-how-it-works',
  imports: [IconComponent],
  templateUrl: './how-it-works.component.html',
})
export class HowItWorksComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly s = computed(() => this.i18n.c().site.HOW_SECTION);
  protected readonly groups = computed(() => {
    const steps = this.i18n.c().site.HOW_STEPS;
    return [
      { id: 'customers', label: this.s().tabs.customers, steps: steps.customers },
      { id: 'sellers', label: this.s().tabs.sellers, steps: steps.sellers },
    ];
  });
  protected readonly state = new TabState(2);
}
