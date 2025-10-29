import { useGitHubActivity } from "@/hooks/useGitHub";
import { Skeleton } from "@/components/ui/skeleton";

export function ActivityWidget() {
  const { data, isLoading, error } = useGitHubActivity();

  return (
    <div className="space-y-4">
      <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
        Recent Activity
      </h2>
      
      {isLoading && (
        <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 py-2">
              <Skeleton className="h-1.5 w-1.5 rounded-full" />
              <Skeleton className="h-3 flex-1" />
              <Skeleton className="h-3 w-12" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <p className="text-xs text-muted-foreground">Failed to load activity</p>
      )}

      {data && (
        <div className="space-y-2">
          {data.slice(0, 5).map((activity, index) => (
            <div key={index} className="flex items-start gap-3 text-xs py-2 border-b border-border last:border-0">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-muted-foreground truncate">{activity.type}</p>
                <p className="text-[10px] text-muted-foreground/60 mt-0.5">{activity.repo.name}</p>
              </div>
              <span className="text-[10px] text-muted-foreground/60 whitespace-nowrap">
                {new Date(activity.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
