
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
