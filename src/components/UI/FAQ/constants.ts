type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'What is Catalyst and who can join?',
    answer:
      'Catalyst is the default community for the top 1% of ambitious high school and college students across the globe. We welcome driven students who are passionate about building startups, creating innovative solutions, and making a meaningful impact in the world.',
  },
  {
    question: 'How do I apply to join the Catalyst community?',
    answer:
      'Simply fill out our signup form with your information including your school, year of study, and area of interest. Our team reviews applications to ensure we maintain a community of the most motivated and talented students.',
  },
  {
    question: 'What resources and tools does Catalyst provide to members?',
    answer:
      'Catalyst provides essential tools for startup formation including mentorship programs, networking opportunities with successful entrepreneurs, access to funding resources, technical workshops, and a supportive community of like-minded ambitious students.',
  },
  {
    question: 'Is there a cost to join Catalyst?',
    answer:
      'Catalyst is currently free to join for qualified students. We believe in removing barriers for ambitious young people who want to build something meaningful and create positive change in the world.',
  },
];
