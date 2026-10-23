/**
 * Customer FAQ page (/faq/).
 * Source: GoParty_Customer_FAQs_EN.pdf (last updated October 2026).
 * Each answer is a list of paragraphs; `list` adds bullet points after the first paragraph.
 */
import { IconName } from '../../shared/icons';

export interface FaqItem {
  id: string;
  q: string;
  a: string[];
  list?: { term: string; text: string }[];
}
export interface FaqCategory {
  id: string;
  title: string;
  icon: IconName;
  items: FaqItem[];
}

export const FAQ_PAGE = {
  title: 'GoParty FAQs | Party Plans, Bookings, Payments & Invitations',
  metaDescription:
    'Answers to common GoParty questions: creating a party plan, booking sellers, order statuses, payments and refunds, WhatsApp invitation cards, your account and support.',
  eyebrow: 'Help Center',
  h1: 'Frequently Asked Questions',
  subtext: 'Everything you need to know about planning your party with GoParty.',
  searchLabel: 'Search the FAQs',
  searchPlaceholder: 'Search, e.g. refund, invitation, payment',
  results: '{n} matching questions',
  noResults: 'No questions match your search. Try another word, or contact our support team.',
  clear: 'Clear search',
  topicsLabel: 'FAQ topics',
  updated: 'Last updated: October 2026',
  helpTitle: 'Need more help?',
  helpBody: 'Raise a ticket in the app from More → Help & Support → New Ticket, or email us.',
  contactButton: 'Contact us',
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'party-plans',
    title: 'Party Plans',
    icon: 'popper',
    items: [
      {
        id: 'create-party-plan',
        q: 'How do I create a party plan?',
        a: [
          'Planning a celebration? Tap Parties (the purple button in the bottom bar) → Create Party Plan. Add a plan name, event type, date, time, location on the map, address and number of guests, then tap Create Party Plan. Your party is ready for packages!',
        ],
      },
      {
        id: 'closed-party',
        q: 'What does a "Closed" party mean?',
        a: [
          "A party closes automatically once its date and time have passed. After that, you can't add packages, send requests or make payments for it, but you can still view it, cancel or remove packages and track paid orders. Use the All, Opened and Closed filters on the Parties screen to find your parties.",
        ],
      },
      {
        id: 'goparty-ai',
        q: 'What is GoParty AI?',
        a: [
          'GoParty AI helps you set up a party plan in a quick chat. Tap Parties, then the sparkle button, and answer a few questions: party name, host, event type, date and time, number of guests and location. Then tap View Party Details and start adding packages.',
        ],
      },
    ],
  },
  {
    id: 'packages-favorites',
    title: 'Packages & Favorites',
    icon: 'gift',
    items: [
      {
        id: 'add-packages',
        q: 'How do I add packages to my party?',
        a: [
          "Browse Home or Categories and open any package you like. Pick your colour and options, then tap Add To Plan → choose your party → Add To Party Plan. You can also start from your party: Parties → your party → New Package. Adding a package doesn't contact the seller yet, so send a request when you're ready.",
        ],
      },
      {
        id: 'favorites',
        q: 'How do I save favorites and find them again?',
        a: [
          'Found something you love? Tap the heart on any package or invitation design to save it. To see your saved packages, open Categories → a category and tap the heart at the top. For saved designs, open Cards and tap the heart at the top.',
        ],
      },
    ],
  },
  {
    id: 'sellers',
    title: 'Sellers',
    icon: 'badge-check',
    items: [
      {
        id: 'find-seller',
        q: 'How do I find a seller or contact them?',
        a: [
          "Looking for someone special? Open Categories → a category and use the search box to find packages or sellers. Tap a seller's name or photo to see their profile, packages, gallery and reviews. Once your order is paid, you can call or WhatsApp the seller from the SELLER section of your order.",
        ],
      },
    ],
  },
  {
    id: 'bookings-orders',
    title: 'Bookings & Orders',
    icon: 'package',
    items: [
      {
        id: 'send-request',
        q: 'How do I send a request to the seller?',
        a: [
          "Ready to book? Open the package → Send Request → choose your party → Add To Party Plan → Send Request. Already added the package? Go to Parties → your party → Send Request on the package → Yes. The seller has 3 hours to confirm, and you'll be notified as soon as they do.",
        ],
      },
      {
        id: 'order-statuses',
        q: 'What do the order statuses mean?',
        a: ["Here's what each status means:"],
        list: [
          { term: 'New', text: 'added to your party, request not sent yet.' },
          { term: 'Pending', text: 'request sent, the seller has 3 hours to confirm.' },
          { term: 'Confirmed/Awaiting Payment', text: 'the seller accepted, pay within 24 hours.' },
          { term: 'Paid/Preparing', text: 'payment received, the seller is getting ready.' },
          { term: 'Delivering', text: 'the seller is on the way or setting up.' },
          { term: 'Completed', text: 'all done! You can now leave a review.' },
          { term: 'Dispute Open', text: 'the GoParty team is reviewing the order.' },
          { term: 'Cancelled', text: 'the order was cancelled or declined.' },
        ],
      },
      {
        id: 'track-orders',
        q: 'How do I track my orders?',
        a: [
          'You can track your orders anytime. Just go to More → Orders and tap any order to see its status, progress and timer. You can also check Parties → your party → Packages to see all your packages in one place.',
        ],
      },
      {
        id: 'cancel-order',
        q: 'How do I cancel an order?',
        a: [
          "You can cancel anytime before you pay. While the order is Pending or Confirmed/Awaiting Payment, go to More → Orders → your order → Cancel → Yes. Once an order is paid, it can't be cancelled in the app, so please raise a support ticket and our team will help.",
        ],
      },
      {
        id: 'leave-review',
        q: 'How do I leave a review?',
        a: [
          'Your feedback helps everyone. Once an order is Completed, go to More → Orders → your order → Leave Review. Rate Order Confirmation, Delivery & Setup and Overall Experience, add a comment if you like, and tap Submit Review. You can review each order once.',
        ],
      },
      {
        id: 'order-dispute',
        q: "What happens if there's a dispute on my order?",
        a: [
          "If a seller reports a problem with a delivery, the order shows Dispute Open and the GoParty team reviews it. Go to More → Order Disputes (or your order → View) to follow it. When it's your turn, add a Proof of Delivery Statement and up to 5 photos (5MB each), then tap Submit Proof. You can submit proof once, and we'll let you know the decision.",
        ],
      },
    ],
  },
  {
    id: 'payments',
    title: 'Payments',
    icon: 'wallet',
    items: [
      {
        id: 'pay-order',
        q: 'How do I pay for my order?',
        a: [
          "Once the seller confirms your request, it's time to pay. Go to More → Orders → your order → Pay Now → Pay Securely → Pay, then pay with your card or Apple Pay on the secure payment page. Please pay within 24 hours of confirmation. The total includes 5% VAT.",
        ],
      },
      {
        id: 'payment-methods',
        q: 'Which payment methods can I use?',
        a: [
          "You can pay securely by credit or debit card on the secure payment page. Apple Pay is available there when it's offered. Your card details are never stored in the GoParty app, and your bank may ask you to verify the payment.",
        ],
      },
      {
        id: 'refund',
        q: 'Can I get a refund?',
        a: [
          "Here's how it works. You can cancel for free any time before you pay. Once an order is paid, it can't be cancelled in the app, so please raise a support ticket (More → Help & Support → New Ticket) and our team will help. If a dispute is decided in your favour, the refund is issued to you.",
        ],
      },
    ],
  },
  {
    id: 'invitation-cards',
    title: 'Invitation Cards',
    icon: 'send',
    items: [
      {
        id: 'order-invitation',
        q: 'How do I order an invitation card?',
        a: [
          'Make your invites special. Tap Cards in the bottom bar (or Parties → your party → New Invitation), open a design you like, then tap Send Request → choose your party. In Order Details, pick the card language (Arabic, English or Both), add your event details and any design changes, then tap Send Request → Yes. The designer has 3 hours to confirm.',
        ],
      },
      {
        id: 'add-guests-pay',
        q: 'How do I add my guests and pay?',
        a: [
          'Once the designer confirms, add your guests and pay within 24 hours. Go to More → Orders → your invitation order → Guests Invitation → + to open Choose Guests. Add guests from your contacts or with Add guest by number (UAE mobile numbers only), then tap Save guests list. Now tap Pay Now → Pay to pay the card design fee and the invitation service fee per guest (5% VAT included).',
        ],
      },
      {
        id: 'approve-design',
        q: 'How do I approve my design or ask for changes?',
        a: [
          "We'll let you know when your card is ready. Open your order and check the design under Your design is ready. Love it? Tap Approve → Approve. Want something changed? Tap Request an edit, write your notes and tap Send back to designer. Each design includes a set number of edits, shown on your order.",
        ],
      },
      {
        id: 'send-whatsapp',
        q: 'How do I send my invitations on WhatsApp?',
        a: [
          "After you approve the design, it's time to invite. Open your order → Send Invitations to preview the WhatsApp message your guests will receive, with Attending, Maybe and Not Attending buttons. If you switched on Children below 15 not allowed when choosing guests, that note is included. Tap Send Now and confirm, and your invitations go out on WhatsApp.",
        ],
      },
      {
        id: 'guest-status',
        q: "How do I see who's coming?",
        a: [
          "Keep track of your guest list. Open your order (or your party) → Guests Status. The Invitation Status screen shows each guest's reply: Attending, Maybe, Not attending, Awaiting or Not delivered, plus how many have responded. A guest's first answer is final.",
        ],
      },
      {
        id: 'invite-more',
        q: 'Can I invite more guests later?',
        a: [
          'Of course, as long as your party is still open. Open your order → Invite More Guests, choose the new guests and tap Continue to payment. You only pay the invitation service fee for the new guests, since the design is already paid. Then tap Send Invitations. Please send each paid batch before adding another.',
        ],
      },
    ],
  },
  {
    id: 'account-settings',
    title: 'Account & Settings',
    icon: 'lock',
    items: [
      {
        id: 'sign-up-log-in',
        q: 'How do I sign up or log in?',
        a: [
          'No password needed. Tap Get Started, choose Phone Number or Email Address and tap Send OTP. Enter the 6-digit code (sent by WhatsApp to your phone, or to your email) and tap Verify & Log In. New to GoParty? Tap Create Account, add your name and email, verify your mobile number and choose your area.',
        ],
      },
      {
        id: 'browse-as-guest',
        q: 'Can I browse without an account?',
        a: [
          "Yes! Tap View As Guest to browse Home, Categories and invitation Cards. To create a party, send requests, pay or contact support, you'll need to log in or create an account.",
        ],
      },
      {
        id: 'edit-profile',
        q: 'How do I edit my profile?',
        a: [
          'Keep your details up to date. Go to More → Settings → Profile Settings → Edit. You can change your photo, full name, email, phone and About Me, then tap Save Changes. A new email or phone number is verified with a 6-digit code first.',
        ],
      },
      {
        id: 'app-language',
        q: 'How do I change the app language?',
        a: [
          'GoParty speaks English and Arabic. Go to More → Settings → Language and choose English or عربي. The whole app switches straight away.',
        ],
      },
      {
        id: 'notifications',
        q: 'How do I manage notifications?',
        a: [
          'You decide how we reach you. Go to More → Settings → Notifications and switch Push Notifications or Email Notifications on or off. Verification codes are always sent, whatever you choose.',
        ],
      },
      {
        id: 'delete-account',
        q: 'How do I delete my account?',
        a: [
          "We're sorry to see you go. Go to More → Settings → Profile Settings → Delete Account, tell us why you're leaving and confirm with Delete. Your account is disabled straight away and permanently deleted after 90 days. Changed your mind? Log in within 90 days and tap Reactivate My Account. Any active orders need to be finished before you can delete.",
        ],
      },
    ],
  },
  {
    id: 'help-support',
    title: 'Help & Support',
    icon: 'bell-concierge',
    items: [
      {
        id: 'contact-support',
        q: 'How do I contact GoParty support?',
        a: [
          "We're here to help. Go to More → Help & Support → New Ticket, describe your issue (you can add a screenshot) and tap Submit Ticket. Our replies appear right inside your ticket. During a delivery, you can also tap Get Help on the order.",
        ],
      },
    ],
  },
];
