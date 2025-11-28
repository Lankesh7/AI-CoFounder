import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Zap, Target, TrendingUp, MessageSquare, Shield } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Brain,
    title: "Strategic Intelligence",
    description: "AI-powered market analysis and competitive positioning that adapts to real-time data.",
    color: "text-trust-start",
    gradient: "from-trust-start/10 to-trust-end/5",
  },
  {
    icon: Zap,
    title: "Instant Execution",
    description: "Turn strategies into actionable tasks with automated workflows and priority management.",
    color: "text-ignition-mid",
    gradient: "from-ignition-start/10 to-ignition-end/5",
  },
  {
    icon: Target,
    title: "Goal Precision",
    description: "Set objectives and watch Synapse break them down into achievable milestones.",
    color: "text-trust-start",
    gradient: "from-trust-start/10 to-trust-mid/5",
  },
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    description: "Real-time insights on user behavior, market trends, and revenue opportunities.",
    color: "text-wisdom-start",
    gradient: "from-wisdom-start/10 to-wisdom-end/5",
  },
  {
    icon: MessageSquare,
    title: "Natural Dialogue",
    description: "Communicate with your AI co-founder like a human partner—no complex commands.",
    color: "text-ignition-start",
    gradient: "from-ignition-start/10 to-ignition-mid/5",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and privacy controls for your most sensitive business data.",
    color: "text-trust-mid",
    gradient: "from-trust-mid/10 to-trust-end/5",
  },
];

export const FeatureGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="features" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Parallax background orb */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-ignition-gradient opacity-10 blur-3xl rounded-full pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Neural Network Features
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Every feature designed to amplify your decision-making and accelerate growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-trust-gradient rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              
              <div className={`relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 h-full bg-gradient-to-br ${feature.gradient}`}>
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-trust-gradient opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
