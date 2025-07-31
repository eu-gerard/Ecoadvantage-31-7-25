import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, CheckCircle, Award } from "lucide-react";
import { motion } from "framer-motion";
import ScrollAnimation, { StaggerAnimation } from "@/components/scroll-animation";
import { cardHover } from "@/lib/animations";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Kelly Paluf",
      role: "Residential Customer",
      content: "Kevin and his team are very professional, personable, and careful workers. I especially like the cleaning products for windows and carpets that are eco-friendly. Kevin is very helpful and knowledgeable regarding the cleaning industry and always explains the products he uses. Our windows sparkle and stay clean for several months. The carpets are rejuvenated, stain-free, and clean without harsh chemicals.",
      initials: "KP"
    },
    {
      name: "Jeremy Lemke", 
      role: "Commercial Client",
      content: "Kevin is extremely knowledgeable in the area of building maintenance ranging from simple housekeeping to the most difficult troubleshooting. He is results driven and a master at the time and material control without sacrificing quality and performance. He has been a student of the environmental impact of cleaning for many years.",
      initials: "JL"
    }
  ];

  const trustIndicators = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete liability coverage for your peace of mind",
      color: "bg-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Guaranteed", 
      description: "We stand behind our work with a 100% guarantee",
      color: "bg-green-600"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Industry recognition for excellence and innovation",
      color: "bg-indigo-600"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from satisfied customers who trust EcoAdvantage for their cleaning needs
          </p>
        </ScrollAnimation>

        <StaggerAnimation className="grid md:grid-cols-2 gap-8 mb-16" staggerDelay={0.2}>
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} whileHover={cardHover} className="transform transition-all duration-300">
              <Card className="bg-slate-50 border border-gray-100 h-full cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerAnimation>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {trustIndicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div key={index} className="p-6">
                <div className={`w-16 h-16 ${indicator.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{indicator.title}</h3>
                <p className="text-gray-600">{indicator.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
