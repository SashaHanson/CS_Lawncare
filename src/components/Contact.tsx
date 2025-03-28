
import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import emailjs from 'emailjs-com';

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
  const [emailJSInitialized, setEmailJSInitialized] = useState(false);

  // Initialize EmailJS with public key
  useEffect(() => {
    emailjs.init("SMFwSQ88VoQKPtpYR");
    setEmailJSInitialized(true);
    console.log("EmailJS initialized with public key");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    try {
      // Format service name for readability
      const serviceFormatted = 
        formData.service === 'lawn-maintenance' ? 'Lawn Maintenance' :
        formData.service === 'landscape-design' ? 'Landscape Design' :
        formData.service === 'irrigation' ? 'Irrigation Systems' : 'Other Services';

      // Log before sending to help diagnose
      console.log("Attempting to send email with EmailJS");
      console.log("Service ID:", 'service_zqh8yoe');
      console.log("Template ID:", 'template_8j1i1of');
      
      // Prepare template parameters to exactly match the EmailJS template variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        to_email: "info@cslawncare.ca", // Add the destination email
        phone: formData.phone,
        service: serviceFormatted,
        message: formData.message || "No message provided",
        to_name: "CS Lawn Care Team"
      };
      
      console.log("Template parameters:", templateParams);
      
      // Send email directly using the send method
      const response = await emailjs.send(
        'service_zqh8yoe',        // EmailJS service ID
        'template_8j1i1of',       // EmailJS template ID
        templateParams,
        'SMFwSQ88VoQKPtpYR'       // EmailJS public key (User ID)
      );

      console.log("EmailJS response:", response);
      
      if (response.status === 200) {
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
      } else {
        throw new Error(`Email sending failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormState('idle');
      
      // More detailed error message to help with troubleshooting
      toast({
        title: "Message could not be sent",
        description: "There was an issue with the email service. Please try again later or contact us directly by phone.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-background">
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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Contact Info and Business Hours */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-green">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Our Location</h4>
                    <p className="text-gray-600">Oakville, Ontario, L6H 3A5</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-green">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone Number</h4>
                    <p className="text-gray-600">289-681-1919</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-green">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Address</h4>
                    <p className="text-gray-600">info@cslawncare.ca</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-green-light/20 h-10 w-10 rounded-full flex items-center justify-center text-green transition-colors duration-300 hover:bg-green hover:text-white"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/c.s_landscaping_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-light/20 h-10 w-10 rounded-full flex items-center justify-center text-green transition-colors duration-300 hover:bg-green hover:text-white"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Business Hours Card */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger id="service" className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lawn-maintenance">Lawn Maintenance</SelectItem>
                      <SelectItem value="landscape-design">Landscape Design</SelectItem>
                      <SelectItem value="irrigation">Irrigation Systems</SelectItem>
                      <SelectItem value="other">Other Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className={cn(
                    "w-full bg-green hover:bg-green-dark text-white font-medium py-3 px-4 rounded-md transition-colors",
                    formState === 'submitting' && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {formState === 'submitting' ? 'Sending...' : 
                   formState === 'success' ? 'Message Sent!' : 
                   'Send Message'}
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
