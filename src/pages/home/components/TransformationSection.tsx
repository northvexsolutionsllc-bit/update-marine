import { useState } from "react";
import Reveal from "@/components/base/Reveal";
import useSectionProgress from "@/hooks/useSectionProgress";
import { transformationStages } from "@/mocks/testimonials";

export default function TransformationSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useSectionProgress<HTMLElement>();
  const stage = transformationStages[active];

  const go = (dir: number) => {
    setActive((prev) => (prev + dir + transformationStages.length) % transformationStages.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-primary-950 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-accent-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-secondary-400/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-container px-4 md:px-6">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-14">
          <Reveal variant="blur" className="lg:max-w-[560px]">
            <div>
              <div className="flex items-center gap-3 text-accent-300">
                <span className="inline-block h-px w-8 bg-current opacity-60" />
                <span className="m-eyebrow">The Process</span>
              </div>
              <h2 className="mt-5 font-heading text-[1.95rem] font-light leading-[1.06] tracking-[-0.02em] text-background-50 md:text-[2.9rem]">
                From old pool to
                <br />
                <em className="italic text-accent-300">a luxury result</em>
              </h2>
            </div>
          </Reveal>

          <Reveal variant="up" delay={120} className="lg:max-w-[340px]">
            <div>
              <p className="text-[13.5px] leading-relaxed text-background-200/70 md:text-[14.5px]">
                Five stages, one crew, and a schedule you can plan around. Step through what a Marine
                Pool renovation looks like from the inside.
              </p>
              <p className="mt-4 flex items-baseline gap-2 font-label text-[10px] uppercase tracking-[0.2em] text-background-300/45">
                <span className="font-heading text-xl normal-case tracking-normal text-accent-200">
                  0{active + 1}
                </span>
                <span>/ 0{transformationStages.length}</span>
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-11">
          <div className="pointer-events-none absolute left-0 right-0 top-4 hidden h-px bg-background-50/12 sm:block" />
          <div
            className="pointer-events-none absolute left-0 right-0 top-4 hidden h-px origin-left bg-accent-400/70 transition-transform duration-700 ease-out sm:block"
            style={{ transform: `scaleX(${(active + 1) / transformationStages.length})` }}
          />

          <div className="relative overflow-x-auto pb-1 sm:overflow-visible">
            <div className="flex min-w-max gap-3 sm:min-w-0 sm:gap-0">
              {transformationStages.map((item, index) => {
                const isActive = index === active;
                return (
                  <Reveal
                    key={item.title}
                    delay={index * 90}
                    variant="step"
                    className="sm:flex-1"
                  >
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      aria-current={isActive}
                      className="group flex w-[148px] flex-col items-start gap-3 pr-4 text-left sm:w-full"
                    >
                      <span
                        className={`relative z-10 flex h-8 w-8 items-center justify-center border font-label text-[10px] font-semibold transition-all duration-500 ${
                          isActive
                            ? "border-accent-400 bg-accent-400 text-primary-950"
                            : "border-background-50/25 bg-primary-950 text-background-200/65 group-hover:border-background-50/50 group-hover:text-background-50"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <span
                        className={`font-label text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
                          isActive
                            ? "text-background-50"
                            : "text-background-300/50 group-hover:text-background-200/80"
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-9 lg:flex-row lg:items-start lg:gap-12">
          <div className="relative lg:w-[58%]">
            <span
              className="m-scroll-deep pointer-events-none absolute -top-16 right-2 select-none font-heading text-[126px] leading-none text-background-50/[0.05] md:text-[170px]"
              aria-hidden="true"
            >
              0{active + 1}
            </span>

            <Reveal variant="scale" delay={80} className="relative">
              <div className="m-scroll-left relative">
                <div className="relative aspect-[16/11] w-full overflow-hidden border border-background-50/12 bg-primary-900 sm:aspect-[16/10]">
                  {transformationStages.map((item, index) => (
                    <img
                      key={item.imageAlt}
                      src={item.image}
                      alt={item.imageAlt}
                      className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-[900ms] ease-out ${
                        index === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/15 to-transparent" />

                  <div className="m-scroll-right absolute right-8 top-5 border border-background-50/20 bg-primary-950/60 px-3 py-1.5 backdrop-blur-md">
                    <span className="flex items-center gap-1.5 font-label text-[9px] font-semibold uppercase tracking-[0.14em] text-accent-200">
                      <i className="ri-shield-check-line text-xs" aria-hidden="true" />
                      Warranty backed
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
                    <div key={stage.title} className="m-fade">
                      <span className="font-label text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-300">
                        {stage.stage}
                      </span>
                      <h3 className="mt-2 font-heading text-2xl leading-tight text-background-50 md:text-[2rem]">
                        {stage.title}
                      </h3>
                    </div>
                    <div className="hidden items-center gap-1.5 sm:flex">
                      {transformationStages.map((item, index) => (
                        <button
                          key={item.title}
                          type="button"
                          aria-label={`Go to ${item.title}`}
                          onClick={() => setActive(index)}
                          className={`h-px transition-all duration-500 ${
                            index === active
                              ? "w-7 bg-accent-400"
                              : "w-3.5 bg-background-50/30 hover:bg-background-50/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" delay={160} className="lg:w-[42%]">
            <div className="flex h-full flex-col">
              <span className="font-heading text-[3.2rem] leading-none text-accent-300/80 md:text-[4.2rem]">
                0{active + 1}
              </span>
              <p className="mt-3 font-label text-[10px] font-semibold uppercase tracking-[0.22em] text-background-300/50">
                {stage.stage}
              </p>
              <h3 className="mt-4 font-heading text-[1.7rem] font-light leading-tight text-background-50 md:text-[2.1rem]">
                {stage.title}
              </h3>
              <p key={stage.copy} className="m-fade mt-4 max-w-md text-[13.5px] leading-[1.8] text-background-200/70 md:text-[14.5px]">
                {stage.copy}
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-background-50/10 pt-5">
                <button
                  type="button"
                  aria-label="Previous stage"
                  onClick={() => go(-1)}
                  className="flex h-9 w-9 items-center justify-center border border-background-50/20 text-background-100 transition-colors hover:border-accent-400/60 hover:bg-background-50/10"
                >
                  <i className="ri-arrow-left-line" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Next stage"
                  onClick={() => go(1)}
                  className="flex h-9 w-9 items-center justify-center border border-background-50/20 text-background-100 transition-colors hover:border-accent-400/60 hover:bg-background-50/10"
                >
                  <i className="ri-arrow-right-line" aria-hidden="true" />
                </button>
                <span className="ml-1 font-label text-[9px] uppercase tracking-[0.18em] text-background-300/40">
                  Select a stage
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}