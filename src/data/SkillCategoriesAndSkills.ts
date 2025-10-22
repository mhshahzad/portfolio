export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  icon?: string;
  yearsOfExperience?: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  color: string;
  icon: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend', yearsOfExperience: 6 },
  { name: 'Next.js', level: 90, category: 'frontend', yearsOfExperience: 2 },
    { name: 'TypeScript', level: 90, category: 'frontend', yearsOfExperience: 4 },
    { name: 'JavaScript', level: 95, category: 'frontend', yearsOfExperience: 6 },
    { name: 'HTML/CSS', level: 98, category: 'frontend', yearsOfExperience: 6 },
    { name: 'MaterialUI', level: 95, category: 'frontend', yearsOfExperience: 3 },
    { name: 'Tailwind CSS', level: 95, category: 'frontend', yearsOfExperience: 1 },
  { name: 'Redux', level: 85, category: 'frontend', yearsOfExperience: 3 },
  
  // Backend
  { name: 'Node.js', level: 90, category: 'backend', yearsOfExperience: 6 },
  { name: 'Express', level: 88, category: 'backend', yearsOfExperience: 4 },
  { name: 'Python', level: 75, category: 'backend', yearsOfExperience: 2 },
  { name: 'REST APIs', level: 92, category: 'backend', yearsOfExperience: 6 },
  
  // Database
  { name: 'MongoDB', level: 88, category: 'database', yearsOfExperience: 2 },
    { name: 'DynamoDB', level: 80, category: 'database', yearsOfExperience: 3 },
    { name: 'PostgreSQL', level: 85, category: 'database', yearsOfExperience: 4 },
  
  // Tools & Others
  { name: 'Git', level: 95, category: 'tools', yearsOfExperience: 6 },
  { name: 'Docker', level: 75, category: 'tools', yearsOfExperience: 2 },
  { name: 'AWS', level: 70, category: 'tools', yearsOfExperience: 3 },
  { name: 'Vercel', level: 90, category: 'tools', yearsOfExperience: 1 },
  { name: 'CI/CD', level: 80, category: 'tools', yearsOfExperience: 3 },
  { name: 'Jest', level: 85, category: 'tools', yearsOfExperience: 4 },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    skills: skills.filter(s => s.category === 'frontend'),
    color: 'from-lime-500 to-emerald-500',
    icon: '🎨',
  },
  {
    name: 'Backend Development',
    skills: skills.filter(s => s.category === 'backend'),
    color: 'from-blue-500 to-cyan-500',
    icon: '⚙️',
  },
  {
    name: 'Databases',
    skills: skills.filter(s => s.category === 'database'),
    color: 'from-purple-500 to-pink-500',
    icon: '💾',
  },
  {
    name: 'Tools & Technologies',
    skills: skills.filter(s => s.category === 'tools'),
    color: 'from-orange-500 to-red-500',
    icon: '🛠️',
  },
];
