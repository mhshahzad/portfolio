export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
  slug: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable Web Applications with Next.js 14',
    excerpt: 'Learn how to leverage the latest features in Next.js 14 to build performant and scalable web applications.',
    author: 'Muhammad Hamza Shahzad',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Performance'],
    slug: 'building-scalable-web-apps-nextjs-14',
    featured: true,
  },
  {
    id: 2,
    title: 'Mastering TypeScript: Advanced Patterns and Practices',
    excerpt: 'Explore advanced TypeScript patterns that will elevate your code quality and developer experience.',
    author: 'Muhammad Hamza Shahzad',
    date: 'January 10, 2025',
    readTime: '12 min read',
    category: 'TypeScript',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    slug: 'mastering-typescript-advanced-patterns',
    featured: true,
  },
  {
    id: 3,
    title: 'The Complete Guide to React Server Components',
    excerpt: 'Understanding React Server Components and how they revolutionize data fetching and rendering.',
    author: 'Muhammad Hamza Shahzad',
    date: 'January 5, 2025',
    readTime: '10 min read',
    category: 'React',
    tags: ['React', 'Server Components', 'Next.js'],
    slug: 'complete-guide-react-server-components',
  },
  {
    id: 4,
    title: 'Optimizing Database Queries in Node.js Applications',
    excerpt: 'Best practices for database optimization to improve your Node.js application performance.',
    author: 'Muhammad Hamza Shahzad',
    date: 'December 28, 2024',
    readTime: '15 min read',
    category: 'Backend',
    tags: ['Node.js', 'Database', 'Performance'],
    slug: 'optimizing-database-queries-nodejs',
  },
  {
    id: 5,
    title: 'Creating Beautiful UI Animations with Framer Motion',
    excerpt: 'Step-by-step guide to creating smooth and engaging animations in your React applications.',
    author: 'Muhammad Hamza Shahzad',
    date: 'December 20, 2024',
    readTime: '7 min read',
    category: 'UI/UX',
    tags: ['Framer Motion', 'React', 'Animations'],
    slug: 'beautiful-ui-animations-framer-motion',
  },
  {
    id: 6,
    title: 'Building a Real-time Chat Application with WebSockets',
    excerpt: 'Learn how to implement real-time communication in your web applications using WebSockets.',
    author: 'Muhammad Hamza Shahzad',
    date: 'December 15, 2024',
    readTime: '20 min read',
    category: 'Full Stack',
    tags: ['WebSockets', 'Real-time', 'Node.js'],
    slug: 'realtime-chat-websockets',
  },
];
