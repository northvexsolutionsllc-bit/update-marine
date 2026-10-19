import type { ReactNode } from "react";
import useTilt from "@/hooks/useTilt";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number;
}

/**
 * Wraps content in a mouse-driven 3D tilt surface.
 * Children can use translateZ for real depth layering.
 */
export default function TiltCard({ children, className = "", max = 8 }: TiltCardProps) {
  const { ref, handleMove, handleLeave } = useTilt({ max });

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`m-tilt ${className}`}
    >
      {children}
    </div>
  );
}