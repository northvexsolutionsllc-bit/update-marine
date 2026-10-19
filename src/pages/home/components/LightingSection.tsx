import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import useParallax from "@/hooks/useParallax";

export default function LightingSection() {
  const bgRef = useParallax<HTMLImageElement>(0.12, 1.12);

  return (
    <section className="relative overflow-hidden bg-primary-950">
      <img
        ref={bgRef}
        src="https://www.marinepoolrenovationsllc.com/images/projects/firepit-spa-pool.webp"
        alt="Backyard pool and spa at dusk with fire bowl and warm landscape lighting"
        className="absolute inset-0 h-full w-full object-cover object-top will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/85 via-primary-950/60 to-primary-950/90" />

      <div className="m-drift pointer-events-none absolute bottom-8 left-1/4 h-40 w-40 rounded-full bg-secondary-400/25 blur-3xl" />
      <div className="m-caustic pointer-events-none absolute bottom-12 right-1/4 h-32 w-56 rounded-full bg-accent-500/20 blur-3xl [animation-delay:4s]" />

      <div className="pointer-events-none absolute inset-0">
        {[
          { top: "22%", left: "12%", delay: "0s" },
          { top: "38%", left: "78%", delay: "1.4s" },
          { top: "64%", left: "22%", delay: "2.2s" },
          { top: "18%", left: "56%", delay: "3s" },
          { top: "70%", left: "88%", delay: "0.8s" },
        ].map((dot) => (
          <span
            key={`${dot.top}-${dot.left}`}
            className="m-float absolute h-1.5 w-1.5 rounded-full bg-accent-300/70"
            style={{ top: dot.top, left: dot.left, animationDelay: dot.delay }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-container px-4 py-20 text-center md:px-6 md:py-28">
        <Reveal variant="blur">
          <div className="flex items-center justify-center gap-3 text-accent-300">
            <span className="inline-block h-px w-8 bg-current opacity-60" />
            <span className="m-eyebrow">Available Add-On</span>
            <span className="inline-block h-px w-8 bg-current opacity-60" />
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-heading text-[2rem] font-light leading-[1.02] tracking-[-0.03em] text-background-50 md:text-[3.4rem]">
            Pool &amp; landscape <em className="italic text-accent-300">lighting</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[14px] leading-relaxed text-background-100/80 md:text-[15px]">
            Custom LED lighting turns your backyard into an evening destination. Accent lighting for
            water features, decking, and fire elements is designed as one system, not a set of
            disconnected fixtures. Ask us about a lighting package on your next project.
          </p>
          <Link
            to="/contact"
            className="m-press m-cta mt-9 inline-flex whitespace-nowrap bg-accent-400 px-8 py-4 text-primary-950 hover:bg-accent-300"
          >
            Ask About Lighting
          </Link>
        </Reveal>
      </div>
    </section>
  );
}