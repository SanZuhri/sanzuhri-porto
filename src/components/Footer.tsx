import { Github, Twitter, Linkedin, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border pt-12 pb-24 sm:pb-28 mt-32">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground mb-4">
              © {currentYear} Portfolio. All rights reserved.
            </p>
            <Link 
              to="/personal" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Personal
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SanZuhri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/san_zuhri?igsh=MTVjY2F0M2xzNnljaw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ikhsan-zuhri-al-ghifary-2ab078325/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:zuhrialghifaryikhsan@gmail.com"
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
