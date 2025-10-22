export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image?: string;
  rating: number;
  text: string;
  date: string;
  projectType?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CTO',
    company: 'TechStart Inc.',
    rating: 5,
    text: 'Muhammad is an exceptional developer who consistently delivers high-quality work. His expertise in React and Node.js helped us build a scalable platform that our customers love. Highly recommend!',
    date: 'March 2024',
    projectType: 'E-commerce Platform',
  },
  {
    id: 2,
    name: 'David Chen',
    position: 'Product Manager',
    company: 'InnovateCo',
    rating: 5,
    text: 'Working with Muhammad was a pleasure. He not only met all our requirements but exceeded expectations with creative solutions. His communication skills and technical prowess are top-notch.',
    date: 'February 2024',
    projectType: 'SaaS Dashboard',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Founder',
    company: 'StartupHub',
    rating: 5,
    text: 'Muhammad transformed our vision into reality. His attention to detail and ability to understand business requirements made our project a huge success. We\'ve seen a 40% increase in user engagement!',
    date: 'January 2024',
    projectType: 'Mobile App',
  },
  {
    id: 4,
    name: 'Michael Brown',
    position: 'Engineering Lead',
    company: 'DataFlow Systems',
    rating: 5,
    text: 'One of the best developers I\'ve worked with. Muhammad\'s code quality is exceptional, and he always considers scalability and performance. A true professional who takes pride in his work.',
    date: 'December 2023',
    projectType: 'Analytics Platform',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    position: 'Director of Marketing',
    company: 'GrowthLabs',
    rating: 5,
    text: 'Muhammad delivered our website ahead of schedule with stunning design and flawless functionality. His ability to translate our marketing needs into technical solutions is remarkable.',
    date: 'November 2023',
    projectType: 'Marketing Website',
  },
  {
    id: 6,
    name: 'James Wilson',
    position: 'VP of Technology',
    company: 'FinTech Solutions',
    rating: 5,
    text: 'Security and performance were critical for our financial application. Muhammad implemented best practices throughout, resulting in a robust and reliable system. Outstanding work!',
    date: 'October 2023',
    projectType: 'Financial Dashboard',
  },
];
