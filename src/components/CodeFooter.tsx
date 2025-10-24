const CodeFooter = () => {
  return (
    <footer className="py-8 px-6 border-t-2 border-primary/20 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center font-mono">
          <p className="text-muted-foreground text-sm mb-2">
            <span className="text-accent">{'{'}</span>
            <span className="text-secondary"> Built with</span>
            <span className="text-primary"> React</span>
            <span className="text-accent"> + </span>
            <span className="text-primary">TypeScript</span>
            <span className="text-accent"> + </span>
            <span className="text-primary">Tailwind</span>
            <span className="text-accent"> + </span>
            <span className="text-secondary">☕</span>
            <span className="text-accent"> {'}'}</span>
          </p>
          <p className="text-muted-foreground text-xs">
            <span className="text-accent">//</span> © {new Date().getFullYear()} Piyush SIngh
            <span className="text-accent"> | </span>
            Deployed on <span className="text-primary">{'<Earth />'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CodeFooter;
