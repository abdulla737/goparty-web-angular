/** A labelled clause, e.g. { term: 'Language', text: 'Arabic is the official language…' } */
export interface LegalTerm {
  term: string;
  text: string;
}

export type LegalBlock =
  | { p: string }
  | { list: string[] }
  /** Labelled clauses shown as paragraphs with a bold label */
  | { clauses: LegalTerm[] }
  /** Definitions shown as a bordered list */
  | { definitions: LegalTerm[] }
  /** A link to another page, e.g. { see: { label: 'Read the Refund Policy', href: '/refundPolicyEn' } } */
  | { see: { label: string; href: string } };

export interface LegalSection {
  id: string;
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  title: string;
  navTitle: string;
  /** <title> for the page */
  pageTitle: string;
  path: string;
  metaDescription: string;
  /** Optional line under the title, e.g. "Version 1 – 2026" */
  updated?: string;
  intro?: string;
  /** Optional note shown in a highlighted box under the intro */
  notice?: string;
  sections: LegalSection[];
}
