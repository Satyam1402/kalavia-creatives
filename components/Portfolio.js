"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import site, { waLink } from "@/data/site";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import PosterMockup from "@/components/PosterMockup";

export default function Portfolio() {
  const { portfolio } = site;
  const [open, setOpen] = useState(null); // index or null

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

  return (
    <section id="work">
      <div className="container">
        <SectionHead
          eyebrow={portfolio.eyebrow}
          title={portfolio.heading}
          subline={portfolio.note}
        />

        <div className="portfolio-grid">
          {portfolio.items.map((p, i) => (
            <Reveal className="portfolio-item" key={p.title} delay={(i % 3) * 0.08}>
              <button
                className="portfolio-btn"
                onClick={() => setOpen(i)}
                aria-label={`${p.title} — ${p.category} — bada dekhein`}
              >
                <PosterMockup item={p} />
                <span className="portfolio-hover">
                  <span className="portfolio-cat">{p.category}</span>
                  <span className="portfolio-title">{p.title}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="section-cta">
          <a
            className="btn btn-primary btn-shine"
            href={waLink(portfolio.ctaMsg)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {portfolio.ctaLabel}
          </a>
        </Reveal>
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
              aria-label="Band karein"
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
