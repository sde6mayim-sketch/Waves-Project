import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding pt-28 overflow-hidden"
    >
      <div 
        className="absolute inset-0 parallax-bg"
        style={{ 
          backgroundImage: `url(${heroBg})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          willChange: "transform"
        }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 container mx-auto text-center max-w-4xl">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[1.1] text-hero-heading animate-fade-up">
          The Waves Academy
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Discover your God-given potential at The Waves Academy — Where education meets social impact and creativity transforms lives.
        </p>
        <div className="mt-12 flex flex-wrap gap-6 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <button 
            onClick={() => navigate("/contact")} 
            className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 font-medium text-primary-foreground hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
