// Visible question-and-answer content for the services, insurance and emergency pages.
// Rendered by Faq.astro as plain headings and paragraphs (no FAQPage structured data).
import businessInfo from './businessInfo.json';
import { telHref, mailtoHref } from '../utils/contactLinks';

export interface FaqLink {
  href: string;
  text: string;
}

// An answer is a run of plain text and links, rendered as one paragraph
export type FaqAnswerPart = string | FaqLink;

export interface FaqItem {
  question: string;
  answer: FaqAnswerPart[];
}

// Format a schedule entry ("08:00"/"17:00") as "8:00 AM - 5:00 PM", or "Closed" for null days
const formatHours = (times: { open: string; close: string } | null) => {
  if (!times) return 'Closed';
  const toLabel = (hhmm: string) => {
    const [h, m] = hhmm.split(':').map(Number);
    return new Date(2000, 0, 1, h, m).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };
  return `${toLabel(times.open)} - ${toLabel(times.close)}`;
};

// Monday - Thursday hours, e.g. "8:00 AM - 5:00 PM"
export const openHours = formatHours(businessInfo.hours.schedule.monday);

const phone: FaqLink = { href: telHref, text: businessInfo.phone };
const email: FaqLink = { href: mailtoHref, text: businessInfo.email };

export const servicesFaqs: FaqItem[] = [
  {
    question: 'Do you offer Invisalign?',
    answer: [
      'Yes. We offer Invisalign clear aligners, which use a series of clear, removable aligners to gradually straighten teeth.',
    ],
  },
  {
    question: 'Can I get a same-day appointment for a dental emergency?',
    answer: [
      'We offer same-day emergency appointments. Call us at ',
      phone,
      ', and see our ',
      { href: '/emergency-dentist/', text: 'emergency dental care page' },
      ' for what to do in the meantime.',
    ],
  },
  {
    question: 'What are your office hours?',
    answer: [
      `We're open Monday - Thursday, ${openHours}, and closed Friday - Sunday. For a dental emergency when the office is closed, call `,
      phone,
      ' and choose the emergency option from the phone menu.',
    ],
  },
  {
    question: 'Do you accept my insurance?',
    answer: [
      'We accept most insurance plans. See the plans we accept on our ',
      { href: '/insurance/', text: 'insurance page' },
      ', or call us at ',
      phone,
      ' to ask about yours.',
    ],
  },
  {
    question: "What are my options if I don't have insurance?",
    answer: [
      'We offer an in-house Dental Health Savings Club for patients without insurance, as well as financing through CareCredit. See our ',
      { href: '/payments/', text: 'payment options' },
      ' for details.',
    ],
  },
];

export const insuranceFaqs: FaqItem[] = [
  {
    question: 'Do you accept my insurance plan?',
    answer: [
      "We accept the plans listed above and most insurance plans. If you don't see yours, we may have added your provider, so call us at ",
      phone,
      ' or email ',
      email,
      ' to ask.',
    ],
  },
  {
    question: 'Can you check my benefits before my appointment?',
    answer: [
      "Yes. We can verify your insurance benefits before your visit or while you're in the office. To have them checked ahead of time, call us at ",
      phone,
      ' with your insurance information.',
    ],
  },
  {
    question: 'What should I bring to my appointment?',
    answer: [
      "Bring your insurance card and a photo ID. If you're covered under someone else's plan, bring the policyholder's name and date of birth too.",
    ],
  },
  {
    question: "What if I don't have dental insurance?",
    answer: [
      'We offer an in-house Dental Health Savings Club for patients without insurance, as well as financing through CareCredit. See our ',
      { href: '/payments/', text: 'payment options' },
      ' for details.',
    ],
  },
];

export const emergencyFaqs: FaqItem[] = [
  {
    question: 'Can I be seen today for a dental emergency?',
    answer: [
      'We offer same-day emergency appointments. During office hours, call us at ',
      phone,
      ' as soon as you can and let us know you have a dental emergency.',
    ],
  },
  {
    question: 'What if the office is closed?',
    answer: [
      'Call ',
      phone,
      ' and choose the emergency option from the phone menu. If your situation is life-threatening, call 911.',
    ],
  },
  {
    question: 'Should I go to the emergency room for a dental problem?',
    answer: [
      "Call 911 or go to the nearest emergency room if you have trouble breathing or swallowing, bleeding that won't stop, or a serious injury to your face or jaw. For a toothache, a broken or knocked-out tooth, or a lost filling or crown, call us at ",
      phone,
      '.',
    ],
  },
];
