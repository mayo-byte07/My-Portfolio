import TerminalHero from "@/components/TerminalHero";
import CodeAbout from "@/components/CodeAbout";
import TechStackVisual from "@/components/TechStackVisual";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ContactTerminal from "@/components/ContactTerminal";
import CodeFooter from "@/components/CodeFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TerminalHero />
      <CodeAbout />
      <TechStackVisual />
      <ProjectsShowcase />
      <ContactTerminal />
      <CodeFooter />
    </div>
  );
};

export default Index;
