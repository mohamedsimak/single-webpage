import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#00d9ff"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
};

export const Hero = () => {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#00d9ff", "#a855f7", "#ec4899"],
            },
            links: {
              color: "#00d9ff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Gradient Blur Overlays */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-2">
                Hi, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="gradient-text">Mohamed Simak</span>
              </h1>
              <p className="text-2xl md:text-3xl text-foreground/80">
                Full Stack Developer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Building innovative web applications with modern technologies.
              Passionate about creating exceptional user experiences with clean,
              efficient code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" className="group">
                <a href="./resume.pdf" download="Mohamed_Simak_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
                </a>
              </Button>

              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  Let's Talk
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="pt-8"
            >
              <a href="#about" className="inline-flex items-center text-primary hover:text-primary/80 transition-smooth">
                <span className="mr-2">Scroll to explore</span>
                <ArrowDown className="h-5 w-5 animate-bounce" />
              </a>
            </motion.div>
          </motion.div>

          {/* 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-[400px] md:h-[600px]"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />
              <AnimatedSphere />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
