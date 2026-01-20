import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Check, Target, Eye, Award, Users, Building, GraduationCap } from "lucide-react";
import aboutBuilding from "@/assets/about-building.jpg";
import trainingWorkshop from "@/assets/training-workshop.jpg";

const objectives = [
  "Design, implement and manage reformatory initiatives in the education sector",
  "Provide financial and technical assistance to public sector schools",
  "Enhance the quality of education through innovative programs",
  "Develop professional capacity of teachers and school management",
  "Introduce technology-enabled learning solutions",
  "Ensure accountability and transparency in educational management",
  "Foster public-private partnerships in education",
  "Monitor and evaluate educational outcomes regularly",
];

const team = [
  { name: "Chairman PEIMA", role: "Leadership", icon: Award },
  { name: "Managing Director", role: "Operations", icon: Users },
  { name: "Director Academics", role: "Education", icon: GraduationCap },
  { name: "Director Admin", role: "Administration", icon: Building },
];

export default function About() {
  return (
    <MainLayout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              About PEIMA
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Learn about our mission to transform education in Punjab through innovative initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 bg-secondary text-primary rounded-full text-sm font-medium mb-4">
                Introduction
              </span>
              <h2 className="section-title text-foreground mb-6">
                Punjab Education Initiatives Management Authority
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                PEIMA was established by the Government of Punjab to manage and reform the public 
                education sector through innovative programs and partnerships. We work closely with 
                schools, teachers, and communities to ensure every child in Punjab has access to 
                quality education.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our organization oversees multiple programs including the Punjab School Support 
                Program (PSSP), which manages over 1,200 low-performing schools to enhance educational 
                outcomes through improved management and resources.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: "2012", label: "Established" },
                  { value: "1247+", label: "Schools" },
                  { value: "36", label: "Districts" },
                ].map((stat, i) => (
                  <div key={i} className="bg-secondary rounded-xl px-6 py-4 text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={aboutBuilding}
                alt="PEIMA Building"
                className="rounded-2xl shadow-peima-lg w-full h-[450px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-peima-gold p-6 rounded-xl">
                <Award className="h-12 w-12 text-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl shadow-peima-sm"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a premier institution for quality public education in Pakistan, 
                setting benchmarks for educational excellence, innovation, and inclusive growth. 
                We envision a Punjab where every child, regardless of background, has access to 
                world-class education that prepares them for the challenges of tomorrow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-peima-sm"
            >
              <div className="w-16 h-16 bg-peima-gold rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To promote free, quality education in public sector schools through financial 
                and technical assistance, implementing reformatory and dynamic initiatives. 
                We are committed to empowering teachers, modernizing infrastructure, and 
                creating an environment where learning thrives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section id="objectives" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-secondary text-primary rounded-full text-sm font-medium mb-4">
              What We Aim For
            </span>
            <h2 className="section-title text-foreground mb-4">Our Objectives</h2>
            <p className="section-subtitle">
              Clear goals driving our mission to transform education in Punjab
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-peima-sm hover:shadow-peima-md transition-shadow"
              >
                <div className="w-8 h-8 bg-peima-green-light rounded-full flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-peima-green" />
                </div>
                <p className="text-foreground">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="organogram" className="section-padding bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-peima-gold/20 text-peima-gold rounded-full text-sm font-medium mb-4">
              Leadership
            </span>
            <h2 className="section-title text-primary-foreground mb-4">Our Team</h2>
            <p className="section-subtitle text-primary-foreground/70">
              Dedicated professionals leading the education reform movement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-white/20 transition-colors"
              >
                <div className="w-20 h-20 bg-peima-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <member.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-1">{member.name}</h3>
                <p className="text-primary-foreground/70 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
