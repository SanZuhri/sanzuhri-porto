import { motion } from "framer-motion";
import { useParams, Navigate, Link } from "react-router-dom";
import { getPosts } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import type { Post } from "@/lib/posts";
import { TableOfContents } from "@/components/TableOfContents";

const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await getPosts();
        const foundPost = posts.find((p) => p.slug === slug);
        setPost(foundPost);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>; // Add a proper loading state
  }

  if (!post) {
    return <Navigate to="/post" replace />;
  }

  const MDXContent = post.content;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/post">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to posts
              </Link>
            </Button>

            <div className="lg:grid lg:grid-cols-[1fr_250px] lg:gap-12">
              {/* Main Content */}
              <div className="min-w-0 max-w-3xl">
                <div className="mb-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {format(new Date(post.date), "MMMM d, yyyy")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readingTime}
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                  <p className="text-xl text-muted-foreground mb-6">{post.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs font-mono font-normal px-2 py-0.5 border-border/50 bg-muted/20 text-foreground/80 hover:bg-muted/40 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <article className="mdx-content prose prose-base md:prose-lg dark:prose-invert max-w-none">
                  <MDXContent />
                </article>
              </div>

              {/* Table of Contents Sidebar */}
              <aside className="hidden lg:block">
                <TableOfContents />
              </aside>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
