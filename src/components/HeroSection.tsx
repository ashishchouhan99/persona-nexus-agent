import { motion } from "framer-motion";
import { Bot, Cpu, Shield, Zap, ChevronRight } from "lucide-react";

const abilities = [
  { icon: Bot, label: "Conversational AI", desc: "Natural language processing & understanding" },
  { icon: Cpu, label: "Task Automation", desc: "Automate workflows & repetitive tasks" },
  { icon: Shield, label: "Smart Analysis", desc: "Data analysis & intelligent insights" },
  { icon: Zap, label: "Instant Response", desc: "Real-time answers & assistance" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-scan-line" />
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(190 100% 50% / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(190 100% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
          </span>
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">
            System Online
          </span>
        </motion.div>

        {/* Main title */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-glow text-primary mb-4">
          JERVIS
        </h1>

        <p className="font-display text-sm sm:text-base tracking-[0.2em] text-muted-foreground uppercase mb-6">
          Personal AI Agent
        </p>

        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />

        <p className="text-lg sm:text-xl text-secondary-foreground max-w-xl mx-auto mb-12 leading-relaxed">
          Hi, I'm <span className="text-primary font-semibold">Your Name</span> — developer, creator, and tinkerer.
          Meet <span className="text-primary font-semibold">Jervis</span>, my personal AI assistant built to help you learn about me and my work.
        </p>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase border-glow-strong transition-all hover:brightness-110"
          onClick={() => {
            // Try to click the n8n chat toggle
            const toggle = document.querySelector('.n8n-chat .chat-toggle') as HTMLElement;
            if (toggle) toggle.click();
          }}
        >
          Talk to Jervis
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </motion.div>

      {/* Abilities grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto w-full"
      >
        {abilities.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.1 }}
            className="group p-5 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:border-glow transition-all duration-300"
          >
            <item.icon className="w-6 h-6 text-primary mb-3 group-hover:animate-pulse-glow" />
            <h3 className="font-display text-xs tracking-wider text-foreground mb-1">{item.label}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
