import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ICONS, IconName } from './icons';

/** Icons that point in the reading direction and should mirror in Arabic (RTL). */
const DIRECTIONAL: IconName[] = ['arrow-right', 'send'];

@Component({
  selector: 'gp-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'icon', 'aria-hidden': 'true', '[class.icon--dir]': 'directional()' },
  template: `
    <svg viewBox="0 0 24 24" [attr.width]="size()" [attr.height]="size()" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path [attr.d]="path()" />
    </svg>
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input<number>(24);
  protected readonly path = computed(() => ICONS[this.name()]);
  protected readonly directional = computed(() => DIRECTIONAL.includes(this.name()));
}
