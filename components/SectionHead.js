import Reveal from "@/components/Reveal";

export default function SectionHead({ eyebrow, title, subline, align = "center" }) {
  return (
    <Reveal className={"section-head section-head-" + align}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subline && <p className="section-sub">{subline}</p>}
    </Reveal>
  );
}
