"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, MessageCircle } from "lucide-react";
import site, { waLink } from "@/data/site";
import SectionHead from "@/components/SectionHead";
import { WhatsAppIcon } from "@/components/icons";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// The designed poster, built from HTML/CSS layers so text stays sharp.
function StoryPoster({ p }) {
  return (
    <div className="phone-screen">
      <div className="sp-bg" />
      <div className="sp-plain">{p.plain}</div>
      <div className="sp-visual">
        <span className="cup-wrap">
          <span className="straw" />
          <span className="cup" />
        </span>
      </div>
      <div className="sp-content">
        <div className="sp-brand">
          <span className="sp-logo">K</span>
          {p.brand}
        </div>
        <div className="sp-mid">
          <h3 className="sp-headline">{p.headline}</h3>
          <span className="sp-price">{p.price}</span>
          <p className="sp-detail">{p.detail}</p>
        </div>
        <div className="sp-foot">
          <span className="sp-offer">{p.offer}</span>
          <span className="sp-cta">{p.cta}</span>
        </div>
      </div>
    </div>
  );
}

export default function TransformationStory() {
  const { transformationStory: story } = site;
  const root = useRef(null);
  const pinRef = useRef(null);

  useIso(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const steps = story.steps.length;

      const setActive = (progress) => {
        const i = Math.min(steps - 1, Math.max(0, Math.floor(progress * steps)));
        el.querySelectorAll("[data-step]").forEach((n) => {
          n.classList.toggle("is-active", Number(n.dataset.step) === i);
        });
      };

      const prep = () => {
        gsap.set(".sp-plain", { opacity: 1, scale: 1 });
        gsap.set(".sp-bg", { opacity: 0, scale: 1.12 });
        gsap.set(".sp-visual", { opacity: 0, scale: 0.86, y: 14 });
        gsap.set(".sp-brand", { opacity: 0, y: -10 });
        gsap.set(".sp-headline", { opacity: 0, y: 34 });
        gsap.set(".sp-price", { opacity: 0, y: 20 });
        gsap.set(".sp-detail", { opacity: 0 });
        gsap.set(".sp-offer", { opacity: 0, scale: 0.6 });
        gsap.set(".sp-cta", { opacity: 0, y: 12 });
        gsap.set(".story-grid", { opacity: 0, scale: 0.92 });
        gsap.set(".story-react", { opacity: 0, scale: 0.6 });
        gsap.set(".story-cta", { opacity: 0, y: 18 });
        gsap.set(".story-phone", { scale: 1, xPercent: 0, yPercent: 0 });
      };

      const build = (desktop) => {
        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: desktop ? "+=2600" : "+=1500",
            scrub: 0.8,
            pin: pinRef.current,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => setActive(self.progress),
          },
        });
        // 1 → 2 : colour + photo in
        tl.to(".sp-plain", { opacity: 0, scale: 0.92, duration: 0.5 })
          .to(".sp-bg", { opacity: 1, scale: 1, duration: 0.7 }, "<")
          .to(
            ".sp-visual",
            { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(1.4)" },
            "<0.15"
          );
        // 2 → 3 : headline drops in
        tl.to(".sp-headline", { opacity: 1, y: 0, duration: 0.6 }, "+=0.15")
          .to(".sp-price", { opacity: 1, y: 0, duration: 0.5 }, "<0.1")
          .to(".sp-detail", { opacity: 1, duration: 0.5 }, "<0.1");
        // 3 → 4 : brand + offer + cta
        tl.to(".sp-brand", { opacity: 1, y: 0, duration: 0.45 }, "+=0.15")
          .to(".sp-offer", { opacity: 1, scale: 1, duration: 0.45 }, "<0.05")
          .to(".sp-cta", { opacity: 1, y: 0, duration: 0.45 }, "<0.1");
        // 4 → 5 : zoom out to the grid (desktop) / crossfade (mobile)
        if (desktop) {
          tl.to(
            ".story-phone",
            { scale: 0.5, xPercent: -28, yPercent: -4, duration: 0.9 },
            "+=0.25"
          ).to(".story-grid", { opacity: 1, scale: 1, duration: 0.8 }, "<0.1");
        } else {
          tl.to(".story-grid", { opacity: 1, scale: 1, duration: 0.7 }, "+=0.25");
        }
        tl.to(
          ".story-react",
          { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08 },
          "<0.15"
        ).to(".story-cta", { opacity: 1, y: 0, duration: 0.4 }, "<0.1");

        return () => {}; // matchMedia cleanup handled by context revert
      };

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        el.classList.add("story--motion");
        prep();
        build(true);
        return () => el.classList.remove("story--motion");
      });

      mm.add(
        "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
        () => {
          el.classList.add("story--motion");
          prep();
          build(false);
          return () => el.classList.remove("story--motion");
        }
      );

      return () => mm.revert();
    }, el);

    return () => ctx.revert();
  }, [story.steps.length]);

  const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section id="story" className="story" ref={root}>
      <div className="container story-intro">
        <SectionHead
          eyebrow={story.eyebrow}
          title={story.heading}
          subline={story.note}
        />
      </div>

      {/* Motion stage (desktop + mobile). Hidden until JS enables .story--motion */}
      <div className="story-wrap">
        <div className="story-pin" ref={pinRef}>
          <div className="story-stage">
            <div className="story-phone phone" aria-hidden="true">
              <span className="phone-notch" />
              <StoryPoster p={story.poster} />
            </div>

            {/* Instagram grid revealed at the final step */}
            <div className="story-grid" aria-hidden="true">
              <div className="ig-top">
                <span className="ig-dot" />
                <span className="ig-id">
                  <b className="ig-name">{story.handle}</b>
                  <i className="ig-bio">{story.bio}</i>
                </span>
              </div>
              <div className="ig-tiles">
                {tiles.map((t) => {
                  if (t === 4) {
                    return (
                      <span key={t} className="ig-cell ig-cell-main">
                        <StoryPoster p={story.poster} />
                      </span>
                    );
                  }
                  const f = story.feedTiles[t < 4 ? t : t - 1];
                  return (
                    <span key={t} className={"ig-cell ig-tone-" + (t % 4)}>
                      <i className="ig-g">{f.glyph}</i>
                      <b className="ig-l">{f.label}</b>
                    </span>
                  );
                })}
              </div>
              <span className="story-react story-react-1">
                <Heart size={14} fill="currentColor" /> 128
              </span>
              <span className="story-react story-react-2">
                <MessageCircle size={14} fill="currentColor" /> 24
              </span>
            </div>

            {/* Side captions (crossfade by step) */}
            <div className="story-captions" aria-hidden="true">
              {story.steps.map((s, i) => (
                <span className="story-caption" data-step={i} key={s.n}>
                  <b>{s.n}</b>
                  {s.caption}
                </span>
              ))}
            </div>

            {/* Progress rail */}
            <div className="story-rail" aria-hidden="true">
              {story.steps.map((s, i) => (
                <span className="story-rail-dot" data-step={i} key={s.n}>
                  {s.n}
                </span>
              ))}
            </div>

            <a
              className="btn btn-primary btn-shine story-cta"
              href={waLink(story.ctaMsg)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              {story.ctaLabel}
            </a>
          </div>
        </div>
      </div>

      {/* Reduced-motion / no-JS fallback: plain vertical list */}
      <div className="container story-list">
        <div className="story-list-phone phone" aria-hidden="true">
          <span className="phone-notch" />
          <StoryPoster p={story.poster} />
        </div>
        <ol className="story-list-steps">
          {story.steps.map((s) => (
            <li key={s.n}>
              <span className="story-list-n">{s.n}</span>
              <span>{s.caption}</span>
            </li>
          ))}
        </ol>
        <div className="section-cta">
          <a
            className="btn btn-primary btn-shine"
            href={waLink(story.ctaMsg)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} />
            {story.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
