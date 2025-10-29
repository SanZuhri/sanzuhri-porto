import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-4 pb-4">
                <div className="group relative">
                  <div className="flex items-center justify-between space-x-3 px-4 py-3 bg-muted/5 rounded-lg border border-muted/20 group-hover:border-primary/30 transition-colors">
                    <span className="font-medium text-sm text-foreground/90 tracking-tight truncate">
                      zuhrialghifaryikhsan@gmail.com
                    </span>
                    <a
                      href="mailto:zuhrialghifaryikhsan@gmail.com"
                      className="shrink-0 p-1.5 -mr-1.5 text-muted-foreground hover:text-primary transition-colors"
                      title="Send email"
                      aria-label="Send email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground text-center">
                    I typically respond within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://github.com/SanZuhri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/san_zuhri?igsh=MTVjY2F0M2xzNnljaw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/ikhsan-zuhri-al-ghifary-2ab078325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
