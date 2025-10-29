import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 mt-32">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">Resources</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Snipplet</a>
              <a href="#" className="hover:text-foreground transition-colors">RSS</a>
              <a href="#" className="hover:text-foreground transition-colors">Note</a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">Website</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Bucket List</a>
              <a href="#" className="hover:text-foreground transition-colors">Personal</a>
              <a href="#" className="hover:text-foreground transition-colors">Mentorship</a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">Stay Connected</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Guestbook</a>
              <a href="#" className="hover:text-foreground transition-colors">Newsletter</a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
