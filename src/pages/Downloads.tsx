import { useState } from "react";
import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Calendar, FileText, Download, Search, Filter, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const downloads = [
  {
    id: 1,
    title: "PEIMA Annual Report 2024-25",
    description: "Comprehensive annual report covering all PEIMA activities, achievements, and financial statements.",
    category: "Reports",
    fileType: "PDF",
    fileSize: "5.2 MB",
    date: "April 2025",
    downloads: 1256,
  },
  {
    id: 2,
    title: "Teacher Training Manual 2025",
    description: "Complete guide for professional development programs and training methodologies.",
    category: "Training",
    fileType: "PDF",
    fileSize: "8.4 MB",
    date: "March 2025",
    downloads: 892,
  },
  {
    id: 3,
    title: "QAT 2025 Date Sheet",
    description: "Schedule and guidelines for Quality Assessment Test 2025 for all grades.",
    category: "Assessments",
    fileType: "PDF",
    fileSize: "1.2 MB",
    date: "March 2025",
    downloads: 2345,
  },
  {
    id: 4,
    title: "Free Textbook Distribution List 2025",
    description: "Complete list of textbooks to be distributed to PEIMA schools for academic year 2025.",
    category: "Resources",
    fileType: "PDF",
    fileSize: "3.1 MB",
    date: "February 2025",
    downloads: 567,
  },
  {
    id: 5,
    title: "School Infrastructure Guidelines",
    description: "Standards and specifications for school building renovation and construction projects.",
    category: "Guidelines",
    fileType: "PDF",
    fileSize: "12.8 MB",
    date: "January 2025",
    downloads: 432,
  },
  {
    id: 6,
    title: "PEIMA School Application Form",
    description: "Application form for schools seeking to join the PEIMA management program.",
    category: "Forms",
    fileType: "PDF",
    fileSize: "0.8 MB",
    date: "January 2025",
    downloads: 1890,
  },
  {
    id: 7,
    title: "EdTech Implementation Handbook",
    description: "Guide for implementing digital learning tools and technologies in classrooms.",
    category: "Training",
    fileType: "PDF",
    fileSize: "6.5 MB",
    date: "December 2024",
    downloads: 678,
  },
  {
    id: 8,
    title: "Student Performance Report Template",
    description: "Standard template for tracking and reporting student academic performance.",
    category: "Forms",
    fileType: "XLSX",
    fileSize: "0.5 MB",
    date: "December 2024",
    downloads: 2100,
  },
];

const categories = ["All", "Reports", "Training", "Assessments", "Resources", "Guidelines", "Forms"];

export default function Downloads() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDownloads = downloads.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
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
              Downloads
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Access important documents, forms, and resources
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
                placeholder="Search downloads..."
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

      {/* Downloads List */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            {filteredDownloads.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 shadow-peima-sm hover:shadow-peima-md transition-all group"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <FileText className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="px-2 py-1 bg-secondary rounded-full text-xs font-medium">
                            {item.category}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {item.date}
                          </span>
                          <span>{item.fileType} • {item.fileSize}</span>
                          <span className="flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            {item.downloads} downloads
                          </span>
                        </div>
                      </div>
                      <Button className="shrink-0 bg-primary hover:bg-primary/90">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredDownloads.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No downloads found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
