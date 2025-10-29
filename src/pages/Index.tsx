import { ProfileSection } from "@/components/ProfileSection";
import { ActivityWidget } from "@/components/ActivityWidget";
import { RepoWidget } from "@/components/RepoWidget";
import { ProjectSection } from "@/components/ProjectSection";
import { ClientSection } from "@/components/ClientSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ProfileSection />
      
      <div className="container mx-auto px-4 mb-20">
        <div className="grid gap-6 md:grid-cols-2 mb-20">
          <ActivityWidget />
          <RepoWidget />
        </div>
      </div>
      
      <ProjectSection />
      <ClientSection />
    </div>
  );
};

export default Index;
