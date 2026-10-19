import site, { waLink } from "@/data/site";
import BrandK from "@/components/BrandK";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { Mail } from "lucide-react";

export default function Footer() {
  const { footer, nav } = site;
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#top" className="brand" aria-label={site.brand.name}>
            <BrandK />
            <span className="brand-name">{site.brand.name}</span>
          </a>
          <p className="footer-tagline">{footer.tagline}</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <span className="footer-head">Explore</span>
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="footer-contact">
          <span className="footer-head">Contact</span>
          <a
            href={footer.instagram.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={17} /> {footer.instagram.handle}
          </a>
          <a href={`mailto:${footer.email}`}>
            <Mail size={17} /> {footer.email}
          </a>
          <a
            href={waLink(site.whatsapp.defaultMessage, site.whatsapp.primary)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={17} /> {footer.primaryWaDisplay}
          </a>
          <a
            href={waLink(site.whatsapp.defaultMessage, site.whatsapp.secondary)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={17} /> {footer.secondaryWaDisplay}
          </a>
        </div>
      </div>

      <div className="container footer-bottom">{footer.copyright}</div>
    </footer>
  );
}
