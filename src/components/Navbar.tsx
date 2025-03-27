import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-green font-serif text-2xl md:text-3xl font-bold tracking-tight"
        >
          CS Lawncare
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                'font-medium tracking-wide transition-colors duration-300',
                isScrolled ? 'text-foreground hover:text-green' : 'text-foreground/90 hover:text-green-dark'
              )}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed top-[72px] left-0 right-0 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out overflow-hidden',
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="flex flex-col py-6 px-6 space-y-4">
          {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium py-2 transition-colors duration-300 text-foreground hover:text-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
