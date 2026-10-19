import type { ReactNode } from "react";
import useInView from "@/hooks/useInView";

type RevealVariant = "up" | "left" | "right" | "scale" | "flip" | "blur";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  once?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
  once = true,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ once });

  return (
    <div
      ref={ref}
      data-variant={variant}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}