import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getPosts } from "@/lib/posts";
import { getLearnResources } from "@/lib/learn";
import { PROJECTS_DATA } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, FileText, BookOpen, FolderGit2, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import type { Post } from "@/lib/posts";
import type { LearnResource } from "@/lib/learn";

const Archive = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [learnResources, setLearnResources] = useState<LearnResource[]>([]);
  const [loading, setLoading] = useState({
    posts: true,
    learn: true,
    projects: true
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch posts
        const postsData = await getPosts();
        setPosts(postsData);
        setLoading(prev => ({ ...prev, posts: false }));

        // Fetch learn resources
        const learnData = await getLearnResources();
        setLearnResources(learnData);
        setLoading(prev => ({ ...prev, learn: false }));

        // Projects are static, no need to fetch
        setLoading(prev => ({ ...prev, projects: false }));
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading({ posts: false, learn: false, projects: false });
      }
    };

    fetchData();
  }, []);

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-12">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
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
            {loading.posts || loading.learn ? (
              <LoadingSpinner />
            ) : [...posts.map(p => ({ ...p, type: 'post' as const })), 
                ...learnResources.map(l => ({ ...l, type: 'learn' as const }))
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
            {loading.posts ? (
              <LoadingSpinner />
            ) : posts.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">No posts found.</p>
            ) : (
              posts.map((post, index) => (
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
              ))
            )}
          </TabsContent>

          <TabsContent value="learn" className="space-y-4">
            {loading.learn ? (
              <LoadingSpinner />
            ) : learnResources.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">No learning resources found.</p>
            ) : (
              learnResources.map((resource, index) => (
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
              ))
            )}
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            {loading.projects ? (
              <LoadingSpinner />
            ) : PROJECTS_DATA.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">No projects found.</p>
            ) : (
              PROJECTS_DATA.map((project, index) => (
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
              ))
            )}
          </TabsContent>

      </Tabs>
    </div>
  </div>
);
};

export default Archive;
