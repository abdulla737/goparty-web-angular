import { Component, computed, inject, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LegalDocument } from '../../data/legal';
import { LINKS } from '../../data/links';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';

type Segment = { text: string; email?: boolean };
type RenderTerm = { term: string; segments: Segment[] };
type RenderBlock =
  | { kind: 'p'; segments: Segment[] }
  | { kind: 'list'; items: string[] }
  | { kind: 'clauses' | 'definitions'; terms: RenderTerm[] }
  | { kind: 'see'; label: string; route: { path: string; fragment?: string } };
const EMAIL = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/;

/** Shared layout for Terms of Service, Privacy Policy and Refund Policy: title, table of contents, sections. */
@Component({
  selector: 'gp-legal-document',
  imports: [NgTemplateOutlet, RouterLink, IconComponent],
  templateUrl: './legal-document.component.html',
})
export class LegalDocumentComponent {
  readonly doc = input.required<LegalDocument>();
  protected readonly i18n = inject(LanguageService);
  protected readonly self = computed(() => this.i18n.localize(this.doc().path));
  protected readonly contact = computed(() => this.i18n.localize(LINKS.contact));

  /** Pre-splits paragraphs so email addresses render as mailto links. */
  protected readonly sections = computed(() =>
    this.doc().sections.map((s, i) => ({
      ...s,
      num: i + 1,
      blocks: s.blocks.map((b): RenderBlock => {
        if ('p' in b) return { kind: 'p', segments: this.split(b.p) };
        if ('list' in b) return { kind: 'list', items: b.list };
        if ('clauses' in b) return { kind: 'clauses', terms: b.clauses.map((t) => ({ term: t.term, segments: this.split(t.text) })) };
        if ('definitions' in b) return { kind: 'definitions', terms: b.definitions.map((t) => ({ term: t.term, segments: this.split(t.text) })) };
        return { kind: 'see', label: b.see.label, route: this.i18n.route(b.see.href) };
      }),
    })),
  );

  private split(text: string): Segment[] {
    // split() with a capture group puts the email matches at odd indexes
    return text
      .split(EMAIL)
      .map((t, i) => ({ text: t, email: i % 2 === 1 }))
      .filter((seg) => seg.text !== '');
  }
}
