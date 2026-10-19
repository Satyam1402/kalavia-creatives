"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import site from "@/data/site";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

export default function FAQ() {
  const { faq } = site;
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((cur) => (cur === i ? null : i));

  return (
    <section id="faq">
      <div className="container">
        <SectionHead eyebrow={faq.eyebrow} title={faq.heading} />

        <Reveal className="faq-list">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={"faq-item" + (isOpen ? " open" : "")} key={item.q}>
                <button
                  className="faq-q"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <Plus size={20} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${i}`}
                      className="faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="faq-a-inner">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
