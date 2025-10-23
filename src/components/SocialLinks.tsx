import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed left-8 bottom-8 z-50 hidden lg:flex flex-col gap-4"
    >
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.2, x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-smooth group"
          aria-label={social.label}
        >
          <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
        </motion.a>
      ))}
      <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-transparent mx-auto mt-2" />
    </motion.div>
  );
};
