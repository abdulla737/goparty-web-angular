/**
 * Privacy Policy (English).
 * Core commitments from the Comprehensive Legal Guide (Version 1 – 2026), Chapter 10
 * (Data Protection and Confidentiality), plus Chapters 3, 6, 11 and 15 where they touch data.
 * Sections marked "operational detail" describe how GoParty works (invitations, payments,
 * cookies) and are not in the guide — confirm them with your legal adviser.
 * Under the guide, the Arabic text (../ar/privacy.ts) prevails.
 */
import { LegalDocument } from '../legal';

export const PRIVACY: LegalDocument = {
  title: 'Privacy Policy',
  pageTitle: 'Privacy Policy | GoParty',
  navTitle: 'Privacy Policy',
  path: '/privacyPolicyEn',
  metaDescription:
    'How GoParty collects, uses, shares and protects personal data of customers, suppliers and guests, and how to request access, correction or deletion.',
  updated: 'Version 1 – 2026',
  intro:
    'This policy explains how GoParty handles the personal data of customers, suppliers, guests and visitors. It forms part of the GoParty Terms of Service.',
  notice: 'Arabic is the official language of the platform. In case of translation discrepancies, the Arabic text prevails.',
  sections: [
    {
      id: 'our-commitments',
      heading: 'Our Commitments',
      blocks: [
        {
          list: [
            'GoParty collects only the personal data necessary to provide its services.',
            'Data is shared only as needed.',
            'GoParty applies technical and organizational measures to protect personal data.',
            'GoParty may disclose data when legally required.',
          ],
        },
      ],
    },
    {
      id: 'information-we-collect',
      heading: 'Information We Collect',
      blocks: [
        { p: 'Depending on how you use GoParty, this may include:' },
        {
          list: [
            'Account details: name, email address, mobile number and password.',
            'Booking and event details: dates, locations, budgets and the services you book.',
            'Guest details you add to send invitations, and their responses.',
            'Supplier details: company information, licenses and documents provided for verification, packages, pricing and payout details.',
            'Payment records and payment status.',
            'Messages, reviews and complaints sent through the platform.',
            'Technical data such as device, browser and usage information, collected through cookies and similar technologies.',
          ],
        },
      ],
    },
    {
      id: 'how-we-use-your-information',
      heading: 'How We Use Your Information',
      blocks: [
        {
          list: [
            'To create and manage accounts and approve suppliers and customers.',
            'To verify data, documents and licenses.',
            'To process bookings, payments, commissions and refunds.',
            'To send electronic notifications by platform, email or registered phone number, which are legally effective.',
            'To deliver invitations by WhatsApp, SMS or other available channels.',
            'To maintain records, handle complaints and resolve disputes.',
            'To detect and act on violations and fraud.',
          ],
        },
      ],
    },
    {
      id: 'sharing-your-information',
      heading: 'Sharing Your Information',
      blocks: [
        { p: 'Data is shared only as needed, for example:' },
        {
          list: [
            'With the supplier you book, so they can carry out the service.',
            'With service providers that help run the platform, such as payment and messaging providers.',
            'With authorities when legally required.',
          ],
        },
      ],
    },
    {
      id: 'your-responsibilities',
      heading: 'Your Responsibilities',
      blocks: [
        {
          clauses: [
            { term: 'Users', text: 'Must protect their login credentials.' },
            { term: 'Suppliers', text: 'Must protect customer data and keep it confidential.' },
            { term: 'Event photos', text: 'Photos of events may not be used without consent.' },
          ],
        },
      ],
    },
    {
      id: 'supplier-content',
      heading: 'Supplier Content',
      blocks: [
        {
          p: 'Suppliers retain ownership of the content they upload and grant the platform a non-exclusive license to use it. The platform may remove content that violates its terms.',
        },
      ],
    },
    {
      id: 'your-rights',
      heading: 'Your Rights',
      blocks: [
        {
          p: 'You may request access to, correction of, or deletion of your personal data. You may also request closure of your account after settling your obligations. Send requests to Help@goparty.ae from the email address linked to your account.',
        },
      ],
    },
    {
      id: 'cookies',
      heading: 'Cookies',
      blocks: [
        {
          p: 'GoParty uses cookies and similar technologies to keep you signed in, remember your preferences and understand how the website is used. You can control cookies in your browser settings; some features may not work without them.',
        },
      ],
    },
    {
      id: 'changes-and-governing-law',
      heading: 'Changes and Governing Law',
      blocks: [
        {
          list: [
            'GoParty may amend this policy when needed. Notifications are sent by email or phone.',
            'This policy is governed by the laws of the United Arab Emirates.',
          ],
        },
      ],
    },
    {
      id: 'contact-us',
      heading: 'Contact Us',
      blocks: [{ p: 'For questions about this policy or your personal data, contact Help@goparty.ae.' }],
    },
  ],
};
