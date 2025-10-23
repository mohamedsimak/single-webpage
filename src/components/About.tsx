import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code following best practices",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description: "Creating beautiful, responsive interfaces with attention to detail",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 mb-12"
          >
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              I'm a passionate full-stack developer with expertise in building modern web
              applications. I love turning complex problems into simple, beautiful, and
              intuitive solutions.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I create
              seamless experiences that users love. I'm constantly learning and adapting
              to new technologies to stay at the forefront of web development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/30 hover:border-primary/50 transition-smooth group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
