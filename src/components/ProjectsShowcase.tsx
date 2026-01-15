import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderGit2, X, Maximize2, Code2, Rocket, Star, ArrowRight } from "lucide-react";

const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Lstatic",
      description: "Learning Module System (LMS)",
      tech: ["React","Node.js","HTML","CSS","JavaScript"],
      github: "https://github.com/mayo-byte07/learning-module-system",
      demo: "#",
      status: "In Progress",
      image: "/Screenshot 2026-01-13 231512.png",
      featured: true,
      category: "Startup"
    },
    {
      title: "Healthetico",
      description: "Enterprise-grade precision health intelligence platform with multi-modal AI. Real-time biometric synthesis, NLP-powered symptom analysis, risk vector fusion, and HIPAA-compliant security.",
      tech: ["React","Node.js","Vector DB","AI"],
      github: "https://github.com/mayo-byte07/SU-NATIONAL-HACKATHON",
      demo: "https://su-national-hackathon.vercel.app/",
      status: "Production",
      image: "/Screenshot 2026-01-14 124453.png",
      featured: true,
      category: "AI/Healthcare"
    },
    {
      title: "LOGIN PAGE",
      description: "Responsive login interface with real-time input validation and secure password handling. Features user-friendly design, instant error feedback, and clean form UX for smooth integration.",
      tech: ["HTML","CSS","JavaScript"],
      github: "https://github.com/mayo-byte07/LOGIN-PAGE",
      demo: "https://mayo-byte07.github.io/LOGIN-PAGE/",
      status: "Live",
      image: "/Screenshot 2026-01-14 124941.png",
      featured: false,
      category: "Frontend"
    },
    {
      title: "IoT Alcohol Detection",
      description: "A smart IoT-based Alcohol Detection System using Arduino Uno and an MQ-3 sensor. Features a real-time dual-alert system (LED & Buzzer) to detect ethanol levels and enhance safety.",
      tech: ["Arduino", "MQ-3", "C++", "IoT"],
      github: "https://github.com/mayo-byte07/IOT-PROJECT-ALCHOL-DETECTION-SYSTEM",
      status: "Completed",
      image: "/Screenshot 2026-01-14 125104.png",
      featured: false,
      category: "IoT/Hardware"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
      case "Live":
        return "text-emerald-400 border-emerald-400 bg-emerald-400/10";
      case "Beta":
        return "text-yellow-400 border-yellow-400 bg-yellow-400/10";
      case "Completed":
        return "text-blue-400 border-blue-400 bg-blue-400/10";
      default:
        return "text-gray-400 border-gray-400 bg-gray-400/10";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/Healthcare":
        return "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30";
      case "Frontend":
        return "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30";
      case "IoT/Hardware":
        return "bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500/30";
      default:
        return "bg-gradient-to-r from-gray-500/20 to-gray-600/20 border-gray-500/30";
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-4 mb-6 px-6 py-3 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <FolderGit2 className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-6xl font-bold font-mono bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects<span className="text-primary">[]</span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground font-mono max-w-2xl mx-auto">
            <span className="text-accent">//</span> Innovative solutions that push boundaries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card 
                className={`
                  relative overflow-hidden border-2 transition-all duration-500 transform-gpu
                  ${hoveredProject === index ? 'scale-105 shadow-2xl border-primary/60' : 'border-primary/20'}
                  ${project.featured ? 'ring-2 ring-primary/30' : ''}
                  bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl
                `}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1 rounded-full border text-xs font-mono ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold font-mono text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <span className={`text-xs font-mono px-2 py-1 rounded-full border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 3).map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs font-mono bg-accent/10 text-accent rounded border border-accent/30">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 h-10 border-primary text-primary hover:bg-primary/10 font-mono text-xs"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                    
                    {project.demo && (
                      <Button 
                        size="sm"
                        className="flex-1 h-10 bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-xs"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            
            <div 
              className="relative w-full max-w-4xl bg-gradient-to-br from-background via-background/95 to-primary/5 border-2 border-primary/30 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-black/70 transition-all duration-200"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Project Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl md:text-4xl font-bold font-mono text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    {selectedProject.featured && (
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-sm font-bold">
                        <Star className="w-4 h-4 fill-current" />
                        Featured
                      </div>
                    )}
                    <span className={`text-sm font-mono px-3 py-1 rounded-full border ${getStatusColor(selectedProject.status)}`}>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Description */}
                  <div>
                    <h4 className="text-lg font-bold font-mono text-primary mb-4">About Project</h4>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    <h4 className="text-lg font-bold font-mono text-primary mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-2 text-sm font-mono bg-primary/10 text-primary rounded-lg border border-primary/30 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Actions */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold font-mono text-primary mb-4">Quick Actions</h4>
                      <div className="space-y-4">
                        <Button 
                          variant="outline" 
                          className="w-full h-14 border-primary text-primary hover:bg-primary/10 font-mono text-base group"
                          asChild
                        >
                          <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                            View Source Code
                          </a>
                        </Button>
                        
                        {selectedProject.demo && (
                          <Button 
                            className="w-full h-14 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-mono text-base group shadow-lg"
                            asChild
                          >
                            <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                              <Rocket className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                              View Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Code2 className="w-4 h-4 text-primary" />
                        <span className="font-mono">Category:</span>
                        <span className={`px-2 py-1 rounded text-xs font-mono ${getCategoryColor(selectedProject.category)}`}>
                          {selectedProject.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center animate-slide-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">
              More projects in development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
