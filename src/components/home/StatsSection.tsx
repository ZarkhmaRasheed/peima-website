import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stats = [
  {
    value: 1247,
    suffix: "+",
    label: "Schools Under Management",
    description: "Public sector schools managed across Punjab",
  },
  {
    value: 567892,
    suffix: "",
    label: "Students Enrolled",
    description: "Children receiving quality education",
  },
  {
    value: 18500,
    suffix: "+",
    label: "Teachers Trained",
    description: "Professional development programs completed",
  },
  {
    value: 36,
    suffix: "",
    label: "Districts Covered",
    description: "Comprehensive coverage across Punjab",
  },
];

const leadershipMessages = [
  {
    role: "Chairperson's Message",
    name: "Malik Shoaib Awan",
    image: "/person1.png",
    quotes: [
      {
        text: "The best of charity is when Muslim man gains knowledge, then he teaches it to his brothers (others).",
        author: "(Muhammad PBUH)"
      },
      {
        text: "Literacy is a bridge from misery to the hope, bulwark against poverty and a building block of development",
        author: "(Kofi Annan)"
      }
    ],
    description: "Punjab Education Foundation (PEF) is playing a leading role in the promotion of free quality education in the low income families through its private partners in all the 36 districts of the province. At the outset, I would point out that keeping in view PEF's immaculate performance and success in reaching out to the needy segments of the society, this Foundation has been entrusted by the Punjab Government to enrol around 2.5 million underprivileged children."
  },
  {
    role: "Managing Director's Message",
    name: "Mr. Shahid Farid",
    image: "/person2.png",
    quotes: [
      {
        text: "The best of charity is when Muslim man gains knowledge, then he teaches it to his brothers (others).",
        author: "(Muhammad PBUH)"
      },
      {
        text: "Literacy is a bridge from misery to the hope, bulwark against poverty and a building block of development",
        author: "(Kofi Annan)"
      }
    ],
    description: "Punjab Education Foundation (PEF) is playing a leading role in the promotion of free quality education in the low income families through its private partners in all the 36 districts of the province. At the outset, I would point out that keeping in view PEF's immaculate performance and success in reaching out to the needy segments of the society, this Foundation has been entrusted by the Punjab Government to enrol around 2.5 million underprivileged children."
  },
  {
    role: "Technocrat's Message",
    name: "Dr. Basit Khan",
    image: "/person3.png",
    quotes: [
      {
        text: "The best of charity is when Muslim man gains knowledge, then he teaches it to his brothers (others).",
        author: "(Muhammad PBUH)"
      },
      {
        text: "Literacy is a bridge from misery to the hope, bulwark against poverty and a building block of development",
        author: "(Kofi Annan)"
      }
    ],
    description: "Punjab Education Foundation (PEF) is playing a leading role in the promotion of free quality education in the low income families through its private partners in all the 36 districts of the province. At the outset, I would point out that keeping in view PEF's immaculate performance and success in reaching out to the needy segments of the society, this Foundation has been entrusted by the Punjab Government to enrol around 2.5 million underprivileged children."
  }
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % leadershipMessages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + leadershipMessages.length) % leadershipMessages.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary via-peima-navy to-peima-navy-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-peima-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-peima-sky/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-primary-foreground mb-4">Our Impact in Numbers</h2>
          <p className="section-subtitle text-primary-foreground/70">
            Transforming education across Punjab with measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stat-card group"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2 group-hover:text-peima-gold transition-colors">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Sliding Leadership Message Section */}
        <div className="max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="flex flex-col md:flex-row min-h-[500px]"
            >
              {/* Image Container with Controls */}
              <div className="w-full md:w-2/5 relative overflow-hidden group">
                <img
                  src={leadershipMessages[currentIndex].image}
                  alt={leadershipMessages[currentIndex].name}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 transition-colors z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 transition-colors z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Text Content Container */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-green-600 mb-2">
                  {leadershipMessages[currentIndex].role}
                </h3>
                <h4 className="text-4xl font-bold text-green-500 mb-8">
                  {leadershipMessages[currentIndex].name}
                </h4>

                <div className="space-y-6 mb-8">
                  {leadershipMessages[currentIndex].quotes.map((quote, idx) => (
                    <div key={idx} className="space-y-2">
                      <p className="text-lg font-semibold text-green-600 italic">
                        "{quote.text}"
                      </p>
                      <span className="text-green-500 font-bold block">
                        {quote.author}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">
                  {leadershipMessages[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

