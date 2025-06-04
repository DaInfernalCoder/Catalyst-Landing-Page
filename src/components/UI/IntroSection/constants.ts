import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ["Ultra Entrepreneurship", 'Fellowship'];
export const desktopParagraphPhrase = [
  " Join the Ultra Entrepreneurship Fellowship and follow our proven yearlong curriculum. The fellowship is backed by Ultra (YC W24) and Ivy League alumni.",
  'From problem discovery to Demo Day, we guide you through building',
  'your first Startup Club with real founder mentorship.',
];

// For mobile
export const mobileHeaderPhrase = ["Catalyst Entrepreneurship", 'Fellowship'];
export const mobileParagraphPhrase = [
  " Join the Catalyst Entrepreneurship Club and follow our",
  ' proven yearlong curriculum. From problem discovery',
  'to Demo Day, we guide you through building',
  'your first Startup Club with real founder mentorship.',
];

export const edges = [
  {
    point: 'Monthly Expert Speakers',
    details:
      'Learn from real founders, VCs, and Startup Club operators including Y Combinator alumni who share practical insights and industry knowledge.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Hands-On Curriculum',
    details:
      'Follow our structured yearlong program: Discover & Define problems in Semester 1, then Build & Pitch your Startup Club in Semester 2.',
    icon: ic_identification,
  },
  {
    point: 'Demo Day & Recognition',
    details:
      'Pitch your final project to judges including school staff, Catalyst reps, and mentors. Gain access to internships and funding opportunities.',
    icon: ic_lock_closed,
  },
];
