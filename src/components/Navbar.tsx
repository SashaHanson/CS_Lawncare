import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Memoize the NavItem component to prevent unnecessary re-renders
const NavItem = memo(({ item, isScrolled, onClick }: { 
  item: { label: string; id: string }; 
  isScrolled: boolean;
  onClick: (id: string) => void;
}) => {
  return (
    <a
      href={`#${item.id}`}
      className={cn(
        'font-medium tracking-wide transition-colors duration-300',
        isScrolled ? 'text-foreground hover:text-green' : 'text-foreground/90 hover:text-green-dark'
      )}
      onClick={(e) => {
        e.preventDefault();
        onClick(item.id);
      }}
    >
      {item.label}
    </a>
  );
});

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance with optimized performance
  useEffect(() => {
    const handleScroll = () => {
      // Using requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/CSLC-icon.png" 
            alt="CS Lawn Care Logo" 
            className="h-10 w-10 object-contain"
          />
          <a 
            href="#home" 
            className="text-green font-serif text-2xl md:text-3xl font-bold tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            CS Lawn Care
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              isScrolled={isScrolled}
              onClick={scrollToSection}
            />
          ))}
          <a 
            href="#contact" 
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
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
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-medium py-2 transition-colors duration-300 text-foreground hover:text-green"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary text-center mt-4"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
};

// Export memoized component to prevent unnecessary re-renders
export default memo(Navbar);
