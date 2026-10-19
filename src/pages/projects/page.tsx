import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/feature/SiteHeader";
import SiteFooter from "@/components/feature/SiteFooter";
import ProjectsHero from "@/components/feature/heroes/ProjectsHero";
import CtaBand from "@/components/base/CtaBand";
import Reveal from "@/components/base/Reveal";
import { projectCategories, projects, type Project } from "@/mocks/projects";

export default function ProjectsPage() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (category === "All" ? projects : projects.filter((item) => item.category === category)),
    [category],
  );

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="min-h-screen bg-background-50">
      <SiteHeader />
      <main>
        <ProjectsHero />

        <section className="border-b border-background-200 bg-background-50">
          <div className="mx-auto flex w-full max-w-container flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6">
            <div className="flex flex-wrap gap-1.5 rounded-full border border-background-200 bg-background-100 p-1.5">
              {projectCategories.map((item) => (
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
              {filtered.length} featured projects
            </p>
          </div>
        </section>

        <section className="bg-background-50 py-16 md:py-20">
          <div className="mx-auto w-full max-w-container px-4 md:px-6">
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
              {filtered.map((project, index) => (
                <Reveal
                  key={project.id}
                  delay={(index % 3) * 80}
                  variant={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
                  className="mb-5 block break-inside-avoid"
                >
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="group m-card m-sheen block w-full overflow-hidden border border-background-200 bg-background-50 text-left hover:border-primary-300"
                  >
                    <div className={`m-card-media relative w-full ${index % 3 === 0 ? "h-72" : index % 3 === 1 ? "h-56" : "h-64"}`}>
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="h-full w-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-950/10 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-background-50/92 px-2.5 py-1 font-label text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-800">
                        {project.category}
                      </span>
                      <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-background-50/20 text-background-50 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                        <i className="ri-expand-diagonal-line" aria-hidden="true"></i>
                      </span>
                      <div className="absolute bottom-3 left-3 right-12">
                        <p className="font-label text-[10px] uppercase tracking-[0.16em] text-accent-200">
                          {project.location}
                        </p>
                        <h2 className="mt-1 font-heading text-lg leading-snug text-background-50">
                          {project.title}
                        </h2>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-[13px] leading-relaxed text-foreground-600">{project.summary}</p>
                      <div className="mt-4 flex items-center justify-between border-t border-background-200 pt-3">
                        <span className="font-label text-[11px] uppercase tracking-[0.14em] text-foreground-500">
                          Timeline
                        </span>
                        <span className="font-label text-[12px] font-medium text-primary-800">
                          {project.duration}
                        </span>
                      </div>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          eyebrow="Your Project Next"
          title="See Something You Want In Your Own Backyard?"
          copy="Send us the pool you have and the backyard you want. We will tell you what it takes to get there."
        />
      </main>
      <SiteFooter />

      {selected ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-primary-950/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div
            className="marine-fade max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-background-50"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-56 w-full overflow-hidden md:h-80">
              <img
                src={selected.image}
                alt={selected.imageAlt}
                className="h-full w-full object-cover object-top"
              />
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close project"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background-50/90 text-primary-950 transition-colors hover:bg-background-50"
              >
                <i className="ri-close-line text-lg" aria-hidden="true"></i>
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary-50 px-2.5 py-1 font-label text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-800">
                  {selected.category}
                </span>
                <span className="font-label text-[11px] uppercase tracking-[0.14em] text-foreground-500">
                  {selected.location}
                </span>
                <span className="font-label text-[11px] uppercase tracking-[0.14em] text-foreground-500">
                  · {selected.duration}
                </span>
              </div>
              <h2 className="mt-3 font-heading text-2xl text-primary-950 md:text-3xl">
                {selected.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-600">{selected.detail}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="whitespace-nowrap rounded-md bg-primary-900 px-5 py-2.5 font-label text-[12px] font-medium text-background-50 transition-colors hover:bg-primary-800"
                >
                  Start a Similar Project
                </Link>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="whitespace-nowrap rounded-md border border-primary-200 px-5 py-2.5 font-label text-[12px] font-medium text-primary-800 transition-colors hover:bg-primary-50"
                >
                  Back to Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}