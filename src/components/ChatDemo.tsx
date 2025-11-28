import { motion, useScroll, useTransform } from "framer-motion";
import { User, Sparkles } from "lucide-react";
import { useRef } from "react";

const messages = [
  {
    type: "user",
    text: "Help me analyze the SaaS market for project management tools.",
    delay: 0.2,
  },
  {
    type: "ai",
    text: "I've analyzed 127 competitors and identified 3 underserved niches. The remote team collaboration segment shows 43% YoY growth with low competition. Would you like me to create a go-to-market strategy?",
    delay: 0.8,
  },
  {
    type: "user",
    text: "Yes, and include pricing recommendations.",
    delay: 1.4,
  },
  {
    type: "ai",
    text: "Creating comprehensive strategy now. Based on competitive analysis, I recommend a freemium model with Premium at $29/user/month. I'll draft your landing page copy, feature comparison matrix, and 90-day launch plan.",
    delay: 2.0,
  },
];

export const ChatDemo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  return (
    <section id="demo" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Like Talking to a Partner
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Natural conversation that understands context, anticipates needs, and delivers actionable insights.
          </p>
        </motion.div>

        {/* Chat Interface with 3D parallax */}
        <motion.div
          style={{ scale, rotateX }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/30 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl perspective-1000"
        >
          <div className="space-y-6">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: message.type === "user" ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: message.delay }}
                className={`flex gap-4 ${message.type === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  message.type === "user" 
                    ? "bg-secondary" 
                    : "bg-gradient-to-br from-ignition-start/20 to-ignition-end/10 border border-ignition-mid/30"
                }`}>
                  {message.type === "user" ? (
                    <User className="w-5 h-5 text-foreground" />
                  ) : (
                    <Sparkles className="w-5 h-5 text-ignition-mid" />
                  )}
                </div>
                
                <div className={`flex-1 max-w-[80%] ${message.type === "user" ? "text-right" : ""}`}>
                  <div className={`inline-block px-6 py-4 rounded-2xl ${
                    message.type === "user"
                      ? "bg-secondary text-foreground"
                      : "bg-gradient-to-br from-ignition-start/10 to-ignition-end/5 text-foreground border border-ignition-mid/20"
                  }`}>
                    <p className="leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Typing indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 2.6 }}
            className="flex gap-4 mt-6"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-ignition-start/20 to-ignition-end/10 border border-ignition-mid/30">
              <Sparkles className="w-5 h-5 text-ignition-mid" />
            </div>
            <div className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-br from-ignition-start/10 to-ignition-end/5 border border-ignition-mid/20">
              <motion.div
                className="w-2 h-2 rounded-full bg-ignition-mid"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-ignition-mid"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-ignition-mid"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
