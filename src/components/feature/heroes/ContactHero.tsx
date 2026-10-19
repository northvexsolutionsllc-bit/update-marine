import { siteInfo } from "@/mocks/site";

const channels = [
  { icon: "ri-phone-line", label: "Call or text", value: siteInfo.phone, href: siteInfo.phoneHref },
  {
    icon: "ri-mail-line",
    label: "Email",
    value: siteInfo.email,
    href: `mailto:${siteInfo.email}`,
  },
  { icon: "ri-map-pin-2-line", label: "Shop", value: siteInfo.address, href: "" },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-background-100 pt-24 pb-14 md:pt-28 md:pb-20">
      <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-accent-200/45 blur-[130px]" />
      <div className="pointer-events-none absolute -left-28 bottom-0 h-[320px] w-[320px] rounded-full bg-secondary-200/40 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-container px-4 md:px-6">
        <div className="m-fade flex items-center justify-between gap-4 border-b border-background-300/70 pb-4 [animation-delay:60ms]">
          <span className="font-label text-[9px] font-semibold uppercase tracking-[0.26em] text-secondary-600">
            Contact
          </span>
          <span className="m-rule-in hidden h-px flex-1 bg-background-300/70 [animation-delay:180ms] sm:block" />
          <span className="font-label text-[9px] font-semibold uppercase tracking-[0.26em] text-foreground-500">
            Replies within one business day
          </span>
        </div>

        <div className="mt-8 flex flex-col overflow-hidden border border-background-300/70 bg-background-50 lg:flex-row">
          <div className="relative overflow-hidden bg-primary-950 p-7 text-background-50 md:p-11 lg:w-[54%]">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent-500/18 blur-[90px]" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="m-rule-in block h-px w-9 bg-accent-400/70 [animation-delay:120ms]" />
                <span className="m-fade m-eyebrow text-accent-200 [animation-delay:240ms]">
                  Start a conversation
                </span>
              </div>

              <h1 className="mt-6 whitespace-nowrap font-heading font-light leading-[0.98] tracking-[-0.035em] text-background-50">
                <span className="m-line-mask">
                  <span
                    className="text-[2.35rem] sm:text-[3.2rem] lg:text-[3.5rem]"
                    style={{ animationDelay: "170ms" }}
                  >
                    Tell us about
                  </span>
                </span>
                <span className="m-line-mask">
                  <span
                    className="text-[2.35rem] italic text-accent-300 sm:text-[3.2rem] lg:text-[3.5rem]"
                    style={{ animationDelay: "280ms" }}
                  >
                    your pool
                  </span>
                </span>
              </h1>

              <p className="m-rise mt-6 max-w-[400px] text-[13.5px] leading-[1.8] text-background-200/70 [animation-delay:520ms] md:text-[14.5px]">
                Free estimates, emergency calls, and honest advice. Send the form or call directly.
                We usually respond the same business day.
              </p>

              <a
                href={siteInfo.phoneHref}
                className="m-rise group mt-8 flex items-center gap-4 border-t border-background-50/12 pt-6 [animation-delay:620ms]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent-400 text-primary-950 transition-transform duration-300 group-hover:scale-105">
                  <i className="ri-phone-line text-lg" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-label text-[9px] font-semibold uppercase tracking-[0.2em] text-background-300/60">
                    Direct line
                  </span>
                  <span className="mt-1 block font-heading text-[1.6rem] font-light tracking-[-0.01em] text-background-50 sm:text-[1.9rem]">
                    {siteInfo.phone}
                  </span>
                </span>
              </a>

              <div className="m-rise mt-6 flex flex-wrap gap-x-6 gap-y-2 [animation-delay:700ms]">
                <span className="flex items-center gap-2 font-label text-[9px] font-semibold uppercase tracking-[0.16em] text-background-200/60">
                  <i className="ri-flashlight-line text-accent-300" aria-hidden="true" />
                  Emergency calls same day
                </span>
                <span className="flex items-center gap-2 font-label text-[9px] font-semibold uppercase tracking-[0.16em] text-background-200/60">
                  <i className="ri-time-line text-accent-300" aria-hidden="true" />
                  No sales script
                </span>
              </div>
            </div>
          </div>

          <div className="m-fade p-7 md:p-10 lg:w-[46%] [animation-delay:360ms]">
            <div className="flex items-center justify-between">
              <p className="font-label text-[9px] font-semibold uppercase tracking-[0.22em] text-foreground-500">
                Three ways to reach us
              </p>
              <i className="ri-arrow-right-down-line text-foreground-400" aria-hidden="true" />
            </div>

            <div className="mt-3 flex flex-col">
              {channels.map((channel, index) => {
                const body = (
                  <div className="flex items-start gap-3">
                    <span className="font-label text-[9px] font-semibold text-accent-700/70">
                      0{index + 1}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary-50 text-primary-700">
                      <i className={`${channel.icon} text-base`} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-label text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground-500">
                        {channel.label}
                      </p>
                      <p className="mt-1 break-words font-label text-[13px] font-medium text-primary-950">
                        {channel.value}
                      </p>
                    </div>
                  </div>
                );

                return channel.href ? (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="group border-b border-background-200 py-4 transition-colors hover:border-primary-300"
                  >
                    {body}
                  </a>
                ) : (
                  <div key={channel.label} className="border-b border-background-200 py-4">
                    {body}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 border border-background-200 bg-background-100/70 p-4">
              <p className="font-label text-[9px] font-semibold uppercase tracking-[0.18em] text-foreground-500">
                Hours
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {siteInfo.hours.map((entry) => (
                  <li
                    key={entry.day}
                    className="flex items-center justify-between gap-3 font-label text-[11px]"
                  >
                    <span className="text-foreground-600">{entry.day}</span>
                    <span className="text-right font-medium text-primary-900">{entry.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#marine-estimate-form"
              className="m-press mt-5 flex items-center justify-between bg-primary-950 px-4 py-3.5 transition-colors hover:bg-primary-900"
            >
              <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-background-50">
                Jump to the estimate form
              </span>
              <i className="ri-arrow-down-line text-accent-300" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}