import { motion } from "framer-motion";

export const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Deep space black background */}
      <div className="absolute inset-0 bg-[#020202]" />
      
      {/* 4D Perspective Grid */}
      <div className="absolute inset-0" style={{ perspective: "1000px" }}>
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(hsl(195 100% 50% / 0.2) 1px, transparent 1px),
              linear-gradient(90deg, hsl(195 100% 50% / 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: [0, 15, 0],
            rotateY: [0, -10, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Dimensional layer 1 - Orange energy field */}
      <motion.div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[100px] opacity-30"
        style={{ 
          background: "radial-gradient(circle, hsl(30 100% 50%), hsl(15 100% 45%), transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 150, -50, 0],
          y: [0, 100, 50, 0],
          scale: [1, 1.3, 0.9, 1],
          rotate: [0, 90, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Dimensional layer 2 - Yellow plasma */}
      <motion.div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-25"
        style={{ 
          background: "radial-gradient(circle, hsl(45 100% 55%), hsl(60 100% 50%), transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, -120, 50, 0],
          y: [0, 120, -60, 0],
          scale: [1, 1.4, 1.1, 1],
          rotate: [360, 180, 90, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      {/* Dimensional layer 3 - Green quantum field */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-[650px] h-[650px] rounded-full blur-[100px] opacity-28"
        style={{ 
          background: "radial-gradient(circle, hsl(145 80% 45%), hsl(160 70% 40%), transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 100, -80, 0],
          y: [0, -120, -40, 0],
          scale: [1, 1.25, 1.05, 1],
          rotate: [0, -90, -180, -360],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Dimensional layer 4 - Sky blue wormhole */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-[550px] h-[550px] rounded-full blur-[100px] opacity-30"
        style={{ 
          background: "radial-gradient(circle, hsl(195 100% 50%), hsl(210 100% 45%), transparent 70%)",
          filter: "blur(65px)",
        }}
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 90, -70, 0],
          scale: [1, 1.2, 0.95, 1],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Central 4D vortex */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[120px] opacity-20"
        style={{ 
          background: "conic-gradient(from 0deg, hsl(30 100% 50%), hsl(45 100% 55%), hsl(145 80% 45%), hsl(195 100% 50%), hsl(270 100% 50%), hsl(30 100% 50%))",
          filter: "blur(90px)",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Dimensional particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Noise overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};