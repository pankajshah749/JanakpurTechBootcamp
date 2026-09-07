import { Layers3 } from "lucide-react";
import SectionIntro from "./SectionIntro";
import iconMap from "./iconMap";

export default function AdvantagesSection({ advantages }) {
  return (
    <section className="advantages-section" id={advantages.id}>
      <SectionIntro section={advantages} />
      <div className="advantage-grid">
        {advantages.items.map(item => {
          const Icon = iconMap[item.icon] || Layers3;
          return <article key={item.number} data-index={item.number}><div><span>{item.number}</span><Icon size={25} /></div><h3>{item.title}</h3><p>{item.text}</p></article>;
        })}
      </div>
    </section>
  );
}
