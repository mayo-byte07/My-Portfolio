import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const TechStackVisual = () => {
  const [selectedTech, setSelectedTech] = useState<{ name: string; description: string; } | null>(null);

  const techCategories = [
    {
      name: "Frontend",
      color: "primary",
      techs: [
        { name: "React", description: "A JavaScript library for building user interfaces, allowing developers to create reusable UI components." },
        { name: "TypeScript", description: "A superset of JavaScript that adds static types, enabling better tooling and catching errors during development." },
        { name: "Next.js", description: "A React framework for building server-side rendered and statically generated web applications." },
        { name: "Tailwind", description: "A utility-first CSS framework for rapidly building custom user interfaces without writing custom CSS." },
        { name: "Vue.js", description: "A progressive JavaScript framework for building user interfaces, known for its simplicity and ease of integration." },
      ]
    },
    {
      name: "Backend",
      color: "secondary",
      techs: [
        { name: "Node.js", description: "A JavaScript runtime built on Chrome's V8 engine, used for building fast and scalable server-side applications." },
        { name: "Express", description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications." },
        { name: "PostgreSQL", description: "A powerful, open-source object-relational database system known for its reliability, feature robustness, and performance." },
        { name: "MongoDB", description: "A NoSQL database that stores data in flexible, JSON-like documents, making it easy to work with unstructured data." },
        { name: "GraphQL", description: "A query language for APIs that allows clients to request exactly the data they need, making APIs more efficient and flexible." },
      ]
    },
    {
      name: "DevOps",
      color: "accent",
      techs: [
        { name: "Docker", description: "A platform for developing, shipping, and running applications in containers, ensuring consistency across different environments." },
        { name: "AWS", description: "Amazon Web Services, a comprehensive cloud computing platform offering a wide range of services for computing, storage, and networking." },
        { name: "CI/CD", description: "Continuous Integration and Continuous Delivery/Deployment, a set of practices for automating the software development and release process." },
        { name: "Git", description: "A distributed version control system for tracking changes in source code during software development." },
        { name: "Vercel", description: "A cloud platform for static sites and serverless functions that enables developers to build and deploy web applications with ease." },
      ]
    },
    {
      name: "Learning",
      color: "muted",
      techs: [
        { name: "Rust", description: "A systems programming language focused on safety, speed, and concurrency, designed to prevent common programming errors." },
        { name: "Kubernetes", description: "An open-source container orchestration system for automating the deployment, scaling, and management of containerized applications." },
        { name: "WebAssembly", description: "A binary instruction format for a stack-based virtual machine, enabling high-performance applications on web pages." },
        { name: "Three.js", description: "A cross-browser JavaScript library and API used to create and display animated 3D computer graphics in a web browser." },
      ]
    },
    {
      name: "Video Editor",
      color: "tertiary",
      techs: [
        { name: "DaVinci Resolve", description: "A professional non-linear video editing application that combines editing, color correction, visual effects, and audio post-production." },
        { name: "CapCut", description: "A free, all-in-one video editing app with powerful features, popular for creating short-form videos for social media." },
        { name: "Premier Pro", description: "Adobe Premiere Pro is a timeline-based video editing software application from Adobe Inc." },
        { name: "After Effects", description: "Adobe After Effects is a digital visual effects, motion graphics, and compositing application developed by Adobe Inc." },
      ]
    },
    {
      name: "Graphic Designer",
      color: "quaternary",
      techs: [
        { name: "Canva", description: "A graphic design platform used to create social media graphics, presentations, posters, documents and other visual content." },
        { name: "Figma", description: "A collaborative interface design tool that allows teams to design, prototype, and gather feedback all in one place." },
        { name: "UI/UX", description: "User Interface (UI) and User Experience (UX) design are the processes of enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction between the user and a product." },
        { name: "Adobe Photoshop", description: "An image editing and photo retouching software for use on Windows or MacOS computers, used to create, enhance, or otherwise edit images, artwork, and illustrations." },
      ]
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
      case "tertiary":
        return "border-tertiary/50 text-tertiary hover:bg-tertiary/10 hover:border-tertiary";
      case "quaternary":
        return "border-quaternary/50 text-quaternary hover:bg-quaternary/10 hover:border-quaternary";
      default:
        return "border-muted-foreground/30 text-muted-foreground hover:bg-muted hover:border-muted-foreground";
    }
  };

  return (
    <>
      <section className="py-24 px-6 bg-gradient-terminal relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
              <span className="text-muted-foreground">{'{}'}</span>
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
                      className={`px-4 py-2 text-sm font-mono bg-card/30 backdrop-blur border-2 ${getColorClasses(category.color)} transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_25px_currentColor]`}
                      onClick={() => setSelectedTech(tech)}
                    >
                      <span className="text-muted-foreground mr-2">$</span>
                      {tech.name}
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

      <Dialog open={!!selectedTech} onOpenChange={(isOpen) => !isOpen && setSelectedTech(null)}>
        <DialogContent className="bg-card border-primary/30 text-foreground font-mono">
          <DialogHeader>
            <DialogTitle className="text-primary text-2xl">{selectedTech?.name}</DialogTitle>
            <DialogDescription className="text-muted-foreground pt-4">
              {selectedTech?.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TechStackVisual;
