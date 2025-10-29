import { motion } from "framer-motion";
import { useParams, Navigate, Link } from "react-router-dom";
import { LABS_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, FlaskConical } from "lucide-react";

const LabDetail = () => {
  const { slug } = useParams();
  const lab = LABS_DATA.find((l) => l.slug === slug);

  if (!lab) {
    return <Navigate to="/lab" replace />;
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
            <Link to="/lab">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to lab
            </Link>
          </Button>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FlaskConical className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Lab Experiment</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{lab.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{lab.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {lab.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {lab.link && (
              <Button size="lg" asChild>
                <a href={lab.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Demo
                </a>
              </Button>
            )}
          </div>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">About This Experiment</h2>
              <p className="text-muted-foreground leading-relaxed">
                This is an experimental project exploring {lab.tags.join(", ")}. 
                The goal is to push boundaries and try new techniques that might not be 
                suitable for production but provide valuable learning experiences.
              </p>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Lab projects are experimental and may contain 
                  unfinished features or unconventional approaches. They represent exploration 
                  and learning rather than production-ready code.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default LabDetail;
