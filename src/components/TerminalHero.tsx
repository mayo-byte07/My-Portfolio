import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Terminal, Code2, Coffee } from "lucide-react";
import { useEffect, useState } from "react";

const TerminalHero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Full Stack Developer";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix-style background effect */}
      <div className="absolute inset-0 bg-gradient-terminal" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Terminal Window */}
          <div className="bg-card border-2 border-primary/30 rounded-lg shadow-glow overflow-hidden animate-fade-in">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-primary/10 border-b border-primary/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <div className="flex items-center gap-2 ml-4 text-muted-foreground text-sm">
                <Terminal className="w-4 h-4" />
                <span>piyush@developer:~$</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">$</span>
                <span>cat introduction.txt</span>
              </div>

              <div className="space-y-3 pl-4">
                <p className="text-2xl md:text-4xl font-bold">
                  <span className="text-secondary">const</span>{" "}
                  <span className="text-foreground">developer</span>{" "}
                  <span className="text-accent">=</span>{" "}
                  <span className="text-primary">"Piyush SIngh"</span>
                  <span className="text-accent">;</span>
                </p>
                
                <p className="text-lg md:text-xl">
                  <span className="text-secondary">let</span>{" "}
                  <span className="text-foreground">role</span>{" "}
                  <span className="text-accent">=</span>{" "}
                  <span className="text-primary">"{displayedText}"</span>
                  <span className={`inline-block w-2 h-5 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                  <span className="text-accent">;</span>
                </p>

                <div className="text-muted-foreground leading-relaxed">
                  <span className="text-secondary">//</span> Crafting digital experiences with clean code
                  <br />
                  <span className="text-secondary">//</span> Transforming coffee into scalable applications ☕
                </div>

                <div className="flex gap-3 pt-4 flex-wrap">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-glow transition-all duration-300 font-mono"
                    onClick={() => scrollToSection("projects")}
                  >
                    <Code2 className="w-4 h-4 mr-2" />
                    ./view-projects.sh
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary/10 font-mono"
                    onClick={() => scrollToSection("contact")}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    ./contact.sh
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground pt-6">
                <span className="text-primary">$</span>
                <span>ls social_links/</span>
              </div>

              <div className="flex gap-4 pl-4">
                <a 
                  href="https://github.com/mayo-byte07" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-mono">github</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/mayeonng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-mono">linkedin</span>
                </a>
                <a 
                  href="mailto:piyushsinghdhanwal@gmail.com@"
                  className="flex items-center gap-2 text-foreground hover:text-accent transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-mono">email</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground pt-4">
                <span className="text-primary cursor">▊</span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-card/50 border border-primary/20 rounded p-4 hover:border-primary/50 transition-colors">
              <div className="text-2xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground font-mono">Years</div>
            </div>
            <div className="bg-card/50 border border-secondary/20 rounded p-4 hover:border-secondary/50 transition-colors">
              <div className="text-2xl font-bold text-secondary">25+</div>
              <div className="text-sm text-muted-foreground font-mono">Projects</div>
            </div>
            <div className="bg-card/50 border border-accent/20 rounded p-4 hover:border-accent/50 transition-colors">
              <div className="text-2xl font-bold text-accent flex items-center justify-center gap-1">
                ∞<Coffee className="w-4 h-4" />
              </div>
              <div className="text-sm text-muted-foreground font-mono">Coffee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalHero;
