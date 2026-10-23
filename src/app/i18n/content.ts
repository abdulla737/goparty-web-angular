/**
 * All translatable content, keyed by language.
 * The `: Content` annotations make the build fail if the Arabic files
 * are missing a field or have a different shape from the English ones.
 */
import * as enSite from '../data/en/site-content';
import * as arSite from '../data/ar/site-content';
import * as enContact from '../data/en/contact';
import * as arContact from '../data/ar/contact';
import { MOCKS as enMocks } from '../data/en/mocks';
import { MOCKS as arMocks } from '../data/ar/mocks';
import { TERMS as enTerms } from '../data/en/terms';
import { TERMS as arTerms } from '../data/ar/terms';
import { PRIVACY as enPrivacy } from '../data/en/privacy';
import { PRIVACY as arPrivacy } from '../data/ar/privacy';
import { REFUND as enRefund } from '../data/en/refund';
import { REFUND as arRefund } from '../data/ar/refund';
import { LegalDocument } from '../data/legal';
import * as enBlog from '../data/en/blog';
import * as arBlog from '../data/ar/blog';
import * as enFaq from '../data/en/faq';
import * as arFaq from '../data/ar/faq';

export type Lang = 'en' | 'ar';
export const LANGS: Lang[] = ['en', 'ar'];
export const DEFAULT_LANG: Lang = 'en';

export interface Content {
  site: typeof enSite;
  contact: typeof enContact;
  mocks: typeof enMocks;
  terms: LegalDocument;
  privacy: LegalDocument;
  refund: LegalDocument;
  blog: typeof enBlog;
  faq: typeof enFaq;
}

const en: Content = { site: enSite, contact: enContact, mocks: enMocks, terms: enTerms, privacy: enPrivacy, refund: enRefund, blog: enBlog, faq: enFaq };
const ar: Content = { site: arSite, contact: arContact, mocks: arMocks, terms: arTerms, privacy: arPrivacy, refund: arRefund, blog: arBlog, faq: arFaq };

export const CONTENT: Record<Lang, Content> = { en, ar };
