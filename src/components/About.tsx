
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="animate-fade-in">
            <span className="inline-block text-green-dark font-medium text-base uppercase tracking-widest mb-3">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Creating Beautiful Landscapes Since 2005
            </h2>
            
            <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
              At CS Lawncare, we're passionate about transforming ordinary outdoor spaces into extraordinary landscapes that inspire, impress, and endure.
            </p>
            
            <p className="text-foreground/80 mb-8 leading-relaxed">
              Our experienced team of landscape professionals combines horticultural expertise with artistic vision to create custom-designed environments that reflect your unique style and meet your practical needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green/10 flex items-center justify-center text-green mr-4">
                  <span className="text-green text-xl">18+</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Years Experience</h4>
                  <p className="text-sm text-foreground/70">Trusted service since 2005</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green/10 flex items-center justify-center text-green mr-4">
                  <span className="text-green text-xl">500+</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Happy Clients</h4>
                  <p className="text-sm text-foreground/70">Satisfied customers</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#services" 
              className={cn(
                "inline-block btn-primary mt-2",
                "bg-green hover:bg-green-dark text-white"
              )}
            >
              Our Services
            </a>
          </div>
          
          {/* About Images */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="space-y-4">
              <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-lg h-64">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86" 
                  alt="Professional landscaping" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-lg h-52 bg-green-dark p-6 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Expertise</h3>
                  <p className="text-white/90">Professional lawn care specialists</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mt-8">
              <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-lg h-52 bg-cream p-6 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-green-dark">Quality</h3>
                  <p className="text-green-dark/80">Premium materials and methods</p>
                </div>
              </div>
              <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-lg h-64">
                <img 
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3" 
                  alt="Beautiful lawn" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
