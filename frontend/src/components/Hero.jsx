import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ScrubSequence } from "./ScrubSequence";
import { BlurText } from "./BlurText";
import { FRAMES_PATH, FRAME_COUNT, FRAME_EXT, WA_RESERVA } from "../lib/constants";

export function Hero() {
  const scrollRef = useRef(null);

  return (
    <section
      ref={scrollRef}
      id="top"
      className="relative h-[250vh] bg-background"
      data-testid="hero-section"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <ScrubSequence
          framesPath={FRAMES_PATH}
          frameCount={FRAME_COUNT}
          ext={FRAME_EXT}
          scrollTargetRef={scrollRef}
          className="absolute inset-0 w-full h-full z-0"
        />
        <p className="sr-only">
          Vista del Restaurante Scarface Ávila: exterior, platos y ambiente interior.
        </p>

        {/* Cinematic vignette */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(120%_80%_at_50%_55%,transparent_35%,rgba(0,0,0,0.72)_100%)]" />
        <div className="absolute inset-0 z-[1] bg-black/25" />
        <div className="absolute bottom-0 inset-x-0 h-[45vh] z-[2] gradient-fade-b" />
        <div className="noise-overlay z-[2]" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-7"
          >
            <div className="liquid-glass-strong rounded-full px-1 py-1 inline-flex items-center gap-2">
              <span
                className="rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase"
                style={{
                  background: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                }}
              >
                Ávila
              </span>
              <span className="pr-4 pl-1 text-sm text-foreground/85">
                Restaurante Bar · Fusión Mexicana & Española
              </span>
            </div>
          </motion.div>

          <BlurText
            text="Sabor. Sin concesiones."
            as="h1"
            testId="hero-headline"
            className="font-display uppercase text-[clamp(60px,10.5vw,160px)] leading-[0.88] tracking-[-0.02em] text-foreground max-w-[14ch]"
            delay={0.09}
            startDelay={0.2}
          />

          <motion.p
            initial={{ filter: "blur(10px)", opacity: 0, y: 16 }}
            animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-body text-base md:text-lg text-foreground/75 max-w-[52ch] leading-relaxed"
          >
            Cocina mexicana y española en el corazón de Ávila. Nachos, tacos,
            chuletón y mucho más.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10 flex items-center gap-3 flex-wrap justify-center"
          >
            <a
              href={WA_RESERVA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero"
              data-testid="hero-cta-primary"
            >
              Reservar mesa
            </a>
            <a
              href="#carta"
              className="btn-hero-glass"
              data-testid="hero-cta-secondary"
            >
              Ver la carta
            </a>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-foreground/55"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Desliza para descubrir
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
