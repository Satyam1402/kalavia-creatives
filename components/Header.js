"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Mail, ArrowUpRight } from "lucide-react";
import site, { waLink } from "@/data/site";
import BrandK from "@/components/BrandK";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";

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
            aria-label="Open menu"
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
                <span className="brand">
                  <BrandK />
                  <span className="brand-name">{site.brand.name}</span>
                </span>
                <button
                  className="menu-btn"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="drawer-offer">
                <span className="drawer-offer-tag">{site.hero.badge}</span>
                <span className="drawer-offer-note">{site.hero.badgeNote}</span>
              </div>

              <nav className="drawer-nav" aria-label="Mobile">
                {site.nav.map((n, i) => (
                  <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
                    <span className="drawer-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="drawer-label">{n.label}</span>
                    <ArrowUpRight size={17} className="drawer-arrow" />
                  </a>
                ))}
              </nav>

              <div className="drawer-foot">
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

                <div className="drawer-links">
                  <a
                    href={site.footer.instagram.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    <InstagramIcon size={16} />
                    {site.footer.instagram.handle}
                  </a>
                  <a
                    href={`mailto:${site.footer.email}`}
                    onClick={() => setOpen(false)}
                  >
                    <Mail size={16} />
                    {site.footer.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
