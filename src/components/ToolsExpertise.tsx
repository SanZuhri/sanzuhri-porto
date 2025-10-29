import { TOOLS_DATA } from "@/lib/data";

interface Tool {
  id: string;
  name: string;
  category: string;
}

export function ToolsExpertise() {
  // Group tools by category
  const toolsByCategory: Record<string, Tool[]> = TOOLS_DATA.reduce(
    (acc, tool) => {
      if (!acc[tool.category]) {
        acc[tool.category] = [];
      }
      acc[tool.category].push(tool);
      return acc;
    },
    {} as Record<string, Tool[]>
  );

  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-8">
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-mono">
            Tools & Expertise
          </h2>
          <p className="text-sm text-muted-foreground">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(toolsByCategory).map(([category, tools]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-xs font-medium text-foreground uppercase tracking-wider mb-2">
                {category}
              </h3>
              <div className="space-y-1.5">
                {tools.map((tool) => (
                  <div 
                    key={tool.id} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {tool.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
