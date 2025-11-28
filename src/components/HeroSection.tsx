import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { EmailSignupForm } from "./EmailSignupForm";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Your AI Co-Founder
          <br />
          That Never Sleeps
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto"
        >
          Synapse transforms your ideas into execution. Strategy, market analysis, and growth—all powered by advanced AI.
        </motion.p>
        
        {/* The Spark - Moving gradient line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-1 w-48 mx-auto mb-12 bg-ignition-gradient rounded-full relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Email Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-6 mb-8"
        >
          <EmailSignupForm />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-trust-gradient rounded-2xl font-bold text-white shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 transition-all flex items-center gap-2 group"
            >
              View Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl font-bold text-white hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Watch Demo
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};
