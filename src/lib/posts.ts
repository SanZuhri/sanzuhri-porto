export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: string;
}

export const POSTS_DATA: Post[] = [
  {
    slug: "building-scalable-react-apps",
    title: "Building Scalable React Applications",
    description: "Best practices and patterns for building large-scale React applications that are maintainable and performant",
    date: "2024-01-15",
    readingTime: "8 min",
    tags: ["React", "Architecture", "Best Practices"],
    content: `
# Building Scalable React Applications

When building large-scale React applications, proper architecture and organization are crucial for long-term maintainability.

## Key Principles

### 1. Component Organization
Organize components by feature rather than by type. This makes it easier to locate and modify related code.

### 2. State Management
Choose the right state management solution based on your needs:
- Local state for component-specific data
- Context API for app-wide themes and user settings
- Zustand or Redux for complex shared state

### 3. Code Splitting
Implement lazy loading and code splitting to improve initial load times.

## Performance Optimization

Use React.memo, useMemo, and useCallback wisely to prevent unnecessary re-renders.

## Conclusion

Building scalable React apps requires careful planning and adherence to best practices.
    `
  },
  {
    slug: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns",
    description: "Exploring advanced TypeScript patterns and techniques for type-safe code",
    date: "2024-01-10",
    readingTime: "10 min",
    tags: ["TypeScript", "Programming", "Advanced"],
    content: `
# Advanced TypeScript Patterns

TypeScript offers powerful type system features that can help you write safer, more maintainable code.

## Utility Types

TypeScript provides several built-in utility types that can help transform types:

- \`Partial<T>\`: Makes all properties optional
- \`Required<T>\`: Makes all properties required
- \`Pick<T, K>\`: Creates a type with only specified properties
- \`Omit<T, K>\`: Creates a type without specified properties

## Generic Constraints

Use generic constraints to create more flexible yet type-safe functions.

## Mapped Types

Mapped types allow you to create new types based on existing ones.

## Conclusion

Mastering these patterns will significantly improve your TypeScript code quality.
    `
  },
  {
    slug: "web-performance-optimization",
    title: "Web Performance Optimization Guide",
    description: "Comprehensive guide to optimizing web application performance",
    date: "2024-01-05",
    readingTime: "12 min",
    tags: ["Performance", "Web Development", "Optimization"],
    content: `
# Web Performance Optimization Guide

Performance is crucial for user experience and SEO. This guide covers essential optimization techniques.

## Core Web Vitals

Focus on improving:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## Image Optimization

- Use modern formats (WebP, AVIF)
- Implement lazy loading
- Use responsive images with srcset

## Code Optimization

- Minify and compress assets
- Implement code splitting
- Use a CDN for static assets

## Conclusion

Systematic performance optimization leads to better user experience and business outcomes.
    `
  }
];
