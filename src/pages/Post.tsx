import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getPosts, type Post } from "@/lib/posts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Post = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">Blog</h1>
          <p className="text-muted-foreground">Thoughts on development, design, and technology</p>
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
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-muted-foreground">Thoughts on development, design, and technology</p>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={`/post/${post.slug}`}>
              <Card className="hover:bg-muted/50 transition-colors">
                <CardHeader className="p-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {format(new Date(post.date), "MMM d, yyyy")}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {post.readingTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {post.tags.slice(0, 3).map((tag) => (
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

export default Post;
