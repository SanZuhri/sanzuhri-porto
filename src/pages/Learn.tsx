import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getLearnResources, LearnResource } from "@/lib/learn";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn</h1>
            <p className="text-xl text-muted-foreground">
              Tutorials, guides, and resources for developers
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-[200px] w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn</h1>
          <p className="text-xl text-muted-foreground">
            Tutorials, guides, and resources for developers
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/learn/${resource.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <Badge variant="outline">{resource.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(resource.date), "MMM d, yyyy")}
                      </div>
                    </div>
                    <CardTitle className="hover:text-primary transition-colors flex items-start gap-2">
                      <BookOpen className="w-5 h-5 flex-shrink-0 mt-1" />
                      {resource.title}
                    </CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
