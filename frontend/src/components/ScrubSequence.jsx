import { useEffect, useRef } from "react";

const pad4 = (n) => String(n).padStart(4, "0");

export function ScrubSequence({
  framesPath,
  frameCount,
  ext = "jpg",
  className = "",
  scrollTargetRef,
}) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const rafRef = useRef(null);
  const lastIndexRef = useRef(-1);
  const visibleRef = useRef(true);
  const reducedMotionRef = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Preload images
  useEffect(() => {
    const imgs = [];
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `${framesPath}/frame_${pad4(i + 1)}.${ext}`;
      if (i === 0) {
        img.fetchPriority = "high";
      }
      imgs.push(img);
    }
    imagesRef.current = imgs;
    // Draw first frame as soon as it loads
    imgs[0].addEventListener(
      "load",
      () => {
        drawImage(imgs[0]);
      },
      { once: true }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [framesPath, frameCount, ext]);

  // Canvas resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      drawFrame(currentIndex());
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Observe visibility
  useEffect(() => {
    const el = scrollTargetRef?.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [scrollTargetRef]);

  // RAF loop
  useEffect(() => {
    const tick = () => {
      if (visibleRef.current && !reducedMotionRef.current) {
        const idx = currentIndex();
        if (idx !== lastIndexRef.current) {
          drawFrame(idx);
          lastIndexRef.current = idx;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reduced motion fallback: show middle frame
  useEffect(() => {
    if (reducedMotionRef.current) {
      const mid = Math.floor(frameCount / 2);
      const img = imagesRef.current[mid];
      if (img?.complete) drawImage(img);
      else img?.addEventListener("load", () => drawImage(img), { once: true });
    }
  }, [frameCount]);

  const currentIndex = () => {
    const el = scrollTargetRef?.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const total = el.offsetHeight - window.innerHeight;
    const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
    return Math.min(frameCount - 1, Math.floor(progress * (frameCount - 1)));
  };

  const drawFrame = (idx) => {
    const img = imagesRef.current[idx];
    if (img && img.complete && img.naturalWidth > 0) {
      drawImage(img);
    } else {
      // fallback: draw the nearest loaded frame
      for (let d = 1; d < 8; d++) {
        const a = imagesRef.current[idx - d];
        const b = imagesRef.current[idx + d];
        if (a && a.complete && a.naturalWidth > 0) return drawImage(a);
        if (b && b.complete && b.naturalWidth > 0) return drawImage(b);
      }
    }
  };

  const drawImage = (img) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: false, alpha: true });
    if (!ctx) return;
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  return (
    <canvas
      ref={canvasRef}
      className={className}
      data-testid="hero-scrub-canvas"
      aria-hidden="true"
    />
  );
}
