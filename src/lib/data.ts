export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface Client {
  id: string;
  name: string;
  description: string;
  logo?: string;
  website?: string;
}

export interface Lab {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface BucketItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "1",
    title: "AI Task Manager",
    description: "An intelligent task management app with AI-powered prioritization and scheduling",
    tags: ["React", "TypeScript", "AI", "Supabase"],
    featured: true,
    link: "#",
    github: "#",
  },
  {
    id: "2",
    title: "Real-time Collaboration Tool",
    description: "A collaborative workspace with live editing and video conferencing",
    tags: ["Next.js", "WebRTC", "Socket.io"],
    featured: true,
    link: "#",
  },
  {
    id: "3",
    title: "E-commerce Dashboard",
    description: "Analytics dashboard for e-commerce with real-time sales tracking",
    tags: ["React", "D3.js", "Node.js"],
    link: "#",
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description: "Track and analyze social media metrics across multiple platforms",
    tags: ["Vue.js", "Python", "FastAPI"],
  },
];

export const CLIENTS_DATA: Client[] = [
  {
    id: "1",
    name: "TechCorp",
    description: "Enterprise software solutions",
    website: "#",
  },
  {
    id: "2",
    name: "StartupHub",
    description: "Startup incubator and accelerator",
    website: "#",
  },
  {
    id: "3",
    name: "DesignStudio",
    description: "Creative design agency",
    website: "#",
  },
];

export const LABS_DATA: Lab[] = [
  {
    id: "1",
    slug: "css-animations",
    title: "CSS Animation Library",
    description: "A collection of smooth CSS animations and transitions",
    tags: ["CSS", "Animation"],
    link: "#",
  },
  {
    id: "2",
    slug: "react-hooks",
    title: "Custom React Hooks",
    description: "Reusable React hooks for common use cases",
    tags: ["React", "Hooks", "TypeScript"],
    link: "#",
  },
  {
    id: "3",
    slug: "ui-components",
    title: "UI Component Library",
    description: "Beautiful and accessible UI components",
    tags: ["React", "Tailwind", "a11y"],
    link: "#",
  },
];

export const BUCKET_LIST_DATA: BucketItem[] = [
  {
    id: "1",
    title: "Build a successful SaaS product",
    description: "Create and launch a SaaS product with 1000+ users",
    completed: false,
    category: "Career",
  },
  {
    id: "2",
    title: "Contribute to major open source project",
    description: "Make significant contributions to a popular open source project",
    completed: true,
    category: "Development",
  },
  {
    id: "3",
    title: "Speak at international conference",
    description: "Give a talk at a major tech conference",
    completed: false,
    category: "Public Speaking",
  },
  {
    id: "4",
    title: "Learn a new programming language",
    description: "Master Rust or Go for systems programming",
    completed: false,
    category: "Learning",
  },
];
