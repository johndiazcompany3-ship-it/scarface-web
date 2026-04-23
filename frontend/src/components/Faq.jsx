import { BlurText } from "./BlurText";
import { FAQS } from "../lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Faq() {
  return (
    <section
      className="relative py-32 md:py-40 px-6"
      data-testid="faq-section"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-5 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="w-6 h-px bg-primary" />
            Preguntas frecuentes
          </div>
          <BlurText
            text="Todo lo que quizá te preguntes."
            as="h2"
            className="font-display uppercase text-[clamp(40px,6vw,88px)] leading-[0.92] tracking-[-0.02em]"
          />
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-white/10"
              data-testid={`faq-item-${i}`}
            >
              <AccordionTrigger className="py-7 text-left font-display text-xl md:text-2xl tracking-wide hover:no-underline hover:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-base leading-relaxed pb-8 max-w-3xl">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
