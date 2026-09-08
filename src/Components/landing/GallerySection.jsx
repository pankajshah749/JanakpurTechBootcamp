import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import siteData from "../../data/siteData.json";
import SectionIntro from "./SectionIntro";
import SmartLink from "./SmartLink";

export default function GallerySection() {
  const section = siteData.gallery;
  const filters = useMemo(() => [section.allLabel, ...new Set(section.items.map(item => item.category))], [section]);
  const [filter, setFilter] = useState(section.allLabel);
  const visible = filter === section.allLabel ? section.items : section.items.filter(item => item.category === filter);

  const sizePatterns = ["tall", "wide", "square", "square", "wide", "square", "tall", "square"];

  return (
    <section className="gallery-section" id={section.id}>
      <SectionIntro section={section} light />
      <div className="gallery-filters" role="group" aria-label={section.filterAriaLabel}>
        {filters.map(item => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <div className="gallery-grid">
        {visible.map((item, index) => (
          <figure className={`gallery-card gallery-${sizePatterns[index % sizePatterns.length]}`} key={`${item.image}-${filter}`}>
            <img src={item.image} alt="" loading="lazy" />
          </figure>
        ))}
      </div>
      <SmartLink className="summit-link" href={section.summitLinkHref}>{section.summitLinkLabel} <ExternalLink size={18} /></SmartLink>
    </section>
  );
}
