import { CLIENTS_DATA } from "@/lib/data";

export function ClientSection() {
  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-xl font-medium text-foreground mb-8">Trusted By</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {CLIENTS_DATA.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center"
            >
              <span className="text-sm text-muted-foreground font-medium">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
