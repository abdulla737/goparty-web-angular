/**
 * GoParty site copy (English) — single source of truth.
 * The Arabic version in ../ar/site-content.ts must keep the same shape.
 *
 * All text follows "GoParty Website: Figma Copy Edit Guide" (SEO edits).
 * Section numbers in the comments match the guide.
 * Lines marked TODO need real data from the GoParty team before launch.
 */

import { IconName } from '../../shared/icons';
import { LINKS, TELEGRAM_BOT } from '../links';

export const SEO = {
  // 12. Other edits — page title (58 chars) and meta description (~140 chars)
  title: 'GoParty | Book Verified Party & Event Sellers in the UAE',
  description:
    'Plan your party or event in the UAE with GoParty. Compare verified sellers for decoration, catering & photography. Pay securely with escrow.',
};

/* 1. Navigation bar */
export const NAV_ITEMS = [
  { label: 'Party Services', href: '/#services' },
  { label: 'For Customers', href: '/#for-customers' },
  { label: 'For Sellers', href: '/#for-sellers' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Blog', href: LINKS.blog },
];

/* 2. Hero frame */
export const HERO = {
  badge: "UAE's #1 Verified Party & Event Marketplace",
  h1Lead: 'Trust the Party.',
  h1Rest: 'Book Verified Event Sellers in Dubai & UAE.',
  // Use this shorter H1 if the long one wraps to 4 lines on your layout:
  h1RestShort: 'Book Verified Sellers in the UAE.',
  subtext:
    "GoParty is the UAE's party and event marketplace. Compare verified party planners, decorators, caterers, DJs and photographers in Dubai and across the UAE. Every seller is vetted and every payment is held in escrow.",
  primaryCta: 'Plan Your Party',
  secondaryCta: 'See How It Works',
  // TODO: confirm this is your real figure before launch.
  rating: 'Rated 5★ by 100+ UAE customers',
  avatars: ['FA', 'AM', 'SM', 'NK'],
  cards: {
    verified: { title: 'Vendor Verified', seller: 'Elegance Events Dubai', tags: ['Decoration', 'Hall', 'Entertainment'] },
    escrow: 'Escrow-Protected Payment',
    booked: '47+ Party Packages Booked',
  },
  imageAlt: 'Colourful balloon decoration for a birthday party in the UAE',
};

/* 3. Stats bar */
export const STATS = [
  { value: '3,200+', label: 'Verified Sellers' },
  { value: '18,000+', label: 'Parties Planned' },
  { value: '13', label: 'Party & Event Categories' },
  { value: '100%', label: 'Escrow-Secured Payments' },
];

/* 4. Categories frame */
export const CATEGORIES_SECTION = {
  eyebrow: 'Party & Event Services in the UAE',
  h2: 'Every Party Service in Dubai & UAE. One Platform.',
  subtext:
    'From birthdays and weddings to corporate events, find verified sellers for party decoration, lighting, DJs, photography, catering, halls and yacht rentals.',
};

export const CATEGORIES: { label: string; icon: IconName }[] = [
  { label: 'Party Decoration', icon: 'sparkles' },
  { label: 'Lighting Rental', icon: 'lightbulb' },
  { label: 'Entertainment', icon: 'popper' },
  { label: 'DJ & Sound', icon: 'music' },
  { label: 'Balloon Decoration', icon: 'balloon' },
  { label: 'Event Photography', icon: 'camera' },
  { label: 'Catering', icon: 'utensils' },
  { label: 'Hospitality Staff', icon: 'bell-concierge' },
  { label: 'Makeup & Beauty', icon: 'brush' },
  { label: 'Party Halls & Venues', icon: 'building' },
  { label: 'Yacht & Boat Rental', icon: 'sailboat' },
  { label: 'Limousine & Transport', icon: 'car' },
  { label: 'Gifts & Party Favours', icon: 'gift' },
];

export interface FeatureTab {
  id: string;
  tab: string;
  icon: IconName;
  h3: string;
  body: string;
  bullets: string[];
  link: string;
  href: string;
  /** alt text when this tab shows an image / visual */
  visualAlt: string;
  /** Real app screenshot shown instead of the HTML mock-up */
  screenshot?: string;
  /** Optional step-by-step walkthrough with app screenshots, shown under the tab */
  steps?: { title: string; heading: string; items: AppStep[] };
}

export interface AppStep {
  title: string;
  body: string;
  /** Image path under /public */
  image: string;
  alt: string;
}

/* 5. For Customers: three tab frames */
export const CUSTOMERS_SECTION = {
  eyebrow: 'For Customers',
  h2: 'Plan Your Party in Dubai & UAE, Verified & Simplified.',
  subtext:
    'Compare event sellers, build a party plan with a budget tracker, and send digital invitations, all in one place.',
};

export const CUSTOMER_TABS: FeatureTab[] = [
  {
    id: 'browse',
    tab: 'Browse & Book',
    icon: 'search',
    h3: 'Browse & Book Verified Sellers in Dubai',
    body: 'Explore thousands of verified sellers across 13 party categories. Every seller passes strict onboarding, so you get zero fake listings.',
    bullets: [
      'Filter by category, location and budget',
      'Read verified customer reviews',
      'Compare party packages side by side',
      'Get instant booking confirmation',
    ],
    link: 'Browse party sellers',
    href: '#services',
    visualAlt: 'Verified party seller listings on GoParty filtered by category and budget',
    steps: {
      title: 'How it works',
      heading: 'Book a package for your party in 6 steps',
      items: [
        {
          title: 'Go to your party plan',
          body: 'Open Parties, choose your party plan and tap New Package.',
          image: 'images/app/book-1-party-plan.webp',
          alt: 'GoParty party plan page with countdown, budget and New Package button',
        },
        {
          title: 'Select a category',
          body: 'Pick a category such as flowers, hospitality, halls, balloons or entertainment, then choose a seller and package.',
          image: 'images/app/book-2-categories.webp',
          alt: 'Categories page in the GoParty app with flowers, hospitality, boats, halls, balloons and more',
        },
        {
          title: 'Add the package to your party plan',
          body: 'Choose the package options and tap Add To Plan. You can view your plan or add another package.',
          image: 'images/app/book-3-package-added.webp',
          alt: 'Package Added Successfully message in GoParty with View My Plan and Add Another Package buttons',
        },
        {
          title: 'Send a request for confirmation',
          body: 'Send the request to the seller. Your order stays pending until the seller confirms it before the deadline.',
          image: 'images/app/book-4-request.webp',
          alt: 'GoParty order details pending seller confirmation with package, items included and party plan',
        },
        {
          title: 'Make the payment',
          body: 'Review the price breakdown with VAT and pay securely with card, Apple Pay or Google Pay.',
          image: 'images/app/book-5-checkout.webp',
          alt: 'GoParty checkout with price breakdown, VAT, payment methods and Pay Securely button',
        },
        {
          title: 'Your package is being prepared',
          body: 'Track your order with a countdown to delivery, and call or WhatsApp the verified seller anytime.',
          image: 'images/app/book-6-preparing.webp',
          alt: 'GoParty order paid and being prepared with time to delivery countdown and seller contact',
        },
      ],
    },
  },
  {
    id: 'plan',
    tab: 'Party Plan',
    icon: 'list-checks',
    h3: 'Create Your Party Plan & Budget',
    body: 'Build a complete party plan in minutes. Combine decoration, catering, entertainment and photography packages from different sellers, then track your budget and timeline in one place.',
    bullets: [
      'Combine packages from multiple sellers',
      'Real-time party activity tracker',
      'Party budget tracker with cost breakdown',
      'Event timeline and schedule builder',
    ],
    link: 'Start planning your party',
    href: '#plan-steps',
    visualAlt: 'GoParty party plan with countdown, budget tracker, date, time and location',
    screenshot: 'images/app/party-plan-detail.webp',
    steps: {
      title: 'How it works',
      heading: 'Create a party plan in 3 steps',
      items: [
        {
          title: 'Open the Party Plans page',
          body: 'Tap Parties in the GoParty app to see all your plans, then tap Create party.',
          image: 'images/app/party-plans-list.webp',
          alt: 'GoParty Party Plans page listing active plans with budgets and payment progress',
        },
        {
          title: 'Add your party details',
          body: 'Enter the plan name, host, event type, date, time, location, address and number of guests.',
          image: 'images/app/create-party-plan.webp',
          alt: 'Create Party Plan form in the GoParty app with event type, date, time, location and guests',
        },
        {
          title: 'Create your party plan',
          body: 'Tap Create Party Plan. Your plan is ready, with a countdown to the day, a budget tracker and buttons to add packages and invitations.',
          image: 'images/app/party-created.webp',
          alt: 'GoParty party plan created with a congratulations message and confetti',
        },
      ],
    },
  },
  {
    id: 'invitations',
    tab: 'Guest Invitations',
    icon: 'send',
    h3: 'Send Digital Party Invitations in the UAE',
    body: 'Choose from designer invitation templates and send them straight to your guests by WhatsApp, all from within GoParty.',
    bullets: [
      'Designer invitation templates',
      'Custom invite messages',
      'Guest RSVP tracker',
      'One-tap WhatsApp sharing',
    ],
    link: 'Create your invitation',
    href: '#invitations-steps',
    visualAlt: 'Digital party invitation with guest RSVP tracker on GoParty',
    steps: {
      title: 'How it works',
      heading: 'Send invitations in 5 steps',
      items: [
        {
          title: 'Open your party plan',
          body: 'Go to Parties, open your party plan and tap New Invitation.',
          image: 'images/app/invite-1-party-plan.webp',
          alt: 'GoParty party plan with countdown, invitation order and New Invitation button',
        },
        {
          title: 'Select an invitation card',
          body: 'Browse invitation cards by party type and seller, then choose the design you like.',
          image: 'images/app/invite-2-cards.webp',
          alt: 'Invitation Cards page in the GoParty app with party types and card designs with prices',
        },
        {
          title: 'Select your guests',
          body: 'Set the number of guests, then add them from your contacts or by UAE mobile number and save the guest list.',
          image: 'images/app/invite-3-guests.webp',
          alt: 'Choose Guests step in GoParty with invitation package price, guest counter and contact list',
        },
        {
          title: 'Preview the WhatsApp message',
          body: 'See exactly how your card and message will look in WhatsApp, with buttons for guests to accept or decline.',
          image: 'images/app/invite-4-whatsapp-preview.webp',
          alt: 'WhatsApp message preview of a GoParty invitation card with RSVP buttons',
        },
        {
          title: 'Send your invitations',
          body: 'Once your card design is completed, tap Send Invitations to deliver it to all your guests.',
          image: 'images/app/invite-5-send.webp',
          alt: 'GoParty invitation order details with design completed and Send Invitations button',
        },
      ],
    },
  },
];

/* 6. For Sellers: four tab frames */
export const SELLERS_SECTION = {
  eyebrow: 'For Sellers',
  h2: 'Grow Your Event Business with GoParty',
  subtext:
    'Reach thousands of UAE customers planning parties and events. Manage bookings with ease and get paid securely through one professional platform.',
  appTitle: 'Get the GoParty Seller app',
  appText: 'Manage orders, packages and payouts from your phone. Available for iPhone and Android.',
  appStoreAlt: 'Download the GoParty Seller app on the App Store',
  googlePlayAlt: 'Get the GoParty Seller app on Google Play',
  comingSoon: 'Coming soon',
};

export const SELLER_TABS: FeatureTab[] = [
  {
    id: 'profile',
    tab: 'Company Profile',
    icon: 'badge-check',
    h3: 'Build Your Company Profile',
    body: 'Create a verified company profile that showcases your portfolio, packages and reviews to customers searching for event services in the UAE.',
    bullets: [
      'Verified badge on your profile',
      'Showcase portfolio & past parties',
      'Set your service areas',
      'Set availability calendar',
    ],
    link: 'Join as a Vendor',
    href: '#how-it-works',
    visualAlt: 'Verified GoParty seller company profile with portfolio and reviews',
  },
  {
    id: 'dashboard',
    tab: 'Dashboard',
    icon: 'chart',
    h3: 'Smart Seller Dashboard',
    // Body not listed in the guide — kept close to the current site.
    body: 'See every order the moment it arrives, confirm bookings and follow your revenue from one dashboard.',
    bullets: [
      'Real-time order notifications',
      'Total revenue & analytics',
      'Order confirmation workflow',
      'Booking calendar & date management',
    ],
    link: 'Join as a Seller',
    href: '#how-it-works',
    visualAlt: 'GoParty seller dashboard with real-time bookings and revenue analytics',
  },
  {
    id: 'packages',
    tab: 'Packages',
    icon: 'package',
    h3: 'Create Unlimited Party Packages',
    body: 'Build and publish as many packages as you need. Set your pricing, inclusions and availability so customers can book directly.',
    // TODO: bullets not listed in the guide — confirm against the Figma frame.
    bullets: [
      'Unlimited packages in every category',
      'Your own pricing & inclusions',
      'Photos and package details',
      'Direct booking by customers',
    ],
    link: 'Join as a Seller',
    href: '#how-it-works',
    visualAlt: 'Party packages with pricing and inclusions created by a GoParty seller',
  },
  {
    id: 'wallet',
    tab: 'Wallet',
    icon: 'wallet',
    h3: 'Vendor Wallet & Escrow Payouts',
    body: "Every customer payment flows through GoParty's secure escrow system. Track transactions, request payouts and stay in control of your earnings.",
    // TODO: bullets 1–3 not listed in the guide — confirm against the Figma frame.
    bullets: [
      'Escrow-held customer payments',
      'Full transaction history',
      'Request payouts anytime',
      'Fraud-protected payments',
    ],
    link: 'Join as a Seller',
    href: '#how-it-works',
    visualAlt: 'Seller receiving escrow payout in GoParty wallet',
  },
];

/* 7. How It Works */
export const HOW_SECTION = {
  eyebrow: 'How It Works',
  h2: 'How GoParty Works: Simple Steps for Parties & Events',
  subtext:
    "Whether you're planning a party in the UAE or growing your event business, getting started is effortless.",
  tabs: { customers: 'For Customers', sellers: 'For Sellers' },
};

export const HOW_STEPS = {
  customers: [
    {
      title: 'Sign Up & Search',
      body: 'Create your account and browse verified sellers across all party categories.',
      icon: 'search' as IconName,
    },
    {
      title: 'Build Your Party Plan',
      body: 'Add your favourite packages into a unified party plan and track your budget in real time.',
      icon: 'list-checks' as IconName,
    },
    {
      title: 'Book Safely & Celebrate',
      body: 'Pay securely through GoParty. Funds are held until your party is confirmed, then celebrate!',
      icon: 'popper' as IconName,
    },
  ],
  // TODO: seller card 1 & 3 text was not in the guide — confirm against the Figma frame.
  sellers: [
    {
      title: 'Create Your Profile',
      body: 'Register your company, pass verification and get your verified seller badge.',
      icon: 'badge-check' as IconName,
    },
    {
      title: 'Publish Your Packages',
      body: 'Add your services, pricing and availability so customers can book you directly.',
      icon: 'package' as IconName,
    },
    {
      title: 'Get Booked & Get Paid',
      body: 'Confirm orders from your dashboard and receive escrow payouts to your wallet.',
      icon: 'wallet' as IconName,
    },
  ],
};

/* 8. Why GoParty */
export const WHY_SECTION = {
  eyebrow: 'Why GoParty',
  h2: 'Built on Trust. Designed for Celebrations.',
  subtext:
    'In a market full of unreliable suppliers and risky payments, GoParty was built to give UAE customers and sellers complete peace of mind.',
  imageAlt: 'Elegant event hall table setup planned with GoParty',
  floating: { title: 'Payment Status', status: 'Held securely in escrow' },
};

export const WHY_CARDS: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Secure Escrow Payments',
    body: 'Your money is held safely until your party is confirmed and delivered as promised.',
    icon: 'lock',
  },
  {
    title: 'Strict Seller Verification',
    body: 'Every seller passes identity, trade licence and quality checks before going live.',
    icon: 'shield-check',
  },
  {
    title: 'No Fake Listings',
    body: 'Multi-layer listing verification and a dedicated dispute process protect every booking.',
    icon: 'badge-check',
  },
  {
    title: 'Real-Time Booking Notifications',
    body: 'Instant updates on bookings, seller replies, payment status and party reminders.',
    icon: 'bell',
  },
];

