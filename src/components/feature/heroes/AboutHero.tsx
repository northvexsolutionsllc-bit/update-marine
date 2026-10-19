import { Link } from "react-router-dom";
import { siteInfo } from "@/mocks/site";
import useParallax from "@/hooks/useParallax";

const timeline = [
  { year: "2019", label: "First gunite renovation in Derby" },
  { year: "2021", label: "Crews expand across Fairfield County" },
  { year: "2023", label: "Outdoor living and patio division added" },
  { year: "2026", label: "120+ pools rebuilt across CT and NY" },
];

export default function AboutHero() {
  const portraitRef = useParallax<HTMLImageElement>(0.05, 1.1);

  return (
    <section className="relative overflow-hidden bg-primary-950 pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(95%_80%_at_10%_0%,rgba(26,74,58,0.9),transparent_60%)]" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-[380px] w-[380px] rounded-full bg-secondary-400/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-container px-4 md:px-6">
        <div className="m-fade flex items-center justify-between gap-4 border-b border-background-50/12 pb-4 [animation-delay:60ms]">
          <span className="font-label text-[9px] font-semibold uppercase tracking-[0.26em] text-accent-200/80">
            About the company
          </span>
          <span className="m-rule-in hidden h-px flex-1 bg-background-50/10 [animation-delay:180ms] sm:block" />
          <span className="font-label text-[9px] font-semibold uppercase tracking-[0.26em] text-background-200/45">
            Since {siteInfo.founded}
          </span>
        </div>

        <div className="flex flex-col gap-12 pb-12 pt-10 lg:flex-row lg:items-center lg:gap-14 lg:pb-14">
          <div className="relative order-2 mx-auto w-full max-w-[360px] lg:order-1 lg:mx-0 lg:w-[38%] lg:max-w-none">
            <div
              className="m-fade absolute -inset-2 border border-accent-500/25 [animation-delay:460ms]"
              aria-hidden="true"
            />
            <div className="m-plate-in relative [animation-delay:300ms]">
              <div className="relative h-[360px] w-full overflow-hidden bg-primary-900 md:h-[460px]">
                <img
                  ref={portraitRef}
                  src="https://www.marinepoolrenovationsllc.com/images/projects/plastering-blue-plaster-application.jpg"
                  alt="Marine Pool Renovations crew applying a fresh plaster finish to a pool shell"
                  className="h-full w-full object-cover object-top will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 border border-background-50/25 bg-primary-950/55 px-2.5 py-1 font-label text-[9px] font-semibold uppercase tracking-[0.18em] text-accent-200 backdrop-blur-sm">
                  On site · Derby, CT
                </span>
              </div>
            </div>

            <div className="m-float absolute -bottom-6 right-2 w-[210px] border border-background-50/20 bg-primary-900/92 p-4 backdrop-blur-md md:-right-6">
              <p className="font-label text-[9px] uppercase tracking-[0.2em] text-accent-300">
                Founder
              </p>
              <p className="mt-1.5 font-heading text-base leading-snug text-background-50">
                Richard, lead contractor
              </p>
              <p className="mt-1.5 font-label text-[10px] text-background-300/70">
                {siteInfo.license}
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:w-[62%]">
            <div className="flex items-center gap-3">
              <span className="m-rule-in block h-px w-10 bg-accent-400/70 [animation-delay:120ms]" />
              <span className="m-fade m-eyebrow text-accent-200 [animation-delay:240ms]">
                Our story
              </span>
            </div>

            <h1 className="mt-6 whitespace-nowrap font-heading font-light leading-[0.98] tracking-[-0.035em] text-background-50">
              <span className="m-line-mask">
                <span
                  className="text-[1.95rem] sm:text-[3.2rem] lg:text-[3.6rem]"
                  style={{ animationDelay: "170ms" }}
                >
                  A local crew that
                </span>
              </span>
              <span className="m-line-mask">
                <span
                  className="text-[1.95rem] sm:text-[3.2rem] lg:text-[3.6rem]"
                  style={{ animationDelay: "270ms" }}
                >
                  treats your backyard
                </span>
              </span>
              <span className="m-line-mask">
                <span
                  className="text-[1.95rem] italic text-accent-300 sm:text-[3.2rem] lg:text-[3.6rem]"
                  style={{ animationDelay: "370ms" }}
                >
                  like a build
                </span>
              </span>
            </h1>

            <p className="m-rise mt-7 max-w-[480px] text-[13.5px] leading-[1.8] text-background-200/70 [animation-delay:560ms] md:text-[14.5px]">
              {siteInfo.name} has been building, renovating, and repairing pools across Connecticut
              and New York since {siteInfo.founded}. Licensed, insured, and still answering the phone
              personally.
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
                See Our Projects
              </Link>
            </div>

            <div className="m-rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 [animation-delay:760ms]">
              {[siteInfo.license, "Licensed & insured", "NESPA / CONSPA"].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 font-label text-[9px] font-semibold uppercase tracking-[0.16em] text-background-200/55"
                >
                  <i className="ri-check-line text-accent-300" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="m-fade border-t border-background-50/10 py-7 [animation-delay:820ms]">
          <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex min-w-0 flex-1 items-start gap-3">
                <span className="mt-1 h-8 w-px shrink-0 bg-accent-400/40" />
                <div>
                  <p className="font-heading text-[1.1rem] leading-none text-accent-200">
                    {item.year}
                  </p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-background-300/65">
                    {item.label}
                  </p>
                </div>
                {index < timeline.length - 1 ? (
                  <span className="ml-auto mt-4 hidden h-px flex-1 bg-background-50/10 sm:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}