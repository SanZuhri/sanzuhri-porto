export interface LearnResource {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  content: any; // MDX module
  resources?: { title: string; url: string }[];
}

const learnModules = import.meta.glob('../content/learn/*.mdx');

export const getLearnResources = async (): Promise<LearnResource[]> => {
  const resources: LearnResource[] = [];

  for (const path in learnModules) {
    const module = await learnModules[path]() as any;
    const { frontmatter, default: Content } = module;

    console.log('Learn path:', path);
    console.log('Frontmatter:', frontmatter);

    // Only push if frontmatter is valid and has a slug
    if (frontmatter && frontmatter.slug) {
      resources.push({
        slug: frontmatter.slug,
        title: frontmatter.title || 'Untitled',
        description: frontmatter.description || '',
        date: frontmatter.date || new Date().toISOString(),
        category: frontmatter.category || 'Uncategorized',
        tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
        content: Content, // The MDX component
        resources: Array.isArray(frontmatter.resources) ? frontmatter.resources : [],
      });
    } else {
      console.warn('Skipping learn resource due to missing or invalid frontmatter:', path);
    }
  }

  // Sort by date, newest first
  resources.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  console.log('FINAL LEARN_DATA:', resources);
  return resources;
};

