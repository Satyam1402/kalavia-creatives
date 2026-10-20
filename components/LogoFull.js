"use client";

import { useState } from "react";
import site from "@/data/site";
import BrandK from "@/components/BrandK";

// Full "KALAVIA CREATIVES" lockup for the footer / brand presentation.
// Falls back to the compact mark + wordmark if the image is missing.
export default function LogoFull() {
  const [failed, setFailed] = useState(false);

  if (failed || !site.brand.logoFull) {
    return (
      <span className="brand">
        <BrandK />
        <span className="brand-name">{site.brand.name}</span>
      </span>
    );
  }

  return (
    <img
      className="logo-full"
      src={site.brand.logoFull}
      alt={site.brand.name}
      width={190}
      height={44}
      onError={() => setFailed(true)}
    />
  );
}
