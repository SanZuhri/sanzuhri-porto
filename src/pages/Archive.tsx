import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { POSTS_DATA } from "@/lib/posts";
import { LEARN_DATA } from "@/lib/learn";
import { PROJECTS_DATA } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, FileText, BookOpen, FolderGit2 } from "lucide-react";
import { format } from "date-fns";

const Archive = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Archive</h1>
          <p className="text-xl text-muted-foreground">
            Complete collection of posts, resources, and projects
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="learn">Learn</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {[
              ...POSTS_DATA.map(p => ({ ...p, type: 'post' as const })), 
              ...LEARN_DATA.map(l => ({ ...l, type: 'learn' as const }))
            ].sort((a, b) => 
              new Date(b.date).getTime() - new Date(a.date).getTime()
            ).map((item, index) => (
              <motion.div
                key={`all-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={item.type === 'post' ? `/post/${item.slug}` : `/learn/${item.slug}`}>
                  <Card className="hover:shadow-md transition-all hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <Badge variant="outline">
                          {'category' in item ? item.category : 'Blog'}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(item.date), "MMM d, yyyy")}
                        </div>
                      </div>
                      <CardTitle className="hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="posts" className="space-y-4">
            {POSTS_DATA.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={`/post/${post.slug}`}>
                  <Card className="hover:shadow-md transition-all hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <FileText className="w-4 h-4" />
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(post.date), "MMM d, yyyy")}
                        </div>
                      </div>
                      <CardTitle className="hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription>{post.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="learn" className="space-y-4">
            {LEARN_DATA.map((resource, index) => (
              <motion.div
                key={resource.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={`/learn/${resource.slug}`}>
                  <Card className="hover:shadow-md transition-all hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <BookOpen className="w-4 h-4" />
                        <Badge variant="outline">{resource.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(resource.date), "MMM d, yyyy")}
                        </div>
                      </div>
                      <CardTitle className="hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            {PROJECTS_DATA.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <FolderGit2 className="w-4 h-4" />
                      {project.featured && <Badge>Featured</Badge>}
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Archive;
