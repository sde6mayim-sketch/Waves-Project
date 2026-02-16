import { useEffect } from "react";

interface ParallaxHeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  height?: string;
  gradient?: string;
}

const ParallaxHero = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  height = "h-96",
  gradient = "from-primary/20 to-blue-600/20"
}: ParallaxHeroProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      
      parallaxElements.forEach((element) => {
        const speed = 0.3; // Reduced from 0.5 to 0.3 for lighter effect
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`relative ${height} bg-gradient-to-br ${gradient} overflow-hidden`}>
      <div 
        className="absolute inset-0 parallax-bg opacity-20" // Reduced opacity for lighter background
        style={{ 
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          transform: "translateY(0)",
          willChange: "transform"
        }}
      />
      <div className="relative container mx-auto max-w-6xl h-full flex items-center">
        <div className="text-center w-full">
          <h1 className="font-display text-5xl md:text-7xl font-black text-foreground mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxHero;
