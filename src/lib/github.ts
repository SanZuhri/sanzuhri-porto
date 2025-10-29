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
    // First try the user's events endpoint
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=10&t=${Date.now()}`
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }
    
    let events = await response.json();
    
    // If no recent events, try getting the latest commits from repositories
    if (events.length === 0 || new Date(events[0].created_at) < new Date(Date.now() - 3600000)) {
      console.log('No recent events found, checking repository commits...');
      const reposResponse = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=5&t=${Date.now()}`
      );
      
      if (reposResponse.ok) {
        const repos = await reposResponse.json();
        const recentCommits = [];
        
        // Get the latest commit from each repository
        for (const repo of repos) {
          const commitsResponse = await fetch(
            `https://api.github.com/repos/${repo.full_name}/commits?author=${GITHUB_USERNAME}&per_page=1&t=${Date.now()}`
          );
          
          if (commitsResponse.ok) {
            const commits = await commitsResponse.json();
            if (commits.length > 0) {
              const commit = commits[0];
              recentCommits.push({
                id: commit.sha,
                type: 'PushEvent',
                repo: {
                  name: repo.full_name,
                  url: repo.html_url
                },
                created_at: commit.commit.author.date,
                payload: {
                  commits: [commit.commit]
                }
              });
            }
          }
        }
        
        // Combine and sort by date
        events = [...recentCommits, ...events]
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(0, 5);
      }
    }
    
    return events;
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
