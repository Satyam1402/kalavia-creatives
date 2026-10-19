"use client";

import { useState } from "react";
import site from "@/data/site";

// Shows the logo from /public/logo.png.
// If that file is missing, it falls back to a gradient "K".
export default function BrandK() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="logo-k" aria-hidden="true">
        K
      </span>
    );
  }

  // Plain <img> (not next/image) so static export stays simple and the
  // onError fallback works without extra config.
  return (
    <img
      className="logo-img"
      src={site.brand.logo}
      alt={site.brand.name + " logo"}
      width={40}
      height={40}
      onError={() => setFailed(true)}
    />
  );
}
