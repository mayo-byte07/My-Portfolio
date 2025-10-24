import { Card } from "@/components/ui/card";
import { Code2, Database, Cpu, Zap, Terminal, GitBranch } from "lucide-react";

const CodeAbout = () => {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Wizard",
      description: "React, TypeScript, Next.js",
      color: "text-primary",
      borderColor: "border-primary/50"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Architect",
      description: "Node.js, PostgreSQL, Redis",
      color: "text-secondary",
      borderColor: "border-secondary/50"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "System Designer",
      description: "Scalable architecture & APIs",
      color: "text-accent",
      borderColor: "border-accent/50"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "DevOps Enthusiast",
      description: "Docker, CI/CD, AWS",
      color: "text-primary",
      borderColor: "border-primary/50"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-16 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold font-mono">
              <span className="text-secondary">{'<'}</span>
              About
              <span className="text-secondary">{' />'}</span>
            </h2>
          </div>
          <div className="code-block max-w-2xl">
            <p className="text-muted-foreground">
              <span className="text-secondary">FUNCTION</span>{" "}
              <span className="text-foreground">buildAwesomeStuff</span>
              <span className="text-accent">() {'{'}</span>
            </p>
            <p className="text-muted-foreground pl-4">
              <span className="text-secondary">return</span>{" "}
              <span className="text-primary">"Passionate about creating elegant solutions to complex problems. 2+ years turning ideas into reality."</span>
              <span className="text-accent">;</span>
            </p>
            <p className="text-muted-foreground">
              <span className="text-accent">{'}'}</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className={`p-8 bg-card/30 backdrop-blur border-2 ${skill.borderColor} hover:bg-card/50 transition-all duration-300 hover:shadow-glow group relative overflow-hidden`}
            >
              {/* Animated corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 ${skill.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
              
              <div className={`mb-4 ${skill.color} group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 font-mono">{skill.title}</h3>
              <p className="text-muted-foreground font-mono text-sm">
                <span className="text-accent">//</span> {skill.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Code snippet decoration */}
        <div className="mt-12 code-block max-w-md mx-auto text-center">
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-secondary">console</span>
            <span className="text-accent">.</span>
            <span className="text-foreground">log</span>
            <span className="text-accent">(</span>
            <span className="text-primary">"Let's build something amazing together! 🚀"</span>
            <span className="text-accent">);</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodeAbout;
