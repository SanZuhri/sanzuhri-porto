import { useGitHubActivity } from "@/hooks/useGitHub";
import { Skeleton } from "@/components/ui/skeleton";
import { GitCommit, GitBranch, GitPullRequest, Star } from "lucide-react";

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'PushEvent':
      return <GitCommit className="w-3.5 h-3.5 text-muted-foreground" />;
    case 'CreateEvent':
      return <GitBranch className="w-3.5 h-3.5 text-muted-foreground" />;
    case 'PullRequestEvent':
      return <GitPullRequest className="w-3.5 h-3.5 text-muted-foreground" />;
    case 'WatchEvent':
      return <Star className="w-3.5 h-3.5 text-muted-foreground" />;
    default:
      return <div className="w-3.5 h-3.5 rounded-full bg-muted-foreground" />;
  }
};

export function ActivityWidget() {
  const { data, isLoading, error } = useGitHubActivity();

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
          Recent Activity
        </h2>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-start gap-3 p-3 border rounded-lg">
              <Skeleton className="w-8 h-8 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-3/4" />
                <Skeleton className="h-2.5 w-1/2" />
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
          Recent Activity
        </h2>
        <div className="p-4 border rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            {error ? 'Failed to load activity' : 'No recent activity'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
        Recent Activity
      </h2>
      
      <div className="space-y-3">
        {data.slice(0, 5).map((activity) => {
          const repoName = activity.repo.name.split('/')[1];
          const activityDate = new Date(activity.created_at);
          const formattedDate = activityDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          });
          const timeAgo = getTimeAgo(activityDate);

          return (
            <a
              key={activity.id}
              href={`https://github.com/${activity.repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/30 transition-colors group"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {formatActivityType(activity.type)} <span className="text-foreground">{repoName}</span>
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{formattedDate}</span>
                  <span>•</span>
                  <span>{timeAgo}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      
      <a
        href="https://github.com/SanZuhri"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        View all activity →
      </a>
    </div>
  );
}

function formatActivityType(type: string): string {
  const typeMap: Record<string, string> = {
    'PushEvent': 'Pushed to',
    'CreateEvent': 'Created',
    'ForkEvent': 'Forked',
    'WatchEvent': 'Starred',
    'PullRequestEvent': 'Opened PR in',
    'IssuesEvent': 'Opened issue in',
    'IssueCommentEvent': 'Commented on issue in',
    'PullRequestReviewCommentEvent': 'Commented on PR in',
  };
  
  return typeMap[type] || type.replace(/([A-Z])/g, ' $1').trim();
}

function getTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays}d ago`;
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths}mo ago`;
  
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears}y ago`;
}
