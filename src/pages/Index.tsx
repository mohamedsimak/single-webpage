import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <SocialLinks />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="relative py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Portfolio. Built with React & Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
