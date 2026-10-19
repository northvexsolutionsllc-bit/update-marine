interface MarqueeProps {
  items: string[];
  duration?: number;
  tone?: "accent" | "dark";
}

export default function Marquee({ items, duration = 34, tone = "accent" }: MarqueeProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`m-marquee relative border-y py-4 ${
        isDark ? "border-background-50/12 bg-primary-950" : "border-background-300/70 bg-background-100"
      }`}
      aria-hidden="true"
    >
      <div className="m-marquee-track" style={{ animationDuration: `${duration}s` }}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className={`flex items-center gap-5 whitespace-nowrap px-6 font-label text-[10px] font-semibold uppercase tracking-[0.26em] ${
                  isDark ? "text-background-100/80" : "text-primary-900"
                }`}
              >
                {item}
                <span className="h-1 w-1 rotate-45 bg-accent-500" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}