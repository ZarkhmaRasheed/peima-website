import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import {
  GraduationCap,
  Users,
  Building2,
  BookOpen,
  Lightbulb,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "management",
    icon: GraduationCap,
    title: "School Management",
    description: "Comprehensive management of public sector schools with focus on quality education delivery and administrative excellence.",
    features: [
      "Academic supervision and monitoring",
      "Administrative management support",
      "Resource allocation and optimization",
      "Performance evaluation systems",
      "Parent-teacher engagement programs",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "training",
    icon: Users,
    title: "Teacher Training & Development",
    description: "Professional development programs for educators to enhance teaching methodologies and student engagement techniques.",
    features: [
      "Continuous professional development",
      "Subject-specific training workshops",
      "Classroom management skills",
      "Assessment and evaluation techniques",
      "Technology integration training",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    id: "infrastructure",
    icon: Building2,
    title: "Infrastructure Development",
    description: "Modernization of school facilities including classrooms, libraries, and digital learning environments.",
    features: [
      "Classroom renovation and construction",
      "Library and lab establishment",
      "Computer lab setup",
      "Furniture and equipment provision",
      "Sanitation facilities improvement",
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "curriculum",
    icon: BookOpen,
    title: "Curriculum Support",
    description: "Implementation of updated curriculum standards and provision of quality learning materials for students.",
    features: [
      "Free textbook distribution",
      "Supplementary learning materials",
      "Curriculum alignment support",
      "Assessment tools development",
      "Activity-based learning resources",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "edtech",
    icon: Lightbulb,
    title: "EdTech Integration",
    description: "Introduction of digital learning tools and smart classroom technologies to enhance educational outcomes.",
    features: [
      "Smart classroom implementation",
      "Digital content development",
      "E-learning platforms",
      "Educational apps and tools",
      "Virtual learning support",
    ],
    color: "from-pink-500 to-pink-600",
  },
  {
    id: "quality",
    icon: BarChart3,
    title: "Quality Assurance",
    description: "Regular monitoring and evaluation of educational standards through comprehensive assessment programs.",
    features: [
      "Quality Assessment Testing (QAT)",
      "Learning outcome measurement",
      "School performance monitoring",
      "Data-driven improvement plans",
      "External evaluation support",
    ],
    color: "from-cyan-500 to-cyan-600",
  },
];

export default function Services() {
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
              Our Services
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Comprehensive educational services designed to transform Punjab's public schools
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                  >
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-peima-green shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button className="bg-primary hover:bg-primary/90">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div
                    className={`relative w-full h-96 rounded-2xl bg-gradient-to-br ${service.color} p-8 flex items-center justify-center`}
                  >
                    <service.icon className="h-40 w-40 text-white/30" />
                    <div className="absolute inset-0 bg-black/10 rounded-2xl" />
                  </div>
                  <div
                    className={`absolute -bottom-6 ${
                      index % 2 === 1 ? "-right-6" : "-left-6"
                    } w-32 h-32 bg-peima-gold rounded-2xl flex items-center justify-center`}
                  >
                    <span className="text-4xl font-bold text-primary">0{index + 1}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your School?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Contact us to learn how PEIMA can support your educational institution
            </p>
            <Link to="/contact">
              <Button className="btn-hero">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
