import SiteHeader from "@/components/feature/SiteHeader";
import SiteFooter from "@/components/feature/SiteFooter";
import AboutHero from "@/components/feature/heroes/AboutHero";
import CtaBand from "@/components/base/CtaBand";
import SectionHeading from "@/components/base/SectionHeading";
import Reveal from "@/components/base/Reveal";
import { siteInfo, stats } from "@/mocks/site";

const values = [
  {
    icon: "ri-hammer-line",
    title: "Craftsmanship First",
    copy: "Preparation is the job. We strip, repair, and profile before any finish goes on, because that is what makes it last through Connecticut winters.",
  },
  {
    icon: "ri-search-eye-line",
    title: "Diagnose, Then Repair",
    copy: "We pressure test and inspect before quoting. You get the actual cause and a fix that holds, not another seasonal patch.",
  },
  {
    icon: "ri-team-line",
    title: "One Crew, Start to Finish",
    copy: "The crew that excavates is the crew that finishes. No handoffs between subcontractors and no finger-pointing when something needs attention.",
  },
  {
    icon: "ri-home-heart-line",
    title: "Local & Reachable",
    copy: "We are based in Derby and we answer the phone. Most clients meet the owner on site before a single shovel moves.",
  },
];

const process = [
  { step: "01", title: "Walkthrough", copy: "We look at the pool, the equipment, the deck, and the grade, then listen to what you want to change." },
  { step: "02", title: "Written Scope", copy: "A line-item estimate with finishes, timelines, and exclusions, so nothing is a surprise mid-build." },
  { step: "03", title: "Build", copy: "Demolition and structural work first, then plumbing, surfaces, tile, and decking in sequence." },
  { step: "04", title: "Handover", copy: "Startup, water balance, equipment orientation, and the warranty paperwork in your hands." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <SiteHeader />
      <main>
        <AboutHero />

        <section className="bg-background-50 py-20 md:py-24">
          <div className="mx-auto w-full max-w-container px-4 md:px-6">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
              <Reveal className="lg:w-[53%]">
                <div>
                  <span className="m-eyebrow inline-flex items-center gap-3 text-secondary-600">
                    <span className="inline-block h-px w-6 bg-current" />
                    Our Story
                  </span>
                  <h2 className="mt-4 font-heading text-3xl leading-[1.15] text-primary-950 md:text-[2.5rem]">
                    Started With One Pool and a Simple Rule
                  </h2>
                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground-600 md:text-base">
                    <p>
                      Marine Pool Renovations began in {siteInfo.founded} with a single gunite
                      renovation in Derby and one rule that has not changed: fix the actual problem,
                      then build the finish on top of it.
                    </p>
                    <p>
                      Too many pools get resurfaced over failing structure and come back a season
                      later. We take the slower path: opening the shell, testing the plumbing, and
                      correcting what is underneath, because it is cheaper for you over ten years and
                      it is the only way a warranty means anything.
                    </p>
                    <p>
                      Today we run full construction and renovation crews across Connecticut and into
                      New York, handle commercial systems for clubs and communities, and still keep the
                      same direct line to the owner on every project.
                    </p>
                  </div>

                  <div className="mt-7 flex items-center gap-4 rounded-lg border border-background-200 bg-background-100/60 p-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary-950 font-heading text-lg text-accent-300">
                      R
                    </span>
                    <div>
                      <p className="font-label text-[13px] font-semibold text-primary-950">
                        Richard, Founder &amp; Lead Contractor
                      </p>
                      <p className="mt-0.5 font-label text-[11px] uppercase tracking-[0.14em] text-foreground-500">
                        {siteInfo.license} · Derby, CT
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120} className="lg:w-[47%]">
                <div className="relative">
                  <div className="h-[340px] w-full overflow-hidden rounded-lg border border-background-300/60 md:h-[460px]">
                    <img
                      src="https://www.marinepoolrenovationsllc.com/images/projects/plastering-blue-plaster-application.jpg"
                      alt="Marine Pool Renovations crew applying a fresh plaster finish to a pool shell"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-4 right-4 rounded-lg border border-background-200 bg-background-50 p-4 md:left-6 md:right-auto md:w-64">
                    <p className="font-heading text-2xl text-primary-950">120+</p>
                    <p className="mt-1 font-label text-[10px] uppercase tracking-[0.16em] text-foreground-500">
                      Pools rebuilt across CT &amp; NY
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-background-100 py-20 md:py-24">
          <div className="mx-auto w-full max-w-container px-4 md:px-6">
            <SectionHeading
              eyebrow="How We Work"
              title="Four Values You Can See On Site"
              copy="They are not slogans on a truck. They are the reason our projects get referred by neighbors."
            />
            <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-4">
              {values.map((value, index) => (
                <Reveal
                  key={value.title}
                  delay={index * 80}
                  variant={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
                  className="mb-5 block break-inside-avoid"
                >
                  <div className="m-card flex flex-col border border-background-200 bg-background-50 p-6 hover:border-primary-300">
                    <span className="flex h-11 w-11 items-center justify-center bg-primary-50 text-primary-700">
                      <i className={`${value.icon} text-xl`} aria-hidden="true"></i>
                    </span>
                    <h3 className="mt-4 font-heading text-lg text-primary-950">{value.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-foreground-600">{value.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary-950 py-20 md:py-24">
          <div className="mx-auto w-full max-w-container px-4 md:px-6">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
              <div className="lg:w-[46%]">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-300">
                  By The Numbers
                </span>
                <h2 className="mt-4 font-heading text-3xl leading-tight text-background-50 md:text-[2.5rem]">
                  Credentials That Hold Up When You Ask For Them
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-background-200/80">
                  Licensed, insured, and active in the industry associations that keep contractors
                  accountable. References available on request.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {siteInfo.memberships.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-background-50/20 px-3 py-1.5 font-label text-[11px] text-background-100/85"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="rounded-full border border-accent-400/40 bg-accent-400/10 px-3 py-1.5 font-label text-[11px] text-accent-200">
                    {siteInfo.license}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 lg:w-[54%]">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`w-[calc(50%-0.75rem)] rounded-lg border border-background-50/10 bg-background-50/5 p-5 ${index % 2 === 1 ? "sm:translate-y-6" : ""}`}
                  >
                    <p className="font-heading text-3xl text-accent-300 md:text-4xl">{stat.value}</p>
                    <p className="mt-2 font-label text-[10px] uppercase tracking-[0.16em] text-background-200/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background-50 py-20 md:py-24">
          <div className="mx-auto w-full max-w-container px-4 md:px-6">
            <SectionHeading
              eyebrow="The Process"
              title="What Working With Us Looks Like"
              copy="Clear stages, a written scope, and no surprise invoices halfway through demolition."
            />
            <div className="mt-12 flex flex-col gap-5 md:flex-row md:flex-wrap">
              {process.map((item, index) => (
                <Reveal
                  key={item.step}
                  delay={index * 90}
                  variant="step"
                  className={`md:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.94rem)] ${index % 2 === 1 ? "lg:mt-6" : ""}`}
                >
                  <div className="m-card relative h-full border border-background-200 bg-background-50 p-6 hover:border-secondary-400/60">
                    <span className="font-heading text-3xl text-secondary-500">{item.step}</span>
                    <h3 className="mt-3 font-heading text-lg text-primary-950">{item.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-foreground-600">{item.copy}</p>
                    <span className="absolute right-5 top-6 h-px w-8 bg-background-300" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          eyebrow="Let's Talk"
          title="Meet the Crew Before You Commit"
          copy="Free on-site walkthrough, honest scope, and a written estimate. No pressure and no sales script."
        />
      </main>
      <SiteFooter />
    </div>
  );
}