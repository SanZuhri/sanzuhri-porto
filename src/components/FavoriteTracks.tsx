import { useEffect, useState } from "react";
import { getTracks } from "@/lib/spotify";
import { Skeleton } from "@/components/ui/skeleton";
import { Music } from "lucide-react";

// To add your own favorite tracks, get the track ID from the Spotify app
// (Share -> Copy Spotify URI) and add it to the list below.
const trackIds = [
  "5XJEdVQ5jl3C3dFsV7kCTZ", 
  "1uF0XYWWeoWEWipY855GxT", 
  "0UtSPZyW63m5ZHODCwhakB", 
  "6Y3DptA1KtLCr0ii61x2Sl", 
  "46g39s8H3b2e2ANf2Cde4w", 
];

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}

export function FavoriteTracks() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTracks = async () => {
      setIsLoading(true);
      const trackDetails = await getTracks(trackIds);
      setTracks(trackDetails);
      setIsLoading(false);
    };

    fetchTracks();
  }, []);

  if (isLoading) {
    return <TrackListSkeleton />;
  }

  return (
    <div className="space-y-3">
      {tracks.map((track, index) => (
        <a
          key={track.id}
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-3 bg-muted/20 rounded-lg border hover:bg-muted/30 transition-colors group"
        >
          <div className="w-12 h-12 rounded-md overflow-hidden relative flex-shrink-0">
            <img
              src={track.albumImageUrl}
              alt={track.album}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Music className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{track.title}</p>
            <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

const TrackListSkeleton = () => {
  return (
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 p-3 bg-muted/20 rounded-lg border">
          <Skeleton className="w-12 h-12 rounded-md" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
};
