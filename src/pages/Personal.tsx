import { motion } from "framer-motion";
import { MapPin, Mail, Calendar } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SpotifyNowPlaying } from "@/components/SpotifyNowPlaying";
import { FavoriteTracks } from "@/components/FavoriteTracks";
import { FavoriteMedia } from "@/components/FavoriteMedia";
import { FavoriteReads } from "@/components/FavoriteReads";

interface Principle {
  text: string;
  author: string;
}

interface Bookmark {
  title: string;
  url: string;
  category: string;
}

const PRINCIPLES: Principle[] = [
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  }
];

const BOOKMARKS: Bookmark[] = [
  { title: "Linear", url: "https://linear.app", category: "Tools" },
  { title: "Raycast", url: "https://raycast.com", category: "Tools" },
  { title: "Figma", url: "https://figma.com", category: "Design" },
  { title: "Vercel", url: "https://vercel.com", category: "Development" },
  { title: "Arc Browser", url: "https://arc.net", category: "Tools" },
  { title: "Notion", url: "https://notion.so", category: "Productivity" },
];

const CURRENTLY = {
  reading: "Human Acts",
  building: "A SaaS for developers",
  learning: "Rust & Systems Programming",
  location: "Bandung, Indonesia"
};

const Personal = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Profile Section */}
          <section className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/profile2.jpg" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-background" />
              </div>
              <div className="flex-1 pt-1">
                <h1 className="text-2xl font-medium mb-1">Ikhsan Zuhri</h1>
                <p className="text-sm text-muted-foreground mb-3">
                  Full-Stack Developer & Designer
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Bandung, Indonesia
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    zuhrialghifaryikhsan@gmail.com
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Available for work
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm passionate about creating beautiful, functional digital experiences. 
              When I'm not coding, you'll find me exploring new technologies, reading design blogs, 
              or contributing to open source. I believe in building products that matter and 
              making the web a better place, one pixel at a time.
            </p>
          </section>

          <Separator />

          {/* Currently Section */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6 font-mono">
              Currently
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Reading</p>
                <p className="text-sm">{CURRENTLY.reading}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Building</p>
                <p className="text-sm">{CURRENTLY.building}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Learning</p>
                <p className="text-sm">{CURRENTLY.learning}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Based in</p>
                <p className="text-sm">{CURRENTLY.location}</p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Principles Section */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6 font-mono">
              Principles
            </h2>
            <div className="space-y-6">
              {PRINCIPLES.map((principle, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-sm leading-relaxed italic">
                    "{principle.text}"
                  </p>
                  <p className="text-xs text-muted-foreground">— {principle.author}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Bookmarks Section */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6 font-mono">
              Bookmarks
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Tools and resources I use daily and recommend to others.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BOOKMARKS.map((bookmark, index) => (
                <a
                  key={index}
                  href={bookmark.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-lg border border-border hover:border-foreground/20 transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium group-hover:text-foreground transition-colors">
                      {bookmark.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{bookmark.category}</p>
                  </div>
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </section>

          <Separator />

          {/* Music Section */}
          <section className="space-y-6">
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
              Music
            </h2>
            
            <div>
                <p className="text-sm text-muted-foreground mb-4">
                  What I'm currently listening to on Spotify.
                </p>
                <SpotifyNowPlaying />
            </div>

            <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Some of my all-time favorite tracks.
                </p>
                <FavoriteTracks />
                <a
                  href="https://open.spotify.com/user/31tjr5kzhhp6fp5haelfqwjddcya?si=b79b1765fa75477b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mt-2"
                >
                  My Spotify Profile →
                </a>
            </div>
          </section>

          <Separator />

          {/* Recent Reads Section */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-mono">
              Favorite Reads
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Some of my recommended books.
            </p>
            <FavoriteReads />
            <a
              href="https://fable.co/ikhsan-zuhri-al-ghifary-396076066331?period_type=year"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mt-4"
            >
              View my reading list →
            </a>
          </section>

          <Separator />

          {/* Favorite Films & Series Section */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6 font-mono">
              Favorite Films & Series
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Movies and shows that left an impression on me.
            </p>
            <FavoriteMedia />
            <a
                href="https://boxd.it/9vS1B"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mt-4"
              >
                View my Letterboxd →
              </a>
          </section>

          <Separator />

          {/* Footer Note */}
          <section>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This page is a glimpse into who I am beyond the code. If you'd like to connect, 
              collaborate, or just chat about technology and design, feel free to reach out via 
              email or any of my social channels.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Personal;
