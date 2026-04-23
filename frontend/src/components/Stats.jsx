import { motion } from "framer-motion";
import { BlurText } from "./BlurText";
import { STATS } from "../lib/site-data";

export function Stats() {
  return (
    <section
      className="relative py-32 md:py-40 px-6 overflow-hidden"
      data-testid="stats-section"
    >
      {/* Ambient backdrop */}
      <div className="absolute inset-0 -z-0">
        <img
          src="/frames/frame_0015.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="noise-overlay" />
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 mb-5 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="w-6 h-px bg-primary" />
            Confianza
          </div>
          <BlurText
            text="Números que cuentan historias."
            as="h2"
            className="font-display uppercase text-[clamp(40px,6vw,96px)] leading-[0.92] tracking-[-0.02em]"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden liquid-glass-strong">
          {STATS.map((s, i) => (
            <motion.div
              key={s.lbl}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background/40 backdrop-blur-xl p-8 md:p-10"
            >
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-display text-5xl md:text-7xl tracking-[-0.02em] leading-none">
                  {s.k}
                </span>
                <span className="font-display text-xl text-foreground/60">
                  {s.u}
                </span>
              </div>
              <div className="text-sm text-foreground/65 uppercase tracking-[0.1em]">
                {s.lbl}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
