/**
 * Refund Policy (English).
 * Built from the Comprehensive Legal Guide (Version 1 – 2026): Chapter 7 (Payments and
 * Commissions), Chapter 8 (Cancellation, Refund, and Replacement), Chapter 9 (force majeure,
 * compensation) and Chapter 12 (Complaints and Dispute Resolution).
 * It adds no cancellation deadlines or percentages: if you publish per-category cancellation
 * rules, add them under "Cancellation by the Customer".
 */
import { LegalDocument } from '../legal';

export const REFUND: LegalDocument = {
  title: 'Refund Policy',
  pageTitle: 'Refund Policy | GoParty',
  navTitle: 'Refund Policy',
  path: '/refundPolicyEn',
  metaDescription:
    'GoParty refund policy: payments in UAE Dirham, customer and supplier cancellations, refunds for defective services, booking changes, refund timing and disputes.',
  updated: 'Version 1 – 2026',
  intro:
    'This policy explains how payments, cancellations, refunds and replacements work for bookings made through GoParty. It forms part of the GoParty Terms of Service.',
  notice: 'Arabic is the official language of the platform. In case of translation discrepancies, the Arabic text prevails.',
  sections: [
    {
      id: 'payments',
      heading: 'Payments',
      blocks: [
        {
          list: [
            'All payments must be made through platform-approved methods.',
            'Prices and payments are in UAE Dirham (AED) unless otherwise stated.',
            'GoParty may collect payments on behalf of suppliers. The supplier’s commission is deducted from the supplier’s dues.',
            'GoParty may temporarily hold amounts that are under dispute until the dispute is resolved.',
          ],
        },
      ],
    },
    {
      id: 'cancellation-by-the-customer',
      heading: 'Cancellation by the Customer',
      blocks: [
        {
          p: 'You may request to cancel a booking. Cancellation follows the policies published on the platform for that service, and any refund depends on the applicable policy and the actual costs already incurred.',
        },
      ],
    },
    {
      id: 'cancellation-by-the-supplier',
      heading: 'Cancellation by the Supplier',
      blocks: [
        {
          p: 'If the supplier causes the cancellation, you receive a full refund, and you may also be entitled to compensation.',
        },
      ],
    },
    {
      id: 'defective-services',
      heading: 'Defective or Incomplete Services',
      blocks: [
        {
          p: 'If a service is defective or does not match its published description, it may be performed again or refunded. The supplier guarantees that its service is accurate, legal and of professional quality, and compensation is due for proven damages.',
        },
      ],
    },
    {
      id: 'changes-to-a-booking',
      heading: 'Changes to a Booking',
      blocks: [{ p: 'A booking may be modified by agreement between the customer and the supplier.' }],
    },
    {
      id: 'how-refunds-are-paid',
      heading: 'How Refunds Are Paid',
      blocks: [
        {
          p: 'Refunds follow the timelines set by law and are processed through the original payment method when possible.',
        },
      ],
    },
    {
      id: 'force-majeure',
      heading: 'Force Majeure',
      blocks: [
        {
          p: 'Force majeure exempts a party from liability when performing the booking becomes impossible.',
        },
      ],
    },
    {
      id: 'requesting-a-refund',
      heading: 'Requesting a Refund or Raising a Complaint',
      blocks: [
        {
          list: [
            'Submit refund requests and complaints through GoParty’s approved channels, including email to Help@goparty.ae. Include your booking number.',
            'GoParty studies each complaint and attempts to reconcile the parties, who must cooperate.',
            'If the complaint is not resolved, the parties may resort to the UAE courts.',
          ],
        },
      ],
    },
  ],
};
