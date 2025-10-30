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
      `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=10`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );
    
    if (!response.ok) {
      if (response.status === 403) {
        const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining');
        const rateLimitReset = response.headers.get('X-RateLimit-Reset');
        
        if (rateLimitRemaining === '0' && rateLimitReset) {
          const resetDate = new Date(parseInt(rateLimitReset) * 1000);
          throw new Error(`GitHub API rate limit exceeded. Resets at ${resetDate.toLocaleTimeString()}`);
        }
      }
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }
    
    const events = await response.json();
    return events.slice(0, 5);
  } catch (error) {
    console.error("Error fetching GitHub activity:", error);
    throw error;
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );
    
    if (!response.ok) {
      if (response.status === 403) {
        const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining');
        const rateLimitReset = response.headers.get('X-RateLimit-Reset');
        
        if (rateLimitRemaining === '0' && rateLimitReset) {
          const resetDate = new Date(parseInt(rateLimitReset) * 1000);
          throw new Error(`GitHub API rate limit exceeded. Resets at ${resetDate.toLocaleTimeString()}`);
        }
      }
      throw new Error(`Failed to fetch GitHub repos: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    throw error;
  }
}
