"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import site, { waLink } from "@/data/site";
import SectionHead from "@/components/SectionHead";
import PosterMockup from "@/components/PosterMockup";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Per-card parallax speeds (yPercent) for the desktop editorial collage.
const SPEEDS = [-6, 5, -3, 6, -5, 4];

export default function Portfolio() {
  const { portfolio } = site;
  const [open, setOpen] = useState(null);
  const root = useRef(null);

  // Lightbox keyboard + scroll lock
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // GSAP reveal (clip wipe) + desktop parallax
  useIso(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const btns = gsap.utils.toArray(".portfolio-btn", el);
      const items = gsap.utils.toArray(".portfolio-item", el);

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(btns, { clipPath: "inset(0 0 100% 0)", opacity: 0, y: 28 });
        const batch = ScrollTrigger.batch(btns, {
          start: "top 86%",
          onEnter: (targets) =>
            gsap.to(targets, {
              clipPath: "inset(0 0 0% 0)",
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.1,
              overwrite: true,
            }),
        });
        return () => batch.forEach((b) => b.kill());
      });

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const tweens = items.map((it, i) =>
          gsap.to(it, {
            yPercent: SPEEDS[i % SPEEDS.length],
            ease: "none",
            scrollTrigger: {
              trigger: it,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          })
        );
        return () => tweens.forEach((t) => t.scrollTrigger && t.scrollTrigger.kill());
      });

      return () => mm.revert();
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={root}>
      <div className="container">
        <SectionHead
          eyebrow={portfolio.eyebrow}
          title={portfolio.heading}
          subline={portfolio.note}
        />

        <div className="portfolio-grid">
          {portfolio.items.map((p, i) => (
            <div className={"portfolio-item pi-" + i} key={p.title}>
              <button
                className="portfolio-btn"
                onClick={() => setOpen(i)}
                aria-label={`${p.title} — ${p.category} — view larger`}
              >
                <PosterMockup item={p} />
                <span className="portfolio-hover">
                  <span className="portfolio-cat">{p.category}</span>
                  <span className="portfolio-title">{p.title}</span>
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <a
            className="btn btn-primary btn-shine"
            href={waLink(portfolio.ctaMsg)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {portfolio.ctaLabel}
          </a>
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="lightbox"
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={portfolio.items[open].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="lightbox-close"
              onClick={() => setOpen(null)}
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <motion.div
              className="lightbox-body"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <PosterMockup item={portfolio.items[open]} className="poster-large" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
