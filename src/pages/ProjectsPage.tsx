import ProjectsShowcase from "@/components/ProjectsShowcase";

const ProjectsPage = () => {
  return (
    <section className="py-24 px-6 relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-muted-foreground">My</span> Projects
          </h2>
          <p className="text-xl text-muted-foreground font-mono text-center">
            <span className="text-accent">//</span> Some things I've built
          </p>
        </div>
        
        <ProjectsShowcase />
      </div>
    </section>
  );
};

export default ProjectsPage;
