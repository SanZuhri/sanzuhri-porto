import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ProfileSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces" 
                  alt="Alex Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
            </div>
            <div>
              <h2 className="text-lg font-medium mb-0.5">Alex Johnson</h2>
              <p className="text-xs text-muted-foreground">Remote / Indonesia</p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-medium mb-4 text-foreground tracking-tight">
              Full-Stack Developer & Designer
            </h1>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
              I craft beautiful, functional digital experiences with modern web technologies. 
              Specialized in React, TypeScript, and building scalable applications.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button asChild variant="ghost" size="sm" className="text-xs h-8 hover:bg-muted/50">
              <Link to="/contact">Get in touch</Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-xs h-8 hover:bg-muted/50">
              <Link to="/post">Read my blog</Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-xs h-8 hover:bg-muted/50">
              <Link to="/personal">More about me</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
