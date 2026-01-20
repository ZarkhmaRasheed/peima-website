import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Target, Eye, Award } from "lucide-react";
import aboutBuilding from "@/assets/about-building.jpg";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-peima-lg">
              <img
                src={aboutBuilding}
                alt="PEIMA Office"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-peima-lg max-w-[280px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-peima-gold rounded-full flex items-center justify-center shrink-0">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-secondary text-primary rounded-full text-sm font-medium mb-4">
              About PEIMA
            </span>
            <h2 className="section-title text-foreground mb-6">
              Transforming Education in Punjab
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The Punjab Education Initiatives Management Authority (PEIMA) is a government body 
              dedicated to designing, implementing, and managing reformatory initiatives in the 
              education sector. We focus on enhancing educational quality in public sector schools 
              through financial and technical assistance.
            </p>

            {/* Vision & Mission Cards */}
            <div className="space-y-6 mb-8">
              <div className="flex gap-4 p-4 bg-secondary/50 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Our Vision</h4>
                  <p className="text-sm text-muted-foreground">
                    To become a leading institution for quality public education in Pakistan, 
                    setting benchmarks for educational excellence.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-secondary/50 rounded-xl">
                <div className="w-12 h-12 bg-peima-gold rounded-lg flex items-center justify-center shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Our Mission</h4>
                  <p className="text-sm text-muted-foreground">
                    Promoting free quality education through innovative programs, teacher 
                    development, and infrastructure enhancement.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Quality Assurance Programs",
                "Teacher Professional Development",
                "Infrastructure Modernization",
                "Digital Learning Integration",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-peima-green" />
                  <span className="text-sm font-medium text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
