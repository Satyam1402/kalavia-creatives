"use client";

import { useEffect, useState } from "react";
import site from "@/data/site";
import SectionHead from "@/components/SectionHead";

export default function SampleWork() {
  const { sampleWork } = site;
  // Track which images failed to load, so we can show a placeholder.
  const [failed, setFailed] = useState({});
  // Index of the image open in the lightbox (null = closed).
  const [open, setOpen] = useState(null);

  // Close lightbox on Escape.
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    // Lock background scroll while open.
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const openImg =
    open !== null && !failed[open] ? sampleWork.images[open] : null;

  return (
    <section id="samples">
      <div className="container">
        <SectionHead eyebrow={sampleWork.eyebrow} title={sampleWork.title} />

        <div className="samples-grid">
          {sampleWork.images.map((src, i) => {
            const isBroken = failed[i];
            return (
              <button
                className="sample reveal"
                key={src}
                style={{ "--d": i * 50 + "ms" }}
                onClick={() => !isBroken && setOpen(i)}
                aria-label={
                  isBroken ? sampleWork.placeholder : `Sample ${i + 1} dekhein`
                }
              >
                {!isBroken && (
                  <img
                    src={src}
                    alt={`Sample poster ${i + 1}`}
                    loading="lazy"
                    onError={() =>
                      setFailed((f) => ({ ...f, [i]: true }))
                    }
                  />
                )}
                {isBroken && (
                  <span className="sample-placeholder">
                    <span>{sampleWork.placeholder}</span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {openImg && (
        <div
          className="lightbox"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="lightbox-close"
            onClick={() => setOpen(null)}
            aria-label="Band karein"
          >
            ×
          </button>
          <img src={openImg} alt="Sample poster" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
