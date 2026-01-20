import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutBuilding from "@/assets/about-building.jpg";

const projects = [
  {
    id: "pssp",
    title: "Punjab School Support Program (PSSP)",
    description:
      "A comprehensive initiative to improve the quality of education in low-performing public schools through enhanced management and resources.",
    stats: { schools: 1247, students: "500K+", districts: 36 },
    image: aboutBuilding,
    status: "Active",
  },
  {
    id: "edtech",
    title: "EdTech Integration Initiative",
    description:
      "Modernizing classrooms with digital learning tools, smart boards, and computer labs to prepare students for the digital age.",
    stats: { schools: 500, students: "150K+", districts: 20 },
    image: aboutBuilding,
    status: "Expanding",
  },
  {
    id: "teacher-excellence",
    title: "Teacher Excellence Program",
    description:
      "Continuous professional development for educators focusing on modern teaching methodologies and student-centered learning approaches.",
    stats: { schools: 1000, students: "18K+", districts: 36 },
    image: aboutBuilding,
    status: "Ongoing",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-peima-green-light text-peima-green rounded-full text-sm font-medium mb-4">
              Featured Initiatives
            </span>
            <h2 className="section-title text-foreground mb-4">Our Key Projects</h2>
            <p className="section-subtitle text-left max-w-xl">
              Flagship programs transforming education across Punjab's public schools
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/projects">
              <Button className="bg-primary hover:bg-primary/90">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Link to={`/projects/${project.id}`}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-peima-sm hover:shadow-peima-lg transition-all duration-500 h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                        project.status === "Active"
                          ? "bg-green-500 text-white"
                          : project.status === "Expanding"
                          ? "bg-blue-500 text-white"
                          : "bg-orange-500 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{project.stats.schools}</div>
                        <div className="text-xs text-muted-foreground">Schools</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{project.stats.students}</div>
                        <div className="text-xs text-muted-foreground">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{project.stats.districts}</div>
                        <div className="text-xs text-muted-foreground">Districts</div>
                      </div>
                    </div>
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
