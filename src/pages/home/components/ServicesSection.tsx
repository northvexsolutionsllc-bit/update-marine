import { Link } from "react-router-dom";
import SectionHeading from "@/components/base/SectionHeading";
import Reveal from "@/components/base/Reveal";
import { services } from "@/mocks/services";

const featured = services.slice(0, 7);

// Varied heights create an organic, staggered masonry flow instead of a rigid grid
const imageHeights = ["h-56", "h-40", "h-64", "h-44", "h-52", "h-60", "h-44"];

const revealVariants = ["left", "up", "right"] as const;

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-background-50 py-20 md:py-24">
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-accent-100/50 blur-3xl" />
      <div className="relative mx-auto w-full max-w-container px-4 md:px-6">
        <Reveal variant="blur">
          <SectionHeading
            eyebrow="What We Do"
            title="Full-Service Pool Construction & Care"
            copy="From the first excavation to the final coat of plaster, our crews handle every stage of your pool project under one roof."
          />
        </Reveal>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {featured.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={(index % 3) * 90}
              variant={revealVariants[index % revealVariants.length]}
              className="mb-5 block break-inside-avoid"
            >
              <Link
                to={`/services#${service.slug}`}
                className="group m-card m-sheen flex flex-col overflow-hidden border border-background-300/70 bg-background-50 hover:border-accent-500/60"
              >
                <div
                  className={`m-card-media relative w-full ${imageHeights[index % imageHeights.length]}`}
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 bg-background-50/92 px-2.5 py-1 font-label text-[8px] font-semibold uppercase tracking-[0.18em] text-secondary-800">
                    {service.category}
                  </span>
                  <span className="absolute bottom-3 right-3 font-heading text-[15px] italic text-accent-200">
                    0{index + 1}
                  </span>
                </div>
                <div className="flex flex-col p-5">
                  <h3 className="font-heading text-[1.15rem] font-light leading-snug text-primary-950">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-foreground-600">
                    {service.short}
                  </p>
                  <span className="mt-5 flex items-center gap-2 font-label text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-800">
                    Learn more
                    <i className="ri-arrow-right-line m-card-arrow" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <Link
            to="/services"
            className="m-press m-cta whitespace-nowrap border border-primary-900/25 px-8 py-3.5 text-primary-900 hover:border-primary-900 hover:bg-primary-950 hover:text-background-50"
          >
            View All 16 Services
          </Link>
          <p className="font-label text-[9px] font-semibold uppercase tracking-[0.24em] text-foreground-500">
            Renovation · Construction · Outdoor Living · Commercial
          </p>
        </div>
      </div>
    </section>
  );
}