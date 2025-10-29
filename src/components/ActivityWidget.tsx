import { useGitHubActivity } from "@/hooks/useGitHub";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";

export function ActivityWidget() {
  const { data: activities, isLoading } = useGitHubActivity();

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-medium text-foreground">Recent Activity</h2>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium text-foreground">Recent Activity</h2>
      <div className="space-y-4">
        {activities?.slice(0, 5).map((activity, index) => (
          <div key={index} className="group">
            <div className="flex items-start gap-3">
              <div className="text-sm text-muted-foreground whitespace-nowrap pt-1">
                {formatDistanceToNow(new Date(activity.created_at), { addSuffix: true })}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground line-clamp-1">
                  {activity.type.replace(/Event$/, "")} on{" "}
                  <span className="text-muted-foreground">{activity.repo.name}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
