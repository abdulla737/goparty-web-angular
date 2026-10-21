/**
 * Blog (English).
 * Add a post: copy one object in BLOG_POSTS, give it a new slug, and add the same slug
 * to ../ar/blog.ts. New posts are prerendered automatically; add their URLs to
 * public/sitemap.xml.
 * The six posts below are starter articles written for launch — review or replace them.
 */
import { BlogPageText, BlogPost } from '../blog-types';

export const BLOG_PAGE: BlogPageText = {
  metaTitle: 'GoParty Blog | Party Ideas, Guides & Tips in the UAE',
  metaDescription:
    'Party ideas, planning guides and tips for birthdays, weddings and events in Dubai and across the UAE, from the GoParty team.',
  eyebrow: 'GoParty Blog',
  h1: 'Party ideas, guides and tips for the UAE',
  subtext: 'Plan birthdays, weddings and corporate events in Dubai and across the UAE with practical guides from the GoParty team.',
  searchLabel: 'Search articles',
  searchPlaceholder: 'Search articles',
  categoriesLabel: 'Categories',
  all: 'All',
  featured: 'Featured',
  latest: 'Latest articles',
  readArticle: 'Read article',
  readTime: '{n} min read',
  noResults: 'No articles match your search. Try another word or category.',
  blog: 'Blog',
  onThisPage: 'On this page',
  backToBlog: 'Back to all articles',
  share: 'Share this article',
  copyLink: 'Copy link',
  linkCopied: 'Link copied',
  related: 'Related articles',
  ctaTitle: 'Plan your party on GoParty',
  ctaText: 'Compare verified sellers, track your budget and send invitations in one place.',
  ctaButton: 'Start planning',
  dateLocale: 'en-GB',
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'kids-birthday-party-dubai-guide',
    category: 'Birthdays',
    title: 'How to Plan a Kids’ Birthday Party in Dubai: A Step-by-Step Guide',
    excerpt:
      'From choosing a theme and venue to booking balloons, catering and entertainment, here is everything to sort out in the weeks before the big day.',
    date: '2026-10-12',
    readMinutes: 7,
    image: 'images/hero-balloons.svg',
    imageAlt: 'Colourful balloon decoration for a kids birthday party in Dubai',
    featured: true,
    author: 'GoParty Team',
    body: [
      {
        p: 'A great kids’ party is mostly good timing. Book the busy services early, keep the guest list realistic and leave the last week for small details. Use this guide as a checklist from six weeks out to party day.',
      },
      { h2: 'Set your budget and guest list', id: 'budget' },
      {
        p: 'Decide how many children and adults you will invite before you look at venues. The guest count drives the size of the venue, the catering order and the number of party favours.',
      },
      { h2: 'Choose a theme and venue', id: 'theme' },
      {
        p: 'Pick one theme and let it guide the colours, cake and decoration. For indoor parties in the summer months, book a party hall or venue with air conditioning; in the cooler months, a garden or beach setting works well.',
      },
      { h2: 'Book decoration and entertainment', id: 'book' },
      {
        p: 'Balloon arches, backdrops, magicians and face painters are the first to sell out on weekends. Compare verified sellers on GoParty and add the packages you like to one party plan.',
      },
      { list: ['Balloon decoration and backdrop', 'Entertainment: magic show, games host or face painting', 'Event photography'] },
      {
        tip: {
          title: 'Tip from the GoParty team',
          text: 'Payments are held in escrow until your party is confirmed, so you can book early without paying the seller directly.',
        },
      },
      { h2: 'Sort catering and the cake', id: 'catering' },
      {
        p: 'Plan finger food for children and a separate menu for adults. Order the cake at least a week ahead and share any allergies with the caterer.',
      },
      { h2: 'Send invitations on WhatsApp', id: 'invite' },
      {
        p: 'Send invitations two to three weeks before the party. With GoParty, guests reply with one tap, so you know the final numbers in time for the caterer.',
      },
      {
        figure: {
          src: 'images/app/invite-4-whatsapp-preview.webp',
          alt: 'WhatsApp invitation preview with RSVP buttons in the GoParty app',
          caption: 'Preview your WhatsApp invitation before you send it.',
          phone: true,
        },
      },
    ],
  },
  {
    slug: 'wedding-kosha-hall-setup-ideas-uae',
    category: 'Weddings',
    title: 'Wedding Kosha and Hall Setup Ideas for UAE Weddings',
    excerpt: 'Stage styles, table settings and lighting ideas for weddings in the UAE, and how to book them with confidence.',
    date: '2026-10-08',
    readMinutes: 6,
    image: 'images/hall-table.svg',
    imageAlt: 'Elegant wedding hall table setup planned with GoParty',
    author: 'GoParty Team',
    body: [
      {
        p: 'The kosha and the hall setup set the mood for the whole evening. Settle the style early, then book the decorator, lighting and hall so they work as one design.',
      },
      { h2: 'Choose a kosha style', id: 'kosha' },
      {
        p: 'A classic kosha uses a raised stage, a statement backdrop and fresh flowers. Modern setups lean on clean arches, soft drapes and fewer, larger flower arrangements. Ask decorators for photos of setups they have built in halls of a similar size.',
      },
      { h2: 'Plan the tables', id: 'tables' },
      { list: ['Agree the table shape and seating plan with the hall', 'Match centrepieces to the kosha flowers', 'Keep centrepieces low so guests can talk across the table'] },
      { h2: 'Get the lighting right', id: 'lighting' },
      {
        p: 'Warm lighting on the stage and softer light on the tables flatters photos and video. If you hire lighting separately, make sure the lighting team and the decorator visit the hall together.',
      },
      { h2: 'Book with confidence', id: 'book' },
      {
        p: 'On GoParty every seller passes identity, licence and quality checks. Compare packages side by side, read verified reviews and keep every booking in one party plan.',
      },
    ],
  },
  {
    slug: 'party-services-categories-explained',
    category: 'Guides',
    title: 'Choosing the Right Party Services: 13 Categories Explained',
    excerpt: 'From flowers and hospitality staff to yachts and limousines, what each party service covers and when to book it.',
    date: '2026-10-03',
    readMinutes: 8,
    image: 'images/app/book-2-categories.webp',
    imageAlt: 'Party service categories in the GoParty app',
    author: 'GoParty Team',
    body: [
      { p: 'GoParty groups party sellers into 13 categories. Here is what each one covers, so you know where to look first.' },
      { h2: 'Decoration and atmosphere', id: 'decoration' },
      { list: ['Party Decoration: themes, backdrops and table styling', 'Balloon Decoration: arches, bouquets and balloon walls', 'Lighting Rental: stage, ambient and outdoor lighting'] },
      { h2: 'Entertainment and memories', id: 'entertainment' },
      { list: ['Entertainment: performers, games hosts and shows', 'DJ & Sound: music, speakers and microphones', 'Event Photography: photos and video of the day'] },
      { h2: 'Food and hospitality', id: 'food' },
      { list: ['Catering: menus for any guest count', 'Hospitality Staff: waiters, hosts and coffee service', 'Makeup & Beauty: styling for the hosts and guests'] },
      { h2: 'Venues, transport and gifts', id: 'venues' },
      { list: ['Party Halls & Venues', 'Yacht & Boat Rental', 'Limousine & Transport', 'Gifts & Party Favours'] },
      {
        tip: {
          title: 'Book the venue first',
          text: 'Most other services depend on the venue’s size, timing and rules, so confirm it before you book decoration or catering.',
        },
      },
    ],
  },
  {
    slug: 'whatsapp-party-invitations-rsvp-tips',
    category: 'Invitations',
    title: 'WhatsApp Party Invitations: Etiquette and RSVP Tips',
    excerpt: 'When to send, what to write and how to get guests to reply on time.',
    date: '2026-09-28',
    readMinutes: 5,
    image: 'images/app/invite-4-whatsapp-preview.webp',
    imageAlt: 'WhatsApp invitation preview with RSVP buttons',
    author: 'GoParty Team',
    body: [
      { p: 'WhatsApp is how most people in the UAE share invitations. A few simple habits make sure guests read yours and reply.' },
      { h2: 'Send at the right time', id: 'timing' },
      { p: 'Send invitations two to three weeks before a birthday and four to six weeks before a wedding. Avoid late evenings; daytime messages get read sooner.' },
      { h2: 'Write a clear message', id: 'message' },
      { list: ['Who is hosting and what the occasion is', 'Date, time and location', 'A clear request to confirm attendance'] },
      { h2: 'Make replying easy', id: 'rsvp' },
      {
        p: 'GoParty invitations include buttons for guests to accept or decline, and the replies are tracked for you. If WhatsApp cannot deliver a message, GoParty may use SMS or another available channel so it still arrives.',
      },
      {
        figure: {
          src: 'images/app/invite-4-whatsapp-preview.webp',
          alt: 'GoParty WhatsApp invitation preview',
          caption: 'Guests reply with one tap.',
          phone: true,
        },
      },
      { h2: 'Respect the guidelines', id: 'guidelines' },
      { p: 'Use correct phone numbers, avoid vague wording, and only send on someone else’s behalf with their permission.' },
    ],
  },
  {
    slug: 'escrow-payments-party-booking',
    category: 'GoParty Tips',
    title: 'How Escrow Payments Protect Your Party Booking',
    excerpt: 'How GoParty handles your payment, and what happens if a booking is cancelled.',
    date: '2026-09-21',
    readMinutes: 4,
    image: 'images/app/book-5-checkout.webp',
    imageAlt: 'GoParty checkout with secure payment',
    author: 'GoParty Team',
    body: [
      { p: 'Paying a supplier you have never met is the biggest worry when planning a party. Here is how payment works on GoParty.' },
      { h2: 'You pay through GoParty', id: 'pay' },
      { p: 'All payments are made through the platform’s approved methods, in UAE Dirham. You never transfer money directly to a seller.' },
      { h2: 'Your payment is held securely', id: 'held' },
      { p: 'GoParty collects the payment on the seller’s behalf and holds it securely until your party is confirmed. Amounts under dispute can be held until the dispute is resolved.' },
      { h2: 'If a booking is cancelled', id: 'cancel' },
      {
        list: [
          'If the seller cancels, you receive a full refund and may be entitled to compensation.',
          'If you cancel, the refund depends on the published policy and the costs already incurred.',
          'A defective service can be performed again or refunded.',
        ],
      },
      {
        tip: {
          title: 'Read the Refund Policy',
          text: 'The full rules on cancellations and refunds are in the GoParty Refund Policy.',
        },
      },
    ],
  },
  {
    slug: 'party-plan-budget-in-10-minutes',
    category: 'GoParty Tips',
    title: 'Build a Party Plan and Budget in 10 Minutes',
    excerpt: 'Use one party plan to combine sellers, track payments and count down to the day.',
    date: '2026-09-14',
    readMinutes: 5,
    image: 'images/app/party-plan-detail.webp',
    imageAlt: 'GoParty party plan with countdown and budget',
    author: 'GoParty Team',
    body: [
      { p: 'A party plan keeps every booking, payment and invitation for one event in one place. Setting one up takes a few minutes.' },
      { h2: 'Create the plan', id: 'create' },
      { p: 'Open Parties in the GoParty app and tap Create party. Add the plan name, host, event type, date, time, location and number of guests.' },
      {
        figure: {
          src: 'images/app/create-party-plan.webp',
          alt: 'Create Party Plan form in the GoParty app',
          caption: 'Add your party details.',
          phone: true,
        },
      },
      { h2: 'Add packages', id: 'packages' },
      { p: 'Tap New Package, choose a category and add packages from different sellers. Each one appears in your plan with its price and status.' },
      { h2: 'Track your budget', id: 'budget' },
      { p: 'Your plan shows the total, what you have paid and what is left, along with a countdown to the day.' },
      { h2: 'Send invitations', id: 'invitations' },
      { p: 'Tap New Invitation to choose a card, add guests and send it on WhatsApp.' },
    ],
  },
];
