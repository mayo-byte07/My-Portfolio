import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const ProjectsShowcase = () => {
  const projects = [
    {
      title: "Healthetico",
      description: "Enterprise-grade precision health intelligence platform with multi-modal AI. Real-time biometric synthesis, NLP-powered symptom analysis, risk vector fusion, and HIPAA-compliant security. Always online with 96% accuracy, supporting lightning-fast health assessments.",
      tech: ["React","Node.js","Vector Database","Edge Computing","NLP Engine","Bayesian Inference","GPT-4 Level Model"],
      github: "https://github.com/mayo-byte07/SU-NATIONAL-HACKATHON",
      demo: "https://su-national-hackathon.vercel.app/",
      status: "Production"
    },
  {
  title: "LOGIN PAGE",
  description: "Responsive login interface with real-time input validation and secure password handling. Features user-friendly design, instant error feedback, and clean form UX. Built for smooth authentication integration.",
  tech: ["HTML","CSS","JavaScript"],
  github: "https://github.com/mayo-byte07/LOGIN-PAGE",
  demo: "https://mayo-byte07.github.io/LOGIN-PAGE/",
  status: "Live"
    },

    {
      title: "IoT Alcohol Detection",
      description: "A smart IoT-based Alcohol Detection System using Arduino Uno and an MQ-3 sensor. Features a real-time dual-alert system (LED & Buzzer) to detect ethanol levels and enhance safety in driving or industrial environments.",
      tech: ["Arduino", "MQ-3 Sensor", "C++", "Buzzer", "LED"],
      github: "https://github.com/mayo-byte07/IOT-PROJECT-ALCHOL-DETECTION-SYSTEM",
      status: "Completed"
    },
    {
      title: "More Projects Coming Soon",
      description: "WebSocket messaging platform with rooms, DMs, file sharing, and E2E encryption. Built for scale.",
      tech: ["React", "Socket.io", "Node.js", "PostgreSQL"],
      github: "#",
      demo: "#",
      status: "Beta"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
      case "Live":
        return "text-primary";
      case "Beta":
        return "text-secondary";
      case "Completed":
        return "text-accent";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-16 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <FolderGit2 className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold font-mono">
              Projects<span className="text-primary">[]</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground font-mono">
            <span className="text-accent">//</span> Some things I've built
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/30 backdrop-blur border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group relative overflow-hidden"
            >
              {/* Animated glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-all duration-500 rounded-full" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold font-mono group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className={`text-xs font-mono px-2 py-1 rounded border ${getStatusColor(project.status)} border-current`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/10 font-mono"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button 
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-glow transition-all duration-300 font-mono"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Git log style footer */}
        <div className="mt-12 code-block text-sm">
          <p className="text-muted-foreground font-mono">
            <span className="text-accent">commit</span>{" "}
            <span className="text-primary">a7f9e2b</span>
          </p>
          <p className="text-muted-foreground font-mono">
            <span className="text-secondary">Author:</span> Piyush SIngh
          </p>
          <p className="text-muted-foreground font-mono pl-4">
            More projects coming soon... Stay tuned! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
