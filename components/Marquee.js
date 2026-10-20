"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import site from "@/data/site";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Marquee() {
  const { marquee } = site;
  const root = useRef(null);

  const group = marquee.items.map((w, i) => (
    <span className="mq-word" key={i}>
      {w}
      <i className="mq-sep">{marquee.sep}</i>
    </span>
  ));

  useIso(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const t1 = el.querySelector(".mq-track-1");
        const t2 = el.querySelector(".mq-track-2");
        const loop1 = gsap.fromTo(
          t1,
          { xPercent: 0 },
          { xPercent: -50, duration: 26, ease: "none", repeat: -1 }
        );
        const loop2 = gsap.fromTo(
          t2,
          { xPercent: -50 },
          { xPercent: 0, duration: 26, ease: "none", repeat: -1 }
        );
        const loops = [loop1, loop2];

        let resetT;
        const st = ScrollTrigger.create({
          onUpdate: (self) => {
            const v = gsap.utils.clamp(0, 9, Math.abs(self.getVelocity()) / 220);
            loops.forEach((l) => l.timeScale(1 + v));
            clearTimeout(resetT);
            resetT = setTimeout(() => loops.forEach((l) => l.timeScale(1)), 260);
          },
        });

        return () => {
          clearTimeout(resetT);
          st.kill();
          loop1.kill();
          loop2.kill();
        };
      });
      return () => mm.revert();
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div className="marquee" ref={root} aria-hidden="true">
      <div className="mq-row">
        <div className="mq-track mq-track-1">
          {group}
          {group}
        </div>
      </div>
      <div className="mq-row mq-row-alt">
        <div className="mq-track mq-track-2">
          {group}
          {group}
        </div>
      </div>
    </div>
  );
}
