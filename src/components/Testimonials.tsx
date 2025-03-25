
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    text: "VerdeScape transformed our neglected backyard into a stunning retreat. Their attention to detail and lawn expertise is impressive!",
    author: "Thomas Anderson",
    position: "Homeowner",
    rating: 5
  },
  {
    id: 2,
    text: "We've tried several lawn care companies, but none compare to the quality and reliability of VerdeScape. Our property has never looked better.",
    author: "Sarah Johnson",
    position: "Property Manager",
    rating: 5
  },
  {
    id: 3,
    text: "Professional, punctual, and perfect results every time. Their team really understands how to create and maintain beautiful outdoor spaces.",
    author: "Michael Chen",
    position: "Business Owner",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-green/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-green-dark font-medium text-base uppercase tracking-widest mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            We take pride in exceeding our clients' expectations and creating beautiful, sustainable landscapes.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="glass-card rounded-2xl p-8 md:p-10">
                    {/* Quote mark */}
                    <div className="mb-6 text-green opacity-30">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={cn(
                            "w-5 h-5 mr-1", 
                            i < testimonial.rating ? "text-amber-400" : "text-gray-300"
                          )}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Testimonial text */}
                    <p className="text-xl md:text-2xl font-serif font-light italic text-foreground mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Author info */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-green/20 flex items-center justify-center text-green font-medium text-xl mr-4">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{testimonial.author}</h4>
                        <p className="text-sm text-foreground/70">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-green w-8" : "bg-green/30 hover:bg-green/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
