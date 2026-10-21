/**
 * Terms of Service (English).
 *
 * Chapters 1–15: "GoParty – Comprehensive Legal Guide for Contracts, Terms, and Conditions",
 * Version (1) – 2026. Text follows the guide.
 *
 * Chapters 16–20: platform rules kept from the earlier "Terms and Conditions of Service Use"
 * document that the guide does not cover (prohibited uses, discounts, invitations, technical
 * limitations, support). Clauses from that document that the guide replaces were removed:
 * the "all fees are non-refundable" rule (now the Refund Policy), privacy (now the Privacy
 * Policy), force majeure, periodic updates and governing law.
 *
 * Note: under Chapter 1, the Arabic text (../ar/terms.ts) prevails over this translation.
 */
import { LegalDocument } from '../legal';

export const TERMS: LegalDocument = {
  title: 'Terms of Service',
  pageTitle: 'Terms of Service | GoParty',
  navTitle: 'Terms of Service',
  path: '/termsOfServiceEn',
  metaDescription:
    'GoParty terms of service: registration, supplier and customer obligations, electronic contracts, payments, cancellations, liability, disputes and UAE governing law.',
  updated: 'Version 1 – 2026',
  intro:
    'This guide regulates the use of the platform and the contractual relationship between the platform, the supplier, and the customer.',
  notice: 'Arabic is the official language of the platform. In case of translation discrepancies, the Arabic text prevails.',
  sections: [
    {
      id: 'definitions-and-general-provisions',
      heading: 'Definitions and General Provisions',
      blocks: [
        {
          p: 'This regulation, titled “Comprehensive Legal Guide for Contracts and Regulations of GoParty Platform”, governs the contractual relationship between the platform, the supplier, and the customer. It forms an integral part of all contracts concluded through GoParty.',
        },
        {
          clauses: [
            {
              term: 'Scope of Application',
              text: 'The provisions apply to all transactions conducted through the platform and to all users (suppliers, customers, and visitors) unless otherwise stated in a written agreement.',
            },
            {
              term: 'Purpose',
              text: 'The regulation aims to organize the contractual relationship between the platform, supplier, and customer, define rights and obligations, ensure transparency, protect financial and legal rights, reduce disputes, and establish clear mechanisms for resolving conflicts.',
            },
            {
              term: 'Independence of Legal Relationships',
              text: 'The relationship between the customer and supplier is independent from their respective relationships with the platform. The platform bears no responsibility except as explicitly stated.',
            },
            {
              term: 'Good Faith',
              text: 'All parties must act in good faith and refrain from any conduct intended to harm others or circumvent the provisions of this regulation.',
            },
            {
              term: 'Language',
              text: 'Arabic is the official language of the platform. In case of translation discrepancies, the Arabic text prevails.',
            },
          ],
        },
        { p: 'Definitions:' },
        {
          definitions: [
            {
              term: 'Platform',
              text: 'The GoParty application or website that connects suppliers and customers and facilitates displaying, requesting, and contracting for products and services electronically.',
            },
            { term: 'Supplier', text: 'Any natural or legal person offering a product or service through the platform.' },
            { term: 'Customer', text: 'Any natural or legal person using the platform to request or purchase a product or service.' },
            { term: 'Service', text: 'Any service offered by the supplier according to the description, specifications, price, and conditions listed.' },
            { term: 'Product', text: 'Any physical or digital item offered for sale.' },
            { term: 'Booking/Order', text: 'The electronic request submitted by the customer.' },
            { term: 'Electronic Contract', text: 'The agreement formed electronically upon acceptance of the order.' },
            { term: 'User', text: 'Any person visiting or using the platform.' },
            { term: 'Account', text: 'The electronic account created for the user.' },
            { term: 'Financial Consideration', text: 'The total amount due for a product or service, including fees, taxes, and commissions.' },
            { term: 'Terms and Conditions', text: 'This document and any amendments or referenced policies.' },
          ],
        },
      ],
    },
    {
      id: 'user-registration-and-approval',
      heading: 'User Registration and Approval',
      blocks: [
        {
          clauses: [
            { term: 'Registration Requirements', text: 'Suppliers and customers must be fully legally competent.' },
            { term: 'Supplier Requirements', text: 'Must hold all required licenses and provide accurate information.' },
            { term: 'Customer Requirements', text: 'Must provide accurate and complete information.' },
            { term: 'Acceptance of Terms', text: 'Creating an account or using the platform constitutes full acceptance of all terms.' },
            {
              term: 'Approval',
              text: 'Supplier or customer status is granted only after explicit electronic approval. The platform may reject applications for justified reasons.',
            },
          ],
        },
      ],
    },
    {
      id: 'platform-rights-and-obligations',
      heading: 'Platform Rights and Obligations',
      blocks: [
        {
          clauses: [
            { term: 'Nature of Work', text: 'The platform is a neutral electronic intermediary and is not a party to contracts unless explicitly stated.' },
            { term: 'Right to Verify', text: 'The platform may verify data, documents, or licenses and request additional documents.' },
            { term: 'Obligations', text: 'Provide a secure electronic environment, maintain records, enable access to user data, and handle complaints.' },
            {
              term: 'Liability Limits',
              text: 'The platform is not responsible for service quality, delays, cancellations, or supplier breaches unless damage results directly from platform error.',
            },
            { term: 'Reviews', text: 'Users must provide honest and objective reviews.' },
          ],
        },
      ],
    },
    {
      id: 'supplier-rights-and-obligations',
      heading: 'Supplier Rights and Obligations',
      blocks: [
        {
          clauses: [
            { term: 'Licensing', text: 'Supplier confirms holding all required licenses and bears responsibility for incorrect data.' },
            { term: 'Updating Information', text: 'Supplier must update information immediately upon changes.' },
            { term: 'Service Quality', text: 'Supplier guarantees professional service matching the published description.' },
            { term: 'Timeliness', text: 'Supplier must adhere to delivery or execution timelines.' },
            { term: 'No Circumvention', text: 'Supplier may not deal with customers outside the platform to avoid commission.' },
            { term: 'Customer Data Protection', text: 'Supplier must maintain confidentiality of customer data.' },
          ],
        },
      ],
    },
    {
      id: 'customer-rights-and-obligations',
      heading: 'Customer Rights and Obligations',
      blocks: [
        {
          clauses: [
            { term: 'Accuracy of Data', text: 'Customer must provide accurate information.' },
            { term: 'Payment', text: 'Customer must pay through approved methods.' },
            { term: 'Cooperation', text: 'Customer must cooperate to enable service execution.' },
            { term: 'No Misuse', text: 'Customer may not misuse the platform or violate laws.' },
          ],
        },
      ],
    },
    {
      id: 'electronic-contracts-and-legal-validity',
      heading: 'Electronic Contracts and Legal Validity',
      blocks: [
        {
          list: [
            'Electronic records and communications are valid evidence unless proven otherwise.',
            'Electronic notifications sent via platform, email, or registered phone number are legally effective.',
            'Electronic acceptance (registration, booking, payment) constitutes binding consent.',
          ],
        },
      ],
    },
    {
      id: 'payments-and-commissions',
      heading: 'Payments and Commissions',
      blocks: [
        {
          list: [
            'All payments must be made through platform-approved methods.',
            'Currency: UAE Dirham unless otherwise stated.',
            'Platform may collect payments on behalf of suppliers.',
            'Commission is deducted from supplier’s dues.',
            'Refunds must follow legal timelines and be processed through original payment method when possible.',
            'Platform may temporarily hold disputed amounts.',
          ],
        },
      ],
    },
    {
      id: 'cancellation-refund-and-replacement',
      heading: 'Cancellation, Refund, and Replacement',
      blocks: [
        {
          list: [
            'Cancellation follows published policies.',
            'Customer may request cancellation; refund depends on policy and actual costs.',
            'Supplier-caused cancellation requires full refund and possible compensation.',
            'Defective services allow re-performance or refund.',
            'Bookings may be modified by agreement.',
          ],
        },
        { see: { label: 'Read the Refund Policy', href: '/refundPolicyEn' } },
      ],
    },
    {
      id: 'warranties-liability-and-compensation',
      heading: 'Warranties, Liability, and Compensation',
      blocks: [
        {
          list: [
            'Supplier guarantees accuracy, legality, and quality.',
            'Supplier is liable for employees and contractors.',
            'Customer is liable for misuse or incorrect data.',
            'Compensation is due for proven damages.',
            'Force majeure exempts liability when execution becomes impossible.',
          ],
        },
      ],
    },
    {
      id: 'data-protection-and-confidentiality',
      heading: 'Data Protection and Confidentiality',
      blocks: [
        {
          list: [
            'Platform collects necessary personal data.',
            'Data may be shared only as needed.',
            'Platform applies technical and organizational protection measures.',
            'Users must protect login credentials.',
            'Suppliers must protect customer data.',
            'Photos of events may not be used without consent.',
            'Platform may disclose data when legally required.',
            'Users may request access, correction, or deletion.',
          ],
        },
        { see: { label: 'Read the Privacy Policy', href: '/privacyPolicyEn' } },
      ],
    },
    {
      id: 'intellectual-property',
      heading: 'Intellectual Property',
      blocks: [
        {
          list: [
            'All platform-related IP belongs to the owner.',
            'No copying or commercial use without written permission.',
            'Suppliers retain ownership of uploaded content and grant the platform a non-exclusive license to use it.',
            'Platform may remove violating content.',
          ],
        },
      ],
    },
    {
      id: 'complaints-and-dispute-resolution',
      heading: 'Complaints and Dispute Resolution',
      blocks: [
        {
          list: [
            'Complaints must be submitted through approved channels.',
            'Platform studies complaints and attempts reconciliation.',
            'Parties must cooperate.',
            'If unresolved, parties may resort to UAE courts.',
          ],
        },
      ],
    },
    {
      id: 'account-suspension-and-termination',
      heading: 'Account Suspension and Termination',
      blocks: [
        {
          list: [
            'Users may request account closure after settling obligations.',
            'Platform may suspend or terminate accounts for violations or fraud.',
            'Serious violations may lead to immediate action.',
            'Rights and obligations survive termination.',
          ],
        },
      ],
    },
    {
      id: 'violations-and-contractual-measures',
      heading: 'Violations and Contractual Measures',
      blocks: [
        {
          clauses: [
            {
              term: 'Supplier violations',
              text: 'Include false data, illegal services, delays, hidden charges, bypassing platform, misuse of data.',
            },
            {
              term: 'Customer violations',
              text: 'Include false payment data, fraudulent bookings, non-payment, misuse, fake complaints.',
            },
          ],
        },
        {
          list: [
            'Platform verifies violations and grants right of reply.',
            'Urgent measures may include temporary suspension.',
            'Final measures include warnings, deletion, suspension, or termination.',
          ],
        },
      ],
    },
    {
      id: 'final-provisions',
      heading: 'Final Provisions',
      blocks: [
        {
          list: [
            'Platform may amend terms when needed.',
            'Invalid clauses do not affect remaining terms.',
            'Failure to exercise rights is not a waiver.',
            'Users may not assign rights without written approval.',
            'Notifications are sent via email or phone.',
            'UAE law governs these terms.',
          ],
        },
      ],
    },

    /* ---- Platform rules kept from the earlier Terms of Service Use ---- */
    {
      id: 'prohibited-uses',
      heading: 'Prohibited Uses of the Platform',
      blocks: [
        {
          p: 'GoParty may suspend any account, temporarily or permanently, if it is used in a way that violates these terms or misuses the services. Users are warned of violations through the website or by email. Violations include:',
        },
        {
          list: [
            'Causing harm to the website or its users, including theft or damage to associated services.',
            'Disclosing protected private information such as support messages or private conversations.',
            'Promoting or advertising competitors or similar websites without permission.',
            'Misusing the service to deceive or exploit others.',
            'Using stolen or unauthorized payment methods.',
            'Abusing users or GoParty representatives.',
            'Acting as a financial intermediary between users.',
            'Selling or attempting to sell the account.',
            'Registering with incorrect information or a false gender.',
            'Repeated violations or repeatedly adding contact information.',
            'Impersonating another user.',
            'Creating invitations for fake or unethical events that violate laws or Islamic teachings.',
            'Uploading or using materials that infringe intellectual property rights.',
          ],
        },
        {
          clauses: [
            {
              term: 'No resale',
              text: 'Users may not resell GoParty services, subscriptions, or special discounts in any form. Any attempt at resale or unauthorized commercial use results in immediate cancellation of the service without refund, along with legal action.',
            },
            {
              term: 'Trademark',
              text: 'Using the GoParty trademark, claiming ownership of its services, or falsely claiming affiliation with the platform without prior permission is prohibited and may result in immediate account suspension and legal action.',
            },
          ],
        },
      ],
    },
    {
      id: 'discounts-and-promotional-offers',
      heading: 'Discounts and Promotional Offers',
      blocks: [
        {
          list: [
            'Combining more than one discount or offer at the same time is not allowed; only the highest or most suitable discount is applied according to GoParty’s policy.',
            'Discounts for specific entities (such as associations or partners) require official documentation before activation.',
            'Misuse of discounts or providing incorrect information to benefit from them is prohibited.',
            'GoParty may cancel or modify any discount or offer if misuse is suspected.',
          ],
        },
      ],
    },
    {
      id: 'invitation-terms-and-publishing-guidelines',
      heading: 'Invitations and Message Delivery',
      blocks: [
        { p: 'GoParty may reject any invitation that does not comply with these terms. Invitations must follow these guidelines:' },
        {
          list: [
            'Avoid vague phrases in invitations.',
            'Do not use invitations for political or sectarian purposes.',
            'Do not send invitations to incorrect email addresses or phone numbers.',
            'Do not send invitations on behalf of another person without their permission.',
            'Do not use GoParty for purposes unrelated to invitations, such as advertising or promotion.',
          ],
        },
        {
          p: 'WhatsApp restrictions or bans may cause invitation delivery failures. In such cases, GoParty may use alternative methods, such as SMS or other available channels, to ensure invitations reach all guests. Clients with special numbers may send invitations through GoParty’s dedicated systems. By using GoParty, you agree to receive invitations through any available method.',
        },
      ],
    },
    {
      id: 'technical-limitations-and-data-loss',
      heading: 'Technical Limitations and Data Loss',
      blocks: [
        {
          p: 'GoParty strives to provide the best user experience; however, data loss may occur regarding attendance confirmations or apologies due to circumstances beyond its control. GoParty is not responsible for any loss or delay in recording or retrieving such data.',
        },
        {
          p: 'The GoParty system may experience technical limitations related to server performance and responsiveness, which may affect service speed. GoParty is not responsible for any slowdown or temporary interruption caused by these technical constraints.',
        },
      ],
    },
    {
      id: 'communication-and-support',
      heading: 'Communication and Support',
      blocks: [
        {
          p: 'GoParty provides technical support by email and is committed to responding to inquiries and resolving issues as quickly as possible. Email: Help@goparty.ae',
        },
      ],
    },
  ],
};
