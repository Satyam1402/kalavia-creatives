import { Check } from "lucide-react";
import site, { waLink } from "@/data/site";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

export default function PricingPlans() {
  const { plans } = site;
  return (
    <section id="pricing">
      <div className="container">
        <SectionHead
          eyebrow={plans.eyebrow}
          title={plans.heading}
          subline={plans.offerLine}
        />

        <div className="plans-grid">
          {plans.items.map((plan, i) => (
            <Reveal
              className={"plan" + (plan.popular ? " popular" : "")}
              key={plan.name}
              delay={i * 0.08}
            >
              {plan.popular && <span className="plan-tag">{plan.popularLabel}</span>}

              <h3>{plan.name}</h3>

              <div className="plan-price-row">
                <s className="plan-standard">{plan.standard}</s>
                <span className="plan-launch">{plan.launch}</span>
                <span className="per">{plan.period}</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check size={15} strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                className="btn btn-primary btn-block btn-shine"
                href={waLink(plan.msg)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {plans.buttonLabel}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
