import { useQuery } from "@tanstack/react-query";
import { fetchGitHubActivity, fetchGitHubRepos } from "@/lib/github";

export function useGitHubActivity() {
  return useQuery({
    queryKey: ["github-activity"],
    queryFn: fetchGitHubActivity,
    staleTime: 5 * 60 * 1000, // 5 minutes - reduce API calls
    gcTime: 10 * 60 * 1000, // Keep data in cache for 10 minutes
    refetchInterval: false, // Disable automatic refetching
    refetchOnWindowFocus: false, // Disable refetch on window focus to avoid rate limits
    retry: (failureCount, error) => {
      // Don't retry on rate limit errors
      if (error instanceof Error && error.message.includes('rate limit')) {
        return false;
      }
      return failureCount < 2;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  });
}

export function useGitHubRepos() {
  return useQuery({
    queryKey: ["github-repos"],
    queryFn: fetchGitHubRepos,
    staleTime: 10 * 60 * 1000, // 10 minutes - repos change less frequently
    gcTime: 15 * 60 * 1000, // Keep data in cache for 15 minutes
    refetchOnWindowFocus: false, // Disable refetch on window focus to avoid rate limits
    retry: (failureCount, error) => {
      // Don't retry on rate limit errors
      if (error instanceof Error && error.message.includes('rate limit')) {
        return false;
      }
      return failureCount < 2;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  });
}
