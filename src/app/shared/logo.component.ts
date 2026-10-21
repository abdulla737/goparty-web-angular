import { Component } from '@angular/core';

/** GoParty wordmark. Swap the inline mark for /images/GoParty.svg if you prefer the official file. */
@Component({
  selector: 'gp-logo',
  host: { class: 'logo' },
  template: `
    <svg class="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="var(--violet)" />
      <path d="M10 21.5 13.2 9l9 9.2z" fill="var(--marigold)" />
      <circle cx="23.5" cy="9" r="2" fill="var(--coral)" />
      <circle cx="8.5" cy="12" r="1.4" fill="#fff" />
    </svg>
    <span class="logo__word">Go<b>Party</b></span>
  `,
})
export class LogoComponent {}
