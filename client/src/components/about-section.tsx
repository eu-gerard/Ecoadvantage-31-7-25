import { Card, CardContent } from "@/components/ui/card";
import { Award, Tag, Users, GraduationCap, Trophy, Contact, Star, Headphones, Calculator, FileText, Clock } from "lucide-react";
import { motion } from "framer-motion";
import ScrollAnimation, { StaggerAnimation } from "@/components/scroll-animation";
import { cardHover } from "@/lib/animations";
import kevinImage from "@assets/image_1752412760853.png";
import taylorImage from "@assets/image4_1752361737131.jpeg";
import celesteImage from "@assets/celeste-image.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-eco-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-eco-black mb-6">Meet Our Expert Team</h2>
          <p className="text-xl text-eco-gray max-w-3xl mx-auto">
            Three generations of cleaning excellence, backed by industry-leading certifications and unwavering commitment to quality
          </p>
        </ScrollAnimation>

        {/* Kevin's Bio */}
        <ScrollAnimation animation="slideLeft" className="mb-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-8 lg:mb-0">
              <img 
                src={kevinImage} 
                alt="Kevin Hargis, President of EcoAdvantage Inc." 
                className="rounded-2xl shadow-xl w-full h-auto" 
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-3xl font-bold text-eco-black mr-4">Kevin Hargis</h3>
                <span className="bg-eco-red text-white px-4 py-2 rounded-full text-sm font-semibold">President & Founder</span>
              </div>
              <p className="text-lg text-eco-gray mb-6 leading-relaxed">
                Kevin has been in the building service industry for over 36 years and has made it a priority to learn, grow, and help others. 
                With designations such as Master Textile Cleaner and Registered Building Service Manager, Kevin gained more than 11 certifications 
                in cleaning-related tasks through weeks of hands-on and classroom education.
              </p>
              <p className="text-lg text-eco-gray mb-6 leading-relaxed">
                Kevin also serves on the Board of Directors for the International Window Cleaning Association and gives educational classes 
                at multiple industry events each year. His passion for the industry and commitment to excellence drives everything we do at EcoAdvantage.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <Award className="w-4 h-4 mr-2" />
                  <span>Master Textile Cleaner</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Tag className="w-4 h-4 mr-2" />
                  <span>Registered Building Service Manager</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>IWCA Board of Directors</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  <span>11+ Industry Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Taylor's Bio */}
        <ScrollAnimation animation="slideRight" className="mb-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-8 lg:mb-0">
              <img 
                src={taylorImage} 
                alt="Taylor, Window Cleaning Specialist" 
                className="rounded-2xl shadow-xl w-full h-auto" 
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-3xl font-bold text-eco-black mr-4">Taylor</h3>
                <span className="bg-eco-red text-white px-4 py-2 rounded-full text-sm font-semibold">Window Cleaning Specialist</span>
              </div>
              <p className="text-lg text-eco-gray mb-6 leading-relaxed">
                A third-generation window cleaner, Taylor takes pride in her history and works hard to continue the family tradition of excellence. 
                She follows in her father's footsteps, earning multiple training certificates and certifications each year to stay at the forefront of industry best practices.
              </p>
              <p className="text-lg text-eco-gray mb-6 leading-relaxed">
                In 2021, Taylor earned the prestigious award of Window Cleaner of the Year from the International Window Cleaning Association, 
                accepting the award at the annual convention awards banquet in Orlando, Florida. This recognition represents the highest honor in our industry.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <Trophy className="w-4 h-4 mr-2" />
                  <span>2021 Window Cleaner of the Year</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Contact className="w-4 h-4 mr-2" />
                  <span>Third-Generation Professional</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Tag className="w-4 h-4 mr-2" />
                  <span>Multiple Annual Certifications</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Star className="w-4 h-4 mr-2" />
                  <span>IWCA Award Recipient</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Celeste's Bio */}
        <ScrollAnimation animation="slideLeft">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-8 lg:mb-0">
              <img 
                src={celesteImage} 
                alt="Celeste, Customer Service Manager" 
                className="rounded-2xl shadow-xl w-full h-auto" 
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-3xl font-bold text-eco-black mr-4">Celeste</h3>
                <span className="bg-eco-red text-white px-4 py-2 rounded-full text-sm font-semibold">Customer Service Manager</span>
              </div>
              <p className="text-lg text-eco-gray mb-6 leading-relaxed">
                Celeste's background in customer service and accounting allows her to give customers the information they need quickly and accurately. 
                From certificates of insurance to invoices and other customer needs, Celeste has the answer.
              </p>
              <p className="text-lg text-eco-gray mb-6 leading-relaxed">
                Her attention to detail and commitment to customer satisfaction ensures that every interaction with EcoAdvantage is professional, efficient, and helpful. 
                Celeste is your go-to person for all administrative needs and customer inquiries.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <Headphones className="w-4 h-4 mr-2" />
                  <span>Expert Customer Service</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Calculator className="w-4 h-4 mr-2" />
                  <span>Accounting Background</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Insurance & Documentation</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Quick & Accurate Service</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Company Stats */}
        <ScrollAnimation animation="scaleIn" className="mt-20">
          <motion.div whileHover={cardHover}>
            <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-eco-red mb-2">35+</div>
                <div className="text-eco-gray font-medium">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-eco-red mb-2">11+</div>
                <div className="text-eco-gray font-medium">Industry Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-eco-red mb-2">3</div>
                <div className="text-eco-gray font-medium">Generations of Service</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-eco-red mb-2">100%</div>
                <div className="text-eco-gray font-medium">Customer Satisfaction</div>
              </div>
            </div>
          </CardContent>
            </Card>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
