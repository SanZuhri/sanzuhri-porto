import { motion } from "framer-motion";
import { useParams, Navigate, Link } from "react-router-dom";
import { getLearnResources } from "@/lib/learn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import type { LearnResource } from "@/lib/learn";
import { TableOfContents } from "@/components/TableOfContents";

const LearnDetail = () => {
  const { slug } = useParams();
  const [resource, setResource] = useState<LearnResource | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const resources = await getLearnResources();
        const foundResource = resources.find((r) => r.slug === slug);
        setResource(foundResource);
      } catch (error) {
        console.error('Error fetching resource:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResource();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>; // Add a proper loading state
  }

  if (!resource) {
    return <Navigate to="/learn" replace />;
  }

  const MDXContent = resource.content;

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
              <Link to="/learn">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to learning resources
              </Link>
            </Button>

            <div className="lg:grid lg:grid-cols-[1fr_250px] lg:gap-12">
              {/* Main Content */}
              <div className="min-w-0 max-w-3xl">
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

                <article className="mdx-content prose prose-base md:prose-lg dark:prose-invert max-w-none mb-12">
                  <MDXContent />
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

export default LearnDetail;
