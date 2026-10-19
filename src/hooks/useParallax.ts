import { useEffect, useRef } from "react";

/**
 * Scroll-linked parallax. Applies a translate + subtle scale to the given
 * element based on its position relative to the viewport center.
 */
export default function useParallax<T extends HTMLElement = HTMLImageElement>(
  strength = 0.16,
  baseScale = 1.1,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const host = node.parentElement ?? node;
      const rect = host.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
      const center = rect.top + rect.height / 2;
      const offset = (window.innerHeight / 2 - center) * strength;
      const clamped = Math.max(-120, Math.min(120, offset));
      node.style.transform = `translate3d(0, ${clamped.toFixed(1)}px, 0) scale(${baseScale})`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [strength, baseScale]);

  return ref;
}