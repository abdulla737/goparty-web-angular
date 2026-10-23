import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LINKS, SUPPORT_EMAIL, TELEGRAM_BOT } from '../../data/links';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';
import { SeoService } from '../../shared/seo.service';

/**
 * Contact Us page with the Help Center (FAQ) at #help-center.
 * The form has no backend: on submit it opens the visitor's email app with the
 * message addressed to Help@goparty.ae. Swap `send()` for an API call when you have one.
 */
@Component({
  selector: 'gp-contact-page',
  imports: [RouterLink, IconComponent],
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly c = computed(() => this.i18n.c().contact);
  protected readonly page = computed(() => this.c().CONTACT_PAGE);
  protected readonly form = computed(() => this.c().CONTACT_FORM);
  protected readonly faqs = computed(() =>
    this.c().FAQS.map((f) => ({ ...f, route: f.link ? this.i18n.route(f.link.href) : null })),
  );
  protected readonly faqLink = computed(() => this.i18n.localize(LINKS.faq));
  protected readonly email = SUPPORT_EMAIL;
  protected readonly telegram = TELEGRAM_BOT;

  protected readonly copied = signal(false);
  protected readonly error = signal('');
  protected readonly opened = signal(false);

  constructor() {
    const p = this.page();
    inject(SeoService).set({ title: p.title, description: p.metaDescription, path: LINKS.contact });
  }

  protected withEmail(text: string): string {
    return text.replace('{email}', this.email);
  }

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      this.copied.set(false);
    }
  }

  send(event: SubmitEvent): void {
    event.preventDefault();
    const t = this.form();
    const data = new FormData(event.target as HTMLFormElement);
    const get = (k: string) => String(data.get(k) ?? '').trim();
    const name = get('name');
    const from = get('email');
    const role = get('role');
    const topic = get('topic');
    const message = get('message');

    if (!name || !from || !message) {
      this.error.set(t.errorRequired);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from)) {
      this.error.set(t.errorEmail);
      return;
    }
    this.error.set('');

    const subject = `[${topic}] ${t.subjectFrom} ${name}`;
    const body = `${message}\n\n---\n${t.bodyName}: ${name}\n${t.bodyEmail}: ${from}\n${t.bodyRole}: ${role}\n${t.bodyTopic}: ${topic}`;
    window.location.href = `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    this.opened.set(true);
  }
}
