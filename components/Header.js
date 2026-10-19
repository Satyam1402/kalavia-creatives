"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import site, { waLink } from "@/data/site";
import BrandK from "@/components/BrandK";
import { WhatsAppIcon } from "@/components/icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close drawer on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={"header" + (scrolled ? " scrolled" : "")}>
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label={site.brand.name}>
          <BrandK />
          <span className="brand-name">{site.brand.name}</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="btn btn-wa btn-sm nav-cta"
            href={waLink(site.whatsapp.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} />
            <span>{site.whatsapp.buttonLabel}</span>
          </a>

          <button
            className="menu-btn"
            onClick={() => setOpen(true)}
            aria-label="Menu kholein"
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="drawer-backdrop"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              id="mobile-drawer"
              className="drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="drawer-head">
                <span className="brand-name">{site.brand.name}</span>
                <button
                  className="menu-btn"
                  onClick={() => setOpen(false)}
                  aria-label="Menu band karein"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="drawer-nav" aria-label="Mobile">
                {site.nav.map((n) => (
                  <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
                    {n.label}
                  </a>
                ))}
              </nav>

              <a
                className="btn btn-wa btn-block"
                href={waLink(site.whatsapp.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <WhatsAppIcon size={18} />
                {site.whatsapp.buttonLabel}
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
