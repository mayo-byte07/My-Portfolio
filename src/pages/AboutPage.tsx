import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Code2, Database, Cpu, Zap, Terminal, GitBranch, Palette, Video, ArrowLeft, Github, Linkedin, Mail, Download } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const navigate = useNavigate();

  const skills = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Frontend Wizard",
      description: "React, TypeScript, Next.js, TailwindCSS",
      fullDescription: "As a Frontend Wizard, I specialize in building the part of websites and applications that users see and interact with. I use modern technologies to create responsive, intuitive, and visually appealing user interfaces.",
      color: "text-primary",
      borderColor: "border-primary/50",
      bgGradient: "from-primary/10 to-primary/5"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Backend Architect",
      description: "Node.js, PostgreSQL, MongoDB, REST APIs",
      fullDescription: "As a Backend Architect, I design and build the server-side logic, databases, and APIs that power applications. I focus on creating scalable, secure, and efficient systems that can handle complex data and business requirements.",
      color: "text-secondary",
      borderColor: "border-secondary/50",
      bgGradient: "from-secondary/10 to-secondary/5"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "System Designer",
      description: "Scalable architecture & Microservices",
      fullDescription: "As a System Designer, I am responsible for the high-level design of software systems. This involves defining the overall structure, components, and interfaces to ensure the system is robust, scalable, and meets all technical and business needs.",
      color: "text-accent",
      borderColor: "border-accent/50",
      bgGradient: "from-accent/10 to-accent/5"
    },
    {
      icon: <GitBranch className="w-10 h-10" />,
      title: "DevOps Enthusiast",
      description: "Docker, CI/CD, AWS, Git Actions",
      fullDescription: "As a DevOps Enthusiast, I focus on bridging the gap between software development and IT operations. I use automation, continuous integration, and continuous delivery to improve the speed and reliability of software releases.",
      color: "text-quinary",
      borderColor: "border-quinary/50",
      bgGradient: "from-quinary/10 to-quinary/5"
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Creative Designer",
      description: "UI/UX, Figma, Adobe Creative Suite",
      fullDescription: "As a Creative Designer, I create visual concepts to communicate ideas that inspire, inform, and captivate consumers. I work with typography, color, and images to create everything from logos and websites to advertisements and social media graphics.",
      color: "text-senary",
      borderColor: "border-senary/50",
      bgGradient: "from-senary/10 to-senary/5"
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "Video Creator",
      description: "Premiere Pro, After Effects, Motion Graphics",
      fullDescription: "As a Video Creator, I assemble recorded raw material into a finished product that's suitable for broadcasting. The material may include camera footage, dialogue, sound effects, graphics and special effects.",
      color: "text-tertiary",
      borderColor: "border-tertiary/50",
      bgGradient: "from-tertiary/10 to-tertiary/5"
    }
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Piyush-Singh-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-secondary/30 rounded-full animate-float delay-75" />
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-accent/30 rounded-full animate-float delay-150" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-tertiary/30 rounded-full animate-float delay-300" />
      </div>

      <div className="relative z-10 container mx-auto px-2 pt-24 pb-20 min-h-screen flex flex-col">
        {/* Back Button */}
        <Button 
          variant="outline" 
          className="absolute top-4 left-8 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 z-20"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in flex-2">
          <div className="flex items-center justify-center gap-10 mb-10">
            <Terminal className="w-12 h-12 text-primary animate-glow-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold font-mono">
              <span className="text-secondary">{'<'}</span>
              About
              <span className="text-secondary">{' />'}</span>
            </h1>
          </div>
          
          {/* Enhanced Code Block */}
          <div className="max-w-3xl mx-auto code-block animate-slide-up">
            <p className="text-muted-foreground text-lg">
              <span className="text-secondary">FUNCTION</span>{" "}
              <span className="text-foreground font-bold">buildAwesomeStuff</span>
              <span className="text-accent">() {'{'}</span>
            </p>
            <p className="text-muted-foreground pl-6 leading-relaxed text-base">
              <span className="text-secondary">return</span>{" "}
              <span className="text-primary">
                "Passionate about creating elegant solutions to complex problems.<br />
                &nbsp;&nbsp;2+ years turning ideas into reality with clean code & creativity."
              </span>
              <span className="text-accent">;</span>
            </p>
            <p className="text-muted-foreground">
              <span className="text-accent">{'}'}</span>
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 flex-1">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className={`p-8 bg-gradient-to-br ${skill.bgGradient} backdrop-blur-sm border-2 ${skill.borderColor} hover:bg-card/60 transition-all duration-500 hover:shadow-glow group relative overflow-hidden cursor-pointer hover:scale-[1.03] animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedSkill(skill)}
            >
              {/* Animated corner accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${skill.color} opacity-10 blur-3xl group-hover:opacity-20 transition-all duration-500 group-hover:scale-150`} />
              
              <div className={`mb-6 ${skill.color} group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_currentColor] transition-all duration-500`}>
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-mono group-hover:text-foreground transition-colors">
                {skill.title}
              </h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                <span className="text-accent">//</span> {skill.description}
              </p>
            </Card>
          ))}
        </div>
        </div>

      {/* Skill Detail Dialog */}
      <Dialog open={!!selectedSkill} onOpenChange={(isOpen) => !isOpen && setSelectedSkill(null)}>
        <DialogContent className="bg-card/90 backdrop-blur-lg border-primary/30 text-foreground font-mono max-w-2xl">
          <DialogHeader>
            <DialogTitle className={`text-3xl ${selectedSkill?.color}`}>{selectedSkill?.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground pt-6 text-base leading-relaxed">
              {selectedSkill?.fullDescription}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AboutPage;
