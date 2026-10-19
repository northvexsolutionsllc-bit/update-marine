import { Link } from "react-router-dom";
import { serviceCategories, services } from "@/mocks/services";
import useParallax from "@/hooks/useParallax";

const indexCategories = serviceCategories.filter((item) => item !== "All");

export default function ServicesHero() {
  const bandRef = useParallax<HTMLImageElement>(0.06, 1.08);

  return (
    <section className="relative overflow-hidden bg-primary-950 pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_80%_at_85%_0%,rgba(28,76,60,0.85),transparent_60%)]" />
      <div className="pointer-events-none absolute -left-28 bottom-0 h-[320px] w-[320px] rounded-full bg-accent-500/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-container px-4 md:px-6">
        <div className="m-fade flex items-center justify-between gap-4 border-b border-background-50/12 pb-4 [animation-delay:60ms]">
          <span className="font-label text-[9px] font-semibold uppercase tracking-[0.26em] text-accent-200/80">
            Services
          </span>
          <span className="m-rule-in hidden h-px flex-1 bg-background-50/10 [animation-delay:180ms] sm:block" />
          <span className="font-label text-[9px] font-semibold uppercase tracking-[0.26em] text-background-200/45">
            {services.length} disciplines · {indexCategories.length} categories
          </span>
        </div>

        <div className="flex flex-col gap-11 pt-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="lg:max-w-[600px]">
            <div className="flex items-center gap-3">
              <span className="m-rule-in block h-px w-10 bg-accent-400/70 [animation-delay:120ms]" />
              <span className="m-fade m-eyebrow text-accent-200 [animation-delay:240ms]">
                Construction, renovation, care
              </span>
            </div>

            <h1 className="mt-6 whitespace-nowrap font-heading font-light leading-[0.94] tracking-[-0.035em] text-background-50">
              <span className="m-line-mask">
                <span
                  className="text-[2.25rem] sm:text-[3.3rem] lg:text-[3.8rem]"
                  style={{ animationDelay: "170ms" }}
                >
                  Every stage
                </span>
              </span>
              <span className="m-line-mask pl-6 sm:pl-10">
                <span
                  className="text-[2.25rem] sm:text-[3.3rem] lg:text-[3.8rem]"
                  style={{ animationDelay: "270ms" }}
                >
                  of your pool,
                </span>
              </span>
              <span className="m-line-mask">
                <span
                  className="m-brass-text m-shimmer-text text-[2.25rem] italic sm:text-[3.3rem] lg:text-[3.8rem]"
                  style={{ animationDelay: "370ms" }}
                >
                  under one roof
                </span>
              </span>
            </h1>

            <p className="m-rise mt-7 max-w-[430px] text-[13.5px] leading-[1.8] text-background-200/75 [animation-delay:560ms] md:text-[14.5px]">
              Sixteen services covering construction, renovation, outdoor living, seasonal care, and
              commercial systems, delivered by the same licensed crews that have been building in
              Connecticut since 2019.
            </p>

            <div className="m-rise mt-8 flex flex-wrap gap-3 [animation-delay:660ms]">
              <Link
                to="/contact"
                className="m-press m-cta inline-flex items-center gap-3 whitespace-nowrap bg-accent-400 px-7 py-3.5 text-primary-950 hover:bg-accent-300"
              >
                Request Free Estimate
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </Link>
              <Link
                to="/projects"
                className="m-press m-cta inline-flex items-center gap-3 whitespace-nowrap border border-background-50/25 px-7 py-3.5 text-background-50 hover:border-accent-300/60 hover:bg-background-50/5"
              >
                See Our Work
              </Link>
            </div>
          </div>

          <div className="m-fade w-full border-t border-background-50/15 pt-5 lg:mt-2 lg:w-[300px] lg:shrink-0 [animation-delay:420ms]">
            <div className="flex items-center justify-between">
              <p className="m-eyebrow text-accent-300">The index</p>
              <i className="ri-list-check-2 text-accent-400/70" aria-hidden="true" />
            </div>

            <ul className="mt-4">
              {indexCategories.map((category, index) => (
                <li key={category}>
                  <Link
                    to="/services"
                    className="group flex items-center justify-between gap-4 border-b border-background-50/10 py-3"
                  >
                    <span className="flex min-w-0 items-baseline gap-3">
                      <span className="font-label text-[9px] text-background-300/40">
                        0{index + 1}
                      </span>
                      <span className="font-heading text-[15px] text-background-100/85 transition-colors group-hover:text-background-50">
                        {category}
                      </span>
                    </span>
                    <i
                      className="ri-arrow-right-line shrink-0 text-xs text-accent-300 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-baseline gap-2.5">
              <span className="font-heading text-[2.4rem] font-light leading-none text-accent-200">
                16
              </span>
              <span className="font-label text-[9px] font-semibold uppercase tracking-[0.18em] text-background-300/50">
                services delivered
              </span>
            </div>
          </div>
        </div>

        <div className="m-plate-in relative mt-11 [animation-delay:620ms]">
          <div className="relative overflow-hidden">
            <img
              ref={bandRef}
              src="https://www.marinepoolrenovationsllc.com/images/projects/stone-steps-patio.webp"
              alt="Refinished pool with stone steps and a natural stone patio surround"
              className="h-[200px] w-full object-cover object-top will-change-transform md:h-[300px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/35 to-primary-950/10" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 md:flex-row md:items-end md:justify-between md:p-7">
              <div className="m-fade [animation-delay:900ms]">
                <span className="font-label text-[9px] font-semibold uppercase tracking-[0.22em] text-accent-300">
                  One accountable crew
                </span>
                <p className="mt-2 max-w-md font-heading text-xl leading-snug text-background-50 md:text-[1.7rem]">
                  Construction, renovation, and outdoor living under one roof.
                </p>
              </div>
              <Link
                to="/contact"
                className="m-press m-cta w-fit shrink-0 whitespace-nowrap border border-background-50/35 px-5 py-2.5 text-background-50 hover:bg-background-50 hover:text-primary-950"
              >
                Ask About Your Pool
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}