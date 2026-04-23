import { motion } from "framer-motion";
import { BlurText } from "./BlurText";
import { GALERIA } from "../lib/site-data";

export function Galeria() {
  return (
    <section
      id="galeria"
      className="relative py-32 md:py-40 px-6"
      data-testid="galeria-section"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-5 text-xs uppercase tracking-[0.3em] text-primary">
              <span className="w-6 h-px bg-primary" />
              Galería
            </div>
            <BlurText
              text="Momentos en Scarface."
              as="h2"
              className="font-display uppercase text-[clamp(40px,6vw,96px)] leading-[0.92] tracking-[-0.02em] max-w-[16ch]"
            />
          </div>
          <p className="max-w-sm text-foreground/60">
            Platos, ambiente y detalles que convierten una cena en un recuerdo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {GALERIA.map((src, i) => {
            const aspect =
              i % 5 === 0 ? "aspect-[3/4]" : i % 3 === 0 ? "aspect-[4/5]" : "aspect-square";
            return (
              <motion.figure
                key={src + i}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-2xl group ${aspect}`}
              >
                <img
                  src={src}
                  alt={`Scarface plato ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
