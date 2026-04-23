import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";
import { BlurText } from "./BlurText";
import { MENU_DIA } from "../lib/site-data";
import { WA_RESERVA as WA } from "../lib/constants";

export function MenuDia() {
  return (
    <section
      id="menu"
      className="relative py-32 md:py-40 px-6 overflow-hidden"
      data-testid="menu-dia-section"
    >
      {/* Accent backdrop */}
      <div
        className="absolute left-[-10%] top-20 w-[60%] aspect-square rounded-full blur-3xl opacity-20"
        style={{ background: "hsl(var(--primary))" }}
      />

      <div className="max-w-[1400px] mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left — price card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 liquid-glass-strong rounded-3xl p-10 relative"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Menú del día
            </div>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-display text-[120px] md:text-[160px] leading-none tracking-[-0.02em]">
                {MENU_DIA.precio}
              </span>
              <span className="font-display text-5xl text-foreground/55">€</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-foreground/70 mb-8">
              <Clock className="w-4 h-4 text-primary" />
              {MENU_DIA.horario}
            </div>

            <ul className="space-y-3">
              {MENU_DIA.incluye.map((i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/80">
                  <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero mt-10 w-full"
              data-testid="menu-cta-reserve"
            >
              Reservar mesa
            </a>
          </motion.div>

          {/* Right — dishes */}
          <div className="lg:col-span-7 lg:pl-8">
            <BlurText
              text="Comer bien, cada día."
              as="h2"
              className="font-display uppercase text-[clamp(40px,6vw,96px)] leading-[0.92] tracking-[-0.02em] max-w-[14ch] mb-10"
            />
            <p className="text-foreground/65 max-w-lg mb-12 leading-relaxed">
              Una propuesta que rota semanalmente: clásicos de casa, guiños
              mexicanos y siempre una opción vegetariana.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h3 className="font-display text-2xl uppercase tracking-[0.05em] mb-5 text-primary">
                  Primeros
                </h3>
                <ul className="space-y-3">
                  {MENU_DIA.primeros.map((p, i) => (
                    <motion.li
                      key={p}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.5 }}
                      className="text-foreground/80 pb-3 border-b border-white/5"
                    >
                      {p}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-2xl uppercase tracking-[0.05em] mb-5 text-primary">
                  Segundos
                </h3>
                <ul className="space-y-3">
                  {MENU_DIA.segundos.map((p, i) => (
                    <motion.li
                      key={p}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.5 }}
                      className="text-foreground/80 pb-3 border-b border-white/5"
                    >
                      {p}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
