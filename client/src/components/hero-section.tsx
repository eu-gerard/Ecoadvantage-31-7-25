import { Button } from "@/components/ui/button";
import { CalendarCheck, Phone, Award, Tag, Leaf, Clock, Star, MapPin, Gift } from "lucide-react";
import { motion } from "framer-motion";
import ScrollAnimation, { StaggerAnimation } from "@/components/scroll-animation";
import { buttonHover, cardHover, fadeInVariants, staggerContainer, staggerItem } from "@/lib/animations";
import OptimizedImage from "@/components/optimized-image";
import { scrollToContact } from "@/lib/scroll-utils";
import heroImage from "@assets/image_1752006654602.png";
import newLogo from "@assets/image0_1752367779051.jpeg";

export default function HeroSection() {

  return (
    <section id="hero" className="hero-section relative bg-gradient-to-br from-red-600 to-gray-900 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <ScrollAnimation animation="fadeIn" className="mb-12 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-overflow-prevent">
              Premier Cleaning Services in Southwest Michigan & Northern Indiana
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100 leading-relaxed">
              Stop living with dirty windows, stained carpets, and grimy floors. EcoAdvantage Inc. has served the Michiana area for over 50 years with professional cleaning solutions that transform your property.
            </p>
            <p className="text-lg mb-8 text-blue-100 leading-relaxed">
              Our IICRC-certified team delivers spotless results throughout Edwardsburg, Niles, Buchanan, South Bend, Mishawaka, and the entire Michiana region.
            </p>
            
            {/* Trust Indicators */}
            <StaggerAnimation className="flex flex-wrap items-center gap-6 mb-8" staggerDelay={0.1}>
              <div className="flex items-center text-sm">
                <Tag className="text-yellow-300 mr-2 w-5 h-5" />
                <span>IICRC Certified</span>
              </div>
              <div className="flex items-center text-sm">
                <Award className="text-yellow-300 mr-2 w-5 h-5" />
                <span>Master Textile Cleaner</span>
              </div>
              <div className="flex items-center text-sm">
                <Leaf className="text-green-300 mr-2 w-5 h-5" />
                <span>Eco-Friendly Methods</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="text-blue-300 mr-2 w-5 h-5" />
                <span>36+ Years Experience</span>
              </div>
            </StaggerAnimation>

            <StaggerAnimation className="button-container flex flex-col sm:flex-row gap-4" staggerDelay={0.2}>
              <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="w-full sm:w-auto bg-eco-red hover:bg-eco-red-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
                >
                  <CalendarCheck className="mr-2 w-5 h-5" />
                  Book A Free Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button 
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full sm:w-auto border-2 border-white bg-white text-black hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300"
                >
                  <a href="tel:12698496236">
                    <Phone className="mr-2 w-5 h-5" />
                    Speak to a Specialist Today
                  </a>
                </Button>
              </motion.div>
            </StaggerAnimation>
            
            {/* Trust Signals */}
            <StaggerAnimation className="mt-8 flex flex-wrap items-center gap-4 text-sm" staggerDelay={0.1}>
              <span className="flex items-center bg-white/20 rounded-full px-3 py-1">
                <Star className="text-yellow-300 mr-1 w-4 h-4 fill-current" />
                5-Star Local Reviews
              </span>
              <span className="flex items-center bg-white/20 rounded-full px-3 py-1">
                <MapPin className="text-green-300 mr-1 w-4 h-4" />
                Proudly Serving Michiana
              </span>
              <span className="flex items-center bg-white/20 rounded-full px-3 py-1">
                <Gift className="text-blue-300 mr-1 w-4 h-4" />
                Free Consultation Available
              </span>
            </StaggerAnimation>
          </ScrollAnimation>

          {/* Company Information Section */}
          <ScrollAnimation animation="scaleIn" className="mt-16">
            <motion.div whileHover={cardHover}>
              <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Your Trusted Cleaning Experts</h3>
                
                {/* Logo Section - Fixed positioning */}
                <div className="mb-10 text-center">
                  <img
                    src={newLogo} 
                    alt="EcoAdvantage Inc. - The Expert Cleaning Co." 
                    className="inline-block max-w-2xl h-auto rounded-lg shadow-md"
                    style={{ maxHeight: '480px', width: 'auto' }}
                  />
                </div>
                
                {/* Description Text - Clear separation */}
                <div className="text-gray-800 text-center space-y-6 max-w-3xl mx-auto">
                  <p className="text-lg leading-relaxed">
                    EcoAdvantage Inc. is Southwest Michigan and Northern Indiana's premier cleaning service company, 
                    specializing in professional window cleaning, carpet care, floor maintenance, and commercial cleaning solutions.
                  </p>
                  <p className="text-lg leading-relaxed">With over 35 years of experience and Institute Of Inspection Cleaning And Restoration Certifications (IICRC), we deliver exceptional results using eco-friendly methods that protect your property and the environment.</p>
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
