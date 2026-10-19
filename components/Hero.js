"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import site, { waLink } from "@/data/site";
import PosterMockup from "@/components/PosterMockup";
import { WhatsAppIcon } from "@/components/icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { hero, portfolio } = site;
  const reduce = useReducedMotion();
  const float = reduce
    ? {}
    : { animate: { y: [0, -12, 0] }, transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } };

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
        <span className="hero-grid" />
      </div>

      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span className="eyebrow" variants={item}>
            {hero.eyebrow}
          </motion.span>

          <motion.h1 variants={item}>
            {hero.headingPre}{" "}
            <span className="grad-text grad-animate">{hero.headingAccent}</span>
          </motion.h1>

          <motion.p className="subline" variants={item}>
            {hero.subline}
          </motion.p>

          <motion.div className="hero-badge" variants={item}>
            <span className="hero-badge-tag">{hero.badge}</span>
            <span className="hero-badge-note">{hero.badgeNote}</span>
          </motion.div>

          <motion.div className="hero-actions" variants={item}>
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
          </motion.div>

          <motion.ul className="hero-stats" variants={item}>
            {hero.stats.map((s) => (
              <li key={s.label}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right-side art-directed composition */}
        <motion.div
          className="hero-visual"
          initial={reduce ? false : { opacity: 0, scale: 0.94, y: 20 }}
          animate={reduce ? {} : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <motion.div className="phone" {...float}>
            <div className="phone-notch" />
            <div className="phone-screen">
              <PosterMockup item={portfolio.items[2]} className="poster-in-phone" />
            </div>
          </motion.div>

          <motion.div
            className="float-card reel-card"
            {...(reduce
              ? {}
              : { animate: { y: [0, 10, 0] }, transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } })}
          >
            <PosterMockup item={portfolio.items[0]} />
            <span className="reel-badge">▶ Reel</span>
          </motion.div>

          <motion.div
            className="float-card offer-chip"
            {...(reduce
              ? {}
              : { animate: { y: [0, -8, 0] }, transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 } })}
          >
            <span className="offer-chip-top">PEHLA POSTER</span>
            <span className="offer-chip-big">FREE</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
