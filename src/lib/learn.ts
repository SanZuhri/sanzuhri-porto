export interface LearnResource {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  content: string;
  resources?: { title: string; url: string }[];
}

export const LEARN_DATA: LearnResource[] = [
  {
    slug: "react-fundamentals",
    title: "React Fundamentals",
    description: "Essential concepts every React developer should master",
    date: "2024-01-20",
    category: "React",
    tags: ["React", "JavaScript", "Fundamentals"],
    content: `
# React Fundamentals

Learn the core concepts that power React applications.

## Components

Components are the building blocks of React applications. They can be:
- Function components (recommended)
- Class components (legacy)

## Props and State

- **Props**: Data passed from parent to child components
- **State**: Internal data managed by the component

## Hooks

Essential React hooks:
- \`useState\`: Manage component state
- \`useEffect\`: Handle side effects
- \`useContext\`: Access context values
- \`useRef\`: Reference DOM elements
- \`useMemo\` and \`useCallback\`: Optimize performance

## Key Takeaways

Master these fundamentals before moving to advanced patterns.
    `,
    resources: [
      { title: "Official React Documentation", url: "https://react.dev" },
      { title: "React TypeScript Cheatsheet", url: "#" }
    ]
  },
  {
    slug: "tailwind-mastery",
    title: "Mastering Tailwind CSS",
    description: "From basics to advanced Tailwind CSS techniques",
    date: "2024-01-18",
    category: "CSS",
    tags: ["Tailwind", "CSS", "Styling"],
    content: `
# Mastering Tailwind CSS

Tailwind CSS is a utility-first framework that speeds up development.

## Core Concepts

### Utility Classes
Use single-purpose classes to build designs directly in HTML.

### Responsive Design
Use responsive prefixes: \`sm:\`, \`md:\`, \`lg:\`, \`xl:\`, \`2xl:\`

### Custom Configuration
Extend Tailwind through \`tailwind.config.js\`:
- Custom colors
- Custom spacing
- Custom fonts

## Advanced Techniques

- Creating reusable components
- Using @apply for complex utilities
- JIT mode for better performance

## Best Practices

- Keep HTML readable
- Use component extraction for repeated patterns
- Leverage design tokens
    `,
    resources: [
      { title: "Tailwind Documentation", url: "https://tailwindcss.com" },
      { title: "Tailwind UI", url: "https://tailwindui.com" }
    ]
  },
  {
    slug: "git-workflow",
    title: "Modern Git Workflow",
    description: "Professional Git workflows for teams",
    date: "2024-01-12",
    category: "DevOps",
    tags: ["Git", "Version Control", "Workflow"],
    content: `
# Modern Git Workflow

Learn professional Git practices for team collaboration.

## Branching Strategy

### Git Flow
- \`main\`: Production-ready code
- \`develop\`: Integration branch
- \`feature/*\`: New features
- \`hotfix/*\`: Emergency fixes

## Commit Messages

Follow conventional commits:
\`\`\`
<type>(<scope>): <description>

[optional body]
[optional footer]
\`\`\`

## Pull Request Best Practices

- Keep PRs small and focused
- Write descriptive descriptions
- Request reviews from appropriate team members
- Address feedback promptly

## Conclusion

Consistent Git practices improve team collaboration and code quality.
    `,
    resources: [
      { title: "Git Documentation", url: "https://git-scm.com/doc" },
      { title: "Conventional Commits", url: "https://www.conventionalcommits.org" }
    ]
  }
];
