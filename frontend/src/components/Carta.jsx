import { motion } from "framer-motion";
import { BlurText } from "./BlurText";
import { CARTA } from "../lib/site-data";

export function Carta() {
  return (
    <section
      id="carta"
      className="relative py-32 md:py-40 px-6"
      data-testid="carta-section"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-8 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 mb-5 text-xs uppercase tracking-[0.3em] text-primary">
              <span className="w-6 h-px bg-primary" />
              Nuestra carta
            </div>
            <BlurText
              text="De la brasa a la tortilla."
              as="h2"
              testId="carta-title"
              className="font-display uppercase text-[clamp(44px,7vw,104px)] leading-[0.9] tracking-[-0.02em] max-w-[16ch]"
            />
          </div>
          <p className="font-body max-w-md text-foreground/60 leading-relaxed">
            Producto de temporada, brasa de encina y recetas que cruzan el charco.
            Una carta corta, honesta y pensada para compartir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {CARTA.map((group, idx) => (
            <motion.div
              key={group.cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                <span
                  className="font-display text-3xl"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  0{idx + 1}
                </span>
                <h3 className="font-display text-2xl md:text-3xl tracking-[0.05em] uppercase">
                  {group.cat}
                </h3>
              </div>
              <ul className="space-y-7">
                {group.items.map((it) => (
                  <li
                    key={it.name}
                    className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1"
                  >
                    <div className="flex items-baseline gap-3 min-w-0">
                      <span className="font-body font-medium text-foreground text-lg truncate">
                        {it.name}
                      </span>
                      <span className="flex-1 border-b border-dashed border-white/15 mb-1.5" />
                    </div>
                    <span className="font-display text-xl text-foreground/90 tabular-nums">
                      {it.price}€
                    </span>
                    <p className="col-span-2 text-sm text-foreground/55 leading-relaxed max-w-[55ch]">
                      {it.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-foreground/40 mt-16 max-w-xl">
          IVA incluido. Algunas referencias pueden contener alérgenos — consulta
          a nuestro equipo antes de pedir.
        </p>
      </div>
    </section>
  );
}
