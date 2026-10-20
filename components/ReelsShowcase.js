import { Play } from "lucide-react";
import site, { waLink } from "@/data/site";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import ReelPlayer from "@/components/ReelPlayer";

// "Reels in motion" — three vertical 9:16 samples. Each card is a real video
// that only plays on tap (no autoplay, no sound until the user asks).
// Items without a `video` fall back to an animated concept frame.
export default function ReelsShowcase() {
  const { reels } = site;

  return (
    <section id="reels" className="reels">
      <div className="container">
        <SectionHead
          eyebrow={reels.eyebrow}
          title={reels.heading}
          subline={reels.note}
        />

        <div className="reels-grid">
          {reels.items.map((r, i) => (
            <Reveal className="reel" key={r.title} delay={(i % 3) * 0.08}>
              {r.video ? (
                <ReelPlayer item={r} badge={reels.badges[r.format]} />
              ) : (
                <div className={`reel-frame reel--${r.kind}`} aria-hidden="true">
                  <span className="reel-glow" />
                  <span className="reel-motif">{r.glyph}</span>
                  <span className="reel-sweep" />

                  <span className="reel-top">
                    <span className={`reel-tag reel-tag--${r.format}`}>
                      {reels.badges[r.format]}
                    </span>
                    <span className="reel-cat">{r.category}</span>
                  </span>

                  <span className="reel-play">
                    <Play size={22} strokeWidth={2} fill="currentColor" />
                  </span>

                  <span className="reel-scrubber">
                    <span className="reel-scrubber-fill" />
                  </span>
                </div>
              )}

              <div className="reel-caption">
                <h3>{r.title}</h3>
                <p>{r.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="section-cta reels-cta">
          <a
            className="btn btn-primary btn-shine"
            href={waLink(reels.ctaMsg)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {reels.ctaLabel}
          </a>
          <a
            className="btn btn-ghost"
            href={waLink(reels.ctaAltMsg)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {reels.ctaAltLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
