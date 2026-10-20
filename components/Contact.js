import { Mail, ArrowUpRight } from "lucide-react";
import site, { waLink } from "@/data/site";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";

export default function Contact() {
  const { contact, whatsapp, footer } = site;

  const methods = [
    {
      key: "wa1",
      icon: <WhatsAppIcon size={22} />,
      label: "WhatsApp",
      value: footer.primaryWaDisplay,
      sub: "Fastest reply",
      href: waLink(whatsapp.defaultMessage, whatsapp.primary),
      accent: "wa",
    },
    {
      key: "ig",
      icon: <InstagramIcon size={22} />,
      label: "Instagram",
      value: footer.instagram.handle,
      sub: "Send a DM",
      href: footer.instagram.link,
      accent: "ig",
    },
    {
      key: "mail",
      icon: <Mail size={22} />,
      label: "Email",
      value: footer.email,
      sub: "Detailed enquiry",
      href: `mailto:${footer.email}`,
      accent: "mail",
    },
  ];

  return (
    <section id="contact">
      <div className="container">
        <SectionHead
          eyebrow={contact.eyebrow}
          title={contact.heading}
          subline={contact.subline}
        />

        <div className="contact-grid">
          {methods.map((m, i) => (
            <Reveal key={m.key} delay={(i % 2) * 0.08}>
              <a
                className={"contact-card contact-" + m.accent}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.label}: ${m.value}`}
              >
                <span className="contact-icon">{m.icon}</span>
                <span className="contact-body">
                  <span className="contact-label">{m.label}</span>
                  <span className="contact-value">{m.value}</span>
                  <span className="contact-sub">{m.sub}</span>
                </span>
                <ArrowUpRight size={18} className="contact-arrow" />
              </a>
            </Reveal>
          ))}
        </div>

        <p className="contact-note">{contact.responseNote}</p>
      </div>
    </section>
  );
}
