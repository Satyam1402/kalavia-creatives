import { ArrowUpRight } from "lucide-react";
import site from "@/data/site";
import Reveal from "@/components/Reveal";
import PosterMockup from "@/components/PosterMockup";
import { InstagramIcon } from "@/components/icons";

export default function OwnWork() {
  const { ownWork, portfolio } = site;
  // Use a couple of mockups as an Instagram-style preview.
  const previews = [portfolio.items[4], portfolio.items[1], portfolio.items[5]];

  return (
    <section id="own-work" className="ownwork">
      <div className="container ownwork-inner">
        <Reveal className="ownwork-copy">
          <span className="eyebrow">{ownWork.eyebrow}</span>
          <h2 className="section-title">{ownWork.heading}</h2>
          <p>{ownWork.text}</p>
          <a
            className="btn btn-primary btn-shine"
            href={ownWork.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={18} />
            {ownWork.buttonLabel}
            <ArrowUpRight size={18} />
          </a>
        </Reveal>

        <Reveal className="ownwork-preview" delay={0.12} aria-hidden="true">
          <div className="ig-head">
            <span className="ig-avatar">
              <InstagramIcon size={18} />
            </span>
            <span className="ig-handle">{ownWork.handle}</span>
          </div>
          <div className="ig-grid">
            {previews.map((p, i) => (
              <PosterMockup item={p} key={i} className="ig-tile" />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
