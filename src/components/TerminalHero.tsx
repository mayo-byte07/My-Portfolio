import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Terminal, Code2, Coffee, Download, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TerminalHero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Full Stack Developer";
  const [showCursor, setShowCursor] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    // Create a link element to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Update this path to your actual resume file
    link.download = 'Piyush-Singh-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Matrix-style background effect */}
      <div className="absolute inset-0 bg-gradient-terminal" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Enhanced grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary/30 rounded-full animate-pulse delay-75" />
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse delay-150" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Terminal Window */}
          <div className="bg-card/80 backdrop-blur-lg border-2 border-primary/40 rounded-xl shadow-2xl shadow-primary/20 overflow-hidden animate-fade-in hover:shadow-glow transition-all duration-500">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary/15 to-secondary/15 border-b border-primary/40">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive shadow-lg shadow-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/50" />
                <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-sm font-mono text-foreground/80">piyush@developer:~$</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 sm:p-8 md:p-10 font-mono space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground mb-6">
                <span className="text-primary text-lg font-bold">$</span>
                <span className="text-base sm:text-lg">cat introduction.txt</span>
              </div>

              <div className="space-y-6 pl-4 sm:pl-1">
                <div className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap mb-4">
                    <span className="text-secondary">const</span>{" "}
                    <span className="text-foreground">developer</span>{" "}
                    <span className="text-accent">=</span>{" "}
                    <span className="text-primary text-glow">"Piyush Singh"</span>
                    <span className="text-accent">;</span>
                  </p>
                  
                  <p className="text-lg sm:text-xl md:text-2xl mb-6">
                    <span className="text-secondary">let</span>{" "}
                    <span className="text-foreground">passion</span>{" "}
                    <span className="text-accent">=</span>{" "}
                    <span className="text-primary text-glow">"{displayedText}"</span>
                    <span className={`inline-block w-2 h-5 sm:h-6 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                    <span className="text-accent">;</span>
                  </p>
                </div>

                <div className="space-y-3 text-sm sm:text-base pt-4">
                  <p className="text-muted-foreground">
                    <span className="text-secondary">//</span> Crafting digital experiences with clean code & innovation 💡
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-secondary">//</span> Transforming ideas into scalable applications 🚀
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-secondary">//</span> Building the future, one line at a time �
                  </p>
                </div>

                <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-6">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-glow transition-all duration-300 font-mono text-sm sm:text-base min-w-[140px] hover:scale-105"
                    onClick={() => navigate("/about")}
                  >
                    <User className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">./about-me.sh</span>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-secondary text-secondary hover:bg-secondary/20 hover:border-secondary/60 shadow-lg shadow-secondary/20 hover:shadow-glow font-mono text-sm sm:text-base min-w-[140px] hover:scale-105 transition-all duration-300"
                    onClick={() => navigate("/contact")}
                  >
                    <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">./contact.sh</span>
                  
                  </Button>
              </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground pt-6">
                <span className="text-primary">$</span>
                <span>ls social_links/</span>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 pl-2 sm:pl-4">
                <a 
                  href="https://github.com/mayo-byte07" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2 text-foreground hover:text-primary transition-colors group"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-mono">github</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/mayeonng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2 text-foreground hover:text-secondary transition-colors group"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-mono">linkedin</span>
                </a>
                <a 
                  href="mailto:piyushsinghdhanwal@gmail.com"
                  className="flex items-center gap-1 sm:gap-2 text-foreground hover:text-accent transition-colors group"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-mono">email</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground pt-4">
                <span className="text-primary cursor">▊</span>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Bar */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-xl p-6 hover:border-primary/60 transition-all duration-300 hover:shadow-glow hover:scale-105">
              <div className="text-3xl font-bold text-primary text-glow">2+</div>
              <div className="text-sm text-muted-foreground font-mono">Years Experience</div>
            </div>
            <div className="bg-card/60 backdrop-blur-sm border border-secondary/30 rounded-xl p-6 hover:border-secondary/60 transition-all duration-300 hover:shadow-glow hover:scale-105">
              <div className="text-3xl font-bold text-secondary text-glow">25+</div>
              <div className="text-sm text-muted-foreground font-mono">Projects</div>
            </div>
            <div className="bg-card/60 backdrop-blur-sm border border-accent/30 rounded-xl p-6 hover:border-accent/60 transition-all duration-300 hover:shadow-glow hover:scale-105">
              <div className="text-3xl font-bold text-accent text-glow flex items-center justify-center gap-2">
                ∞<Coffee className="w-5 h-5" />
              </div>
              <div className="text-sm text-muted-foreground font-mono">Coffee Cups</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalHero;
