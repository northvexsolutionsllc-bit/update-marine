import { useCallback, useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/base/SectionHeading";
import Reveal from "@/components/base/Reveal";
import { afterImage, beforeImage } from "@/mocks/testimonials";

export default function BeforeAfterSection() {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (event: PointerEvent) => updateFromClientX(event.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragging, updateFromClientX]);

  return (
    <section className="bg-background-100 py-20 md:py-24">
      <div className="mx-auto w-full max-w-container px-4 md:px-6">
        <Reveal variant="blur">
          <SectionHeading
            eyebrow="See The Difference"
            title="Before & After"
            copy="Drag the slider to see a pool mid-renovation transform into a finished resort-style backyard."
          />
        </Reveal>

        <Reveal variant="scale" delay={100}>
        <div
          ref={frameRef}
          className="relative mx-auto mt-12 aspect-[16/10] w-full max-w-4xl select-none overflow-hidden rounded-lg border border-background-300/60"
          onPointerDown={(event) => {
            setDragging(true);
            updateFromClientX(event.clientX);
          }}
        >
          <img
            src={afterImage}
            alt="Finished pool after renovation with raised spa and tan decking"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img
              src={beforeImage}
              alt="Pool mid-renovation before completion, shell stripped to structure"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>

          <span className="absolute left-3 top-3 z-10 rounded-full bg-primary-950/80 px-3 py-1 font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-background-50">
            Before
          </span>
          <span className="absolute right-3 top-3 z-10 rounded-full bg-accent-400/90 px-3 py-1 font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-950">
            After
          </span>

          <div
            role="slider"
            tabIndex={0}
            aria-label="Before and after comparison position"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            className="absolute inset-y-0 z-10 w-0.5 cursor-ew-resize bg-background-50"
            style={{ left: `${position}%` }}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
              if (event.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
            }}
          >
            <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-background-300/60 bg-background-50 text-primary-900 shadow-[0_6px_18px_-8px_rgba(12,40,32,0.65)]">
              <span className="absolute inset-0 rounded-full border border-accent-500/60 m-ripple" />
              <i className="ri-arrow-left-right-line relative text-lg" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        </Reveal>

        <p className="mt-5 text-center font-label text-[11px] uppercase tracking-[0.18em] text-foreground-500">
          Drag the handle · Fully rebuilt shell, finish, and decking
        </p>
      </div>
    </section>
  );
}