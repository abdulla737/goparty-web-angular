import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { TermsPageComponent } from './pages/legal/terms-page.component';
import { PrivacyPageComponent } from './pages/legal/privacy-page.component';
import { RefundPageComponent } from './pages/legal/refund-page.component';
import { BlogListComponent } from './pages/blog/blog-list.component';
import { BlogPostComponent } from './pages/blog/blog-post.component';
import { FaqPageComponent } from './pages/faq/faq-page.component';
import { Lang } from './i18n/content';
import { langGuard } from './i18n/lang.guard';

/** The same pages for each language. English at "/", Arabic under "/ar". */
const pages = (lang: Lang): Routes => [
  { path: '', pathMatch: 'full', component: HomePageComponent, data: { lang }, canActivate: [langGuard] },
  { path: 'contact-us', component: ContactPageComponent, data: { lang }, canActivate: [langGuard] },
  { path: 'faq', component: FaqPageComponent, data: { lang }, canActivate: [langGuard] },
  // Keeps the URLs already used on goparty.ae.
  { path: 'termsOfServiceEn', component: TermsPageComponent, data: { lang }, canActivate: [langGuard] },
  { path: 'privacyPolicyEn', component: PrivacyPageComponent, data: { lang }, canActivate: [langGuard] },
  { path: 'refundPolicyEn', component: RefundPageComponent, data: { lang }, canActivate: [langGuard] },
  { path: 'blog', component: BlogListComponent, data: { lang }, canActivate: [langGuard] },
  { path: 'blog/:slug', component: BlogPostComponent, data: { lang }, canActivate: [langGuard] },
];

export const routes: Routes = [
  { path: 'ar', children: pages('ar') },
  ...pages('en'),
  { path: '**', redirectTo: '' },
];
