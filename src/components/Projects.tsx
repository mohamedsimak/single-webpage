import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with payment integration, real-time inventory, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with forecasts, interactive maps, and location-based recommendations.",
    tech: ["React", "OpenWeather API", "Chart.js"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "Content management system for portfolios with customizable templates and SEO optimization.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    github: "#",
    live: "#",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in building modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className={`bg-card rounded-2xl overflow-hidden border border-border/50 transition-all duration-500 ${
                  hoveredIndex === index ? "transform -translate-y-2 shadow-2xl glow-lg" : ""
                }`}
                style={{
                  transform: hoveredIndex === index ? "rotateX(5deg) rotateY(-5deg)" : "",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button variant="heroOutline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button variant="hero" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
