import { useState } from "react";
import { ChevronDown } from "lucide-react";
import siteData from "../../data/siteData.json";
import SectionIntro from "./SectionIntro";

export default function FAQSection() {
  const section = siteData.faq;
  const items = section.items || [];
  const [active, setActive] = useState(0);

  if (items.length === 0) return null;

  return (
    <section className="faq-section" id={section.id}>
      <SectionIntro section={section} />

      <div className="faq-accordion" aria-label={section.kicker}>
        {items.map((item, index) => (
          <div key={item.question} className={`faq-row${index === active ? " open" : ""}`}>
            <button
              type="button"
              className="faq-row-trigger"
              aria-expanded={index === active}
              onClick={() => setActive(index === active ? -1 : index)}
            >
              <span className="faq-row-index">{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.question}</strong>
              <ChevronDown className="faq-row-arrow" size={20} aria-hidden="true" />
            </button>
            <div className="faq-row-panel" hidden={index !== active}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
