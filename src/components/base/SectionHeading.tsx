interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  accentClass?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "center",
  tone = "light",
  accentClass,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";
  const eyebrowColor = accentClass ?? (isDark ? "text-accent-300" : "text-secondary-600");

  const words = title.trim().split(" ");
  const tail = words.length > 2 ? words.pop() : "";
  const lead = words.join(" ");

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <span
        className={`inline-flex items-center gap-3 ${isDark ? "" : "justify-start"} ${eyebrowColor}`}
      >
        <span className="inline-block h-px w-8 bg-current opacity-60" />
        <span className="m-eyebrow">{eyebrow}</span>
      </span>

      <h2
        className={`mt-5 font-heading text-[1.95rem] leading-[1.06] tracking-[-0.02em] md:text-[2.9rem] ${
          isDark ? "text-background-50" : "text-primary-950"
        }`}
      >
        {lead}
        {tail ? (
          <>
            {" "}
            <em
              className={`font-heading italic ${
                isDark ? "text-accent-300" : "text-accent-700"
              }`}
            >
              {tail}
            </em>
          </>
        ) : null}
      </h2>

      {copy ? (
        <p
          className={`mt-5 text-[13.5px] leading-relaxed md:text-[15px] ${
            isDark ? "text-background-200/75" : "text-foreground-600"
          } ${isCenter ? "mx-auto max-w-xl" : "max-w-xl"}`}
        >
          {copy}
        </p>
      ) : null}

      <span
        className={`mt-7 inline-block h-px w-16 ${
          isDark ? "bg-accent-500/40" : "bg-accent-600/50"
        }`}
      />
    </div>
  );
}