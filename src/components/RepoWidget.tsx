import { useGitHubRepos } from "@/hooks/useGitHub";
import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";

export function RepoWidget() {
  const { data, isLoading, error } = useGitHubRepos();

  return (
    <div className="space-y-4">
      <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
        Featured Repositories
      </h2>
      
      {isLoading && (
        <div className="space-y-2">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="p-4 border border-border rounded-lg">
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-3 w-full" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <p className="text-xs text-muted-foreground">Failed to load repositories</p>
      )}

      {data && (
        <div className="space-y-2">
          {data.slice(0, 3).map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-border rounded-lg hover:border-foreground/20 transition-all hover:translate-x-0.5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium mb-1 truncate">{repo.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {repo.description || "No description"}
                  </p>
                </div>
                <Star className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
              </div>
              <div className="flex items-center gap-3 mt-2 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="w-2.5 h-2.5" />
                  {repo.stargazers_count}
                </span>
                {repo.language && <span className="font-mono">{repo.language}</span>}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
