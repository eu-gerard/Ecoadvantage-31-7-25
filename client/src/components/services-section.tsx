import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, GraduationCap, Building2, SprayCan, ArrowRight, CheckCircle, Droplet, Sparkles, Wrench, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ScrollAnimation, { StaggerAnimation } from "@/components/scroll-animation";
import { cardHover, buttonHover } from "@/lib/animations";
import { scrollToContact } from "@/lib/scroll-utils";

export default function ServicesSection() {

  const services = [
    {
      icon: Zap,
      title: "Commercial & Residential Window Cleaning",
      description: "Crystal-clear windows using advanced water purification equipment - no chemicals, no streaks, no spots. Professional residential and commercial window washing that transforms your view and enhances your property's appearance.",
      benefits: [
        "Pure water purification",
        "Spot-free, streak-free results",
        "Residential & commercial service"
      ],
      bgColor: "bg-eco-red",
      keywords: "Michigan window cleaning, commercial window washing near me, residential window cleaners"
    },
    {
      icon: Home,
      title: "Commercial Carpet Cleaning",
      description: "Don't let dirty carpets harbor allergens and bacteria. Our IICRC Master Textile Cleaner certification means deep cleaning that extends carpet life by years, improves air quality, and saves thousands in replacement costs.",
      benefits: [
        "IICRC Master Textile Cleaner",
        "Extends carpet life 3-5 years",
        "Removes allergens & bacteria"
      ],
      bgColor: "bg-eco-black",
      keywords: "IICRC certified carpet cleaners Michigan, carpet cleaning near me, tile and grout cleaning Michigan"
    },
    {
      icon: SprayCan,
      title: "Commercial Power Washing",
      description: "Stop letting dirt and grime damage your property value. Our power washing and exterior cleaning services protect your investment, prevent costly repairs, and restore your building's professional appearance.",
      benefits: [
        "Prevents surface damage",
        "Increases property value",
        "Professional equipment"
      ],
      bgColor: "bg-eco-red-dark",
      keywords: "exterior home cleaning services Michigan, power washing near me, commercial building cleaning"
    },
    {
      icon: Building2,
      title: "Commercial Floor Care",
      description: "Tired of floors that look worn and unprofessional? Our strip, wax, and polish services create a lasting impression on customers while reducing slip hazards and extending floor life significantly.",
      benefits: [
        "Professional strip & wax",
        "Reduces slip hazards",
        "Long-lasting shine"
      ],
      bgColor: "bg-eco-gray",
      keywords: "commercial floor care near me, floor waxing Michigan, janitorial services"
    },
    {
      icon: GraduationCap,
      title: "Business Training & Consulting",
      description: "Struggling with cleaning costs and quality? Our Registered Building Service Manager expertise helps businesses implement cost-effective protocols, reduce expenses, and maintain superior cleanliness standards.",
      benefits: [
        "Registered Building Service Manager",
        "Reduces operational costs",
        "Industry best practices"
      ],
      bgColor: "bg-eco-accent",
      keywords: "business janitorial training consultants, cleaning consulting Michigan, facility management training"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-eco-black mb-6">Our Expert Services</h2>
          <p className="text-xl text-eco-gray max-w-3xl mx-auto">
            Comprehensive cleaning solutions for residential and commercial properties throughout Michigan and Indiana
          </p>
        </ScrollAnimation>

        <StaggerAnimation className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={index}
                whileHover={cardHover}
                className="transform transition-all duration-300"
              >
                <Card className="bg-eco-light-gray border border-gray-100 h-full cursor-pointer">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-eco-black mb-4">{service.title}</h3>
                  <p className="text-eco-gray mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    onClick={scrollToContact}
                    className="text-blue-600 font-semibold hover:text-green-600 transition-colors p-0 h-auto"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </StaggerAnimation>

        {/* Window Cleaning Highlight */}
        <ScrollAnimation animation="scaleIn" className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Complete Window Cleaning Excellence</h3>
              <p className="text-xl mb-6 text-blue-100">
                Using advanced water purification equipment, windows are cleaned impeccably with no chemicals and dry spot-free. Perfect results every time.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <span className="flex items-center">
                  <Sparkles className="mr-2 w-4 h-4" />
                  Spot-free results
                </span>
                <span className="flex items-center">
                  <Building2 className="mr-2 w-4 h-4" />
                  Residential & Commercial
                </span>
                <span className="flex items-center">
                  <Wrench className="mr-2 w-4 h-4" />
                  Advanced equipment
                </span>
                <span className="flex items-center">
                  <Droplet className="mr-2 w-4 h-4" />
                  Pure water cleaning
                </span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
