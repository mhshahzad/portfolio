export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product catalog, and payment integration.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "#",
    demoUrl: "#",
  },
];
