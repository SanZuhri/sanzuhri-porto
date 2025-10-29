import { useQuery } from "@tanstack/react-query";
import { fetchGitHubActivity, fetchGitHubRepos } from "@/lib/github";

export function useGitHubActivity() {
  return useQuery({
    queryKey: ["github-activity"],
    queryFn: fetchGitHubActivity,
    staleTime: 60 * 1000, // 1 minute
    refetchInterval: 2 * 60 * 1000, // Refetch every 2 minutes
    refetchOnWindowFocus: true, // Refetch when window regains focus
    retry: 2, // Retry failed requests twice
    retryDelay: 1000, // Wait 1 second between retries
  });
}

export function useGitHubRepos() {
  return useQuery({
    queryKey: ["github-repos"],
    queryFn: fetchGitHubRepos,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
