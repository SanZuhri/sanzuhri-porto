import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";
import Learn from "./pages/Learn";
import LearnDetail from "./pages/LearnDetail";
import Lab from "./pages/Lab";
import LabDetail from "./pages/LabDetail";
import Archive from "./pages/Archive";
import Personal from "./pages/Personal";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/post" element={<Post />} />
            <Route path="/post/:slug" element={<PostDetail />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/:slug" element={<LearnDetail />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/lab/:slug" element={<LabDetail />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
