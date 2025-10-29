import { ProfileSection } from "@/components/ProfileSection";
import { ActivityWidget } from "@/components/ActivityWidget";
import { RepoWidget } from "@/components/RepoWidget";
import { ProjectSection } from "@/components/ProjectSection";
import { ToolsExpertise } from "@/components/ToolsExpertise";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ProfileSection />
      
      <div className="container mx-auto px-4 max-w-2xl mb-24 space-y-12">
        <ActivityWidget />
        <RepoWidget />
      </div>
      
      <div className="space-y-24">
        <ProjectSection />
        <ToolsExpertise />
      </div>
    </div>
  );
};

export default Index;
