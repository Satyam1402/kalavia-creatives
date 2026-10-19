import site, { waLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

export default function FloatingWhatsApp() {
  return (
    <a
      className="fab"
      href={waLink(site.whatsapp.defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={site.whatsapp.buttonLabel}
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
