import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SiteHeader from "@/components/feature/SiteHeader";
import SiteFooter from "@/components/feature/SiteFooter";
import ServicesHero from "@/components/feature/heroes/ServicesHero";
import CtaBand from "@/components/base/CtaBand";
import Reveal from "@/components/base/Reveal";
import { serviceCategories, services } from "@/mocks/services";

export default function ServicesPage() {
  const [category, setCategory] = useState<string>("All");
  const location = useLocation();

  const filtered = useMemo(
    () => (category === "All" ? services : services.filter((item) => item.category === category)),
    [category],
  );

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const timer = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background-50">
      <SiteHeader />
      <main>
        <ServicesHero />

        <section className="border-b border-background-200 bg-background-50">
          <div className="mx-auto flex w-full max-w-container flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6">
            <div className="flex flex-wrap gap-1.5 rounded-full border border-background-200 bg-background-100 p-1.5">
              {serviceCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 font-label text-[12px] font-medium transition-colors ${
                    category === item
                      ? "bg-primary-900 text-background-50"
                      : "text-foreground-700 hover:bg-background-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="font-label text-[11px] uppercase tracking-[0.16em] text-foreground-500">
              Showing {filtered.length} of {services.length} services
            </p>
          </div>
        </section>

        <section className="bg-background-50 py-16 md:py-20">
          <div className="mx-auto w-full max-w-container px-4 md:px-6">
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
              {filtered.map((service, index) => (
                <Reveal
                  key={service.slug}
                  delay={(index % 3) * 80}
                  variant={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
                  className="mb-5 block break-inside-avoid"
                >
                  <Link
                    to={`/services#${service.slug}`}
                    className="group m-card flex flex-col overflow-hidden border border-background-200 bg-background-50 hover:border-primary-300"
                  >
                    <div className={`m-card-media relative w-full ${index % 3 === 0 ? "h-56" : index % 3 === 1 ? "h-44" : "h-64"}`}>
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="h-full w-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/55 via-transparent to-transparent" />
                      <span className="absolute left-3 top-3 bg-background-50/92 px-2.5 py-1 font-label text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-800">
                        {service.category}
                      </span>
                    </div>
                    <div className="flex flex-col p-5">
                      <h2 className="font-heading text-xl leading-snug text-primary-950">
                        {service.title}
                      </h2>
                      <p className="mt-2 text-[13px] leading-relaxed text-foreground-600">
                        {service.short}
                      </p>
                      <span className="mt-auto flex items-center gap-1.5 pt-4 font-label text-[12px] font-medium text-primary-700">
                        Details
                        <i className="ri-arrow-right-line m-card-arrow" aria-hidden="true"></i>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="commercial" className="bg-background-100 py-16 md:py-20">
          <div className="mx-auto w-full max-w-container px-4 md:px-6">
            <Reveal variant="scale">
            <div className="flex flex-col gap-8 rounded-lg border border-background-300/60 bg-background-50 p-6 md:p-10 lg:flex-row lg:items-center">
              <div className="lg:flex-1">
                <span className="m-eyebrow block text-secondary-600">
                  Commercial Division
                </span>
                <h2 className="mt-4 font-heading text-3xl leading-tight text-primary-950 md:text-4xl">
                  Commercial Pools That Pass Inspection the First Time
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground-600 md:text-base">
                  Hotels, clubs, HOA communities, and municipal facilities need documentation as much
                  as they need craftsmanship. We engineer circulation and filtration to code, install
                  commercial chemical feed systems, and hand over the paperwork your health department
                  asks for.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
                  {[
                    "Code-compliant turnover rates",
                    "Commercial filtration systems",
                    "Chemical feed and controls",
                    "Scheduled service contracts",
                  ].map((item) => (
                    <li key={item} className="flex w-full items-start gap-2 text-[13px] text-foreground-700 sm:w-[calc(50%-0.75rem)]">
                      <i className="ri-check-line mt-0.5 text-primary-600" aria-hidden="true"></i>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex whitespace-nowrap rounded-md bg-primary-900 px-6 py-3 font-label text-[13px] font-medium text-background-50 transition-colors hover:bg-primary-800"
                >
                  Talk To Our Commercial Team
                </Link>
              </div>
              <div className="h-[280px] w-full overflow-hidden rounded-lg md:h-[360px] lg:w-[44%]">
                <img
                  src="https://www.marinepoolrenovationsllc.com/images/projects/equipment-room-feed-tanks.webp"
                  alt="Commercial pool equipment room with chemical feed tanks and filtration plumbing"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-background-50 py-16 md:py-20">
          <div className="mx-auto w-full max-w-container px-4 md:px-6">
            <div className="max-w-2xl">
              <span className="m-eyebrow inline-flex items-center gap-3 text-secondary-600">
                <span className="inline-block h-px w-6 bg-current" />
                Service Details
              </span>
              <h2 className="mt-4 font-heading text-3xl leading-tight text-primary-950 md:text-[2.5rem]">
                What Each Service Actually Includes
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-600">
                No vague line items. Here is what the crew shows up to do, and what you end up with.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-6">
              {filtered.map((service, index) => (
                <Reveal
                  key={service.slug}
                  variant={index % 2 === 0 ? "left" : "right"}
                  delay={(index % 2) * 80}
                >
                <div
                  id={service.slug}
                  className="m-card scroll-mt-24 overflow-hidden border border-background-200 bg-background-50 hover:border-primary-300"
                >
                  <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <div className="relative h-56 w-full lg:h-auto lg:min-h-[280px] lg:w-1/2">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6 md:p-8 lg:w-1/2">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-primary-50 px-2.5 py-1 font-label text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-800">
                          {service.category}
                        </span>
                        <span className="font-label text-[10px] uppercase tracking-[0.16em] text-foreground-400">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-3 font-heading text-2xl text-primary-950">{service.title}</h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-foreground-600">
                        {service.description}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                        {service.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex w-full items-start gap-2 text-[12px] leading-relaxed text-foreground-700 sm:w-[calc(50%-0.625rem)]"
                          >
                            <i className="ri-check-line mt-0.5 text-accent-600" aria-hidden="true"></i>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="mt-6 inline-flex items-center gap-1.5 font-label text-[12px] font-medium text-primary-700 hover:text-primary-900"
                      >
                        Get a quote for this service
                        <i className="ri-arrow-right-line" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          eyebrow="Free Estimates"
          title="Not Sure Which Service Your Pool Needs?"
          copy="Send us a few photos and we will tell you honestly what it needs, and what it does not."
        />
      </main>
      <SiteFooter />
    </div>
  );
}