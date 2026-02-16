import React, { useState } from "react";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import QRCodeModal from "@/components/QRCodeModal";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [activitiesDropdown, setActivitiesDropdown] = useState(false);

  const navigateTo = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <button onClick={() => navigateTo("/")} className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
              <span className="text-2xl font-black text-primary">W</span>
            </div>
          </div>
          <div className="text-left">
            <span className="font-display text-xl md:text-2xl font-black text-foreground leading-tight block">The Waves Academy</span>
            <span className="text-sm text-muted-foreground italic font-light">Do the Basics Right</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l, index) => (
            <React.Fragment key={l.href}>
              <button
                onClick={() => navigateTo(l.href)}
                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-105 transform"
              >
                {l.label}
              </button>
              {/* Insert Activities dropdown after About (index 1) */}
              {l.label === "About" && (
                <div className="relative">
                  <button
                    onClick={() => setActivitiesDropdown(!activitiesDropdown)}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-105 transform flex items-center gap-1"
                  >
                    Activities
                    <ChevronDown className={`w-4 h-4 transition-transform ${activitiesDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activitiesDropdown && (
                    <div className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 min-w-[200px]">
                      <button
                        onClick={() => {
                          navigate('/music-department');
                          setActivitiesDropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-muted transition-colors text-sm"
                      >
                        Music Department
                      </button>
                      <button
                        onClick={() => {
                          navigate('/tnpsc-coaching');
                          setActivitiesDropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-muted transition-colors text-sm"
                      >
                        TNPSC Coaching
                      </button>
                      <button
                        onClick={() => {
                          navigate('/skill-development');
                          setActivitiesDropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-muted transition-colors text-sm"
                      >
                        Skill Development
                      </button>
                    </div>
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
          <Button size="lg" className="gap-2 px-6 py-3 rounded-full font-black hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300" onClick={() => setShowQR(true)}>
            <Heart className="w-5 h-5" /> Donate
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground hover:text-primary transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border/50">
          <div className="container mx-auto py-6 space-y-4">
            {navLinks.map((l) => (
              <React.Fragment key={l.href}>
                <button
                  onClick={() => navigateTo(l.href)}
                  className="block w-full text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  {l.label}
                </button>
                {/* Insert Activities dropdown after About */}
                {l.label === "About" && (
                  <div className="space-y-2">
                    <button
                      onClick={() => setActivitiesDropdown(!activitiesDropdown)}
                      className="block w-full text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors flex items-center justify-between"
                    >
                      Activities
                      <ChevronDown className={`w-4 h-4 transition-transform ${activitiesDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activitiesDropdown && (
                      <div className="ml-4 space-y-1">
                        <button
                          onClick={() => {
                            navigate('/music-department');
                            setOpen(false);
                            setActivitiesDropdown(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                        >
                          Music Department
                        </button>
                        <button
                          onClick={() => {
                            navigate('/tnpsc-coaching');
                            setOpen(false);
                            setActivitiesDropdown(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                        >
                          TNPSC Coaching
                        </button>
                        <button
                          onClick={() => {
                            navigate('/skill-development');
                            setOpen(false);
                            setActivitiesDropdown(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                        >
                          Skill Development
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}
            
            <Button size="lg" className="gap-2 w-fit mt-4 rounded-full font-black" onClick={() => setShowQR(true)}>
              <Heart className="w-5 h-5" /> Donate
            </Button>
          </div>
        </div>
      )}
      </nav>
      
      {/* QR Code Modal */}
      <QRCodeModal isOpen={showQR} onClose={() => setShowQR(false)} />
    </>
  );
};

export default Navbar;
