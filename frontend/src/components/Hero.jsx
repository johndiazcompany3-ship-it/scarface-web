import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ScrubSequence } from "./ScrubSequence";
import { LetterReveal } from "./BlurText";
import { FRAMES_PATH, FRAME_COUNT, FRAME_EXT, WA_RESERVA } from "../lib/constants";

export function Hero() {
  const scrollRef = useRef(null);

  // Scroll-linked parallax within the 250vh hero container
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  // Headline: lifts up and blurs as you scroll through the hero
  const headlineY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const headlineBlur = useTransform(scrollYProgress, [0, 0.6], [0, 10]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.35, 0.6], [1, 0.8, 0.25]);

  // Sub/CTAs: parallax deeper (stronger movement)
  const subY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
  const subOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  // Canvas cinematic zoom: 1.08 → 1.00 → slight drift
  const canvasScale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1]);

  // Shimmer mask position animated by CSS
  return (
    <section
      ref={scrollRef}
      id="top"
      className="relative h-[250vh] bg-background"
      data-testid="hero-section"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas with parallax scale */}
        <motion.div
          className="absolute inset-0 w-full h-full z-0"
          style={{ scale: canvasScale, transformOrigin: "50% 50%" }}
        >
          <ScrubSequence
            framesPath={FRAMES_PATH}
            frameCount={FRAME_COUNT}
            ext={FRAME_EXT}
            scrollTargetRef={scrollRef}
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>

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

          {/* Pulsing ÁVILA badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mb-7"
          >
            <div className="liquid-glass-strong rounded-full px-1 py-1 inline-flex items-center gap-2">
              <motion.span
                className="rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase relative overflow-hidden"
                style={{
                  background: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 hsla(4,72%,42%,0.6)",
                    "0 0 0 10px hsla(4,72%,42%,0)",
                    "0 0 0 0 hsla(4,72%,42%,0)",
                  ],
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              >
                Ávila
              </motion.span>
              <span className="pr-4 pl-1 text-sm text-foreground/85">
                Restaurante Bar · Fusión Mexicana & Española
              </span>
            </div>
          </motion.div>

          {/* Headline with parallax + letter reveal + shimmer */}
          <motion.div
            style={{
              y: headlineY,
              filter: useTransform(headlineBlur, (v) => `blur(${v}px)`),
              opacity: headlineOpacity,
            }}
            className="relative"
          >
            <LetterReveal
              text="Sabor. Sin concesiones."
              as="h1"
              testId="hero-headline"
              className="hero-shimmer font-display uppercase text-[clamp(60px,10.5vw,160px)] leading-[0.88] tracking-[-0.02em] text-foreground max-w-[14ch]"
              letterDelay={0.035}
              startDelay={0.3}
            />
          </motion.div>

          {/* Subtitle + CTAs with parallax */}
          <motion.div style={{ y: subY, opacity: subOpacity }} className="flex flex-col items-center">
            <motion.p
              initial={{ filter: "blur(10px)", opacity: 0, y: 16 }}
              animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 font-body text-base md:text-lg text-foreground/75 max-w-[52ch] leading-relaxed"
            >
              Cocina mexicana y española en el corazón de Ávila. Nachos, tacos,
              chuletón y mucho más.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
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
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          style={{ opacity: subOpacity }}
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
