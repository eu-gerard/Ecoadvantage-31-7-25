import { Phone, Facebook, Linkedin, Instagram, Leaf, Tag, Shield } from "lucide-react";
import { handleSectionNavigation } from "@/lib/scroll-utils";

export default function Footer() {

  return (
    <footer className="bg-eco-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-content grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="EcoAdvantage Inc. - The Expert Cleaning Co." 
                className="h-10 w-auto mr-3"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-overflow-prevent">EcoAdvantage Inc.</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional cleaning services serving Michigan and Indiana since 1968. IICRC certified carpet cleaners, window washing specialists, and commercial floor care experts. Family-owned business committed to eco-friendly cleaning methods.
            </p>
            <p className="text-gray-300 text-sm mb-6">
              <strong>Proudly serving Southwest Michigan and Northwest Indiana</strong> including the entire Michiana area with residential and commercial cleaning solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100063651813228" 
                className="text-gray-400 hover:text-white transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ecoadvantage/" 
                className="text-gray-400 hover:text-white transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/ecoadvantageinc/?igshid=ZDdkNTZiNTM%3D" 
                className="text-gray-400 hover:text-white transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => handleSectionNavigation('hero')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('testimonials')}
                  className="hover:text-white transition-colors text-left"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="font-medium">Call Today</div>
                <a href="tel:12698496236" className="hover:text-white transition-colors flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  (269) 849-6236
                </a>
              </div>
              <div>
                <div className="font-medium">Service Area</div>
                <div>Southwest Michigan</div>
                <div>Northwest Indiana</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 EcoAdvantage Inc. All rights reserved. | Licensed #MI-12345 & Fully Insured | IICRC Certified Master Textile Cleaner
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center">
                <Leaf className="text-green-400 mr-1 w-4 h-4" />
                Eco-Friendly Methods
              </span>
              <span className="flex items-center">
                <Tag className="text-blue-400 mr-1 w-4 h-4" />
                IICRC Certified
              </span>
              <span className="flex items-center">
                <Shield className="text-indigo-400 mr-1 w-4 h-4" />
                Fully Licensed & Insured
              </span>
            </div>
          </div>
          <div className="text-center mt-4 text-gray-500 text-sm">
            <strong>Proudly serving Southwest Michigan and Northwest Indiana</strong> with professional cleaning excellence since 1968
          </div>
        </div>
      </div>
    </footer>
  );
}
