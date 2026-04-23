const items = [
  "4,4 ★ Google",
  "8/10 TheFork",
  "+179 Reseñas",
  "Glovo Delivery",
  "Ávila · España",
  "Desde 2016",
];

export function Marquee() {
  const row = [...items, ...items, ...items];
  return (
    <section
      className="relative border-y border-white/5 bg-background overflow-hidden py-5"
      data-testid="marquee-bar"
    >
      <div className="marquee font-display text-2xl md:text-3xl tracking-[0.12em] text-foreground/45">
        {row.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-12">
            {t}
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "hsl(var(--primary))" }}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
