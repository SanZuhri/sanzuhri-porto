import { motion } from "framer-motion";
import { useParams, Navigate, Link } from "react-router-dom";
import { LEARN_DATA } from "@/lib/learn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import { format } from "date-fns";

const LearnDetail = () => {
  const { slug } = useParams();
  const resource = LEARN_DATA.find((r) => r.slug === slug);

  if (!resource) {
    return <Navigate to="/learn" replace />;
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
            <Link to="/learn">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to learning resources
            </Link>
          </Button>

          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <Badge variant="outline">{resource.category}</Badge>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {format(new Date(resource.date), "MMMM d, yyyy")}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{resource.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{resource.description}</p>

            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: resource.content.replace(/\n/g, '<br />') }} />
          </article>

          {resource.resources && resource.resources.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Additional Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {resource.resources.map((res, index) => (
                    <li key={index}>
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {res.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LearnDetail;
