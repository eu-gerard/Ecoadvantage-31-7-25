
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-eco-light-gray flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <Card className="shadow-xl">
          <CardContent className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-green-600" />
            </motion.div>
            
            <h1 className="text-2xl font-bold text-eco-black mb-4">
              Thank You for Your Submission!
            </h1>
            
            <p className="text-gray-600 mb-6">
              We've received your request and will contact you within 24 hours to schedule your free consultation.
            </p>
            
            <div className="bg-eco-light-gray p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Need immediate assistance?</strong>
              </p>
              <a 
                href="tel:12698496236" 
                className="flex items-center justify-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                (269) 849-6236
              </a>
            </div>
            
            <div className="space-y-3">
              <Button 
                onClick={() => window.location.href = '/'}
                className="w-full bg-eco-red hover:bg-eco-red-dark text-white"
              >
                <Home className="w-4 h-4 mr-2" />
                Return to Homepage
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
