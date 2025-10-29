import { useGitHubRepos } from "@/hooks/useGitHub";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, GitFork, Eye } from "lucide-react";

export function RepoWidget() {
  const { data, isLoading, error } = useGitHubRepos();

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
          Featured Repositories
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-4 border rounded-lg">
              <Skeleton className="h-5 w-3/4 mb-3" />
              <Skeleton className="h-3.5 w-full mb-4" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !data || data.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
          Featured Repositories
        </h2>
        <div className="p-6 border rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            {error ? 'Failed to load repositories' : 'No repositories found'}
          </p>
        </div>
      </div>
    );
  }

  // Get top 4 most starred repositories
  const featuredRepos = [...data]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 4);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
          Featured Repositories
        </h2>
        <a
          href="https://github.com/SanZuhri?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          View all →
        </a>
      </div>
      
      <div className="grid gap-3 sm:grid-cols-2">
        {featuredRepos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 border rounded-lg hover:bg-muted/20 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {repo.name}
              </h3>
              <div className="flex items-center text-xs text-muted-foreground">
                <Star className="w-3.5 h-3.5 mr-1" />
                {repo.stargazers_count}
              </div>
            </div>
            
            {repo.description && (
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {repo.description}
              </p>
            )}
            
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              {repo.language && (
                <div className="flex items-center">
                  <span 
                    className="w-2.5 h-2.5 rounded-full mr-1.5"
                    style={{
                      backgroundColor: getLanguageColor(repo.language)
                    }}
                  />
                  {repo.language}
                </div>
              )}
              
              <div className="flex items-center">
                <GitFork className="w-3.5 h-3.5 mr-1" />
                {repo.forks_count || 0}
              </div>
              
              <div className="flex items-center">
                <Eye className="w-3.5 h-3.5 mr-1" />
                {repo.watchers_count || 0}
              </div>
              
              <span className="ml-auto">
                Updated {getTimeAgo(new Date(repo.updated_at))}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#3178c6',
    'Python': '#3572A5',
    'Java': '#b07219',
    'PHP': '#4F5D95',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Vue': '#41b883',
    'Shell': '#89e051',
    'Dockerfile': '#384d54',
  };
  
  return colors[language] || '#cccccc';
}

function getTimeAgo(date: Date): string {
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return 'today';
  if (diffInDays === 1) return 'yesterday';
  if (diffInDays < 30) return `${diffInDays} days ago`;
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths === 1) return '1 month ago';
  if (diffInMonths < 12) return `${diffInMonths} months ago`;
  
  const diffInYears = Math.floor(diffInMonths / 12);
  return diffInYears === 1 ? '1 year ago' : `${diffInYears} years ago`;
}
