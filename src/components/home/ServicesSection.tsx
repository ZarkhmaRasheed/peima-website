import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Users,
  Building2,
  BookOpen,
  Lightbulb,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: GraduationCap,
    title: "School Management",
    description:
      "Comprehensive management of public sector schools with focus on quality education delivery and administrative excellence.",
    color: "from-blue-500 to-blue-600",
    link: "/services#management",
  },
  {
    icon: Users,
    title: "Teacher Training",
    description:
      "Professional development programs for educators to enhance teaching methodologies and student engagement techniques.",
    color: "from-green-500 to-green-600",
    link: "/services#training",
  },
  {
    icon: Building2,
    title: "Infrastructure Development",
    description:
      "Modernization of school facilities including classrooms, libraries, and digital learning environments.",
    color: "from-orange-500 to-orange-600",
    link: "/projects/infrastructure",
  },
  {
    icon: BookOpen,
    title: "Curriculum Support",
    description:
      "Implementation of updated curriculum standards and provision of quality learning materials for students.",
    color: "from-purple-500 to-purple-600",
    link: "/services#curriculum",
  },
  {
    icon: Lightbulb,
    title: "EdTech Integration",
    description:
      "Introduction of digital learning tools and smart classroom technologies to enhance educational outcomes.",
    color: "from-pink-500 to-pink-600",
    link: "/projects/edtech",
  },
  {
    icon: BarChart3,
    title: "Quality Assurance",
    description:
      "Regular monitoring and evaluation of educational standards through comprehensive assessment programs.",
    color: "from-cyan-500 to-cyan-600",
    link: "/services#quality",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-secondary text-primary rounded-full text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="section-title text-foreground mb-4">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive educational initiatives designed to transform Punjab's public education system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={service.link} className="block">
                <div className="service-card h-full group">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 gap-1 transition-all">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
