export interface FormData {
  name: string;
  email: string;
  school: string;
  yearOfStudy: string;
  areaOfInterest: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  school?: string;
  yearOfStudy?: string;
  areaOfInterest?: string;
  message?: string;
  general?: string;
}

export const desktopHeaderPhrase = ["Start Your Journey"];

export const formFields = [
  {
    name: 'name' as keyof FormData,
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
    required: true,
  },
  {
    name: 'email' as keyof FormData,
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email address',
    required: true,
  },
  {
    name: 'school' as keyof FormData,
    label: 'School/University',
    type: 'text',
    placeholder: 'Enter your school or university',
    required: true,
  },
  {
    name: 'yearOfStudy' as keyof FormData,
    label: 'Year of Study',
    type: 'select',
    placeholder: 'Select your year of study',
    required: false,
    options: [
      'High School Freshman',
      'High School Sophomore', 
      'High School Junior',
      'High School Senior',
      'Other'
    ],
  },
  {
    name: 'areaOfInterest' as keyof FormData,
    label: 'Area of Interest',
    type: 'select',
    placeholder: 'Select your area of interest',
    required: false,
    options: [
      'Technology & Software',
      'Business & Entrepreneurship',
      'Engineering',
      'Design & Creative',
      'Finance & Economics',
      'Healthcare & Life Sciences',
      'Education',
      'Social Impact',
      'Other'
    ],
  },
  {
    name: 'message' as keyof FormData,
    label: 'Tell us about yourself (Optional)',
    type: 'textarea',
    placeholder: 'Share your entrepreneurial goals, club ideas, or what you hope to achieve with Catalyst Entrepreneurship Club...',
    required: false,
  },
];

export const initialFormData: FormData = {
  name: '',
  email: '',
  school: '',
  yearOfStudy: '',
  areaOfInterest: '',
  message: '',
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

export const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.school.trim()) {
    errors.school = 'School/University is required';
  }

  return errors;
};
