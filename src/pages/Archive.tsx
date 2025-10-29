import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getPosts } from "@/lib/posts";
import { getLearnResources } from "@/lib/learn";
import { getProjects } from "@/lib/projects"; // Import getProjects
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, FileText, BookOpen, FolderGit2 } from "lucide-react";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import type { Post } from "@/lib/posts";
import type { LearnResource } from "@/lib/learn";
import type { Project } from "@/lib/projects"; // Import Project type
import { Skeleton } from "@/components/ui/skeleton";

type Item = 
  | (Post & { type: 'post' })
  | (LearnResource & { type: 'learn' })
  | (Project & { type: 'project' });

const Archive = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [posts, learnResources, projects] = await Promise.all([
          getPosts(),
          getLearnResources(),
          getProjects() // Fetch projects
        ]);
        
        const allItems: Item[] = [
          ...posts.map(p => ({ ...p, type: 'post' as const })),
          ...learnResources.map(l => ({ ...l, type: 'learn' as const })),
          ...projects.map(p => ({ ...p, type: 'project' as const })) // Map projects
        ].sort((a, b) => {
          const dateA = a.date;
          const dateB = b.date;
          return new Date(dateB).getTime() - new Date(dateA).getTime();
        });

        setItems(allItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const LoadingSpinner = () => (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-24 w-full rounded-md" />
      ))}
    </div>
  );

  const renderItem = (item: Item, index: number) => (
    <motion.div
      key={`${item.type}-${index}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
    >
      <Link 
        to={item.type === 'project' ? item.url : `/${item.type}/${item.slug}`}
        target={item.type === 'project' && item.url.startsWith('http') ? '_blank' : '_self'}
        className="block"
      >
        <Card className="hover:bg-muted/50 transition-colors">
          <CardHeader className="p-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-1">
              <Badge 
                variant="outline" 
                className="text-xs font-mono font-normal px-2 py-0.5 border-border/50 bg-muted/20 text-foreground/80 hover:bg-muted/40 transition-colors"
              >
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </Badge>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 mr-1" />
                {format(new Date(item.date), 'MMM d, yyyy')}
              </span>
            </div>
            <CardTitle className="text-lg hover:text-primary transition-colors flex items-start gap-2">
              {item.type === 'post' ? (
                <FileText className="w-4 h-4 flex-shrink-0 mt-1.5 text-muted-foreground" />
              ) : item.type === 'learn' ? (
                <BookOpen className="w-4 h-4 flex-shrink-0 mt-1.5 text-muted-foreground" />
              ) : (
                <FolderGit2 className="w-4 h-4 flex-shrink-0 mt-1.5 text-muted-foreground" />
              )}
              {item.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {item.description}
            </p>
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {item.tags.slice(0, 3).map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="text-xs font-mono font-normal px-2 py-0.5 border-border/50 bg-muted/20 text-foreground/80 hover:bg-muted/40 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardHeader>
        </Card>
      </Link>
    </motion.div>
  );

  const filteredItems = (type: 'all' | 'post' | 'learn' | 'project') => {
    if (type === 'all') return items;
    return items.filter(item => item.type === type);
  };

  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Archive</h1>
        <p className="text-muted-foreground">Complete collection of posts, resources, and projects</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="post">Posts</TabsTrigger>
          <TabsTrigger value="learn">Learn</TabsTrigger>
          <TabsTrigger value="project">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {isLoading ? <LoadingSpinner /> : filteredItems('all').map(renderItem)}
        </TabsContent>

        <TabsContent value="post" className="space-y-4">
          {isLoading ? <LoadingSpinner /> : filteredItems('post').map(renderItem)}
        </TabsContent>

        <TabsContent value="learn" className="space-y-4">
          {isLoading ? <LoadingSpinner /> : filteredItems('learn').map(renderItem)}
        </TabsContent>

        <TabsContent value="project" className="space-y-4">
          {isLoading ? <LoadingSpinner /> : filteredItems('project').map(renderItem)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Archive;

