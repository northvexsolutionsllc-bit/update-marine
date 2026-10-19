import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowUpRight, Check, MoveUpRight, Waves } from "lucide-react";
import { heroImage, siteInfo } from "@/mocks/site";

const stats = [
  { value: "120+", label: "Pool projects" },
  { value: "5.0", label: "Customer rating" },
  { value: "CT + NY", label: "Service region" },
];

export default function Hero() {
  return (
    <section className="lux-hero relative isolate overflow-hidden bg-[#082f2a] text-white">
      <div className="lux-hero-grid" aria-hidden="true" />
      <div className="lux-orb lux-orb-one" aria-hidden="true" />
      <div className="lux-orb lux-orb-two" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid min-h-[790px] w-full max-w-[1480px] grid-cols-1 items-center gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:px-14 lg:pb-20 lg:pt-36">
        <div className="lux-hero-copy relative z-20 max-w-[700px]">
          <div className="lux-kicker lux-reveal" style={{ animationDelay: "100ms" }}>
            <span className="lux-kicker-mark"><Waves size={15} /></span>
            <span>Marine Pool Renovations</span>
            <span className="lux-kicker-line" />
            <span className="text-emerald-100/65">Est. {siteInfo.founded}</span>
          </div>
          <h1 className="lux-display mt-8">
            <span className="lux-title-line" style={{ animationDelay: "180ms" }}>Your backyard.</span>
            <span className="lux-title-line" style={{ animationDelay: "300ms" }}>Reimagined.</span>
            <span className="lux-title-line lux-title-italic" style={{ animationDelay: "420ms" }}>Extraordinary.</span>
          </h1>
          <p className="lux-hero-description lux-reveal" style={{ animationDelay: "570ms" }}>
            Thoughtfully built pools and outdoor spaces, made for the way you want to live. From a complete transformation to the details that bring it all together, one experienced team sees it through.
          </p>
          <div className="lux-hero-actions lux-reveal" style={{ animationDelay: "680ms" }}>
            <Link to="/contact" className="lux-button lux-button-gold">Plan your transformation <MoveUpRight size={17} /></Link>
            <Link to="/projects" className="lux-button lux-button-ghost">Explore our work <ArrowUpRight size={17} /></Link>
          </div>
          <div className="lux-trust-row lux-reveal" style={{ animationDelay: "780ms" }}>
            {["Licensed & insured", "Written estimates", "CT + NY service"].map((item) => (
              <span key={item}><Check size={13} strokeWidth={2.5} />{item}</span>
            ))}
          </div>
          <div className="lux-stats lux-reveal" style={{ animationDelay: "900ms" }}>
            {stats.map((stat, index) => <div className="lux-stat" key={stat.label}>
              <strong>{stat.value}</strong><span>{stat.label}</span>
              {index < stats.length - 1 && <i aria-hidden="true" />}
            </div>)}
          </div>
        </div>

        <div className="lux-hero-visual" aria-label="Luxury swimming pool and stone terrace">
          <div className="lux-image-orbit lux-orbit-a" aria-hidden="true" />
          <div className="lux-image-orbit lux-orbit-b" aria-hidden="true" />
          <div className="lux-image-frame">
            <img src={heroImage} alt="Renovated free-form swimming pool with a natural stone terrace" />
            <div className="lux-image-shade" />
            <div className="lux-image-topline"><span>POOL DESIGN / 001</span><span>CONNECTICUT</span></div>
            <div className="lux-image-caption"><span className="lux-caption-index">01</span><div><small>THE ART OF OUTDOOR LIVING</small><strong>Made for the moments that matter.</strong></div><ArrowDownRight size={22} /></div>
          </div>
          <div className="lux-floating-note lux-note-top"><span className="lux-note-icon"><Waves size={18} /></span><span><small>BUILT AROUND YOU</small><strong>Personal. Precise. Timeless.</strong></span></div>
          <div className="lux-floating-note lux-note-bottom"><span className="lux-note-number">5.0</span><span><strong>Client-rated experience</strong><small>Care in every detail</small></span><span className="lux-note-stars">★★★★★</span></div>
          <div className="lux-vertical-label">DESIGN · CRAFT · EXPERIENCE</div>
        </div>
      </div>
      <div className="lux-hero-bottom"><span>DESIGNED FOR YOUR LIFE OUTSIDE</span><span className="lux-scroll-cue"><span /> SCROLL TO EXPLORE</span><span>{siteInfo.license}</span></div>
    </section>
  );
}
