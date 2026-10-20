"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// First-visit-per-session intro. Rendered client-side only, so if JS fails the
// page is never covered. Skipped under reduced motion. Max ~1.3s.
export default function IntroCurtain() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem("kv_intro") === "1";
    } catch {}
    if (reduce || seen) return;
    try {
      sessionStorage.setItem("kv_intro", "1");
    } catch {}
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    const el = ref.current;
    document.body.style.overflow = "hidden";

    const finish = () => {
      document.body.style.overflow = "";
      setShow(false);
    };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: finish });
      tl.fromTo(
        ".ic-k",
        { opacity: 0, scale: 0.82, yPercent: 6 },
        { opacity: 1, scale: 1, yPercent: 0, duration: 0.4, ease: "power2.out" }
      )
        .fromTo(
          ".ic-bar-fill",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.55, ease: "power1.inOut" },
          0.08
        )
        .to(el, { yPercent: -100, duration: 0.55, ease: "power3.inOut" }, "+=0.08");
    }, el);

    // Safety net: never leave the curtain up.
    const t = setTimeout(finish, 1800);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="intro-curtain" ref={ref} aria-hidden="true">
      <div className="ic-inner">
        <span className="ic-k">K</span>
        <span className="ic-bar">
          <span className="ic-bar-fill" />
        </span>
      </div>
    </div>
  );
}
