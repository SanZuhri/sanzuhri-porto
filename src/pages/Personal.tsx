import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Track {
  title: string;
  artist: string;
  image: string;
}

interface Movie {
  title: string;
  image: string;
}

const TRACKS: Track[] = [
  { title: "Blinding Lights", artist: "The Weeknd", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=80&h=80&fit=crop" },
  { title: "As It Was", artist: "Harry Styles", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=80&h=80&fit=crop" },
  { title: "Heat Waves", artist: "Glass Animals", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=80&h=80&fit=crop" },
  { title: "Stay", artist: "The Kid LAROI & Justin Bieber", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=80&h=80&fit=crop" },
  { title: "Shivers", artist: "Ed Sheeran", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=80&h=80&fit=crop" },
];

const MOVIES: Movie[] = [
  { title: "Inception", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop" },
  { title: "Interstellar", image: "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=300&h=400&fit=crop" },
  { title: "The Dark Knight", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop" },
  { title: "Pulp Fiction", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop" },
  { title: "The Shawshank Redemption", image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300&h=400&fit=crop" },
  { title: "Fight Club", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop" },
];

const Personal = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl py-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-24"
        >
          {/* Why Are You Here */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Why are you here?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you're hoping to find some secret API keys, I'm sorry to disappoint you. 
              This page is just a place where I can put some of my more personal things.
            </p>
          </section>

          {/* Word for Word */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground">
                Word for Word
              </h2>
              <ExternalLink className="w-3 h-3 text-muted-foreground" />
            </div>
            <blockquote className="text-sm text-muted-foreground leading-relaxed mb-2">
              "Your time is limited, so don't waste it living someone else's life. Don't be 
              trapped by dogma – which is living with the results of other people's thinking."
            </blockquote>
            <cite className="text-xs text-muted-foreground">— Steve Jobs</cite>
          </section>

          {/* Top Tracks */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Top Tracks
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              I listen to a lot of music, and I like to keep track of the songs that I've 
              been playing the most.
            </p>
            <div className="space-y-3">
              {TRACKS.map((track, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <img 
                    src={track.image} 
                    alt={track.title}
                    className="w-10 h-10 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground truncate">{track.title}</p>
                    <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Top Movies */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Top Movies
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Movies have a way of transporting us to different worlds, making us laugh, cry, 
              and everything in between. Here are some of the films that have left a lasting 
              impression on me.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {MOVIES.map((movie, index) => (
                <div key={index} className="group">
                  <div className="aspect-[2/3] rounded overflow-hidden mb-2">
                    <img 
                      src={movie.image} 
                      alt={movie.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{movie.title}</p>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Personal;
