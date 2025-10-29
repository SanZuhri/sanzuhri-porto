import { motion } from "framer-motion";
import { useParams, Navigate, Link } from "react-router-dom";
import { POSTS_DATA } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { format } from "date-fns";

const PostDetail = () => {
  const { slug } = useParams();
  const post = POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/post" replace />;
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
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
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default PostDetail;
