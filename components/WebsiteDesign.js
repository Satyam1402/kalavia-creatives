import { Check, Globe } from "lucide-react";
import site, { waLink } from "@/data/site";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

// Browser-style demo website preview (concept, not a client site).
function MiniSite({ demo }) {
  return (
    <div className={`browser browser--${demo.kind}`}>
      <div className="browser-bar">
        <span className="browser-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-url">{demo.url}</span>
      </div>

      <div className="browser-view" aria-hidden="true">
        <div className="ms-nav">
          <span className="ms-brand">{demo.name}</span>
          <span className="ms-links">
            <i />
            <i />
            <i />
          </span>
        </div>

        <div className="ms-hero">
          <span className="ms-kicker">{demo.category}</span>
          <span className="ms-h1">{demo.name}</span>
          <span className="ms-sub" />
          <span className="ms-cta">{demo.style}</span>
        </div>

        <div className="ms-cards">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default function WebsiteDesign() {
  const { websites } = site;

  return (
    <section id="websites" className="websites section-light">
      <div className="container">
        <SectionHead
          eyebrow={websites.eyebrow}
          title={websites.heading}
          subline={websites.subline}
        />

        <Reveal className="demos-label">
          <span className="eyebrow">{websites.demosLabel}</span>
        </Reveal>

        <div className="demos-grid">
          {websites.demos.map((d, i) => (
            <Reveal className="demo" key={d.name} delay={(i % 3) * 0.08}>
              <MiniSite demo={d} />
              <span className="demo-caption">
                <Globe size={14} strokeWidth={2} />
                {d.category} · {d.style}
              </span>
            </Reveal>
          ))}
        </div>

        <div className="webpkg-grid">
          {websites.packages.map((p, i) => (
            <Reveal
              className={"webpkg" + (p.popular ? " popular" : "")}
              key={p.name}
              delay={i * 0.08}
            >
              {p.popular && <span className="plan-tag">{p.popularLabel}</span>}

              <h3>{p.name}</h3>
              <div className="webpkg-price">{p.price}</div>
              <p className="webpkg-summary">{p.summary}</p>

              <ul className="plan-features">
                {p.features.map((f) => (
                  <li key={f}>
                    <Check size={15} strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                className="btn btn-primary btn-block btn-shine"
                href={waLink(p.msg)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {websites.buttonLabel}
              </a>
            </Reveal>
          ))}
        </div>

        <p className="price-note">{websites.note}</p>
      </div>
    </section>
  );
}
