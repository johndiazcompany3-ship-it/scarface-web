import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { BlurText } from "./BlurText";
import {
  ADDRESS,
  MAPS_URL,
  TEL,
  TEL_DISPLAY,
  EMAIL,
  WA_RESERVA,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "../lib/constants";

export function CtaFooter() {
  return (
    <section
      id="contacto"
      className="relative pt-32 md:pt-40 pb-0 px-6 overflow-hidden"
      data-testid="cta-footer-section"
    >
      {/* Ambient video-style backdrop using frame */}
      <div className="absolute inset-0 -z-0">
        <img
          src="/frames/frame_0022.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="noise-overlay" />
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        {/* Big CTA block */}
        <div className="text-center mb-28">
          <div className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="w-6 h-px bg-primary" />
            Reservas
            <span className="w-6 h-px bg-primary" />
          </div>
          <BlurText
            text="¿Con hambre? Ven a vernos."
            as="h2"
            className="font-display uppercase text-[clamp(48px,9vw,160px)] leading-[0.88] tracking-[-0.02em] max-w-[16ch] mx-auto"
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-7 text-foreground/70 max-w-xl mx-auto leading-relaxed"
          >
            Reserva en segundos por WhatsApp. Sin esperas, sin formularios.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 flex items-center gap-3 flex-wrap justify-center"
          >
            <a
              href={WA_RESERVA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero"
              data-testid="cta-reserve-whatsapp"
            >
              <MessageCircle className="w-4 h-4" /> Reservar por WhatsApp
            </a>
            <a
              href={TEL}
              className="btn-hero-glass"
              data-testid="cta-phone"
            >
              <Phone className="w-4 h-4" /> {TEL_DISPLAY}
            </a>
          </motion.div>
        </div>

        {/* Info grid */}
        <div className="grid md:grid-cols-4 gap-5 mb-24">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass-strong rounded-3xl p-8 hover:-translate-y-1 transition-transform"
            data-testid="footer-address"
          >
            <MapPin className="w-5 h-5 text-primary mb-4" />
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-2">
              Dirección
            </div>
            <div className="font-display text-2xl tracking-wide leading-tight">
              {ADDRESS}
            </div>
          </a>
          <a
            href={TEL}
            className="liquid-glass-strong rounded-3xl p-8 hover:-translate-y-1 transition-transform"
          >
            <Phone className="w-5 h-5 text-primary mb-4" />
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-2">
              Teléfono
            </div>
            <div className="font-display text-2xl tracking-wide">
              {TEL_DISPLAY}
            </div>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="liquid-glass-strong rounded-3xl p-8 hover:-translate-y-1 transition-transform"
          >
            <Mail className="w-5 h-5 text-primary mb-4" />
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-2">
              Email
            </div>
            <div className="font-display text-xl tracking-wide break-all">
              {EMAIL}
            </div>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass-strong rounded-3xl p-8 hover:-translate-y-1 transition-transform"
            data-testid="footer-instagram"
          >
            <Instagram className="w-5 h-5 text-primary mb-4" />
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-2">
              Instagram
            </div>
            <div className="font-display text-2xl tracking-wide">
              {INSTAGRAM_HANDLE}
            </div>
          </a>
        </div>

        {/* Horarios */}
        <div className="liquid-glass rounded-3xl p-8 md:p-10 mb-12 flex flex-wrap gap-8 items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              Horario
            </div>
            <div className="font-display text-3xl tracking-wide">
              Mar – Dom · 13:00 – 16:00 y 20:00 – 23:30
            </div>
            <div className="text-sm text-foreground/55 mt-2">Lunes cerrado</div>
          </div>
          <a
            href={WA_RESERVA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero"
          >
            Reservar mesa
          </a>
        </div>

        {/* Google Maps */}
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 mb-20"
          data-testid="google-maps"
        >
          <iframe
            title="Mapa de Scarface Restaurante Ávila"
            src="https://www.google.com/maps?q=Calle+Enrique+Larreta+7,+05001+Ávila,+España&output=embed"
            width="100%"
            height="420"
            style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* Footer */}
        <footer className="pt-10 pb-12 border-t border-white/10 flex flex-wrap gap-6 items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "hsl(var(--primary))" }}
            />
            <span className="font-display text-xl tracking-[0.18em]">
              SCARFACE
            </span>
            <span className="text-xs text-foreground/40 ml-4">
              © 2025 Scarface Restaurante Ávila. {ADDRESS}.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#carta"
              className="px-4 py-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Carta
            </a>
            <a
              href="#galeria"
              className="px-4 py-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Galería
            </a>
            <a
              href={WA_RESERVA}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 text-foreground/60 hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
