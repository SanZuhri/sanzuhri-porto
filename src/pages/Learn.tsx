import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getLearnResources, LearnResource } from "@/lib/learn";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen } from "lucide-react";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Learn = () => {
  const [resources, setResources] = useState<LearnResource[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      setIsLoading(true);
      const fetchedResources = await getLearnResources();
      setResources(fetchedResources);
      setIsLoading(false);
    };
    fetchResources();
  }, []);

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">Learn</h1>
          <p className="text-muted-foreground">Tutorials, guides, and resources for developers</p>
        </div>
        <div className="grid gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-24 w-full rounded-md" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Learn</h1>
        <p className="text-muted-foreground">Tutorials, guides, and resources for developers</p>
      </div>

      <div className="space-y-4">
        {resources.map((resource) => (
          <motion.div
            key={resource.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={`/learn/${resource.slug}`}>
              <Card className="hover:bg-muted/50 transition-colors">
                <CardHeader className="p-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-1">
                    <Badge 
                      variant="outline" 
                      className="text-xs font-mono font-normal px-2 py-0.5 border-border/50 bg-muted/20 text-foreground/80 hover:bg-muted/40 transition-colors"
                    >
                      {resource.category}
                    </Badge>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {format(new Date(resource.date), "MMM d, yyyy")}
                    </span>
                  </div>
                  <CardTitle className="text-lg hover:text-primary transition-colors flex items-start gap-2">
                    <BookOpen className="w-4 h-4 flex-shrink-0 mt-1.5 text-muted-foreground" />
                    {resource.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {resource.tags.slice(0, 3).map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs font-mono font-normal px-2 py-0.5 border-border/50 bg-muted/20 text-foreground/80 hover:bg-muted/40 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
