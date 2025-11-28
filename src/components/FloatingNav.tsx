import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const FloatingNav = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-8 px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="font-bold text-foreground">Synapse</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm">
          <a href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#demo" className="text-foreground/70 hover:text-foreground transition-colors">
            Demo
          </a>
          <a href="#pricing" className="text-foreground/70 hover:text-foreground transition-colors">
            Pricing
          </a>
        </div>
        
        <button className="px-6 py-2 bg-trust-gradient rounded-full font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-shadow">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
};