/* 9. CTA banner */
export const CTA = {
  eyebrow: 'Join GoParty Today',
  h2: 'Ready to Plan Your Party in Dubai & UAE?',
  subtext:
    "Join thousands of customers and verified sellers on the UAE's trusted party and event marketplace.",
  primary: 'Plan My Party',
  secondary: 'Join as a Seller',
};

/* 10. Testimonials */
export const TESTIMONIALS_SECTION = {
  eyebrow: 'Real Stories',
  h2: 'What UAE Customers & Sellers Say About GoParty',
  // Keep, but make sure the cities match your real reviews.
  subtext: 'From weddings in Dubai to birthdays in Sharjah, families and sellers across the UAE plan with GoParty.',
};

export interface Testimonial {
  name: string;
  role: string;
  city: string;
  quote: string;
  /** true until replaced with a real, approved customer review */
  placeholder: boolean;
}

// TODO: Replace with real customer reviews (guide §10: do not rewrite quotes,
// keep "seller" in seller quotes). Set placeholder:false once real.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Fatima Al Rashidi',
    role: 'Customer',
    city: 'Dubai',
    quote: 'Paste the real customer review here.',
    placeholder: true,
  },
  {
    name: 'Ahmed Al Mansoori',
    role: 'Seller',
    city: 'Abu Dhabi',
    quote: 'Paste the real seller review here.',
    placeholder: true,
  },
  {
    name: 'Sara Mohammed',
    role: 'Customer',
    city: 'Sharjah',
    quote: 'Paste the real customer review here.',
    placeholder: true,
  },
];

