import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import studentsLearning from "@/assets/students-learning.jpg";
import trainingWorkshop from "@/assets/training-workshop.jpg";

const news = [
  {
    id: 1,
    title: "PEIMA Schools Achieve Record-Breaking QAT Results 2025",
    excerpt:
      "Students from PEIMA-managed schools demonstrate exceptional performance in Quality Assessment Test with a 15% improvement over previous year.",
    date: "April 21, 2025",
    category: "Achievement",
    image: studentsLearning,
    views: 1256,
  },
  {
    id: 2,
    title: "New Teacher Training Program Launched Across 36 Districts",
    excerpt:
      "Comprehensive professional development initiative aims to enhance teaching quality in all PEIMA schools across Punjab province.",
    date: "March 28, 2025",
    category: "Training",
    image: trainingWorkshop,
    views: 892,
  },
  {
    id: 3,
    title: "Free Textbook Distribution Completed for Academic Year 2025",
    excerpt:
      "Over 2 million textbooks distributed to students across PEIMA schools ensuring equal access to quality learning materials.",
    date: "March 14, 2025",
    category: "Resources",
    image: studentsLearning,
    views: 1534,
  },
];

const announcements = [
  {
    title: "Reallocation - PEIMA (PSSP) SPELL-XI Apply Online",
    date: "Apr 21, 2025",
    isNew: true,
  },
  {
    title: "INDENT OF FREE TEXT BOOKS 2025",
    date: "Mar 21, 2025",
    isNew: true,
  },
  {
    title: "Schedule and List of selected PEIMA Schools for LSA-2025",
    date: "Mar 14, 2025",
    isNew: false,
  },
  {
    title: "B-Form availability for All Students Appearing in QAT 2025",
    date: "Mar 13, 2025",
    isNew: false,
  },
  {
    title: "Date Sheet QAT 2025",
    date: "Mar 03, 2025",
    isNew: false,
  },
];

export function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Stay Updated
          </span>
          <h2 className="section-title text-foreground mb-4">News & Announcements</h2>
          <p className="section-subtitle">
            Latest updates, events, and important announcements from PEIMA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News */}
          <div className="lg:col-span-2 space-y-6">
            {news.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="news-card flex flex-col md:flex-row overflow-hidden group"
              >
                <div className="md:w-1/3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Eye className="h-4 w-4 mr-1" />
                      {item.views} views
                    </div>
                    <Link
                      to={`/news/${item.id}`}
                      className="flex items-center text-primary font-medium text-sm hover:gap-2 gap-1 transition-all"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Announcements Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl p-6 shadow-peima-sm h-fit"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-peima-gold rounded-full"></span>
              Latest Announcements
            </h3>
            <div className="space-y-4">
              {announcements.map((item, index) => (
                <Link
                  key={index}
                  to="/news"
                  className="block p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="flex items-start gap-2">
                    {item.isNew && (
                      <span className="shrink-0 px-2 py-0.5 bg-destructive text-destructive-foreground text-xs font-bold rounded animate-pulse">
                        NEW
                      </span>
                    )}
                    <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{item.date}</p>
                </Link>
              ))}
            </div>
            <Link to="/news">
              <Button variant="outline" className="w-full mt-6">
                View All Announcements
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
