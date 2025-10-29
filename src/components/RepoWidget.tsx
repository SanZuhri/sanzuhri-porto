import { useGitHubRepos } from "@/hooks/useGitHub";
import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";

export function RepoWidget() {
  const { data: repos, isLoading } = useGitHubRepos();

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-medium text-foreground">Featured Repositories</h2>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium text-foreground">Featured Repositories</h2>
      <div className="space-y-4">
        {repos?.slice(0, 5).map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                  {repo.name}
                </h3>
                {repo.stargazers_count > 0 && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                )}
              </div>
              {repo.description && (
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {repo.description}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
