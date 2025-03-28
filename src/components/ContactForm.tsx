
import React, { useState } from 'react';
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

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [formState, setFormState] = useState('idle');

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
        to_name: "CS Lawn Care Team",
        to_email: "info@cslawncare.ca", // Explicitly set destination email
        phone: formData.phone,
        service: serviceFormatted,
        message: formData.message || "No message provided",
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
  );
};

export default ContactForm;
