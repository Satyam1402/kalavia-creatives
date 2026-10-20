"use client";

import { useState } from "react";
import site from "@/data/site";

// An art-directed CSS "campaign poster" mockup. Each item is colour-graded and
// laid out by its `kind` (industry) and `layout` (composition), so the set
// reads as varied work from the same studio — without any image files.
//
// If `item.image` is provided and loads, the real photo is shown instead.
export default function PosterMockup({ item, className = "" }) {
  const [imgOk, setImgOk] = useState(Boolean(item.image));
  const kind = item.kind || "restaurant";
  const layout = item.layout || "editorial";

  return (
    <div
      className={`poster poster--${kind} poster--${layout} ${className}`}
      data-has-image={imgOk ? "true" : "false"}
    >
      {imgOk ? (
        <img
          src={item.image}
          alt={`${item.title} — ${item.category} concept`}
          loading="lazy"
          onError={() => setImgOk(false)}
          className="poster-real"
        />
      ) : (
        <div className="poster-art" aria-hidden="true">
          <span className="poster-glow" />
          <span className="poster-motif">{item.glyph}</span>

          <div className="poster-frame">
            <div className="poster-head">
              <span className="poster-mark">{site.brand.name}</span>
              {item.tag && <span className="poster-tag">{item.tag}</span>}
            </div>

            <div className="poster-mid">
              {item.category && (
                <span className="poster-cat">{item.category}</span>
              )}
              <h4 className="poster-title">{item.title}</h4>
              <span className="poster-rule" />
              {item.line && <p className="poster-line">{item.line}</p>}
            </div>

            <div className="poster-foot">
              {item.offer && <span className="poster-offer">{item.offer}</span>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
