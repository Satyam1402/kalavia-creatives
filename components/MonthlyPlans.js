import site, { waLink } from "@/data/site";
import SectionHead from "@/components/SectionHead";

export default function MonthlyPlans() {
  const { plans } = site;
  return (
    <section id="plans">
      <div className="container">
        <SectionHead eyebrow={plans.eyebrow} title={plans.title} />
        <div className="plans-grid">
          {plans.items.map((plan, i) => {
            const msg = plans.buttonMessage.replace("[plan]", plan.name);
            return (
              <div
                className={
                  "plan reveal" + (plan.popular ? " popular" : "")
                }
                key={plan.name}
                style={{ "--d": i * 80 + "ms" }}
              >
                {plan.popular && (
                  <span className="plan-tag">{plan.popularLabel}</span>
                )}
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  {plan.price}
                  <span className="per">{plan.period}</span>
                </div>
                <div className="plan-launch">{plan.launchNote}</div>
                <ul className="plan-features">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  className="btn btn-primary btn-block btn-shine"
                  href={waLink(msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plans.buttonLabel}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
