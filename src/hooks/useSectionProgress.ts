import { useEffect, useRef } from "react";

/**
 * Writes a normalized 0 to 1 scroll progress value to the `--p` custom property
 * on the referenced element. Children can consume it for horizontal drift
 * without triggering React re-renders on every scroll frame.
 */
export default function useSectionProgress<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.style.setProperty("--p", "0.5");
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height + viewport;
      const travelled = viewport - rect.top;
      const progress = Math.min(1, Math.max(0, travelled / total));
      node.style.setProperty("--p", progress.toFixed(4));
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
  }, []);

  return ref;
}