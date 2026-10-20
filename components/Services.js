import {
  Images,
  Clapperboard,
  Sparkles,
  UtensilsCrossed,
  Globe,
  PenTool,
} from "lucide-react";
import site, { waLink } from "@/data/site";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

const ICONS = {
  posters: Images,
  reels: Clapperboard,
  web: Globe,
  festival: Sparkles,
  menu: UtensilsCrossed,
  logo: PenTool,
};

export default function Services() {
  const { services } = site;
  return (
    <section id="services">
      <div className="container">
        <SectionHead
          eyebrow={services.eyebrow}
          title={services.heading}
          subline={services.subline}
        />

        <div className="grid-cards">
          {services.items.map((s, i) => {
            const Icon = ICONS[s.icon] || Images;
            return (
              <Reveal
                className="service-card"
                key={s.title}
                delay={(i % 3) * 0.08}
              >
                <span className="service-icon">
                  <Icon size={24} strokeWidth={1.8} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="section-cta">
          <a
            className="btn btn-primary btn-shine"
            href={waLink(services.ctaMsg)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {services.ctaLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
