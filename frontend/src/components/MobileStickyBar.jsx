import { Phone } from "lucide-react";
import { TEL, WA_RESERVA } from "../lib/constants";

export function MobileStickyBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-[9998] h-16 flex border-t"
      style={{
        background: "#0d0605",
        borderColor: "rgba(255,255,255,0.08)",
      }}
      data-testid="mobile-sticky-bar"
    >
      <a
        href={TEL}
        className="flex-1 flex items-center justify-center gap-2 text-white text-sm font-medium"
        style={{ background: "#c0392b" }}
        data-testid="sticky-call-btn"
      >
        <Phone className="w-4 h-4" />
        Llamar
      </a>
      <a
        href={WA_RESERVA}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 text-white text-sm font-medium"
        style={{ background: "#25D366" }}
        data-testid="sticky-whatsapp-btn"
      >
        <svg className="w-4 h-4" viewBox="0 0 32 32" fill="#ffffff" aria-hidden="true">
          <path d="M19.11 17.37c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.14-.2.29-.76.94-.93 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5l-.56-.01a1.07 1.07 0 0 0-.78.37c-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.02c.15.2 2.06 3.14 4.99 4.4.7.3 1.24.48 1.66.62.7.22 1.33.19 1.83.11.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.38-.07-.12-.26-.19-.55-.34zM16 4C9.37 4 4 9.37 4 16c0 2.11.55 4.17 1.6 5.99L4 28l6.2-1.62A11.94 11.94 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4zm0 22c-1.9 0-3.76-.5-5.39-1.46l-.39-.23-3.68.96.98-3.59-.25-.37A9.93 9.93 0 0 1 6 16c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
