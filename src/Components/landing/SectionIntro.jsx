import LineTitle from "./LineTitle";

export default function SectionIntro({ section, light = false }) {
  return (
    <div className={`section-intro${light ? " light" : ""}${section.text ? "" : " no-copy"}`}>
      <div className="section-intro-heading">
        <p className="section-kicker">{section.kicker}</p>
        <h2><LineTitle lines={section.titleLines} accentLine={section.accentLine} /></h2>
      </div>
      {section.text && <p className="section-intro-copy">{section.text}</p>}
    </div>
  );
}
