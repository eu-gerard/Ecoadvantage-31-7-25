import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/scroll-animation";
import { buttonHover, cardHover } from "@/lib/animations";
import { Phone, MapPin, Send, Lock, CheckCircle, Leaf, Tag, Shield } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-eco-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-eco-black mb-6 text-overflow-prevent">
            Ready to Transform Your Property? Let's Talk!
          </h2>
          <p className="text-xl text-eco-gray max-w-3xl mx-auto mb-4">
            <strong>Limited availability</strong> - We only take on a select number of projects each month to ensure exceptional quality. Don't wait until dirt and grime cause permanent damage to your investment.
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get your free consultation today and discover how much you could save with professional cleaning that extends the life of your carpets, protects your surfaces, and enhances your property value.
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollAnimation animation="slideLeft">
            <motion.div whileHover={cardHover}>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-eco-black mb-6">Request Your Free Estimate</h3>
                  <form
                    action="https://formsubmit.co/kevin@ecoadvantageinc.com"
                    method="POST"
                    className="space-y-6"
                  >
                    <input type="hidden" name="_subject" value="New Message from Website!" />
                    <input type="hidden" name="_next" value="https://ecoadvantageinc.com/thank-you.html" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">Your Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your full name"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service" className="text-sm font-medium text-gray-700 mb-2">Service Needed *</Label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-eco-red focus:border-eco-red"
                      >
                        <option value="" disabled selected>Choose Your Service</option>
                        <option value="Commercial & Residential Window Cleaning">Commercial & Residential Window Cleaning</option>
                        <option value="Commercial Carpet Cleaning">Commercial Carpet Cleaning</option>
                        <option value="Commercial Power Washing">Commercial Power Washing</option>
                        <option value="Commercial Floor Care">Commercial Floor Care</option>
                        <option value="Tile and Grout Restoration">Tile and Grout Restoration</option>
                        <option value="Pharmacy Compound Lab Cleaning">Pharmacy Compound Lab Cleaning</option>
                        <option value="Business Training & Consulting">Business Training & Consulting</option>
                        <option value="Multiple Services">Multiple Services</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">Project Details</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your cleaning needs, property size, specific requirements, etc."
                        rows={4}
                        className="mt-2"
                      />
                    </div>

                    <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                      <Button
                        type="submit"
                        className="w-full bg-eco-red hover:bg-eco-red-dark text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                        size="lg"
                      >
                        <Send className="mr-2 w-5 h-5" />
                        Book A Free Consultation Now
                      </Button>
                    </motion.div>

                    <p className="text-sm text-gray-600 text-center flex items-center justify-center">
                      <Lock className="w-4 h-4 mr-1" />
                      Your information is secure and will never be shared
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollAnimation>

          {/* Contact Information Section Unchanged */}
          {/* ... Keep as-is ... */}
        </div>
      </div>
    </section>
  );
}
