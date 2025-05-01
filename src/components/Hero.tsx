
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/20 z-10"></div>
        <img 
          src="/lovable-uploads/27913639-7243-49e5-9b40-e14ee761d744.png" 
          alt="Professional lawn mower on green grass" 
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Content Container */}
      <div className={cn(
        "container mx-auto px-6 z-10 mt-16 transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0"
      )}>
        <div className="max-w-4xl">
          <span className="inline-block text-white/90 font-medium text-lg md:text-xl mb-4 pl-1 animate-fade-in">
            Professional Lawn Care Services
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Transform Your Property Into a{' '}
            <span className="text-green-light">Living Masterpiece</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            We craft stunning, sustainable landscapes that bring beauty and value to your property with precision care and expert knowledge.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <HoverCard>
              <HoverCardTrigger asChild>
                <a 
                  href="#contact" 
                  className={cn(
                    "btn-primary text-center",
                    "bg-green hover:bg-green-dark text-white px-8 py-3.5 rounded-md font-medium",
                    "shadow-lg transform transition-all duration-300",
                    "hover:shadow-xl hover:-translate-y-1"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Free Consultation
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Get a Free Quote</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive a personalized lawn care plan with no obligation. Our experts will assess your property's needs.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>

            <a 
              href="#services" 
              className={cn(
                "text-center",
                "bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3.5 rounded-md font-medium",
                "shadow-lg transform transition-all duration-300",
                "hover:bg-white/20 hover:shadow-xl hover:-translate-y-1"
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/90 flex flex-col items-center animate-bounce"
        aria-label="Scroll down"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
        }}
      >
        <span className="sr-only">Scroll down</span>
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;
