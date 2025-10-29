import { useQuery } from "@tanstack/react-query";
import { fetchGitHubActivity, fetchGitHubRepos } from "@/lib/github";

export function useGitHubActivity() {
  return useQuery({
    queryKey: ["github-activity"],
    queryFn: fetchGitHubActivity,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useGitHubRepos() {
  return useQuery({
    queryKey: ["github-repos"],
    queryFn: fetchGitHubRepos,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
