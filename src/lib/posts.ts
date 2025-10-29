export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: any; // MDX module
}

const postModules = import.meta.glob('../content/posts/*.mdx');

export const getPosts = async (): Promise<Post[]> => {
  const posts: Post[] = [];

  for (const path in postModules) {
    const module = await postModules[path]() as any;
    const { frontmatter, default: Content } = module;

    console.log('Post path:', path);
    console.log('Frontmatter:', frontmatter);

    // Only push if frontmatter is valid and has a slug
    if (frontmatter && frontmatter.slug) {
      posts.push({
        slug: frontmatter.slug,
        title: frontmatter.title || 'Untitled',
        description: frontmatter.description || '',
        date: frontmatter.date || new Date().toISOString(),
        readingTime: frontmatter.readingTime || '5 min read',
        tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
        content: Content, // The MDX component
      });
    } else {
      console.warn('Skipping post due to missing or invalid frontmatter:', path);
    }
  }

  // Sort by date, newest first
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  console.log('FINAL POSTS_DATA:', posts);
  return posts;
};