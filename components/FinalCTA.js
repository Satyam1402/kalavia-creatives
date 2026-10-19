import site, { waLink } from "@/data/site";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";

export default function FinalCTA() {
  const { finalCta } = site;
  return (
    <section id="final-cta" className="final-cta">
      <div className="container">
        <Reveal className="final-inner">
          <span className="final-label">{finalCta.label}</span>
          <h2>{finalCta.heading}</h2>
          <p>{finalCta.text}</p>
          <a
            className="btn btn-wa btn-shine"
            href={waLink(finalCta.message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={19} />
            {finalCta.buttonLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
