"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import site, { waLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Closing() {
  const { closing } = site;
  const root = useRef(null);

  useIso(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Panel rises in
        gsap.from(".closing-panel", {
          y: 48,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
        // Wordmark fills with gradient as it scrolls through
        gsap.fromTo(
          ".closing-mark",
          { backgroundSize: "0% 100%" },
          {
            backgroundSize: "100% 100%",
            ease: "none",
            scrollTrigger: {
              trigger: ".closing-mark",
              start: "top 85%",
              end: "bottom 55%",
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
    <section className="closing" ref={root}>
      <svg
        className="closing-wave"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,60 C180,10 340,10 540,34 C740,58 820,58 1020,30 C1200,6 1320,6 1440,30 L1440,60 Z" />
      </svg>

      <div className="container closing-panel">
        <span className="closing-kicker">{closing.kicker}</span>
        <h2 className="closing-heading">{closing.heading}</h2>
        <p className="closing-text">{closing.text}</p>
        <a
          className="btn btn-wa btn-shine"
          href={waLink(closing.message)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={20} />
          {closing.buttonLabel}
        </a>

        <div className="closing-mark" aria-hidden="true">
          {closing.wordmark}
        </div>
      </div>
    </section>
  );
}
