// GitHub API utilities
const GITHUB_USERNAME = "SanZuhri"; // GitHub username

export interface GitHubActivity {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
  private: boolean;
}

export async function fetchGitHubActivity(): Promise<GitHubActivity[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=5`
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch GitHub activity");
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub activity:", error);
    return [];
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch GitHub repos");
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
