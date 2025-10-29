import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from the page
    const elements = document.querySelectorAll("article h1, article h2, article h3, article h4");
    const headingsList: Heading[] = [];

    elements.forEach((element, index) => {
      const id = element.id || `heading-${index}`;
      if (!element.id) {
        element.id = id;
      }

      headingsList.push({
        id,
        text: element.textContent || "",
        level: parseInt(element.tagName.substring(1)),
      });
    });

    setHeadings(headingsList);

    // Observe headings for active state
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden lg:block h-[calc(100vh-6rem)] overflow-hidden">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground mb-2">On this page</h3>
      </div>
      <ScrollArea className="h-full pr-4">
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 1) * 0.75}rem` }}
            >
              <button
                onClick={() => handleClick(heading.id)}
                className={cn(
                  "text-left w-full hover:text-foreground transition-colors py-1",
                  activeId === heading.id
                    ? "text-foreground font-medium border-l-2 border-primary pl-3"
                    : "text-muted-foreground border-l-2 border-transparent pl-3"
                )}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </nav>
  );
}