/* 11. Footer */
export const FOOTER = {
  tagline:
    "GoParty is the UAE's trusted party and event marketplace, connecting customers with verified sellers for birthdays, weddings, corporate events and more.",
  columns: [
    {
      heading: 'Party Services',
      links: [
        { label: 'Party Decoration', href: '/#services' },
        { label: 'Event Photography', href: '/#services' },
        { label: 'Party Entertainment', href: '/#services' },
        { label: 'Catering Services', href: '/#services' },
        { label: 'Party Halls & Venues', href: '/#services' },
        { label: 'Event Transportation', href: '/#services' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About GoParty', href: '/#why-goparty' },
        { label: 'How It Works', href: '/#how-it-works' },
        { label: 'Become a Seller', href: '/#for-sellers' },
        { label: 'Blog', href: LINKS.blog },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: LINKS.contact },
      ],
    },
    {
      heading: 'Support',
      links: [
        { label: 'Help Center', href: LINKS.helpCenter },
        { label: 'Safety & Trust', href: '/#why-goparty' },
        { label: 'Terms of Service', href: LINKS.terms },
        { label: 'Privacy Policy', href: LINKS.privacy },
        { label: 'Contact Us', href: LINKS.contact },
        { label: 'Refund Policy', href: LINKS.refund },
        { label: 'Report an Issue', href: LINKS.contact },
      ],
    },
  ],
  // TODO: add GoParty's real social profile URLs.
  socials: [
    { label: 'Facebook', icon: 'facebook' as IconName, href: '#' },
    { label: 'Instagram', icon: 'instagram' as IconName, href: '#' },
    { label: 'X', icon: 'x-logo' as IconName, href: '#' },
    { label: 'LinkedIn', icon: 'linkedin' as IconName, href: '#' },
    { label: 'Telegram', icon: 'telegram' as IconName, href: TELEGRAM_BOT.url },
  ],
  strip: ['Secure Platform', 'Verified Sellers', 'Safe Payments'],
  copyright: '© 2026 GoParty. All rights reserved.',
};

/* Interface labels used across the site */
export const UI = {
  langCode: 'en',
  skipToContent: 'Skip to content',
  homeLabel: 'GoParty home',
  mainNavLabel: 'Main',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  contactUs: 'Contact Us',
  planYourParty: 'Plan Your Party',
  /** Shown on English pages: link to the Arabic version */
  switchLang: 'العربية',
  switchLangLabel: 'View this page in Arabic',
  statsLabel: 'GoParty in numbers',
  customerFeaturesLabel: 'Customer features',
  sellerFeaturesLabel: 'Seller features',
  stepsForLabel: 'Steps for',
  example: 'Example',
  placeholderReview: 'Placeholder: add a real review',
  socialPrefix: 'GoParty on',
  legalEyebrow: 'Legal',
  onThisPage: 'On this page',
  legalHelpTitle: 'Questions about this page?',
  legalHelpBody: 'Our support team can help.',
  legalHelpLink: 'Contact GoParty',
};
