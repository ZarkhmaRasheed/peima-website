import { useState } from "react";
import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Search, Filter, MapPin, Users, Calendar, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutBuilding from "@/assets/about-building.jpg";
import studentsLearning from "@/assets/students-learning.jpg";

const projects = [
  {
    id: "pssp",
    title: "Punjab School Support Program (PSSP)",
    description: "A flagship program managing low-performing public schools to enhance educational outcomes through improved management, teacher training, and infrastructure development.",
    image: aboutBuilding,
    category: "School Management",
    status: "Active",
    schools: 1247,
    students: "500K+",
    districts: 36,
    startDate: "2016",
  },
  {
    id: "edtech",
    title: "EdTech Integration Initiative",
    description: "Modernizing classrooms with digital learning tools, smart boards, tablets, and computer labs to prepare students for the digital age and enhance learning outcomes.",
    image: studentsLearning,
    category: "Technology",
    status: "Expanding",
    schools: 500,
    students: "150K+",
    districts: 20,
    startDate: "2020",
  },
  {
    id: "teacher-excellence",
    title: "Teacher Excellence Program",
    description: "Comprehensive professional development for educators focusing on modern teaching methodologies, assessment techniques, and student-centered learning approaches.",
    image: aboutBuilding,
    category: "Training",
    status: "Ongoing",
    schools: 1000,
    students: "18K+ Teachers",
    districts: 36,
    startDate: "2018",
  },
  {
    id: "infrastructure",
    title: "School Infrastructure Development",
    description: "Renovation and modernization of school buildings, construction of new facilities, and provision of essential amenities for better learning environments.",
    image: studentsLearning,
    category: "Infrastructure",
    status: "Active",
    schools: 800,
    students: "400K+",
    districts: 30,
    startDate: "2019",
  },
  {
    id: "assessment",
    title: "Quality Assessment Testing (QAT)",
    description: "Regular evaluation of student learning outcomes through standardized assessments to identify gaps and improve educational quality across schools.",
    image: aboutBuilding,
    category: "Assessment",
    status: "Annual",
    schools: 1247,
    students: "500K+",
    districts: 36,
    startDate: "2017",
  },
  {
    id: "textbooks",
    title: "Free Textbook Distribution",
    description: "Provision of free textbooks and learning materials to all students in PEIMA-managed schools, ensuring equal access to quality educational resources.",
    image: studentsLearning,
    category: "Resources",
    status: "Yearly",
    schools: 1247,
    students: "500K+",
    districts: 36,
    startDate: "2016",
  },
];

const categories = ["All", "School Management", "Technology", "Training", "Infrastructure", "Assessment", "Resources"];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Our Projects
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Explore our initiatives transforming education across Punjab
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-[72px] z-30 glass">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 border-2 border-secondary focus:border-primary rounded-full"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full ${selectedCategory === category ? "bg-primary" : ""}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-peima-sm hover:shadow-peima-lg transition-all duration-500 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      project.status === "Active" ? "bg-green-500 text-white" :
                      project.status === "Expanding" ? "bg-blue-500 text-white" :
                      "bg-orange-500 text-white"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-border mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{project.schools}</div>
                      <div className="text-xs text-muted-foreground">Schools</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{project.students}</div>
                      <div className="text-xs text-muted-foreground">Beneficiaries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{project.districts}</div>
                      <div className="text-xs text-muted-foreground">Districts</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      Since {project.startDate}
                    </div>
                    <Link to={`/projects/${project.id}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                        Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
