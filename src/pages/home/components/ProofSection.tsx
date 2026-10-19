import SectionHeading from "@/components/base/SectionHeading";
import Reveal from "@/components/base/Reveal";
import Counter from "@/components/base/Counter";
import { siteInfo, stats } from "@/mocks/site";
import { testimonials } from "@/mocks/testimonials";

const reviewHighlights = testimonials.slice(0, 3);
const reviewVariants = ["left", "up", "right"] as const;

export default function ProofSection() {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-20 text-background-50 md:py-24">
      <div className="relative mx-auto w-full max-w-container px-4 md:px-6">
        <div className="flex flex-wrap items-end justify-center gap-x-12 gap-y-10 sm:justify-between">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 80}
              variant="up"
              className={index % 2 === 1 ? "lg:mt-8" : ""}
            >
              <div className="group border-l border-background-50/15 pl-5 transition-colors duration-500 hover:border-accent-400/60">
                <div className="font-heading text-4xl text-accent-300 transition-transform duration-500 group-hover:-translate-y-0.5 md:text-5xl">
                  <Counter value={stat.value} />
                </div>
                <p className="mt-2 font-label text-[11px] uppercase tracking-[0.16em] text-background-200/70">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-12 flex flex-wrap gap-2.5">
            {[...siteInfo.highlights, ...siteInfo.memberships].map((item) => (
              <span
                key={item}
                className="m-press flex items-center gap-2 rounded-full border border-background-50/15 bg-background-50/5 px-3.5 py-1.5 font-label text-[11px] font-medium text-background-100/85 hover:border-accent-400/40"
              >
                <i className="ri-check-line text-accent-400" aria-hidden="true"></i>
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-20">
          <Reveal variant="blur">
            <SectionHeading
              eyebrow="What Clients Say"
              tone="dark"
              title="Reviews From Real Backyards"
              copy="The work speaks for itself, but the people living with it say it better."
            />
          </Reveal>

          <div className="mt-10 flex flex-col gap-5 md:flex-row">
            {reviewHighlights.map((review, index) => (
              <Reveal
                key={review.name}
                delay={index * 120}
                variant={reviewVariants[index % reviewVariants.length]}
                className={`flex-1 ${index === 1 ? "md:mt-6" : ""}`}
              >
                <figure className="m-card flex h-full flex-col border border-background-50/10 bg-background-50/[0.03] p-6 hover:border-accent-400/40 hover:bg-background-50/[0.06]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5 text-accent-300">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <i key={star} className="ri-star-fill text-xs" aria-hidden="true"></i>
                      ))}
                    </div>
                    <span className="font-label text-[10px] uppercase tracking-[0.12em] text-background-300/60">
                      {review.source}
                    </span>
                  </div>
                  <blockquote className="mt-5 flex-1 font-heading text-[15px] font-light italic leading-[1.6] text-background-100/90">
                    “{review.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-background-50/10 pt-4">
                    <span className="block font-label text-[10px] font-semibold uppercase tracking-[0.16em] text-background-50">
                      {review.name}
                    </span>
                    <span className="mt-1 block font-label text-[10px] uppercase tracking-[0.12em] text-background-300/50">
                      {review.service}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}