import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ProfileSection() {
  return (
    <section className="py-32 md:py-40">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl font-medium mb-6 text-foreground tracking-tight">
            Full-Stack Developer & Designer
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            I craft beautiful, functional digital experiences with modern web technologies. 
            Specialized in React, TypeScript, and building scalable applications.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="ghost" size="sm" className="text-sm hover:bg-muted">
              <Link to="/contact">Get in touch</Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-sm hover:bg-muted">
              <Link to="/post">Read my blog</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
