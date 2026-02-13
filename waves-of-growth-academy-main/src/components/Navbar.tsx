import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Music Department", href: "#music" },
  { label: "TNPSC Coaching", href: "#tnpsc" },
  { label: "Skill Development", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24">
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-1 left-1 w-3 h-3 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="absolute bottom-2 left-2 right-2 h-1 bg-white rounded-full opacity-60"></div>
            <div className="absolute bottom-3 left-3 right-3 h-1 bg-white rounded-full opacity-40"></div>
            <div className="relative z-10 text-white font-black text-2xl">W</div>
          </div>
          <div className="text-left">
            <span className="font-display text-xl md:text-2xl font-black text-foreground leading-tight block">The Waves Academy</span>
            <span className="text-sm text-muted-foreground italic font-light">Do the Basics Right</span>
          </div>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-105 transform"
            >
              {l.label}
            </button>
          ))}
          <Button size="lg" className="gap-2 px-6 py-3 rounded-full font-black hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300" onClick={() => scrollTo("#contact")}>
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
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border/50 pb-6 animate-fade-in">
          <div className="container mx-auto flex flex-col gap-3">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left py-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
            <Button size="lg" className="gap-2 w-fit mt-4 rounded-full font-black" onClick={() => scrollTo("#contact")}>
              <Heart className="w-5 h-5" /> Donate
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
