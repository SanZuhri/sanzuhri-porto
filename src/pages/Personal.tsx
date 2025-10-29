import { motion } from "framer-motion";
import { MapPin, Mail, Calendar } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
  reading: "The Pragmatic Programmer",
  building: "A SaaS for developers",
  learning: "Rust & Systems Programming",
  location: "Remote / Indonesia"
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
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-background" />
              </div>
              <div className="flex-1 pt-1">
                <h1 className="text-2xl font-medium mb-1">Alex Johnson</h1>
                <p className="text-sm text-muted-foreground mb-3">
                  Full-Stack Developer & Designer
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Remote / Indonesia
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    hello@alexjohnson.dev
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

          {/* Currently Listening Section */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6 font-mono">
              Currently Listening
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Music that's been on repeat lately.
            </p>
            <div className="space-y-3">
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-lg border border-border hover:border-foreground/20 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium">Neon Dreams</p>
                  <p className="text-xs text-muted-foreground">Electric Youth</p>
                </div>
                <svg className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a
                href="https://open.spotify.com/user/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                View my Spotify profile →
              </a>
            </div>
          </section>

          <Separator />

          {/* Recent Reads Section */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6 font-mono">
              Recent Reads
            </h2>
            <div className="space-y-3">
              <div className="p-3 rounded-lg border border-border">
                <p className="text-sm font-medium mb-1">The Pragmatic Programmer</p>
                <p className="text-xs text-muted-foreground">David Thomas & Andrew Hunt</p>
              </div>
              <div className="p-3 rounded-lg border border-border">
                <p className="text-sm font-medium mb-1">Atomic Habits</p>
                <p className="text-xs text-muted-foreground">James Clear</p>
              </div>
              <a
                href="https://www.goodreads.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                View my reading list →
              </a>
            </div>
          </section>

          <Separator />

          {/* Favorite Films Section */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6 font-mono">
              Favorite Films
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Movies that left an impression on me.
            </p>
            <div className="space-y-3">
              <div className="p-3 rounded-lg border border-border">
                <p className="text-sm font-medium mb-1">Blade Runner 2049</p>
                <p className="text-xs text-muted-foreground">Denis Villeneuve, 2017</p>
              </div>
              <div className="p-3 rounded-lg border border-border">
                <p className="text-sm font-medium mb-1">Her</p>
                <p className="text-xs text-muted-foreground">Spike Jonze, 2013</p>
              </div>
              <div className="p-3 rounded-lg border border-border">
                <p className="text-sm font-medium mb-1">The Social Network</p>
                <p className="text-xs text-muted-foreground">David Fincher, 2010</p>
              </div>
              <a
                href="https://letterboxd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                View my Letterboxd →
              </a>
            </div>
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
