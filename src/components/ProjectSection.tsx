import { PROJECTS_DATA } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ProjectSection() {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-medium text-foreground">Featured Projects</h2>
          <Link 
            to="/archive" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all
          </Link>
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
