import { useState } from "react";
import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Calendar, Eye, Search, Tag, ArrowRight, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import studentsLearning from "@/assets/students-learning.jpg";
import trainingWorkshop from "@/assets/training-workshop.jpg";
import aboutBuilding from "@/assets/about-building.jpg";

const newsItems = [
  {
    id: 1,
    title: "PEIMA Schools Achieve Record-Breaking QAT Results 2025",
    excerpt: "Students from PEIMA-managed schools demonstrate exceptional performance in Quality Assessment Test with a 15% improvement over previous year. The results highlight the effectiveness of our comprehensive educational initiatives.",
    content: "Full article content...",
    date: "April 21, 2025",
    category: "Achievement",
    image: studentsLearning,
    views: 1256,
    readTime: "5 min",
  },
  {
    id: 2,
    title: "New Teacher Training Program Launched Across 36 Districts",
    excerpt: "Comprehensive professional development initiative aims to enhance teaching quality in all PEIMA schools across Punjab province. Over 5,000 teachers will participate in the first phase.",
    content: "Full article content...",
    date: "March 28, 2025",
    category: "Training",
    image: trainingWorkshop,
    views: 892,
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Free Textbook Distribution Completed for Academic Year 2025",
    excerpt: "Over 2 million textbooks distributed to students across PEIMA schools ensuring equal access to quality learning materials. The initiative covered all grades from 1 to 12.",
    content: "Full article content...",
    date: "March 14, 2025",
    category: "Resources",
    image: aboutBuilding,
    views: 1534,
    readTime: "3 min",
  },
  {
    id: 4,
    title: "Digital Learning Centers Established in 100 Schools",
    excerpt: "PEIMA expands its EdTech initiative with state-of-the-art computer labs and smart classrooms in underserved areas. Each center is equipped with 30 computers and high-speed internet.",
    content: "Full article content...",
    date: "February 20, 2025",
    category: "Technology",
    image: studentsLearning,
    views: 756,
    readTime: "4 min",
  },
  {
    id: 5,
    title: "PEIMA Partners with International Education Organizations",
    excerpt: "Strategic partnerships formed with UNESCO and British Council to enhance educational quality and bring international best practices to Punjab's public schools.",
    content: "Full article content...",
    date: "February 10, 2025",
    category: "Partnership",
    image: trainingWorkshop,
    views: 623,
    readTime: "6 min",
  },
  {
    id: 6,
    title: "Annual Teacher Awards Ceremony Celebrates Excellence",
    excerpt: "Outstanding educators recognized for their dedication and innovative teaching methods at the annual PEIMA Teacher Awards. 50 teachers received awards across various categories.",
    content: "Full article content...",
    date: "January 25, 2025",
    category: "Event",
    image: aboutBuilding,
    views: 945,
    readTime: "3 min",
  },
];

const categories = ["All", "Achievement", "Training", "Resources", "Technology", "Partnership", "Event"];

export default function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews = newsItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
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
              News & Updates
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Stay informed about the latest developments at PEIMA
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search news..."
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

      {/* News Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="news-card group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Eye className="h-4 w-4 mr-1" />
                      {item.views} views
                    </div>
                    <Link to={`/news/${item.id}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No news found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
