"use client";

import { useState } from "react";
import site from "@/data/site";

// A polished CSS "campaign poster" mockup. Used in the portfolio grid and the
// hero. If `image` is provided and loads, the real image is shown instead.
export default function PosterMockup({ item, className = "" }) {
  const [imgOk, setImgOk] = useState(Boolean(item.image));

  return (
    <div
      className={`poster poster-p${item.palette} ${className}`}
      data-has-image={imgOk ? "true" : "false"}
    >
      {imgOk && (
        <img
          src={item.image}
          alt={`${item.title} — ${item.category}`}
          loading="lazy"
          onError={() => setImgOk(false)}
          className="poster-real"
        />
      )}

      {!imgOk && (
        <div className="poster-mock" aria-hidden="true">
          <div className="poster-top">
            <span className="poster-brand">{site.brand.name}</span>
            {item.offer && <span className="poster-offer">{item.offer}</span>}
          </div>

          <div className="poster-emoji">{item.emoji}</div>

          <div className="poster-bottom">
            <span className="poster-cat">{item.category}</span>
            <h4 className="poster-title">{item.title}</h4>
            <p className="poster-line">{item.line}</p>
          </div>
        </div>
      )}
    </div>
  );
}
