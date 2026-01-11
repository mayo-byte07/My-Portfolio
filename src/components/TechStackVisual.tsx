import { Badge } from "@/components/ui/badge";

const TechStackVisual = () => {
  const techCategories = [
    {
      name: "Frontend",
      color: "primary",
      techs: ["React", "TypeScript", "Next.js", "Tailwind", "Vue.js"]
    },
    {
      name: "Backend",
      color: "secondary",
      techs: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"]
    },
    {
      name: "DevOps",
      color: "accent",
      techs: ["Docker", "AWS", "CI/CD", "Git", "Vercel"]
    },
     {
      name: "Learning",
      color: "muted",
      techs: ["Rust", "Kubernetes", "WebAssembly", "Three.js"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-primary/50 text-primary hover:bg-primary/10 hover:border-primary";
      case "secondary":
        return "border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary";
      case "accent":
        return "border-accent/50 text-accent hover:bg-accent/10 hover:border-accent";
      default:
        return "border-muted-foreground/30 text-muted-foreground hover:bg-muted hover:border-muted-foreground";
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-terminal relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-muted-foreground">{'{'}</span>
            {" "}Tech Stack{" "}
            <span className="text-muted-foreground">{'}'}</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            <span className="text-accent">//</span> My digital toolbelt
          </p>
        </div>

        <div className="space-y-8">
          {techCategories.map((category, idx) => (
            <div key={idx} className="space-y-4 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex items-center gap-3">
                <span className="text-primary font-mono">[{idx + 1}]</span>
                <h3 className="text-2xl font-semibold font-mono text-foreground">
                  {category.name}
                  <span className="text-muted-foreground">:</span>
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 pl-10">
                {category.techs.map((tech, techIdx) => (
                  <Badge 
                    key={techIdx}
                    variant="outline"
                    className={`px-4 py-2 text-sm font-mono bg-card/30 backdrop-blur border-2 ${getColorClasses(category.color)} transition-all duration-300 cursor-default hover:scale-105 hover:shadow-[0_0_15px_currentColor]`}
                  >
                    <span className="text-muted-foreground mr-2">$</span>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Terminal prompt at the end */}
        <div className="mt-12 font-mono text-muted-foreground flex items-center gap-2">
          <span className="text-primary">$</span>
          <span>npm install @skills/always-learning</span>
          <span className="cursor">▊</span>
        </div>
      </div>
    </section>
  );
};

export default TechStackVisual;
