import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowRight, Check, Star } from "lucide-react";
import { heroImage, siteInfo } from "@/mocks/site";

const proofPoints = ["Licensed & insured", "Free project estimates", "Serving CT & NY"];

export default function Hero() {
  return (
    <section className="mp-hero" aria-labelledby="home-hero-title">
      <div className="mp-hero-grain" aria-hidden="true" />
      <div className="mp-hero-inner">
        <div className="mp-hero-copy">
          <div className="mp-hero-kicker mp-reveal mp-delay-1">
            <span className="mp-kicker-dot" />
            <span>Pool renovation, reimagined</span>
            <span className="mp-kicker-line" />
            <span className="mp-kicker-location">{siteInfo.serviceRegion}</span>
          </div>

          <h1 id="home-hero-title" className="mp-hero-title mp-reveal mp-delay-2">
            Your backyard,
            <br />
            <em>beautifully</em> renewed.
          </h1>

          <p className="mp-hero-description mp-reveal mp-delay-3">
            Thoughtful pool renovations and outdoor transformations, built around your home, your
            vision, and the way you want to live outside.
          </p>

          <div className="mp-hero-actions mp-reveal mp-delay-4">
            <Link to="/contact" className="mp-button mp-button-primary">
              Request a free estimate <ArrowRight size={17} strokeWidth={1.8} />
            </Link>
            <Link to="/projects" className="mp-button mp-button-quiet">
              Explore our work <ArrowDownRight size={17} strokeWidth={1.8} />
            </Link>
          </div>

          <div className="mp-hero-proof mp-reveal mp-delay-5">
            {proofPoints.map((point) => (
              <span key={point}>
                <Check size={14} strokeWidth={2.2} /> {point}
              </span>
            ))}
          </div>
        </div>

        <div className="mp-hero-visual mp-reveal mp-delay-3">
          <div className="mp-hero-image-frame">
            <img
              src={heroImage}
              alt="Renovated free-form swimming pool framed by a bluestone patio and mature landscaping"
              fetchPriority="high"
            />
            <div className="mp-image-shade" />
            <div className="mp-image-label">
              <span className="mp-image-label-top">A considered transformation</span>
              <span className="mp-image-label-title">Made for the way you live.</span>
            </div>
          </div>
          <div className="mp-floating-note">
            <div className="mp-rating-icon"><Star size={16} fill="currentColor" /></div>
            <div>
              <strong>Crafted with care</strong>
              <span>From first plan to final finish</span>
            </div>
          </div>
          <span className="mp-visual-index" aria-hidden="true">01 <i /> 04</span>
        </div>
      </div>

      <div className="mp-hero-bottom">
        <span>Marine Pool Renovations</span>
        <span className="mp-hero-bottom-center">Built around your vision</span>
        <a href="#services" onClick={(event) => {
          const target = document.getElementById("services");
          if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
          }
        }}>Discover what we do <ArrowDownRight size={15} /></a>
      </div>
    </section>
  );
}
