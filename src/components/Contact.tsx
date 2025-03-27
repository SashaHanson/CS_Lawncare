
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [formState, setFormState] = useState('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Please complete all required fields",
        description: "We need this information to best serve you.",
        variant: "destructive",
      });
      return;
    }
    
    setFormState('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      toast({
        title: "Request received!",
        description: "We'll contact you shortly to discuss your lawn care needs.",
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      
      // Reset form state after a delay
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-green-dark font-medium text-base uppercase tracking-widest mb-3">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Your Free Consultation
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            Ready to transform your outdoor space? Get in touch for a personalized lawn care plan tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green/10 flex items-center justify-center text-green mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Phone</h4>
                    <p className="text-foreground/70">(555) 123-4567</p>
                    <p className="text-sm text-foreground/60 mt-1">Mon-Fri: 8am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green/10 flex items-center justify-center text-green mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <p className="text-foreground/70">info@cslawncare.com</p>
                    <p className="text-sm text-foreground/60 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green/10 flex items-center justify-center text-green mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Location</h4>
                    <p className="text-foreground/70">123 Green Street, Oakville, Ontario</p>
                    <p className="text-sm text-foreground/60 mt-1">Serving all of Oakville</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-green/10 flex items-center justify-center text-green hover:bg-green hover:text-white transition-colors duration-300"
                    aria-label="Visit our Facebook page"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-green/10 flex items-center justify-center text-green hover:bg-green hover:text-white transition-colors duration-300"
                    aria-label="Visit our Instagram page"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Request a Quote</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1" htmlFor="name">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 transition-all duration-300",
                      "border-border focus:border-green focus:ring-green/20"
                    )}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1" htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 transition-all duration-300",
                        "border-border focus:border-green focus:ring-green/20"
                      )}
                      placeholder="Your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1" htmlFor="phone">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 transition-all duration-300",
                        "border-border focus:border-green focus:ring-green/20"
                      )}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1" htmlFor="service">
                    Service Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 transition-all duration-300",
                      "border-border focus:border-green focus:ring-green/20 bg-white"
                    )}
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="lawn-maintenance">Lawn Maintenance</option>
                    <option value="landscape-design">Landscape Design</option>
                    <option value="irrigation">Irrigation Systems</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={cn(
                      "w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 transition-all duration-300",
                      "border-border focus:border-green focus:ring-green/20"
                    )}
                    placeholder="Tell us about your lawn care needs"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className={cn(
                    "w-full px-6 py-3 mt-4 rounded-md font-medium text-white transition-all duration-300",
                    "bg-green hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2",
                    formState === 'submitting' && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {formState === 'submitting' ? 'Submitting...' : 
                   formState === 'success' ? 'Submitted Successfully!' : 
                   'Send Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
