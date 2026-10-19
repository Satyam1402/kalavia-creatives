import site from "@/data/site";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

export default function WorkProcess() {
  const { process } = site;
  return (
    <section id="process">
      <div className="container">
        <SectionHead eyebrow={process.eyebrow} title={process.heading} />

        <div className="process">
          <span className="process-line" aria-hidden="true" />
          {process.steps.map((step, i) => (
            <Reveal className="process-step" key={i} delay={i * 0.1}>
              <span className="process-num">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
