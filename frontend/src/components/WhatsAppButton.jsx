import { motion } from "framer-motion";
import { WA_RESERVA } from "../lib/constants";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WA_RESERVA}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar por WhatsApp"
      data-testid="whatsapp-floating-button"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group fixed bottom-24 md:bottom-6 right-4 md:right-6 z-[9999] flex items-center"
      style={{ filter: "drop-shadow(0 10px 25px rgba(37,211,102,0.35))" }}
    >
      {/* Tooltip (desktop only) */}
      <span
        className="hidden md:flex items-center mr-3 px-4 py-2 rounded-full text-sm font-medium text-[#0d0605] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap"
        style={{ background: "#ffffff" }}
      >
        Reservar por WhatsApp
      </span>

      {/* Button */}
      <span className="relative inline-flex w-[60px] h-[60px] rounded-full items-center justify-center overflow-visible"
        style={{ background: "#25D366" }}
      >
        {/* Ping ring (first 8s only) */}
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full"
          style={{ background: "#25D366" }}
          initial={{ opacity: 0.55, scale: 1 }}
          animate={{ opacity: 0, scale: 1.7 }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
            repeat: 4,
            repeatDelay: 0,
          }}
        />
        {/* WhatsApp icon */}
        <svg
          className="relative w-7 h-7"
          viewBox="0 0 32 32"
          fill="#ffffff"
          aria-hidden="true"
        >
          <path d="M19.11 17.37c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.14-.2.29-.76.94-.93 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5l-.56-.01a1.07 1.07 0 0 0-.78.37c-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.02c.15.2 2.06 3.14 4.99 4.4.7.3 1.24.48 1.66.62.7.22 1.33.19 1.83.11.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.38-.07-.12-.26-.19-.55-.34zM16 4C9.37 4 4 9.37 4 16c0 2.11.55 4.17 1.6 5.99L4 28l6.2-1.62A11.94 11.94 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4zm0 22c-1.9 0-3.76-.5-5.39-1.46l-.39-.23-3.68.96.98-3.59-.25-.37A9.93 9.93 0 0 1 6 16c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" />
        </svg>
      </span>
    </motion.a>
  );
}
