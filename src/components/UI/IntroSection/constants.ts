import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ["Introducing Catalyst's", 'Startup Toolkit'];
export const desktopParagraphPhrase = [
  " Discover Catalyst's comprehensive toolkit designed for ambitious students.",
  'Access mentorship, resources, and community support to transform your',
  'ideas into successful startups.',
];

// For mobile
export const mobileHeaderPhrase = ["Introducing Catalyst's", 'Startup Toolkit'];
export const mobileParagraphPhrase = [
  " Discover Catalyst's comprehensive toolkit designed",
  ' for ambitious students. Access mentorship, resources,',
  'and community support to transform your',
  'ideas into successful startups.',
];

export const edges = [
  {
    point: 'Mentorship Network',
    details:
      'Connect with successful entrepreneurs and industry experts who provide guidance, feedback, and support for your startup journey.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Resource Library',
    details:
      'Access comprehensive startup resources including business plan templates, funding guides, and technical workshops tailored for student entrepreneurs.',
    icon: ic_identification,
  },
  {
    point: 'Community Support',
    details:
      'Join a network of like-minded ambitious students who share ideas, collaborate on projects, and support each other&apos;s entrepreneurial goals.',
    icon: ic_lock_closed,
  },
];
