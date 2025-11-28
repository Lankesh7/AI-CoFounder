import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useRef } from "react";
import { EmailSignupForm } from "./EmailSignupForm";

export const PricingSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yTransform = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="pricing" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background mesh gradient with parallax */}
      <motion.div 
        style={{ y: yTransform }}
        className="absolute inset-0 bg-gradient-to-br from-trust-end/20 via-wisdom-start/10 to-wisdom-end/20 blur-3xl"
      />
      
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            One Plan. Infinite Potential.
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Get full access to your AI co-founder. No tiers, no limits, no surprises.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Synapse Pro</h3>
              <p className="text-gray-600">For ambitious founders and teams</p>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-gray-900">$99</div>
              <div className="text-gray-600">per month</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              "Unlimited AI conversations",
              "Strategic planning & analysis",
              "Market research & insights",
              "Automated task management",
              "Real-time growth analytics",
              "Priority email support",
              "Advanced integrations",
              "Custom AI training on your data",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-trust-gradient flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 bg-trust-gradient rounded-2xl font-bold text-white text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Start Your 14-Day Free Trial
          </motion.button>

          <p className="text-center text-gray-500 text-sm mt-6">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>

        {/* Additional Email Signup CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Join the Waitlist
          </h3>
          <p className="text-foreground/70 mb-8 max-w-md mx-auto">
            Be the first to know when we launch. Get exclusive early access.
          </p>
          <div className="flex justify-center">
            <EmailSignupForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};