import { motion } from "framer-motion";

interface PageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const PageLayout = ({ title, description, children }: PageLayoutProps) => {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        {children}
      </motion.div>
    </div>
  );
};
