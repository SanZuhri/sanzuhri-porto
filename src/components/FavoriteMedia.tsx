import { useEffect, useState } from "react";
import { getMediaDetails, MediaDetails, MediaRequest } from "@/lib/tmdb";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink } from "lucide-react";

// Add the TMDb IDs for your favorite films and series here.
const mediaRequests: MediaRequest[] = [
  { id: 1244492, type: 'movie' }, // Look Back
  { id: 61421, type: 'tv' },      // Terror in Resonance
  { id: 906126, type: 'movie' }, // Society of the Snow
  { id: 1184918, type: 'movie' },  // The Wild Robot
];

export function FavoriteMedia() {
  const [media, setMedia] = useState<MediaDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      setIsLoading(true);
      const mediaDetails = await getMediaDetails(mediaRequests);
      setMedia(mediaDetails);
      setIsLoading(false);
    };

    fetchMedia();
  }, []);

  if (isLoading) {
    return <MediaListSkeleton />;
  }

  return (
    <div className="space-y-3">
      {media.map(item => (
        <a
          key={`${item.id}-${item.title}`}
          href={item.mediaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-3 bg-muted/20 rounded-lg border hover:bg-muted/30 transition-colors group"
        >
          <div className="w-16 h-24 rounded-md overflow-hidden relative flex-shrink-0 bg-muted">
            <img
              src={item.posterUrl}
              alt={`Poster for ${item.title}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{item.title}</p>
            <p className="text-xs text-muted-foreground truncate">
              {item.creator}, {item.year}
            </p>
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-opacity" />
        </a>
      ))}
    </div>
  );
}

const MediaListSkeleton = () => {
  return (
    <div className="space-y-3">
      {Array.from({ length: mediaRequests.length }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 p-3 bg-muted/20 rounded-lg border">
          <Skeleton className="w-16 h-24 rounded-md" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
};