
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
                        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.1.248-.73.168-1.05.3-.99.396.01.017.036.04.082.067.046.027.09.06.135.098.061.054.15.115.268.187.117.071.23.133.338.184.107.052.213.089.32.113.334.079.748.123 1.244.123.627 0 1.17-.114 1.627-.349.52-.25.961-.664 1.326-1.24.362-.577.6-1.32.7-2.229.11-.956.16-2.043.16-3.261v-.21c0-2.639-.064-4.858-.194-6.668v-.05h2.53c.02 0 .085.192.193.575.109.383.188.686.24.908.02.139.186.325.5.559.313.232.555.44.726.621.38.401.601.663.664.79.063.125.133.241.213.347.193.248.329.469.405.65.077.182.203.424.377.72.303.52.433.954.387 1.297l-.057.05c-.3.024-.383.023-.286-.032.096-.054.146-.084.15-.088.05-.03-.147-.23-.594-.603-.446-.372-.85-.556-1.213-.556-.381 0-.921.195-1.622.585-.699.387-1.35.664-1.955.83.507.993.764 2.074.764 3.24 0 1.404-.38 2.558-1.131 3.46-.753.905-1.676 1.357-2.77 1.357-.95 0-1.74-.276-2.37-.828-.628-.552-1.061-1.247-1.297-2.084-.236-.837-.345-1.68-.33-2.527.016-.83.142-1.612.377-2.34.237-.727.538-1.288.903-1.681.365-.394.698-.655.995-.785.295-.13.569-.196.82-.196.493 0 .979.094 1.457.28.477.187.918.56 1.316 1.093.4.553.712 1.414.941 2.584l.046.215c.32 0 .827-.144 1.52-.427.693-.285 1.14-.485 1.34-.603.199-.118.53-.308.993-.57.462-.26.79-.451.985-.574.194-.123.528-.318 1-.587.471-.269.856-.475 1.156-.621.298-.144.695-.34 1.193-.586a10.85 10.85 0 0 0 1.335-.8c.149-.107.311-.225.486-.353.175-.127.311-.225.406-.293 0 .012.03.022.088.032.059.01.088.02.088.033v.056c-.589.62-1.353 1.167-2.295 1.644-.941.476-1.892.82-2.856 1.034-.962.213-1.755.32-2.378.32h-.207c0 .929.029 1.684.086 2.267.057.582.118 1.178.184 1.788.066.608.1 1.175.1 1.697zm-7.223.148c0 .956.134 1.775.401 2.459.268.684.66 1.185 1.175 1.502s1.1.476 1.75.476c.744 0 1.375-.232 1.894-.697.518-.464.895-1.12 1.131-1.971.236-.85.355-1.797.355-2.842 0-.878-.13-1.657-.387-2.34-.258-.682-.646-1.244-1.166-1.686-.52-.442-1.1-.663-1.739-.663-.849 0-1.589.336-2.222 1.005-.632.67-1.05 1.548-1.25 2.636-.202 1.088-.159 2.235.128 3.443.103.429.15.752.15.969-.002.217-.054.388-.154.51-.102.12-.152.204-.152.25 0 .093.04.164.123.212.082.05.122.114.122.196a.7.7 0 0 1-.058.284c-.039.088-.057.153-.057.196 0 .059.03.128.086.204.058.077.086.131.086.163 0 .045-.02.08-.058.109-.04.03-.083.05-.13.065-.047.016-.112.034-.196.057-.083.023-.143.042-.176.057-.036.013-.87.047-.156.1-.07.051-.103.118-.103.196a1.06 1.06 0 0 0 .033.265c.023.094.033.163.033.212 0 .068-.013.211-.04.427-.027.217-.04.407-.04.566v.869c0 .776.024 1.268.074 1.477l.02.067c0 .068-.052.118-.156.15-.104.032-.178.079-.222.138-.044.059-.103.142-.176.25-.074.107-.111.186-.111.236 0 .094.008.17.025.232.018.06.025.13.025.21 0 .188-.1.49-.299.91-.199.418-.298.736-.298.954 0 .249.086.498.258.745.172.248.258.456.258.621 0 .154-.039.344-.115.573-.078.23-.115.418-.115.566 0 .26.078.654.234 1.18.156.527.234.878.234 1.054 0 .164-.03.333-.091.504-.06.17-.091.313-.091.427 0 .136.02.299.058.49.039.19.059.354.059.49 0 .213-.055.47-.168.773-.111.304-.168.535-.168.695 0 .193.047.435.14.729.092.293.14.538.14.736 0 .353-.138.739-.414 1.158-.277.42-.415.736-.415.954 0 .22.074.472.221.76.147.284.222.517.222.695 0 .153-.037.313-.107.48-.072.168-.107.312-.107.434 0 .13.076.284.23.463.153.179.23.329.23.45 0 .15-.063.374-.19.67-.125.297-.189.537-.189.72 0 .233.077.518.234.852.156.336.234.59.234.762 0 .306-.168.691-.503 1.158-.336.464-.503.787-.503.969 0 .13.012.32.04.566.026.248.04.437.04.568 0 .24-.057.551-.17.933-.11.383-.168.668-.168.86 0 .245.083.54.25.884.169.344.249.606.249.787 0 .268-.082.557-.246.868-.165.312-.248.548-.248.712 0 .153.06.336.181.546.121.211.18.382.18.516 0 .24-.134.585-.403 1.033-.27.447-.402.796-.402 1.046 0 .356.127.727.384 1.11.257.381.386.693.386.933 0 .188-.084.429-.25.722-.166.293-.25.526-.25.697 0 .21.086.466.258.769.17.301.258.55.258.745 0 .142-.1.354-.299.638-.2.285-.299.51-.299.679 0 .225.09.485.272.778.18.293.272.53.272.712 0 .188-.05.405-.146.651a2.665 2.665 0 0 0-.148.644c0 .273.082.614.246 1.025.164.41.246.728.246.953 0 .305-.152.691-.455 1.158-.303.464-.454.782-.454.954 0 .2.047.43.139.686.092.256.14.453.14.588 0 .21-.044.45-.13.721-.088.272-.13.489-.13.653 0 .243.077.57.232.981.156.41.235.716.235.917 0 .288-.092.682-.275 1.183-.184.502-.274.883-.274 1.14.0"]
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
