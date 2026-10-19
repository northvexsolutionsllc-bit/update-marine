import Reveal from "@/components/base/Reveal";
import TiltCard from "@/components/base/TiltCard";

const details = [
  {
    icon: "ri-water-flash-line",
    title: "Hydraulics Sized To The Pool",
    copy: "Turnover, skimmer draw, and return placement are calculated before the shell is shot, not guessed at the equipment pad.",
  },
  {
    icon: "ri-layout-masonry-line",
    title: "Hand-Set Tile & Coping",
    copy: "Waterline tile, coping, and stone are laid by the same crew that prepped the bond beam, so the lines actually stay true.",
  },
  {
    icon: "ri-sun-line",
    title: "Finish Seen In Your Light",
    copy: "We pour finish samples and look at them in your backyard at noon and dusk, because plaster reads differently in every yard.",
  },
];

const progress = [
  { label: "Shell & Structure", value: 100 },
  { label: "Hydraulic Design", value: 82 },
  { label: "Finish & Tile", value: 64 },
];

export default function DepthSection() {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-20 md:py-28">
      <div className="m-drift pointer-events-none absolute -left-24 top-8 h-80 w-80 rounded-full bg-accent-500/15 blur-3xl" />
      <div className="m-caustic pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-secondary-400/10 blur-3xl [animation-delay:4s]" />

      <div className="relative mx-auto flex w-full max-w-container flex-col gap-14 px-4 md:px-6 lg:flex-row lg:items-center lg:gap-16">
        <div className="lg:w-[46%]">
          <Reveal variant="left">
            <span className="inline-flex items-center gap-3 text-accent-300">
              <span className="inline-block h-px w-8 bg-current opacity-60" />
              <span className="m-eyebrow">Built In Three Dimensions</span>
            </span>
            <h2 className="mt-5 font-heading text-[1.95rem] font-light leading-[1.08] tracking-[-0.02em] text-background-50 md:text-[2.6rem]">
              The Details You Feel Before You Notice Them
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-background-200/80 md:text-base">
              A pool is not a hole with water in it. It is a shell, a hydraulic system, a finish, and
              a deck, each one built in sequence and each one affecting how the next one performs.
              Here is what we are actually looking at during your build.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-col gap-2.5">
            {details.map((item, index) => (
              <Reveal key={item.title} delay={80 + index * 90} variant="left">
                <div className="group m-lift flex gap-4 rounded-lg border border-background-50/10 bg-background-50/[0.04] p-4 hover:border-accent-400/40 hover:bg-background-50/[0.07]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-400/15 text-accent-300 transition-transform duration-500 group-hover:scale-110">
                    <i className={`${item.icon} text-lg`} aria-hidden="true"></i>
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-heading text-lg leading-snug text-background-50">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-background-200/70">
                      {item.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="scale" delay={120} className="lg:w-[54%]">
          <div className="relative [perspective:1500px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent-300/20 m-spin-slow md:h-[480px] md:w-[480px]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/10 blur-3xl md:h-[340px] md:w-[340px]" />

            <TiltCard max={10} className="relative">
              <div className="m-sheen relative overflow-hidden rounded-lg border border-background-50/15 bg-primary-900">
                <img
                  src="https://www.marinepoolrenovationsllc.com/images/projects/stone-steps-patio.webp"
                  alt="Refinished pool with hand-set natural stone steps and coping detail"
                  className="h-[300px] w-full object-cover object-top md:h-[430px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <span className="font-label text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-300">
                    Finish &amp; Structure
                  </span>
                  <p className="mt-1.5 max-w-xs font-heading text-xl leading-snug text-background-50">
                    Split-face stone steps, bluestone coping, glass waterline tile
                  </p>
                </div>
              </div>

              {/* floating layer: hydraulics */}
              <div
                className="absolute -left-4 top-8 hidden w-[186px] sm:block md:-left-8"
                style={{ transform: "translateZ(90px)" }}
              >
                <div className="m-float rounded-lg border border-background-50/20 bg-primary-900/80 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-400/20 text-accent-300">
                      <i className="ri-water-flash-line text-sm" aria-hidden="true"></i>
                    </span>
                    <span className="font-label text-[9px] uppercase tracking-[0.18em] text-background-200/70">
                      Hydraulics
                    </span>
                  </div>
                  <p className="mt-2 font-heading text-xl leading-none text-background-50">6 hrs</p>
                  <p className="mt-1 font-label text-[10px] text-background-300/70">
                    Designed turnover
                  </p>
                  <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-background-50/15">
                    <span className="m-bar block h-full w-[82%] rounded-full bg-accent-400" />
                  </div>
                </div>
              </div>

              {/* floating layer: build progress */}
              <div
                className="absolute -bottom-8 -right-2 hidden w-[214px] sm:block md:-right-6"
                style={{ transform: "translateZ(130px)" }}
              >
                <div className="m-float-slow rounded-lg border border-background-50/20 bg-primary-900/85 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="font-label text-[9px] uppercase tracking-[0.18em] text-accent-200">
                      Build Stage
                    </span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-400 text-primary-950">
                      <i className="ri-check-line text-[10px]" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="mt-2.5 space-y-2">
                    {progress.map((row) => (
                      <div key={row.label}>
                        <div className="flex items-center justify-between font-label text-[9px] uppercase tracking-[0.1em] text-background-200/70">
                          <span>{row.label}</span>
                          <span className="text-accent-300">{row.value}%</span>
                        </div>
                        <div className="mt-1 h-0.5 w-full overflow-hidden rounded-full bg-background-50/15">
                          <span
                            className="m-bar block h-full rounded-full bg-accent-400/80"
                            style={{ width: `${row.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>

            <p className="mt-10 hidden text-center font-label text-[10px] uppercase tracking-[0.2em] text-background-300/45 sm:block">
              Move your cursor across the frame
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}