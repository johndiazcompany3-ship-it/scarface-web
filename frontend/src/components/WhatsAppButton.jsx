import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/34623513639";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp al 623 513 639"
      data-testid="whatsapp-floating-button"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed z-[9999] flex items-center
                 bottom-[80px] right-4
                 sm:bottom-6 sm:right-6"
      style={{
        filter:
          "drop-shadow(0 8px 20px rgba(37,211,102,0.45)) drop-shadow(0 0 30px rgba(37,211,102,0.25))",
      }}
    >
      {/* Desktop tooltip */}
      <span
        className="hidden md:inline-flex items-center mr-3 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                   opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                   transition-all duration-300"
        style={{
          background: "#ffffff",
          color: "#0d0605",
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
        }}
      >
        Escríbenos por WhatsApp
        <span
          aria-hidden="true"
          className="absolute right-[54px] top-1/2 -translate-y-1/2 w-0 h-0"
          style={{
            borderLeft: "7px solid #ffffff",
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
          }}
        />
      </span>

      {/* Button circle */}
      <span
        className="relative inline-flex w-[60px] h-[60px] rounded-full items-center justify-center"
        style={{ background: "#25D366" }}
      >
        {/* Pulse halo */}
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full"
          style={{ background: "#25D366" }}
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: 0, scale: 1.8 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        />
        {/* Official WhatsApp logo (white) */}
        <svg
          viewBox="0 0 32 32"
          className="relative w-8 h-8"
          fill="#ffffff"
          aria-hidden="true"
        >
          <path d="M19.11 17.37c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.14-.2.29-.76.94-.93 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5l-.56-.01a1.07 1.07 0 0 0-.78.37c-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.02c.15.2 2.06 3.14 4.99 4.4.7.3 1.24.48 1.66.62.7.22 1.33.19 1.83.11.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.38-.07-.12-.26-.19-.55-.34zM16 4C9.37 4 4 9.37 4 16c0 2.11.55 4.17 1.6 5.99L4 28l6.2-1.62A11.94 11.94 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4zm0 22c-1.9 0-3.76-.5-5.39-1.46l-.39-.23-3.68.96.98-3.59-.25-.37A9.93 9.93 0 0 1 6 16c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" />
        </svg>
      </span>
    </motion.a>
  );
}
