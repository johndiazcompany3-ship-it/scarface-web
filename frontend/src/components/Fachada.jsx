import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { BlurText } from "./BlurText";
import { ADDRESS, MAPS_URL } from "../lib/constants";

export function Fachada() {
  return (
    <section
      className="relative py-32 md:py-40 px-6"
      data-testid="fachada-section"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-5 text-xs uppercase tracking-[0.3em] text-primary">
              <span className="w-6 h-px bg-primary" />
              Nuestra puerta
            </div>
            <BlurText
              text="Busca la bandera roja."
              as="h2"
              className="font-display uppercase text-[clamp(44px,7vw,104px)] leading-[0.9] tracking-[-0.02em] max-w-[14ch]"
            />
          </div>
          <p className="lg:col-span-5 text-foreground/60 leading-relaxed max-w-md">
            Pleno casco histórico de Ávila, a cinco minutos andando desde la
            Muralla. Cortinas rojas, pizarra con nuestras recomendaciones y el
            inconfundible rostro en la entrada.
          </p>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl aspect-[16/10] md:aspect-[21/9]"
        >
          <img
            src="/images/fachada.jpg"
            alt="Fachada del restaurante Scarface en Ávila, con cartel de madera, toldo y cortinas rojas"
            className="w-full h-full object-cover"
            loading="lazy"
            data-testid="fachada-image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <div className="absolute left-6 md:left-10 bottom-6 md:bottom-10 flex items-center gap-3">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-strong rounded-full px-5 py-3 inline-flex items-center gap-2 text-sm font-medium hover:bg-white/5 transition-colors"
              data-testid="fachada-maps-link"
            >
              <MapPin className="w-4 h-4 text-primary" />
              {ADDRESS}
            </a>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
