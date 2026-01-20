import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-peima-navy-light/30 to-transparent" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-peima-gold/10 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-peima-sky/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-2xl p-8 shadow-peima-lg"
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">Get In Touch</h3>
            <p className="text-muted-foreground mb-6">
              Have questions? We'd love to hear from you. Send us a message!
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-secondary border-0 py-6 input-focus"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-secondary border-0 py-6 input-focus"
                />
              </div>
              <Input
                placeholder="Subject"
                className="bg-secondary border-0 py-6 input-focus"
              />
              <Textarea
                placeholder="Your Message"
                className="bg-secondary border-0 min-h-[120px] input-focus"
              />
              <Button className="w-full bg-gradient-to-r from-peima-gold to-peima-gold-dark text-primary font-semibold py-6 hover:shadow-peima-gold">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground"
          >
            <span className="inline-block px-4 py-1 bg-peima-gold/20 text-peima-gold rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We're Here to Help You
            </h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Whether you have questions about our programs, want to collaborate, or need 
              assistance with educational initiatives, our team is ready to support you.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-peima-gold rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Location</h4>
                  <p className="text-primary-foreground/70 text-sm">
                    12-A Wahdat Road, Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-peima-gold rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone Number</h4>
                  <p className="text-primary-foreground/70 text-sm">
                    +92 42 35761999
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-peima-gold rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Address</h4>
                  <p className="text-primary-foreground/70 text-sm">
                    info@peima.punjab.gov.pk
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-peima-gold rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Working Hours</h4>
                  <p className="text-primary-foreground/70 text-sm">
                    Mon - Fri: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <Link to="/contact">
              <Button variant="outline" className="border-peima-gold text-peima-gold hover:bg-peima-gold hover:text-primary">
                View Contact Page
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
