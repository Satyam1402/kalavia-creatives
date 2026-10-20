import { MessageCircle } from "lucide-react";
import site, { waLink } from "@/data/site";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

export default function SingleServices() {
  const { singleServices } = site;
  return (
    <section id="single-services">
      <div className="container">
        <SectionHead
          eyebrow={singleServices.eyebrow}
          title={singleServices.heading}
        />

        <Reveal className="single-list">
          {singleServices.items.map((item) => {
            const msg = singleServices.ctaMsgTemplate.replace("[service]", item.name);
            return (
              <div className="single-row" key={item.name}>
                <span className="single-name">{item.name}</span>
                <span className="single-prices">
                  <span className="single-launch">{item.launch}</span>
                  <span className="single-after">
                    {singleServices.standardFromLabel} {item.standard}
                  </span>
                </span>
                <a
                  className="single-cta"
                  href={waLink(msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.name} ke liye WhatsApp karein`}
                >
                  <MessageCircle size={16} />
                  <span>Enquire</span>
                </a>
              </div>
            );
          })}
        </Reveal>

        <p className="price-note">{singleServices.offerNote}</p>
      </div>
    </section>
  );
}
