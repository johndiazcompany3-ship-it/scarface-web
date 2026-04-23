import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
