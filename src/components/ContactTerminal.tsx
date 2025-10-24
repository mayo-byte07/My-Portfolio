import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react";

const ContactTerminal = () => {
  const socialLinks = [
    {
      name: "email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:piyushsinghdhanwal@gmail.com",
      handle: "piyushsinghdhanwal@gmail.com",
      color: "text-primary"
    },
    {
      name: "github",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      handle: "@mayo-byte07",
      color: "text-secondary"
    },
    {
      name: "linkedin",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/mayeonng ",
      handle: "mayeonng",
      color: "text-accent"
    },
    {
      name: "twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/mayocodes",
      handle: "@mayocodes",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-terminal relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="mb-16 animate-slide-up text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-muted-foreground">await</span>{" "}
            <span className="text-primary">getInTouch</span>
            <span className="text-accent">()</span>
          </h2>
          <div className="code-block max-w-2xl mx-auto mt-6">
            <p className="text-muted-foreground font-mono text-sm text-left">
              <span className="text-secondary">/*</span>
            </p>
            <p className="text-muted-foreground font-mono text-sm text-left pl-2">
              * Got a project idea? Want to collaborate?
            </p>
            <p className="text-muted-foreground font-mono text-sm text-left pl-2">
              * Or just want to talk tech over coffee?
            </p>
            <p className="text-muted-foreground font-mono text-sm text-left pl-2">
              * I'm always open to new opportunities! 
            </p>
            <p className="text-muted-foreground font-mono text-sm text-left">
              <span className="text-secondary">*/</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {socialLinks.map((link, idx) => (
            <Card 
              key={idx}
              className="p-6 bg-card/30 backdrop-blur border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <a 
                href={link.href}
                target={link.name !== "email" ? "_blank" : undefined}
                rel={link.name !== "email" ? "noopener noreferrer" : undefined}
                className="block"
              >
                <div className="flex items-center gap-4">
                  <div className={`${link.color} group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-300`}>
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-sm text-muted-foreground mb-1">
                      <span className="text-accent">const</span> {link.name} <span className="text-accent">=</span>
                    </p>
                    <p className={`font-mono text-sm ${link.color} group-hover:text-glow transition-all`}>
                      "{link.handle}"
                    </p>
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-glow transition-all duration-300 font-mono"
            asChild
          >
            <a href="mailto:piyushsinghdhanwal@gmail.com">
              <Send className="w-5 h-5 mr-2" />
              send_message();
            </a>
          </Button>

          <div className="code-block inline-block">
            <p className="text-muted-foreground font-mono text-sm">
              <span className="text-secondary">console</span>
              <span className="text-accent">.</span>
              <span className="text-foreground">log</span>
              <span className="text-accent">(</span>
              <span className="text-primary">"Looking forward to hearing from you! 👋"</span>
              <span className="text-accent">);</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTerminal;
