import { Link } from "react-router-dom";
import { siteInfo } from "@/mocks/site";
import { services } from "@/mocks/services";

export default function SiteFooter() {
  const footerServices = services.slice(0, 6);

  return (
    <footer className="relative bg-primary-950 text-background-100">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />
      <div className="mx-auto flex w-full max-w-container flex-col gap-10 px-4 py-16 md:flex-row md:flex-wrap md:px-6 md:py-20">
        <div className="md:w-full lg:w-[32%] lg:flex-1">
          <div className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 items-center justify-center border border-accent-500/50 text-accent-300">
              <span className="font-heading text-lg leading-none">M</span>
            </span>
            <span className="leading-none">
              <span className="block font-heading text-[19px] tracking-[0.14em] text-background-50">MARINE</span>
              <span className="mt-1.5 block font-label text-[8px] font-semibold uppercase tracking-[0.34em] text-accent-200/70">
                Pool Renovations
              </span>
            </span>
          </div>
          <p className="mt-6 max-w-xs text-[13px] leading-relaxed text-background-200/70">
            Licensed &amp; insured pool construction, remodeling, and outdoor living specialists serving
            Connecticut and New York since {siteInfo.founded}.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-background-50/15 text-background-100 transition-colors hover:border-accent-400/60 hover:text-accent-300"
            >
              <i className="ri-facebook-fill" aria-hidden="true"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-background-50/15 text-background-100 transition-colors hover:border-accent-400/60 hover:text-accent-300"
            >
              <i className="ri-instagram-line" aria-hidden="true"></i>
            </a>
            <a
              href={siteInfo.phoneHref}
              aria-label="Call us"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-background-50/15 text-background-100 transition-colors hover:border-accent-400/60 hover:text-accent-300"
            >
              <i className="ri-phone-line" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="md:w-[calc(33%-1.5rem)] lg:w-[16%]">
          <h4 className="m-eyebrow text-accent-300">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-background-200/80">
            <li><Link className="transition-colors hover:text-background-50" to="/services">Services</Link></li>
            <li><Link className="transition-colors hover:text-background-50" to="/projects">Projects</Link></li>
            <li><Link className="transition-colors hover:text-background-50" to="/services#commercial">Commercial</Link></li>
            <li><Link className="transition-colors hover:text-background-50" to="/about">About</Link></li>
            <li><Link className="transition-colors hover:text-background-50" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="md:w-[calc(33%-1.5rem)] lg:w-[22%]">
          <h4 className="m-eyebrow text-accent-300">Popular Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-background-200/80">
            {footerServices.map((service) => (
              <li key={service.slug}>
                <Link
                  className="transition-colors hover:text-background-50"
                  to={`/services#${service.slug}`}
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link className="font-medium text-accent-300 hover:text-accent-200" to="/services">
                View all 16 services
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:w-[calc(33%-1.5rem)] lg:w-[22%]">
          <h4 className="m-eyebrow text-accent-300">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-background-200/80">
            <li className="flex gap-2.5">
              <i className="ri-map-pin-line mt-0.5 text-accent-400" aria-hidden="true"></i>
              <span>{siteInfo.address}</span>
            </li>
            <li className="flex gap-2.5">
              <i className="ri-phone-line mt-0.5 text-accent-400" aria-hidden="true"></i>
              <a className="hover:text-background-50" href={siteInfo.phoneHref}>{siteInfo.phone}</a>
            </li>
            <li className="flex gap-2.5">
              <i className="ri-mail-line mt-0.5 text-accent-400" aria-hidden="true"></i>
              <a className="break-all hover:text-background-50" href={`mailto:${siteInfo.email}`}>
                {siteInfo.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 border border-background-50/12 p-3.5">
            <p className="font-label text-[9px] font-semibold uppercase tracking-[0.2em] text-accent-300">
              Licensed &amp; Insured
            </p>
            <p className="mt-1.5 font-label text-[12px] tracking-[0.04em] text-background-100">
              {siteInfo.license}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-background-50/10">
        <div className="mx-auto flex w-full max-w-container flex-col gap-2 px-4 py-5 font-label text-[11px] text-background-300/70 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <span>© 2026 {siteInfo.name}. All rights reserved.</span>
          <span>Licensed &amp; Insured · {siteInfo.license} · Connecticut &amp; New York</span>
        </div>
      </div>
    </footer>
  );
}