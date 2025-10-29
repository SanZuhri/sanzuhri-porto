import { Link } from "react-router-dom";
import { getProjects, type Project } from "@/lib/projects"; // Import Project type
import { useEffect, useState } from "react";

export function ProjectSection() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const allProjects = await getProjects();
        // Filter featured projects and take only the first 3
        const featured = allProjects.filter(p => p.featured);
        setFeaturedProjects(featured);
      } catch (error) {
        console.error("Failed to load projects:", error);
      }
    };
    
    loadProjects();
  }, []);

  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6 font-mono">
          Featured Projects
        </h2>
        
        <div className="space-y-2">
          {featuredProjects.map((project) => (
            <a
              key={project.slug}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-border rounded-lg hover:border-foreground/20 transition-all hover:translate-x-0.5 group"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-sm font-medium group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 bg-muted/50 text-muted-foreground rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6">
          <Link 
            to="/archive" 
            className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            View all projects
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
