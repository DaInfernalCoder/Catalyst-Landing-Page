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
    question: 'How do I start a Catalyst Entrepreneurship Club at my school?',
    answer: 'Starting a club is simple! Reach out to us through our contact form to express your interest. Once approved, you\'ll receive a comprehensive starter kit including club charter, curriculum syllabus, and meeting templates. We\'ll also schedule an onboarding call with a Catalyst Club Coordinator to help you launch successfully.',
  },
  {
    question: 'What happens during monthly club meetings?',
    answer: 'Each month features an exclusive guest speaker arranged by Catalyst founders, VCs, and successful entrepreneurs including Y Combinator alumni. You\'ll also participate in hands-on activities like problem discovery workshops, business model development sessions, and pitch practice with peer feedback.',
  },
  {
    question: 'What will I learn in the yearlong program?',
    answer: 'Follow our comprehensive "Build Your First Startup" curriculum: Semester 1 focuses on discovering real problems and defining innovative solutions, while Semester 2 covers building MVPs, gathering user feedback, and perfecting your pitch for Demo Day. You\'ll graduate with a real startup project and valuable entrepreneurial skills.',
  },
  {
    question: 'Do I need prior business experience to join or start a club?',
    answer: 'Absolutely not! Catalyst Entrepreneurship Club is specifically designed for curious students who want to learn entrepreneurship from the ground up. Whether you\'re interested in technology, solving real-world problems, or exploring business concepts, our program provides step-by-step guidance from complete beginner to confident founder.',
  },
  {
    question: 'What support does Catalyst provide to club leaders?',
    answer: 'Club leaders receive ongoing support including monthly coordinator check-ins, access to our resource library, speaker coordination assistance, and connection to our global network of mentors. We also provide marketing materials and help with event planning to ensure your club thrives.',
  },
  {
    question: 'Can I participate if there is no club at my school yet?',
    answer: 'Yes! If there is no Catalyst club at your school, you can either start one yourself or join our virtual community program. The virtual program offers the same curriculum and networking opportunities, allowing you to connect with students and mentors from around the world.',
  },
];
