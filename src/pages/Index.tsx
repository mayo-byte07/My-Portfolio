import TerminalHero from "@/components/TerminalHero";
import CodeFooter from "@/components/CodeFooter";
import { Button } from "@/components/ui/button";
import { User, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <TerminalHero />
      
      <CodeFooter />
    </div>
  );
};

export default Index;
