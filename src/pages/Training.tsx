import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Calendar, Clock, Users, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import trainingWorkshop from "@/assets/training-workshop.jpg";

const trainings = [
  {
    id: 1,
    title: "Advanced Classroom Management Techniques",
    description: "Learn effective strategies for managing diverse classrooms, maintaining discipline, and creating engaging learning environments.",
    duration: "5 Days",
    participants: "50",
    location: "Lahore Training Center",
    date: "May 15-19, 2025",
    status: "Upcoming",
    topics: ["Behavior Management", "Student Engagement", "Conflict Resolution", "Time Management"],
  },
  {
    id: 2,
    title: "Digital Teaching Tools Workshop",
    description: "Hands-on training on using digital tools, smart boards, and educational apps to enhance teaching effectiveness.",
    duration: "3 Days",
    participants: "40",
    location: "Multan Training Center",
    date: "May 22-24, 2025",
    status: "Upcoming",
    topics: ["Smart Board Usage", "Educational Apps", "Online Assessment", "Virtual Classrooms"],
  },
  {
    id: 3,
    title: "Assessment & Evaluation Techniques",
    description: "Comprehensive training on designing assessments, analyzing results, and using data to improve student outcomes.",
    duration: "4 Days",
    participants: "45",
    location: "Faisalabad Training Center",
    date: "June 3-6, 2025",
    status: "Upcoming",
    topics: ["Assessment Design", "Data Analysis", "Feedback Strategies", "Reporting Methods"],
  },
  {
    id: 4,
    title: "Inclusive Education Training",
    description: "Training on supporting students with diverse learning needs and creating inclusive classroom environments.",
    duration: "3 Days",
    participants: "35",
    location: "Rawalpindi Training Center",
    date: "June 10-12, 2025",
    status: "Registration Open",
    topics: ["Special Needs", "Differentiated Instruction", "Accessibility", "Support Strategies"],
  },
];

export default function Training() {
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
              Training & Workshops
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Professional development programs for educators across Punjab
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
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
                Teacher Excellence
              </span>
              <h2 className="section-title text-foreground mb-6">
                Empowering Educators for Excellence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                PEIMA's training programs are designed to enhance the professional capabilities 
                of teachers and school administrators. Our comprehensive workshops cover modern 
                teaching methodologies, technology integration, assessment techniques, and 
                classroom management strategies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "18,500+", label: "Teachers Trained" },
                  { value: "500+", label: "Workshops Conducted" },
                  { value: "36", label: "Districts Covered" },
                  { value: "95%", label: "Satisfaction Rate" },
                ].map((stat, i) => (
                  <div key={i} className="bg-secondary/50 rounded-xl p-4 text-center">
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
            >
              <img
                src={trainingWorkshop}
                alt="Training Workshop"
                className="rounded-2xl shadow-peima-lg w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Trainings */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-peima-gold/20 text-peima-gold-dark rounded-full text-sm font-medium mb-4">
              Upcoming Sessions
            </span>
            <h2 className="section-title text-foreground mb-4">Training Programs</h2>
            <p className="section-subtitle">
              Register for upcoming professional development workshops
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainings.map((training, index) => (
              <motion.div
                key={training.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-peima-sm hover:shadow-peima-lg transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      training.status === "Upcoming" 
                        ? "bg-blue-100 text-blue-700" 
                        : "bg-green-100 text-green-700"
                    }`}>
                      {training.status}
                    </span>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {training.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {training.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {training.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {training.topics.map((topic, i) => (
                      <span key={i} className="px-2 py-1 bg-secondary text-foreground text-xs rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border mb-4">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {training.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {training.participants} slots
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {training.location.split(" ")[0]}
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
