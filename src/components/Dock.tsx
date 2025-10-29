import { Link, useLocation } from "react-router-dom";
import { Home, FileText, BookOpen, FlaskConical, Archive, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Post", href: "/post", icon: FileText },
  { name: "Learn", href: "/learn", icon: BookOpen },
  { name: "Lab", href: "/lab", icon: FlaskConical },
  { name: "Archive", href: "/archive", icon: Archive },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Dock() {
  const location = useLocation();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <div className="backdrop-blur-lg bg-card/80 border border-border rounded-2xl shadow-lg px-4 py-3">
        <nav className="flex items-center gap-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href || 
              (item.href !== "/" && location.pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all",
                  "hover:bg-accent/50",
                  isActive && "bg-accent text-accent-foreground"
                )}
                title={item.name}
              >
                <item.icon className="w-5 h-5" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
