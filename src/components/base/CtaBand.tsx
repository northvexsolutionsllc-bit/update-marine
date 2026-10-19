import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import { siteInfo } from "@/mocks/site";

interface CtaBandProps {
  eyebrow?: string;
  title?: string;
  copy?: string;
}

export default function CtaBand({
  eyebrow = "Start Your Project",
  title = "Let's Turn That Backyard Into Something Worth Staying Home For",
  copy = "Free estimates, honest timelines, and a crew that has been building and renovating pools across Connecticut and New York since 2019.",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-primary-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_120%_at_85%_0%,rgba(201,164,76,0.14),transparent_60%)]" />
      <div className="m-drift pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-accent-500/12 blur-3xl" />
      <div className="m-caustic pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-primary-400/10 blur-3xl [animation-delay:3s]" />

      <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent md:inset-x-10" />

      <div className="relative mx-auto flex w-full max-w-container flex-col gap-10 px-4 py-16 md:flex-row md:items-end md:justify-between md:px-6 md:py-20">
        <Reveal variant="left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-accent-400/70" />
              <span className="m-eyebrow text-accent-300">{eyebrow}</span>
            </div>
            <h2 className="mt-6 font-heading text-[1.85rem] font-light leading-[1.06] tracking-[-0.02em] text-background-50 md:text-[2.9rem]">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-[13.5px] leading-relaxed text-background-200/70 md:text-[15px]">
              {copy}
            </p>
          </div>
        </Reveal>
        <Reveal variant="right" delay={120}>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:items-center">
            <Link
              to="/contact"
              className="m-press m-cta whitespace-nowrap bg-accent-400 px-8 py-4 text-center text-primary-950 hover:bg-accent-300"
            >
              Request Free Estimate
            </Link>
            <a
              href={siteInfo.phoneHref}
              className="m-press m-cta flex items-center justify-center gap-2 whitespace-nowrap border border-background-50/25 px-8 py-4 text-background-50 hover:border-accent-300/60 hover:bg-background-50/5"
            >
              <i className="ri-phone-line text-sm" aria-hidden="true"></i>
              {siteInfo.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}