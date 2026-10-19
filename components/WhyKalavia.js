import { Palette, BadgeCheck, Zap, ShieldCheck } from "lucide-react";
import site from "@/data/site";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

const ICONS = {
  palette: Palette,
  badge: BadgeCheck,
  zap: Zap,
  shield: ShieldCheck,
};

export default function WhyKalavia() {
  const { why } = site;
  return (
    <section id="why">
      <div className="container">
        <SectionHead eyebrow={why.eyebrow} title={why.heading} />
        <div className="why-grid">
          {why.points.map((p, i) => {
            const Icon = ICONS[p.icon] || BadgeCheck;
            return (
              <Reveal className="why-item" key={p.title} delay={(i % 2) * 0.08}>
                <span className="why-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
