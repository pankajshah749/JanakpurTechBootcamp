import { useState } from "react";
import { Braces, Check, TerminalSquare } from "lucide-react";
import siteData from "../../data/siteData.json";
import SectionIntro from "./SectionIntro";
import iconMap from "./iconMap";

export default function CurriculumSection() {
  const [active, setActive] = useState(0);
  const section = siteData.curriculum;
  const item = section.months[active];
  const Icon = iconMap[item.icon] || Braces;

  return (
    <section className="curriculum-section" id={section.id}>
      <SectionIntro section={section} />
      <div className="curriculum-shell">
        <div className="curriculum-tabs" role="tablist" aria-label={section.tabsAriaLabel}>
          {section.months.map((entry, index) => (
            <button key={entry.month} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
              <span>{String(index + 1).padStart(2, "0")}</span>{entry.month}
            </button>
          ))}
        </div>
        <div className="curriculum-panel" role="tabpanel">
          <div className="curriculum-overview">
            <div className="curriculum-icon"><Icon size={32} /></div>
            <p className="mono-label">{item.weeks}</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </div>
          <div className="topic-list">
            {item.topics.map((topic, index) => (
              <div key={topic}><span>{String(index + 1).padStart(2, "0")}</span><p>{topic}</p><Check size={17} /></div>
            ))}
          </div>
          <div className="deliverable"><span><TerminalSquare size={19} /> {section.deliverableLabel}</span><strong>{item.deliverable}</strong></div>
        </div>
      </div>
      <div className="duration-strip" aria-label="Program duration">
        <span>{section.durationBadge}</span>
        <em>{section.durationDetail}</em>
      </div>
    </section>
  );
}
