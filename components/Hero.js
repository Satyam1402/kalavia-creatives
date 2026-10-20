"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import site, { waLink } from "@/data/site";
import PosterMockup from "@/components/PosterMockup";
import { WhatsAppIcon } from "@/components/icons";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Hero() {
  const { hero, portfolio, reels } = site;
  const root = useRef(null);

  useIso(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;

    const ctx = gsap.context((self) => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Entrance — masked line reveal + staggered copy + artwork
        gsap.set(".hl-line", { yPercent: 115 });
        gsap.set(".hero-rise", { opacity: 0, y: 22 });
        gsap.set(".hc", { opacity: 0, y: 26, scale: 0.96 });

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          delay: 0.15,
        });
        tl.to(".hl-line", { yPercent: 0, duration: 0.7, stagger: 0.12 })
          .to(
            ".hero-rise",
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
            "-=0.35"
          )
          .to(
            ".hc",
            { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.09 },
            "-=0.5"
          );

        // Scroll parallax: heading lags, artwork scales up gently
        gsap.to(".hero-copy", {
          yPercent: 16,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.fromTo(
          ".hero-stage",
          { scale: 1 },
          {
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      return () => mm.revert();
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-bg" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
        <span className="hero-grid" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow hero-rise">{hero.eyebrow}</span>

          <h1 className="hero-title">
            <span className="hl-mask">
              <span className="hl-line">{hero.headingPre}</span>
            </span>
            <span className="hl-mask">
              <span className="hl-line grad-text grad-animate">
                {hero.headingAccent}
              </span>
            </span>
          </h1>

          <p className="subline hero-rise">{hero.subline}</p>

          <div className="hero-actions hero-rise">
            <a
              className="btn btn-primary btn-shine"
              href={waLink(hero.primaryMsg)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={19} />
              {hero.primaryBtn}
            </a>
            <a className="btn btn-ghost" href="#work">
              {hero.secondaryBtn}
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-free hero-rise">
            <span className="hero-free-tag">{hero.badge}</span>
            <span className="hero-free-note">{hero.badgeNote}</span>
          </div>

          <ul className="hero-trust hero-rise">
            {hero.trust.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-stage">
            <div className="hc hc-main">
              <PosterMockup item={portfolio.items[0]} />
            </div>

            <div className="hc hc-phone">
              <div className="phone">
                <span className="phone-notch" />
                <div className="phone-screen">
                  <PosterMockup
                    item={reels.items[2]}
                    className="poster-in-phone"
                  />
                  <span className="phone-reel-badge">▶ Reel</span>
                </div>
              </div>
            </div>

            <div className="hc hc-salon">
              <PosterMockup item={portfolio.items[2]} />
            </div>

            <div className="hc hc-jewel">
              <PosterMockup item={portfolio.items[3]} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
