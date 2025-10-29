const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_BASE_URL = 'https://api.themoviedb.org/3';

export interface MediaDetails {
  id: number;
  title: string;
  creator: string; // Director for movies, Created by for TV
  year: string;
  posterUrl: string;
  mediaUrl: string;
}

export type MediaType = 'movie' | 'tv';

export interface MediaRequest {
  id: number;
  type: MediaType;
}

const getMovie = async (id: number): Promise<MediaDetails | null> => {
  const response = await fetch(`${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`);
  if (!response.ok) return null;
  const data = await response.json();
  
  const director = data.credits.crew.find((p: any) => p.job === 'Director')?.name || 'N/A';

  return {
    id: data.id,
    title: data.title,
    creator: director,
    year: data.release_date ? data.release_date.split('-')[0] : 'N/A',
    posterUrl: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : '/placeholder.svg',
    mediaUrl: `https://www.themoviedb.org/movie/${id}`,
  };
};

const getTvShow = async (id: number): Promise<MediaDetails | null> => {
  const response = await fetch(`${API_BASE_URL}/tv/${id}?api_key=${API_KEY}`);
  if (!response.ok) return null;
  const data = await response.json();

  return {
    id: data.id,
    title: data.name,
    creator: data.created_by?.map((c: any) => c.name).join(', ') || 'N/A',
    year: data.first_air_date ? data.first_air_date.split('-')[0] : 'N/A',
    posterUrl: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : '/placeholder.svg',
    mediaUrl: `https://www.themoviedb.org/tv/${id}`,
  };
};

export const getMediaDetails = async (mediaRequests: MediaRequest[]): Promise<MediaDetails[]> => {
  if (!API_KEY) {
    console.error("Missing TMDb API key");
    return [];
  }

  try {
    const mediaPromises = mediaRequests.map(request => {
      if (request.type === 'movie') {
        return getMovie(request.id);
      }
      return getTvShow(request.id);
    });

    const media = await Promise.all(mediaPromises);
    return media.filter((item): item is MediaDetails => item !== null);
  } catch (error) {
    console.error("Error fetching media details:", error);
    return [];
  }
};
