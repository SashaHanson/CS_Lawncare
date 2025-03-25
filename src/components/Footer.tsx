
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-green-dark text-white">
      {/* Main Footer */}
      <div className="px-6 md:px-12 pt-16 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="text-white font-serif text-2xl font-bold tracking-tight">
                VerdeScape
              </Link>
              <p className="mt-4 text-white/80 max-w-xs">
                Professional lawn care and landscaping services delivering beautiful, sustainable outdoor spaces.
              </p>
              <div className="mt-6 flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-green-dark transition-colors duration-300"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-green-dark transition-colors duration-300"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-white/80 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-green-light mr-2"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-medium mb-4">Our Services</h3>
              <ul className="space-y-3">
                {[
                  'Lawn Maintenance',
                  'Landscape Design',
                  'Property Maintenance',
                  'Garden Care',
                  'Seasonal Clean-up',
                  'Hardscaping'
                ].map((service) => (
                  <li key={service}>
                    <a 
                      href="#services"
                      className="text-white/80 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-green-light mr-2"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-green-light mr-3 mt-0.5" />
                  <span className="text-white/80">123 Green Street, Meadowville, CA 90210</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-green-light mr-3" />
                  <span className="text-white/80">(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-green-light mr-3" />
                  <span className="text-white/80">info@verdescapelawns.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} VerdeScape. All rights reserved.
          </div>
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
