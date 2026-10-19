import site from "@/data/site";
import SectionHead from "@/components/SectionHead";

export default function HowItWorks() {
  const { howItWorks } = site;
  return (
    <section id="how-it-works">
      <div className="container">
        <SectionHead eyebrow={howItWorks.eyebrow} title={howItWorks.title} />
        <div className="steps">
          {howItWorks.steps.map((step, i) => (
            <div
              className="step reveal"
              key={i}
              style={{ "--d": i * 80 + "ms" }}
            >
              <span className="step-num" aria-hidden="true">
                {i + 1}
              </span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
