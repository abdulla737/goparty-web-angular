/**
 * Internal paths, written without a language prefix.
 * LanguageService.route() adds "/ar" automatically on Arabic pages.
 */
export const LINKS = {
  home: '/',
  planParty: '/#for-customers',
  joinSeller: '/#for-sellers',
  howItWorks: '/#how-it-works',
  contact: '/contact-us',
  helpCenter: '/contact-us#help-center',
  terms: '/termsOfServiceEn',
  privacy: '/privacyPolicyEn',
  refund: '/refundPolicyEn',
  blog: '/blog',
};

export const SUPPORT_EMAIL = 'Help@goparty.ae';

/**
 * GoParty Telegram support bot (@GoPartyEventBot).
 * `url` is the normal link (works everywhere, and for search engines).
 * In the browser, clicks on it open the chat straight in the Telegram app (see shared/telegram-direct.ts);
 * `?start=website` starts the conversation so the bot greets the customer right away.
 */
export const TELEGRAM_BOT = {
  username: 'GoPartyEventBot',
  url: 'https://t.me/GoPartyEventBot?start=website',
};

/**
 * ElevenLabs AI assistant (voice + chat widget, bottom corner of every page).
 * Paste your agent's public Agent ID from the ElevenLabs dashboard (Agents → your agent → Widget).
 * Leave empty to hide the assistant. NEVER put your ElevenLabs API key in the website.
 */
export const ELEVENLABS_AGENT = {
  agentId: '',
  /** Official widget script from ElevenLabs. */
  scriptUrl: 'https://unpkg.com/@elevenlabs/convai-widget-embed',
};

/**
 * GoParty Seller app store links (shown in the "For Sellers" section of the homepage).
 * Paste the full App Store and Google Play URLs. While a link is empty, its badge shows "Coming soon".
 * App Store: https://apps.apple.com/ae/app/<name>/id<number>
 * Google Play: https://play.google.com/store/apps/details?id=<package.name>
 */
export const SELLER_APP = {
  ios: '',
  android: '',
};
