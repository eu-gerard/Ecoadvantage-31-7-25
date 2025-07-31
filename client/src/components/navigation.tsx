import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { handleSectionNavigation } from "@/lib/scroll-utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);
    setServicesOpen(false);
    handleSectionNavigation(sectionId);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <button 
                onClick={() => handleNavigation('hero')}
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/logo.png" 
                  alt="EcoAdvantage Inc. - The Expert Cleaning Co." 
                  className="h-12 w-auto"
                />
              </button>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button 
                onClick={toggleServices}
                className="text-eco-gray hover:text-eco-red px-3 py-2 text-sm font-medium transition-colors flex items-center"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-2">
                    <Link href="/services/window-cleaning" className="block px-4 py-2 text-sm text-eco-gray hover:bg-eco-light-gray hover:text-eco-red transition-colors">
                      Commercial & Residential Window Cleaning
                    </Link>
                    <Link href="/services/power-washing" className="block px-4 py-2 text-sm text-eco-gray hover:bg-eco-light-gray hover:text-eco-red transition-colors">
                      Commercial Power Washing
                    </Link>
                    <Link href="/services/healthcare-cleaning" className="block px-4 py-2 text-sm text-eco-gray hover:bg-eco-light-gray hover:text-eco-red transition-colors">
                      Pharmacy Compound Lab Cleaning
                    </Link>
                    <Link href="/services/carpet-floor-care" className="block px-4 py-2 text-sm text-eco-gray hover:bg-eco-light-gray hover:text-eco-red transition-colors">
                      Commercial Carpet Cleaning
                    </Link>
                    <Link href="/services/consulting-training" className="block px-4 py-2 text-sm text-eco-gray hover:bg-eco-light-gray hover:text-eco-red transition-colors">
                      Consulting & Training
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <button 
              onClick={() => handleNavigation('about')}
              className="text-eco-gray hover:text-eco-red px-3 py-2 text-sm font-medium transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavigation('testimonials')}
              className="text-eco-gray hover:text-eco-red px-3 py-2 text-sm font-medium transition-colors"
            >
              Testimonials
            </button>
            <Link href="/blog" className="text-eco-gray hover:text-eco-red px-3 py-2 text-sm font-medium transition-colors">
              Blog
            </Link>
            <button 
              onClick={() => handleNavigation('contact')}
              className="text-eco-gray hover:text-eco-red px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </button>
            <div className="flex items-center space-x-2 lg:space-x-3">
              <a 
                href="tel:12698496236" 
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-full text-sm font-medium flex items-center transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 mr-1" />
                (269) 849-6236
              </a>
            </div>
          </div>

          {/* Mobile menu button and phone numbers */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile phone numbers - show only on small screens */}
            <div className="flex space-x-1 sm:hidden">
              <a 
                href="tel:12698496236" 
                className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-full transition-colors shadow-md text-xs font-medium flex items-center"
                aria-label="Call EcoAdvantage"
              >
                <Phone className="w-3 h-3 mr-1" />
                Call
              </a>
            </div>
            {/* Show full phone numbers on larger mobile screens */}
            <div className="hidden sm:flex md:hidden space-x-2">
              <a 
                href="tel:12698496236" 
                className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center transition-colors shadow-md"
              >
                <Phone className="w-3 h-3 mr-1" />
                (269) 849-6236
              </a>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-eco-red p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <div className="space-y-1">
              <div className="px-3 py-2 text-base font-medium text-eco-black">Services</div>
              <Link href="/services/window-cleaning" className="block px-6 py-2 text-sm text-eco-gray hover:text-eco-red">
                Commercial & Residential Window Cleaning
              </Link>
              <Link href="/services/power-washing" className="block px-6 py-2 text-sm text-eco-gray hover:text-eco-red">
                Commercial Power Washing
              </Link>
              <Link href="/services/healthcare-cleaning" className="block px-6 py-2 text-sm text-eco-gray hover:text-eco-red">
                Pharmacy Compound Lab Cleaning
              </Link>
              <Link href="/services/carpet-floor-care" className="block px-6 py-2 text-sm text-eco-gray hover:text-eco-red">
                Commercial Carpet Cleaning
              </Link>
              <Link href="/services/consulting-training" className="block px-6 py-2 text-sm text-eco-gray hover:text-eco-red">
                Consulting & Training
              </Link>
            </div>
            <button 
              onClick={() => handleNavigation('about')}
              className="block px-3 py-2 text-base font-medium text-eco-gray hover:text-eco-red w-full text-left"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavigation('testimonials')}
              className="block px-3 py-2 text-base font-medium text-eco-gray hover:text-eco-red w-full text-left"
            >
              Testimonials
            </button>
            <Link href="/blog" className="block px-3 py-2 text-base font-medium text-eco-gray hover:text-eco-red w-full text-left">
              Blog
            </Link>
            <button 
              onClick={() => handleNavigation('contact')}
              className="block px-3 py-2 text-base font-medium text-eco-gray hover:text-eco-red w-full text-left"
            >
              Contact
            </button>
            <div className="px-3 py-2 space-y-3">
              <a 
                href="tel:12698496236" 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full text-sm font-medium flex items-center justify-center transition-colors shadow-md w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                (269) 849-6236
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
