import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, FolderOpen, FileText, Mail, Menu, X, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: User, label: "About", path: "/about" },
    { icon: FolderOpen, label: "Projects", path: "/projects" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  const handleNavClick = (item: any) => {
    // Handle route navigation
    navigate(item.path);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/10 backdrop-blur-xl backdrop-saturate-150 border border-primary/30 shadow-glow"
          : "bg-primary/5 backdrop-blur-lg backdrop-saturate-120 border border-primary/20"
      } rounded-lg px-4 py-3 sm:px-6 sm:py-3`}
      style={{
        WebkitBackdropFilter: isScrolled 
          ? 'blur(20px) saturate(180%)' 
          : 'blur(16px) saturate(120%)',
        backdropFilter: isScrolled 
          ? 'blur(20px) saturate(180%)' 
          : 'blur(16px) saturate(120%)',
        backgroundColor: isScrolled 
          ? 'hsla(142 76% 36% / 0.08)' 
          : 'hsla(142 76% 36% / 0.05)',
        boxShadow: isScrolled
          ? '0 8px 32px hsla(142 76% 36% / 0.2), 0 2px 8px hsla(142 76% 36% / 0.15), inset 0 1px 0 hsla(142 76% 36% / 0.3), 0 0 60px hsla(142 76% 36% / 0.4)'
          : '0 4px 16px hsla(142 76% 36% / 0.15), 0 1px 4px hsla(142 76% 36% / 0.1), inset 0 1px 0 hsla(142 76% 36% / 0.2)'
      }}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Button
              key={item.label}
              variant={isActive ? "default" : "ghost"}
              size="sm"
              className={`font-mono text-xs sm:text-sm transition-all duration-300 rounded-full ${
                isActive
                  ? "bg-primary text-primary-foreground border border-primary/50 shadow-glow"
                  : "text-foreground hover:text-primary hover:bg-primary/10 border border-transparent"
              }`}
              onClick={() => handleNavClick(item)}
            >
              <Icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">{item.label}</span>
            </Button>
          );
        })}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          className="text-foreground hover:text-primary hover:bg-primary/10 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {isOpen && (
          <div 
            className="absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-glow min-w-[200px] p-2"
            style={{
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              backgroundColor: 'hsla(142 76% 36% / 0.08)',
              border: '1px solid hsla(142 76% 36% / 0.3)',
              boxShadow: '0 8px 32px hsla(142 76% 36% / 0.2), 0 2px 8px hsla(142 76% 36% / 0.15), inset 0 1px 0 hsla(142 76% 36% / 0.3), 0 0 60px hsla(142 76% 36% / 0.4)'
            }}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.label}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`w-full justify-start font-mono text-sm transition-all duration-300 rounded-lg ${
                    isActive
                      ? "bg-primary text-primary-foreground border border-primary/50"
                      : "text-foreground hover:text-primary hover:bg-primary/10 border border-transparent"
                  }`}
                  onClick={() => handleNavClick(item)}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default FloatingNav;
