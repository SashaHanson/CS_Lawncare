
import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import BusinessHours from './BusinessHours';
import emailjs from 'emailjs-com';

const Contact = () => {
  // Initialize EmailJS with public key
  useEffect(() => {
    emailjs.init("SMFwSQ88VoQKPtpYR");
    console.log("EmailJS initialized with public key");
  }, []);

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
            <ContactInfo />
            
            {/* Business Hours Card */}
            <BusinessHours />
          </div>
          
          {/* Right Column - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
