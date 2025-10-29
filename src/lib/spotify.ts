const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

const basic = btoa(`${client_id}:${client_secret}`);
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  if (!refresh_token) {
    throw new Error("Missing Spotify refresh token");
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error_description || "Failed to fetch access token");
  }
  return data;
};

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 204) {
      // Nothing is playing
      return { isPlaying: false };
    }
    
    if (!response.ok) {
      // Handle other errors (e.g., token expired, though getAccessToken should prevent this)
      console.error("Failed to fetch currently playing track:", await response.text());
      return { isPlaying: false };
    }

    const song = await response.json();

    if (!song || !song.item) {
      return { isPlaying: false };
    }

    return {
      isPlaying: song.is_playing,
      title: song.item.name,
      artist: song.item.artists.map((artist: { name: string }) => artist.name).join(", "),
      album: song.item.album.name,
      albumImageUrl: song.item.album.images[0]?.url,
      songUrl: song.item.external_urls.spotify,
    };
  } catch (error) {
    console.error("Error in getNowPlaying:", error);
    return { isPlaying: false, error: (error as Error).message };
  }
};

const TRACKS_ENDPOINT = `https://api.spotify.com/v1/tracks`;

export const getTracks = async (trackIds: string[]) => {
  if (!trackIds || trackIds.length === 0) {
    return [];
  }

  try {
    const { access_token } = await getAccessToken();
    const response = await fetch(`${TRACKS_ENDPOINT}?ids=${trackIds.join(",")}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch tracks:", await response.text());
      return [];
    }

    const { tracks } = await response.json();

    return tracks.filter(Boolean).map((track: any) => ({
      id: track.id,
      title: track.name,
      artist: track.artists.map((artist: { name: string }) => artist.name).join(", "),
      album: track.album.name,
      albumImageUrl: track.album.images[0]?.url,
      songUrl: track.external_urls.spotify,
    }));
  } catch (error) {
    console.error("Error in getTracks:", error);
    return [];
  }
};
