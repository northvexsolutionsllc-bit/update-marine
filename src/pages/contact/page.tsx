import { useState, type FormEvent } from "react";
import SiteHeader from "@/components/feature/SiteHeader";
import SiteFooter from "@/components/feature/SiteFooter";
import ContactHero from "@/components/feature/heroes/ContactHero";
import Reveal from "@/components/base/Reveal";
import { siteInfo } from "@/mocks/site";
import { services } from "@/mocks/services";

const FORM_URL = "https://readdy.ai/api/form/dbb5uh91375vv1d5bnp0";

type Status = "idle" | "loading" | "success" | "error";

const contactCards = [
  {
    icon: "ri-phone-line",
    label: "Call or Text",
    value: siteInfo.phone,
    href: siteInfo.phoneHref,
  },
  {
    icon: "ri-mail-line",
    label: "Email",
    value: siteInfo.email,
    href: `mailto:${siteInfo.email}`,
  },
  {
    icon: "ri-map-pin-2-line",
    label: "Shop Address",
    value: siteInfo.address,
    href: "",
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const assist = String(formData.get("website_alt") ?? "").trim();
    if (assist) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = new URLSearchParams();
    formData.forEach((value, key) => {
      if (key === "website_alt") return;
      if (typeof value === "string" && value.trim() === "") return;
      payload.append(key, String(value));
    });

    setStatus("loading");
    setFormError("");

    try {
      const response = await fetch(FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });
      const responseText = await response.text();
      let parsed: {
        code?: string;
        message?: string;
        meta?: { message?: string; detail?: string };
      } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMessage =
        parsed?.meta?.message || parsed?.meta?.detail || parsed?.message || responseText;
      const failed =
        !response.ok ||
        parsed?.code !== "OK" ||
        String(serverMessage ?? "").toLowerCase().includes("spam");

      if (failed) {
        setStatus("error");
        setFormError(
          serverMessage && serverMessage.length < 220
            ? serverMessage
            : "We could not send your request. Please call us at " + siteInfo.phone + ".",
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setFormError(
        "Something interrupted the connection. Please try again or call us at " + siteInfo.phone + ".",
      );
    }
  };

  const inputClass =
    "w-full min-w-0 box-border rounded-md border border-background-300 bg-background-50 px-3.5 py-2.5 font-label text-sm text-foreground-900 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100";
  const labelClass =
    "mb-1.5 block font-label text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground-600";

  return (
    <div className="min-h-screen bg-background-50">
      <SiteHeader />
      <main>
        <ContactHero />

        <section className="bg-background-50 py-16 md:py-20">
          <div className="mx-auto w-full max-w-container px-4 md:px-6">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
              <Reveal variant="left" className="lg:w-[58%]">
              <div className="rounded-lg border border-background-200 bg-background-100/60 p-5 md:p-8">
                <h2 className="font-heading text-2xl text-primary-950 md:text-3xl">
                  Request a Free Estimate
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed text-foreground-600">
                  The more detail you share, the more accurate our first pass will be. Photos are
                  welcome by text or email.
                </p>

                <form
                  id="marine-estimate-form"
                  data-readdy-form="true"
                  onSubmit={handleSubmit}
                  className="mt-6"
                >
                  <div className="flex flex-wrap gap-4">
                    <div className="w-full min-w-0 sm:w-[calc(50%-0.5rem)]">
                      <label className={labelClass} htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Jane Doe"
                        className={inputClass}
                      />
                    </div>
                    <div className="w-full min-w-0 sm:w-[calc(50%-0.5rem)]">
                      <label className={labelClass} htmlFor="phone">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="(203) 555-0134"
                        className={inputClass}
                      />
                    </div>
                    <div className="w-full min-w-0 sm:w-[calc(50%-0.5rem)]">
                      <label className={labelClass} htmlFor="email">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="jane@email.com"
                        className={inputClass}
                      />
                    </div>
                    <div className="w-full min-w-0 sm:w-[calc(50%-0.5rem)]">
                      <label className={labelClass} htmlFor="city">
                        City / Town
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        placeholder="Derby, CT"
                        className={inputClass}
                      />
                    </div>
                    <div className="w-full min-w-0 sm:w-[calc(50%-0.5rem)]">
                      <label className={labelClass} htmlFor="service">
                        Service Needed
                      </label>
                      <select id="service" name="service" defaultValue="" className={inputClass}>
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.slug} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>
                    <div className="w-full min-w-0 sm:w-[calc(50%-0.5rem)]">
                      <label className={labelClass} htmlFor="pool_type">
                        Pool Type
                      </label>
                      <select id="pool_type" name="pool_type" defaultValue="" className={inputClass}>
                        <option value="">Select pool type</option>
                        <option value="Gunite / Concrete">Gunite / Concrete</option>
                        <option value="Fiberglass">Fiberglass</option>
                        <option value="Vinyl Liner">Vinyl Liner</option>
                        <option value="Commercial">Commercial</option>
                        <option value="No pool yet">No pool yet</option>
                      </select>
                    </div>
                    <div className="w-full min-w-0">
                      <label className={labelClass} htmlFor="timeline">
                        Project Timeline
                      </label>
                      <select id="timeline" name="timeline" defaultValue="" className={inputClass}>
                        <option value="">Select a timeline</option>
                        <option value="Emergency / ASAP">Emergency / ASAP</option>
                        <option value="Next 1-3 months">Next 1-3 months</option>
                        <option value="This season">This season</option>
                        <option value="Just planning ahead">Just planning ahead</option>
                      </select>
                    </div>
                    <div className="w-full min-w-0">
                      <label className={labelClass} htmlFor="message">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        maxLength={500}
                        placeholder="Pool size, what needs attention, and what you would like to change."
                        className={`${inputClass} resize-none`}
                      ></textarea>
                      <p className="mt-1 font-label text-[10px] text-foreground-400">
                        Up to 500 characters
                      </p>
                    </div>
                  </div>

                  <input
                    type="text"
                    name="website_alt"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    readOnly
                    className="quote-form-assist"
                  />

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full whitespace-nowrap rounded-md bg-primary-900 px-6 py-3 font-label text-[13px] font-semibold text-background-50 transition-colors hover:bg-primary-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {status === "loading" ? "Sending..." : "Send Request"}
                    </button>
                    <a
                      href={siteInfo.phoneHref}
                      className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-primary-200 px-6 py-3 font-label text-[13px] font-medium text-primary-800 transition-colors hover:bg-primary-50 sm:w-auto"
                    >
                      <i className="ri-phone-line" aria-hidden="true"></i>
                      Call Instead
                    </a>
                  </div>

                  {status === "success" ? (
                    <div className="mt-5 flex items-start gap-2.5 rounded-md border border-accent-300 bg-accent-50 p-3.5">
                      <i className="ri-checkbox-circle-line mt-0.5 text-accent-700" aria-hidden="true"></i>
                      <p className="text-[13px] leading-relaxed text-accent-900">
                        Request received. We will reach out within one business day, and sooner for
                        emergencies.
                      </p>
                    </div>
                  ) : null}

                  {status === "error" ? (
                    <div className="mt-5 flex items-start gap-2.5 rounded-md border border-secondary-400/60 bg-secondary-50 p-3.5">
                      <i className="ri-error-warning-line mt-0.5 text-secondary-800" aria-hidden="true"></i>
                      <p className="text-[13px] leading-relaxed text-secondary-900">{formError}</p>
                    </div>
                  ) : null}
                </form>
              </div>
              </Reveal>

              <Reveal variant="right" delay={120} className="lg:w-[42%]">
              <div className="flex flex-col gap-4">
                {contactCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-lg border border-background-200 bg-background-50 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-50 text-primary-700">
                        <i className={`${card.icon} text-lg`} aria-hidden="true"></i>
                      </span>
                      <div className="min-w-0">
                        <p className="font-label text-[10px] uppercase tracking-[0.18em] text-foreground-500">
                          {card.label}
                        </p>
                        {card.href ? (
                          <a
                            href={card.href}
                            className="mt-1 block break-words font-label text-sm font-medium text-primary-950 hover:text-primary-700"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <p className="mt-1 font-label text-sm font-medium text-primary-950">
                            {card.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="rounded-lg border border-background-200 bg-background-50 p-5">
                  <p className="font-label text-[10px] uppercase tracking-[0.18em] text-foreground-500">
                    Office Hours
                  </p>
                  <ul className="mt-3 space-y-2">
                    {siteInfo.hours.map((entry) => (
                      <li
                        key={entry.day}
                        className="flex items-center justify-between gap-3 border-b border-background-200 pb-2 last:border-0 last:pb-0"
                      >
                        <span className="font-label text-[12px] text-foreground-700">{entry.day}</span>
                        <span className="text-right font-label text-[12px] font-medium text-primary-900">
                          {entry.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-primary-950 p-5 text-background-100">
                  <p className="font-label text-[10px] uppercase tracking-[0.18em] text-accent-300">
                    Emergency Service
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-background-200/85">
                    Losing water, storm damage, or a dead pump? Call directly and tell us it is
                    urgent. We triage emergency calls the same day.
                  </p>
                  <a
                    href={siteInfo.phoneHref}
                    className="mt-4 flex items-center justify-center gap-2 rounded-md bg-accent-400 py-2.5 font-label text-[12px] font-semibold text-primary-950 transition-colors hover:bg-accent-300"
                  >
                    <i className="ri-phone-line" aria-hidden="true"></i>
                    {siteInfo.phone}
                  </a>
                </div>
              </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-background-100 py-16">
          <div className="mx-auto w-full max-w-container px-4 md:px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
              <div className="lg:w-[40%]">
                <span className="m-eyebrow block text-secondary-600">
                  Find Us
                </span>
                <h2 className="mt-3 font-heading text-2xl leading-tight text-primary-950 md:text-3xl">
                  Based in Derby, Connecticut
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground-600">
                  Serving Fairfield, New Haven, and Litchfield counties plus Westchester and the lower
                  Hudson Valley. Call ahead before visiting the shop.
                </p>
                <p className="mt-4 flex items-start gap-2 font-label text-[13px] text-foreground-700">
                  <i className="ri-map-pin-line mt-0.5 text-primary-600" aria-hidden="true"></i>
                  {siteInfo.address}
                </p>
              </div>
              <div className="h-[280px] w-full overflow-hidden rounded-lg border border-background-300/60 md:h-[340px] lg:w-[60%]">
                <iframe
                  title="Map of Marine Pool Renovations LLC in Derby, Connecticut"
                  src="https://maps.google.com/maps?q=287%20Hawthorne%20Avenue%2C%20Derby%2C%20CT%2006418&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}