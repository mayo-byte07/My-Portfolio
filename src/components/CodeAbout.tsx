import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Code2, Database, Cpu, Zap, Terminal, GitBranch, Palette, Video } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const CodeAbout = () => {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Wizard",
      description: "React, TypeScript, Next.js",
      fullDescription: "As a Frontend Wizard, I specialize in building the part of websites and applications that users see and interact with. I use modern technologies to create responsive, intuitive, and visually appealing user interfaces.",
      color: "text-primary",
      borderColor: "border-primary/50"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Architect",
      description: "Node.js, PostgreSQL, MongoDB",
      fullDescription: "As a Backend Architect, I design and build the server-side logic, databases, and APIs that power applications. I focus on creating scalable, secure, and efficient systems that can handle complex data and business requirements.",
      color: "text-secondary",
      borderColor: "border-secondary/50"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "System Designer",
      description: "Scalable architecture & APIs",
      fullDescription: "As a System Designer, I am responsible for the high-level design of software systems. This involves defining the overall structure, components, and interfaces to ensure the system is robust, scalable, and meets all technical and business needs.",
      color: "text-accent",
      borderColor: "border-accent/50"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "DevOps Enthusiast",
      description: "Docker, CI/CD, AWS",
      fullDescription: "As a DevOps Enthusiast, I focus on bridging the gap between software development and IT operations. I use automation, continuous integration, and continuous delivery to improve the speed and reliability of software releases.",
      color: "text-quinary",
      borderColor: "border-quinary/50"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Designer",
      description: "UI/UX, Canva , Figma , Adobe Photoshop",
      fullDescription: "As a Graphic Designer, I create visual concepts to communicate ideas that inspire, inform, and captivate consumers. I work with typography, color, and images to create everything from logos and websites to advertisements and social media graphics.",
      color: "text-senary",
      borderColor: "border-senary/50"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Editor",
      description: "Premiere Pro, After Effects , CapCut , DaVinci Resolve",
      fullDescription: "As a Video Editor, I assemble recorded raw material into a finished product that's suitable for broadcasting. The material may include camera footage, dialogue, sound effects, graphics and special effects.",
      color: "text-tertiary",
      borderColor: "border-tertiary/50"
    }
  ];

  return (
    <>
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
                <span className="text-foreground">buildAWSomeStuff</span>
                <span className="text-accent">() {'{'}</span>
              </p>
              <p className="text-muted-foreground pl-4 leading-relaxed">
                <span className="text-secondary">return</span>{" "}
                <span className="text-primary">"Passionate about creating elegant solutions to complex problems.\n                  2+ years turning ideas into reality."</span>
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
                className={`p-8 bg-card/40 backdrop-blur-sm border-2 ${skill.borderColor} hover:bg-card/60 transition-all duration-300 hover:shadow-glow group relative overflow-hidden cursor-pointer hover:scale-[1.02]`}
                onClick={() => setSelectedSkill(skill)}
              >
                {/* Animated corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${skill.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
                
                <div className={`mb-4 ${skill.color} group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 font-mono group-hover:text-foreground transition-colors">{skill.title}</h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">
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

      <Dialog open={!!selectedSkill} onOpenChange={(isOpen) => !isOpen && setSelectedSkill(null)}>
        <DialogContent className="bg-card border-primary/30 text-foreground font-mono">
          <DialogHeader>
            <DialogTitle className={`text-2xl ${selectedSkill?.color}`}>{selectedSkill?.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground pt-4">
              {selectedSkill?.fullDescription}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CodeAbout;
