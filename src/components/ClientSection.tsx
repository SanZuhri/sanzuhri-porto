import { CLIENTS_DATA } from "@/lib/data";

export function ClientSection() {
  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6 font-mono">
          Trusted by
        </h2>
        
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {CLIENTS_DATA.map((client) => (
            <span
              key={client.id}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              {client.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
