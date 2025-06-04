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
    question: 'How do I start an Catalyst Entrepreneurship Club at my school?',
    answer:
      'Fill out the chapter interest form at useCatalyst.ai/clubs. Once approved, you&apos;ll receive a starter kit with club charter, syllabus, and templates, plus an onboarding call with an Catalyst Club Coordinator to help you launch successfully.',
  },
  {
    question: 'What happens during monthly club meetings?',
    answer:
      'Each month features a guest speaker arranged by Catalyst—real founders, VCs, or startup operators including Y Combinator alumni. You&apos;ll also work on hands-on activities like problem discovery, business model development, and pitch practice.',
  },
  {
    question: 'What will I learn in the yearlong program?',
    answer:
      'Follow our "Build Your First Startup" curriculum: Semester 1 focuses on discovering problems and defining solutions, while Semester 2 covers building MVPs, getting feedback, and pitching at Demo Day. You\'ll graduate with a real startup project.',
  },
  {
    question: 'Do I need prior business experience to join or start a club?',
    answer:
      'No experience required! Catalyst Entrepreneurship Club is designed for curious students who want to learn. Whether you&apos;re interested in tech, solving problems, or just exploring business, our program guides you from beginner to founder.',
  },
];
