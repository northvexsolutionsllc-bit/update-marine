import { useCallback, useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

interface TiltConfig {
  max?: number;
  lift?: number;
}

export default function useTilt({ max = 8, lift = 1.01 }: TiltConfig = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);

  const apply = useCallback((x: number, y: number, scale: number) => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--tilt-x", `${x.toFixed(2)}deg`);
    node.style.setProperty("--tilt-y", `${y.toFixed(2)}deg`);
    node.style.setProperty("--tilt-scale", scale.toFixed(3));
  }, []);

  const handleMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const node = ref.current;
      if (!node || event.pointerType === "touch") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        apply(-py * max * 2, px * max * 2, lift);
      });
    },
    [apply, lift, max],
  );

  const handleLeave = useCallback(() => {
    if (frame.current) cancelAnimationFrame(frame.current);
    apply(0, 0, 1);
  }, [apply]);

  useEffect(
    () => () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    },
    [],
  );

  return { ref, handleMove, handleLeave };
}