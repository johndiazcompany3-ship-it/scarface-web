import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS, WA_RESERVA, TEL, TEL_DISPLAY } from "../lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 z-50 flex justify-center px-4 transition-all duration-500 ${
          scrolled ? "top-2" : "top-4"
        }`}
        data-testid="site-navbar"
      >
        <div
          className={`w-full max-w-[1200px] liquid-glass-strong rounded-full flex items-center justify-between gap-4 px-2 py-2 transition-all duration-500 ${
            scrolled ? "shadow-2xl" : ""
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2 pl-4 pr-2"
            data-testid="nav-logo"
          >
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "hsl(var(--primary))" }}
            />
            <span className="font-display text-xl tracking-[0.18em] text-foreground">
              SCARFACE
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors rounded-full hover:bg-white/5"
                data-testid={`nav-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a
              href={TEL}
              aria-label={`Llamar a ${TEL_DISPLAY}`}
              className="hidden sm:inline-flex w-10 h-10 items-center justify-center rounded-full hover:bg-white/5 text-foreground/80 hover:text-foreground transition-colors"
              data-testid="nav-phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={WA_RESERVA}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-hero text-sm px-5 py-2.5"
              data-testid="nav-cta-reserve"
            >
              Reservar
            </a>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 text-foreground"
              aria-label="Abrir menú"
              data-testid="nav-mobile-toggle"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
            data-testid="mobile-menu"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-full sm:w-[380px] liquid-glass-strong p-6 flex flex-col"
              style={{ background: "hsl(var(--background) / 0.95)" }}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-display text-xl tracking-[0.18em]">
                  SCARFACE
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5"
                  aria-label="Cerrar menú"
                  data-testid="mobile-menu-close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl tracking-wide py-3 border-b border-white/5 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a
                  href={WA_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero w-full"
                >
                  Reservar por WhatsApp
                </a>
                <a href={TEL} className="btn-hero-glass w-full">
                  <Phone className="w-4 h-4" /> Llamar {TEL_DISPLAY}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
