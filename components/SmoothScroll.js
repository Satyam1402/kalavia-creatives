"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Lenis smooth scroll on desktop pointers only; native scroll on touch devices.
// Wired into ScrollTrigger so pinned/scrubbed sections stay in sync.
export default function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mql = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    let lenis = null;
    let rafCb = null;
    let onClick = null;

    const headerOffset = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue(
        "--header-h"
      );
      return (parseInt(v, 10) || 66) + 8;
    };

    const start = () => {
      if (lenis) return;
      lenis = new Lenis({ duration: 1.05, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      rafCb = (time) => lenis && lenis.raf(time * 1000);
      gsap.ticker.add(rafCb);
      gsap.ticker.lagSmoothing(0);

      // Keep in-page anchor links working with the sticky-header offset.
      onClick = (e) => {
        const a = e.target.closest && e.target.closest('a[href^="#"]');
        if (!a) return;
        const href = a.getAttribute("href");
        if (!href || href === "#") return;
        const el = document.querySelector(href);
        if (!el) return;
        e.preventDefault();
        lenis.scrollTo(el, { offset: -headerOffset() });
      };
      document.addEventListener("click", onClick);
    };

    const stop = () => {
      if (!lenis) return;
      if (onClick) document.removeEventListener("click", onClick);
      if (rafCb) gsap.ticker.remove(rafCb);
      lenis.destroy();
      lenis = null;
      rafCb = null;
      onClick = null;
    };

    if (mql.matches) start();
    const onChange = (e) => (e.matches ? start() : stop());
    mql.addEventListener("change", onChange);

    return () => {
      mql.removeEventListener("change", onChange);
      stop();
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, []);

  return null;
}
