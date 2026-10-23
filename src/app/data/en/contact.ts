/**
 * Contact Us + Help Center copy.
 * FAQ answers are based on the homepage copy and the Terms of Service.
 */
import { IconName } from '../../shared/icons';

export const CONTACT_PAGE = {
  title: 'Contact Us | GoParty Help Center',
  metaDescription:
    'Contact GoParty support at Help@goparty.ae. Get help with bookings, escrow payments, invitations and selling on the UAE party and event marketplace.',
  eyebrow: 'Contact Us',
  h1: 'Contact GoParty',
  subtext:
    'Questions about a booking, a payment or selling on GoParty? Our support team answers by email as quickly as possible.',
};

export const CONTACT_OPTIONS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'bell-concierge',
    title: 'Customer support',
    body: 'Help with bookings, party plans, escrow payments and invitations.',
  },
  {
    icon: 'badge-check',
    title: 'Seller support',
    body: 'Help with joining as a seller, verification, packages and payouts.',
  },
  {
    icon: 'shield-check',
    title: 'Report an issue',
    body: 'Tell us about a problem with a listing, a booking or another user.',
  },
];

export const CONTACT_TOPICS = [
  'Booking or party plan',
  'Payment & escrow',
  'Guest invitations',
  'Becoming a seller',
  'Seller account & payouts',
  'Report an issue',
  'Other',
];

export const HELP_CENTER = {
  eyebrow: 'Help Center',
  h2: 'Frequently Asked Questions',
  subtext: "Quick answers to the questions we hear most. Can't find yours? Email our support team.",
  allFaqs: 'See all FAQs',
};

export const FAQS: { q: string; a: string; link?: { label: string; href: string } }[] = [
  {
    q: 'How do escrow payments work on GoParty?',
    a: 'When you book, you pay through GoParty and the money is held securely in escrow. It is released to the seller only once your party is confirmed, so you never pay a seller directly.',
  },
  {
    q: 'How are sellers verified?',
    a: 'Every seller passes identity, trade licence and quality checks before their profile goes live, and listings go through multi-layer verification to keep fake listings off GoParty.',
  },
  {
    q: 'Can I get a refund?',
    a: 'It depends on who cancels and why. If the supplier cancels, you get a full refund and may be entitled to compensation. If you cancel, the refund depends on the published cancellation policy and the costs already incurred. A defective service can be performed again or refunded. Refunds go back to your original payment method when possible.',
    link: { label: 'Read the Refund Policy', href: '/refundPolicyEn' },
  },
  {
    q: 'My guests did not receive my WhatsApp invitation. What can I do?',
    a: 'WhatsApp restrictions can sometimes stop an invitation from being delivered. In that case GoParty may send it by SMS or another available channel so it still reaches your guests. If a guest is still missing it, check their number and contact support.',
  },
  {
    q: 'Why was my invitation rejected?',
    a: 'Invitations must follow our publishing guidelines: no vague wording, no political or sectarian purposes, correct guest contact details, and permission from the host if you send on their behalf.',
    link: { label: 'Read the Invitation Terms', href: '/termsOfServiceEn#invitation-terms-and-publishing-guidelines' },
  },
  {
    q: 'Can I use more than one discount on a booking?',
    a: 'No. Only one discount or offer can be applied at a time, and GoParty applies the highest or most suitable one.',
  },
  {
    q: 'How do I become a seller on GoParty?',
    a: 'Choose Join as a Seller, create your company profile and pass verification. Then publish your packages with pricing and availability, and start receiving bookings and escrow payouts.',
    link: { label: 'See how it works for sellers', href: '/#how-it-works' },
  },
];

export const CONTACT_FORM = {
  emailSupport: 'Email support',
  copy: 'Copy email',
  copied: 'Copied',
  telegramLabel: 'Support Chat',
  telegramBody: 'Message our support bot and the GoParty team replies right in the chat.',
  telegramButton: 'Open Telegram',
  helpMore: 'Still need help?',
  helpMoreBody: 'Chat with our support team on Telegram or send us an email.',
  waysLabel: 'Ways to contact GoParty',
  title: 'Send us a message',
  name: 'Full name',
  email: 'Email',
  role: 'I am a',
  roles: ['Customer', 'Seller', 'Guest', 'Other'],
  topic: 'Topic',
  message: 'Message',
  messagePlaceholder: 'Include your booking or order number if you have one.',
  errorRequired: 'Please fill in your name, email and message.',
  errorEmail: 'Please enter a valid email address, for example name@example.com.',
  /** {email} is replaced with the support address */
  opened: 'Your email app should open with your message to {email}. Press send there to reach us.',
  submit: 'Write email',
  hint: 'This opens your email app with your message ready to send to {email}.',
  subjectFrom: 'Message from',
  bodyName: 'Name',
  bodyEmail: 'Email',
  bodyRole: 'I am a',
  bodyTopic: 'Topic',
};
