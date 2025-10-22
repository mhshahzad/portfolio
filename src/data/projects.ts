export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  duration: string;
  technologies: string[];
  features: string[];
  achievements?: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Nx-CDK-Deploy",
    description: "A robust infrastructure as code solution using AWS CDK with Nx workspace for managing cloud resources efficiently.",
    role: "DevOps Engineer",
    duration: "2025 - Present",
    technologies: ["AWS CDK", "TypeScript", "Nx", "AWS", "Microservices", "Infrastructure as Code", "Deployment", "Monorepo"],
    features: [
      "Monorepo structure with Nx workspaces",
      "Automated deployment pipelines",
      "Infrastructure as Code with AWS CDK",
      "Multi-environment deployment support",
      "Cost-optimized cloud resource management"
    ],
    achievements: [
      "Reduced deployment time by 60% through automation",
      "Improved infrastructure consistency across environments"
    ],
    githubUrl: "https://github.com/mhshahzad/Nx-CDK-Deploy",
      demoUrl: "https://mhshahzad.github.io/Nx-CDK-Deploy/",
    featured: true
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and TypeScript, showcasing professional work and skills.",
    role: "Full Stack Developer",
    duration: "2025 - Present",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    features: [
      "Responsive design for all devices",
      "Dark/light mode toggle",
      "Interactive project showcase",
      "Performance optimized with code splitting",
      "SEO optimized with Next.js"
    ],
    githubUrl: "https://github.com/mhshahzad/portfolio",
    demoUrl: "https://mhshahzad.tech",
    featured: true
  },
  {
    id: 3,
    title: "Order Pizza API",
    description: "A RESTful API for a pizza ordering system with order management and tracking capabilities.",
    role: "Backend Developer",
    duration: "2019 - Present",
    technologies: ["Python", "Flask", "Sqlalchemy", "REST API", "JWT", "Marshmallow", "connexion", "flask-jwt-extended", ],
    features: [
      "User authentication and authorization",
      "Menu and order management",
      "Real-time order status updates",
      "Payment integration",
      "Admin dashboard"
    ],
    githubUrl: "https://github.com/mhshahzad/order-pizza-api",
      demoUrl: "https://mhshahzad.github.io/order-pizza-api/"
  },
  {
    id: 4,
    title: "React Spreadsheet Validator",
    description: "A utility library for validating spreadsheet data in React applications, with Material-UI integration.",
    role: "Open Source Maintainer",
    duration: "2023 - 2024",
    technologies: ["React", "TypeScript", "Material-UI", "ExcelJS", "Jest"],
    features: [
      "Excel/CSV file validation",
      "Custom validation rules",
      "Material-UI integration",
      "Error reporting and handling",
      "TypeScript support"
    ],
    githubUrl: "https://github.com/mhshahzad/react-spreadsheet-validator",
    featured: true
  },
  {
    id: 5,
    title: "MailIQ Frontend",
    description: "SaaS application for extracting insights from emails, built as a co-founder and tech lead.",
    role: "Co-founder & Tech Lead",
    duration: "2025 - Present",
    technologies: ["React", "Next.js", "TypeScript", "DaisyUI", "ChartJS", "FramerMotion"],
    features: [
      "Email analysis and insights",
      "Team collaboration tools",
      "Analytics dashboard",
      "User management",
      "Secure data handling"
    ],
    githubUrl: "https://github.com/mhshahzad/mailiq-frontend",
      demoUrl: "https://mailiq.app",
    featured: true
  }
];
