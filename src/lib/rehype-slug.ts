// Simple rehype plugin to add IDs to headings
import { visit } from 'unist-util-visit';

export function rehypeSlug() {
  return (tree: any) => {
    visit(tree, 'element', (node: any) => {
      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)) {
        if (!node.properties.id) {
          // Generate slug from text content
          const text = node.children
            .filter((child: any) => child.type === 'text')
            .map((child: any) => child.value)
            .join('');
          
          node.properties.id = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
        }
      }
    });
  };
}
