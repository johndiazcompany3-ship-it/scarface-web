import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { BlurText } from "./BlurText";
import { TESTIMONIOS } from "../lib/site-data";

export function Testimonials() {
  return (
    <section
      className="relative py-32 md:py-40 px-6"
      data-testid="testimonials-section"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 mb-5 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="w-6 h-px bg-primary" />
            Reseñas
          </div>
          <BlurText
            text="Lo que dice quien ya vino."
            as="h2"
            className="font-display uppercase text-[clamp(40px,6vw,96px)] leading-[0.92] tracking-[-0.02em]"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIOS.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="liquid-glass-strong rounded-3xl p-8 md:p-10 flex flex-col"
            >
              <Quote
                className="w-8 h-8 mb-6"
                style={{ color: "hsl(var(--primary))" }}
              />
              <p className="font-body text-lg leading-relaxed text-foreground/90 flex-1">
                “{t.q}”
              </p>
              <footer className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">{t.a}</div>
                  <div className="text-xs text-foreground/55 mt-0.5">{t.t}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star
                      key={k}
                      className="w-3.5 h-3.5 fill-current"
                      style={{ color: "hsl(var(--primary))" }}
                    />
                  ))}
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
