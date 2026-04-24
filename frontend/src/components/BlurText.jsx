import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Word-by-word reveal (original)
export function BlurText({
  text,
  className = "",
  delay = 0.07,
  startDelay = 0,
  as: Tag = "h2",
  testId,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} data-testid={testId}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-transform"
          initial={{ opacity: 0, y: 28, filter: "blur(14px)" }}
          animate={
            inView
              ? { opacity: 1, y: 0, filter: "blur(0)" }
              : { opacity: 0, y: 28, filter: "blur(14px)" }
          }
          transition={{
            delay: startDelay + i * delay,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}

// Letter-by-letter cinematic reveal for hero headline
export function LetterReveal({
  text,
  className = "",
  letterDelay = 0.035,
  startDelay = 0.2,
  as: Tag = "h1",
  testId,
}) {
  const words = text.split(" ");
  return (
    <Tag className={className} data-testid={testId}>
      {words.map((w, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {w.split("").map((ch, ci) => {
            const total =
              words.slice(0, wi).reduce((a, x) => a + x.length, 0) + ci;
            return (
              <motion.span
                key={ci}
                className="inline-block will-change-transform"
                initial={{ opacity: 0, y: 60, rotateX: -70, filter: "blur(18px)" }}
                animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0)" }}
                transition={{
                  delay: startDelay + total * letterDelay,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "50% 100%" }}
              >
                {ch}
              </motion.span>
            );
          })}
          {wi < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
