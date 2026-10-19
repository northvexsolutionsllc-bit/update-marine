import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import { siteInfo } from "@/mocks/site";

export default function ServiceAreaSection() {
  return (
    <section className="bg-background-50 py-20 md:py-24">
      <div className="mx-auto w-full max-w-container px-4 md:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <Reveal variant="left" className="lg:w-1/2">
            <div>
              <span className="inline-flex items-center gap-3 text-secondary-600">
                <span className="inline-block h-px w-8 bg-current opacity-60" />
                <span className="m-eyebrow">Where We Work</span>
              </span>
              <h2 className="mt-5 font-heading text-[1.95rem] font-light leading-[1.08] tracking-[-0.02em] text-primary-950 md:text-[2.6rem]">
                Connecticut &amp; New York Backyards, Built by Local Crews
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-600 md:text-base">
                Based in Derby, Connecticut, we work across Fairfield, New Haven, and Litchfield
                counties and into Westchester and the lower Hudson Valley. Because we are local, the
                crew that quotes your project is the crew that shows up, and the same crew comes back
                if anything needs attention.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {siteInfo.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-secondary-300/70 bg-secondary-50 px-3 py-1.5 font-label text-[11px] font-medium text-secondary-900"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="whitespace-nowrap rounded-md bg-primary-900 px-6 py-3 font-label text-[13px] font-medium text-background-50 transition-colors hover:bg-primary-800"
                >
                  Check My Address
                </Link>
                <a
                  href={siteInfo.phoneHref}
                  className="flex items-center gap-2 whitespace-nowrap rounded-md border border-primary-300 px-6 py-3 font-label text-[13px] font-medium text-primary-900 transition-colors hover:bg-primary-50"
                >
                  <i className="ri-phone-line" aria-hidden="true"></i>
                  {siteInfo.phone}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120} className="lg:w-1/2">
            <div className="relative">
              <div className="h-[320px] w-full overflow-hidden rounded-lg border border-background-300/60 md:h-[420px]">
                <img
                  src="https://www.marinepoolrenovationsllc.com/images/projects/aerial-rectangular-pool-slide.jpg"
                  alt="Aerial view of a completed backyard pool with fencing and stone patio in Connecticut"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-background-200/70 bg-background-50/95 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-950 text-accent-400">
                    <span className="absolute h-9 w-9 rounded-md border border-accent-500/50 m-ripple" />
                    <i className="ri-map-pin-2-line relative" aria-hidden="true"></i>
                  </span>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-[0.18em] text-foreground-500">
                      Home Base
                    </p>
                    <p className="font-label text-[13px] font-medium text-primary-950">
                      {siteInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}