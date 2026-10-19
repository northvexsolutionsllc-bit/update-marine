import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ScrollProgress from "@/components/base/ScrollProgress";
import { Waves, ArrowUpRight } from "lucide-react";
import { navLinks, siteInfo } from "@/mocks/site";

export default function SiteHeader() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !isHome;

  const pathname = location.pathname;
  const isLinkActive = (to: string) => {
    const [path, hash] = to.split("#");
    if (path === "/") return pathname === "/";
    if (pathname !== path) return false;
    return hash ? location.hash === `#${hash}` : location.hash === "";
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        solid
          ? "border-b border-background-300/70 bg-background-50/92 py-2.5 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-container items-center justify-between gap-6 px-4 md:px-6">
        <Link to="/" className="group flex items-center gap-3.5" aria-label={siteInfo.name}>
          <span
            className={`relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border transition-all duration-500 group-hover:rotate-[-8deg] ${
              solid
                ? "border-accent-500/60 bg-primary-950 text-accent-300 shadow-[0_5px_18px_rgba(8,47,42,.15)]"
                : "border-accent-300/60 bg-primary-950/65 text-accent-200 backdrop-blur-sm"
            }`}
          >
            <span className="absolute inset-1 rounded-full border border-current/25" />
            <Waves size={20} strokeWidth={1.6} />
          </span>
          <span className="leading-none">
            <span
              className={`block font-heading text-[19px] tracking-[0.14em] transition-colors ${
                solid ? "text-primary-950" : "text-background-50"
              }`}
            >
              MARINE
            </span>
            <span
              className={`mt-1.5 block font-label text-[8px] font-semibold uppercase tracking-[0.34em] transition-colors ${
                solid ? "text-secondary-600" : "text-accent-200/85"
              }`}
            >
              Pool Renovations · LLC
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const active = isLinkActive(link.to);
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`group relative py-1.5 font-label text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                  active
                    ? solid
                      ? "text-primary-900"
                      : "text-accent-200"
                    : solid
                      ? "text-foreground-700 hover:text-primary-800"
                      : "text-background-100/85 hover:text-background-50"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-left transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  } ${solid ? "bg-accent-600" : "bg-accent-300"}`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteInfo.phoneHref}
            className={`flex items-center gap-2 font-label text-[11px] font-semibold tracking-[0.08em] transition-colors ${
              solid ? "text-primary-900 hover:text-primary-700" : "text-background-50 hover:text-accent-200"
            }`}
          >
            <span className="h-1 w-1 rounded-full bg-accent-500" />
            {siteInfo.phone}
          </a>
          <Link
            to="/contact"
            className="m-press m-cta whitespace-nowrap bg-primary-950 px-6 py-3 text-background-50 hover:bg-primary-900"
          >
            Request Estimate <ArrowUpRight className="ml-2 inline" size={14} />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center border lg:hidden ${
            solid
              ? "border-background-300 text-primary-950"
              : "border-background-50/30 text-background-50"
          }`}
        >
          <i className={`${open ? "ri-close-line" : "ri-menu-3-line"} text-xl`} aria-hidden="true"></i>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-400 lg:hidden ${
          open ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-3 border border-background-300 bg-background-50 p-5">
          <p className="m-eyebrow text-secondary-600">Menu</p>
          <nav className="mt-3 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="border-b border-background-200 py-3.5 font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-800 last:border-0 hover:text-primary-800"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-2">
            <a
              href={siteInfo.phoneHref}
              className="flex items-center justify-center gap-2 border border-primary-900/20 py-3 font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-900"
            >
              <i className="ri-phone-line" aria-hidden="true"></i>
              {siteInfo.phone}
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-primary-950 py-3 font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-background-50"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>

      <ScrollProgress />
    </header>
  );
}