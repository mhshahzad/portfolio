export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  startDate: string;
  endDate: string | 'Present';
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
  logo?: string;
  companyUrl?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'SAP SE',
    position: 'Full-Stack Engineer',
    location: 'St. Leon-Rot, Germany (Hybrid)',
    type: 'Full-time',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: 'Leading development of enterprise-scale web applications and mentoring junior developers.',
    responsibilities: [
      'Architected and developed scalable microservices using Node.js and React',
      'Led a team of 5 developers in building a customer-facing dashboard',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Conducted code reviews and established best practices for the team',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript'],
    achievements: [
      'Improved application performance by 40% through optimization',
      'Reduced bug reports by 50% by implementing comprehensive testing',
      'Mentored 3 junior developers who were promoted within 6 months',
    ],
    companyUrl: 'https://example.com',
  },
  {
    id: 2,
    company: 'Digital Solutions LLC',
    position: 'Full Stack Developer',
    location: 'New York, NY',
    type: 'Full-time',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: 'Developed and maintained multiple client projects using modern web technologies.',
    responsibilities: [
      'Built responsive web applications using React and Node.js',
      'Integrated third-party APIs and payment gateways',
      'Collaborated with designers to implement pixel-perfect UIs',
      'Participated in agile ceremonies and sprint planning',
    ],
    technologies: ['React', 'Express', 'MongoDB', 'Tailwind CSS', 'Redux'],
    achievements: [
      'Delivered 10+ projects on time and within budget',
      'Implemented a design system used across 5 projects',
    ],
  },
  {
    id: 3,
    company: 'Freelance',
    position: 'Web Developer',
    location: 'Remote',
    type: 'Freelance',
    startDate: 'Jan 2020',
    endDate: 'May 2021',
    description: 'Provided web development services to various clients worldwide.',
    responsibilities: [
      'Developed custom websites and web applications',
      'Managed client relationships and project timelines',
      'Provided ongoing maintenance and support',
    ],
    technologies: ['JavaScript', 'React', 'WordPress', 'PHP', 'MySQL'],
    achievements: [
      'Maintained 5-star rating on Upwork with 50+ completed projects',
      'Generated over $100K in revenue',
    ],
  },
];

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  gpa?: string;
  honors?: string[];
  description?: string;
}

export const education: Education[] = [
  {
    id: 1,
    institution: 'University of Technology',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2016',
    endDate: '2020',
    location: 'California, USA',
    gpa: '3.8/4.0',
    honors: ['Dean\'s List', 'Summa Cum Laude'],
    description: 'Focused on software engineering, algorithms, and web technologies.',
  },
];
