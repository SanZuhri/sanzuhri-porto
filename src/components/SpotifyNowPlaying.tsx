import { useSpotify } from "@/hooks/use-spotify";
import { Skeleton } from "@/components/ui/skeleton";
import { Music, Pause } from "lucide-react";

export function SpotifyNowPlaying() {
  const { data, isLoading } = useSpotify();

  if (isLoading) {
    return <SpotifySkeleton />;
  }

  if (!data?.isPlaying) {
    return (
      <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg border">
        <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-md">
          <Pause className="w-6 h-6 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">Not currently playing</p>
          <p className="text-xs text-muted-foreground">Spotify</p>
        </div>
      </div>
    );
  }

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-3 bg-muted/20 rounded-lg border hover:bg-muted/30 transition-colors"
    >
      <div className="w-16 h-16 rounded-md overflow-hidden relative">
        <img
          src={data.albumImageUrl}
          alt={data.album}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Music className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{data.title}</p>
        <p className="text-xs text-muted-foreground truncate">{data.artist}</p>
      </div>
    </a>
  );
}

const SpotifySkeleton = () => {
  return (
    <div className="flex items-center gap-4 p-3 bg-muted/20 rounded-lg border">
      <Skeleton className="w-16 h-16 rounded-md" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  );
};

