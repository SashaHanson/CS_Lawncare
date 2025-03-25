
import { useState } from 'react';
import { cn } from '@/lib/utils';

// Service data
const servicesData = [
  {
    id: 1,
    title: 'Lawn Maintenance',
    description: 'Regular lawn maintenance including mowing, trimming, and blowing to keep your urban lawn looking its best year-round.',
    image: 'https://images.unsplash.com/photo-1658521352005-07c0477198dd',
    features: ['Weekly or bi-weekly mowing', 'Edge trimming', 'Leaf blowing', 'Debris removal', 'Seasonal adjustments']
  },
  {
    id: 2,
    title: 'Landscape Design',
    description: 'Custom landscape design services to transform your urban outdoor space into a beautiful and functional environment.',
    image: 'https://images.unsplash.com/photo-1598901847919-b95dd0fabbb6',
    features: ['Custom design consultations', 'Plant selection expertise', 'Hardscape integration', '3D visualization', 'Sustainable planning']
  },
  {
    id: 3,
    title: 'Property Maintenance',
    description: 'Complete property maintenance to keep your residential or commercial space looking professional and well-kept.',
    image: 'https://images.unsplash.com/photo-1556713304-e5ac7eca7dc5',
    features: ['Shrub trimming', 'Bed maintenance', 'Mulch installation', 'Weed control', 'Seasonal clean-ups']
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(servicesData[0].id);

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-green-dark font-medium text-base uppercase tracking-widest mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Expert Lawn Care Solutions
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            We offer professional lawn care and landscaping services 
            tailored to meet the unique needs of your urban property.
          </p>
        </div>

        {/* Services Tabs & Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Tabs */}
          <div className="lg:w-1/3">
            <div className="flex flex-col space-y-4">
              {servicesData.map((service) => (
                <button
                  key={service.id}
                  className={cn(
                    "text-left p-6 rounded-lg transition-all duration-300 ease-in-out",
                    "border border-green/10 hover:border-green/20",
                    activeService === service.id
                      ? "bg-white/80 shadow-md transform -translate-y-1"
                      : "bg-white/40 hover:bg-white/60"
                  )}
                  onClick={() => setActiveService(service.id)}
                >
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70">
                    {service.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  activeService === service.id ? "opacity-100 h-auto" : "opacity-0 h-0 absolute"
                )}
              >
                <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 overflow-hidden">
                  <div className="lg:w-1/2 img-hover-zoom rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-60 lg:h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-foreground/80 mb-6">{service.description}</p>
                    
                    <h4 className="font-medium text-green mb-3">Service Includes:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-green mt-2 mr-3"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="#contact"
                      className="inline-block mt-8 btn-primary bg-green hover:bg-green-dark"
                    >
                      Request Service
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
