export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  url: string;
  content: any; // The MDX component
  featured?: boolean;
}

const projectModules = import.meta.glob('../content/projects/*.mdx');

export const getProjects = async (): Promise<Project[]> => {
  const projects: Project[] = [];

  for (const path in projectModules) {
    const module = await projectModules[path]() as any;
    const { frontmatter, default: Content } = module;

    const slug = path.split('/').pop()?.replace(/\.mdx$/, '') || '';

    if (frontmatter) {
      projects.push({
        slug,
        title: frontmatter.title || 'Untitled',
        description: frontmatter.description || '',
        date: frontmatter.date || new Date().toISOString(),
        tags: frontmatter.tags || [],
        url: frontmatter.url || `#${slug}`,
        featured: frontmatter.featured || false,
        content: Content,
      });
    }
  }

  projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return projects;
};
