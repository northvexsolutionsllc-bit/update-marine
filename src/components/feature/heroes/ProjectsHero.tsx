import { Link } from "react-router-dom";
import { projects } from "@/mocks/projects";

const strip = projects.slice(0, 3);

const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "5", label: "Work categories" },
  { value: "CT / NY", label: "Service region" },
];

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-background-50 pt-24 md:pt-28">
      <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-accent-100/70 blur-[130px]" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-[320px] w-[320px] rounded-full bg-secondary-100/60 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-container px-4 md:px-6">
        <div className="m-fade flex items-center justify-between gap-4 border-b border-background-300/70 pb-4 [animation-delay:60ms]">
          <span className="font-label text-[9px] font-semibold uppercase tracking-[0.26em] text-secondary-600">
            Selected work
          </span>
          <span className="m-rule-in hidden h-px flex-1 bg-background-300/70 [animation-delay:180ms] sm:block" />
          <span className="font-label text-[9px] font-semibold uppercase tracking-[0.26em] text-foreground-500">
            Connecticut · New York
          </span>
        </div>

        <div className="flex flex-col gap-9 pt-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="lg:max-w-[660px]">
            <h1 className="whitespace-nowrap font-heading font-light leading-[0.94] tracking-[-0.035em] text-primary-950">
              <span className="m-line-mask">
                <span
                  className="text-[2.35rem] sm:text-[3.3rem] lg:text-[4rem]"
                  style={{ animationDelay: "150ms" }}
                >
                  Pools we have
                </span>
              </span>
              <span className="m-line-mask pl-7 sm:pl-14">
                <span
                  className="text-[2.35rem] sm:text-[3.3rem] lg:text-[4rem]"
                  style={{ animationDelay: "250ms" }}
                >
                  rebuilt and
                </span>
              </span>
              <span className="m-line-mask">
                <span
                  className="text-[2.35rem] italic text-accent-700 sm:text-[3.3rem] lg:text-[4rem]"
                  style={{ animationDelay: "350ms" }}
                >
                  made new again
                </span>
              </span>
            </h1>

            <p className="m-rise mt-7 max-w-[460px] text-[13.5px] leading-[1.8] text-foreground-600 [animation-delay:540ms] md:text-[14.5px]">
              Real projects across Connecticut and New York, from full structural renovations to
              patios, fencing, and seasonal protection. Every one of them photographed on completion
              day.
            </p>

            <div className="m-rise mt-7 flex flex-wrap gap-3 [animation-delay:640ms]">
              <Link
                to="/contact"
                className="m-press m-cta inline-flex items-center gap-3 whitespace-nowrap bg-primary-950 px-7 py-3.5 text-background-50 hover:bg-primary-900"
              >
                Request Free Estimate
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="m-press m-cta inline-flex items-center gap-3 whitespace-nowrap border border-primary-900/25 px-7 py-3.5 text-primary-900 hover:border-primary-900/60 hover:bg-primary-50"
              >
                Browse Services
              </Link>
            </div>
          </div>

          <div className="m-fade flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-background-300/70 pt-5 lg:shrink-0 lg:border-t-0 lg:pt-0 [animation-delay:420ms]">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="font-heading text-[1.55rem] font-light leading-none text-primary-900">
                  {item.value}
                </p>
                <p className="mt-2 font-label text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-4 md:gap-6">
          {strip.map((project, index) => {
            const offset = ["sm:mt-0", "sm:mt-9", "sm:mt-4"][index];
            const height = ["h-[230px] md:h-[300px]", "h-[210px] md:h-[260px]", "h-[240px] md:h-[320px]"][index];
            return (
              <div
                key={project.id}
                className={`m-plate-in relative w-full sm:flex-1 ${offset}`}
                style={{ animationDelay: `${520 + index * 130}ms` }}
              >
                <div className={`group relative w-full overflow-hidden bg-background-100 ${height}`}>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover object-top transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-950/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-label text-[9px] font-semibold uppercase tracking-[0.18em] text-accent-200">
                      {project.location}
                    </p>
                    <p className="mt-1.5 font-heading text-[15px] leading-snug text-background-50">
                      {project.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}