import { useMemo, useState } from "react";
import { ExternalLink, Plus } from "lucide-react";
import siteData from "../../data/siteData.json";
import SectionIntro from "./SectionIntro";
import SmartLink from "./SmartLink";

const INITIAL_COUNT = 12;
const LOAD_STEP = 12;

export default function GallerySection() {
  const section = siteData.gallery;
  const filters = useMemo(() => [section.allLabel, ...new Set(section.items.map(item => item.category))], [section]);
  const [filter, setFilter] = useState(section.allLabel);
  const [shownCount, setShownCount] = useState(INITIAL_COUNT);
  const visible = filter === section.allLabel ? section.items : section.items.filter(item => item.category === filter);
  const shown = visible.slice(0, shownCount);
  const remaining = visible.length - shown.length;

  const selectFilter = next => {
    setFilter(next);
    setShownCount(INITIAL_COUNT);
  };

  const sizePatterns = ["tall", "wide", "square", "square", "wide", "square", "tall", "square"];

  return (
    <section className="gallery-section" id={section.id}>
      <SectionIntro section={section} light />
      <div className="gallery-filters" role="group" aria-label={section.filterAriaLabel}>
        {filters.map(item => <button key={item} className={filter === item ? "active" : ""} onClick={() => selectFilter(item)}>{item}</button>)}
      </div>
      <div className="gallery-grid">
        {shown.map((item, index) => (
          <figure className={`gallery-card gallery-${sizePatterns[index % sizePatterns.length]}`} key={`${item.image}-${filter}`}>
            <img src={item.image} alt="" loading="lazy" />
          </figure>
        ))}
      </div>
      {remaining > 0 && (
        <div className="gallery-load-more">
          <p className="gallery-count">Showing {shown.length} of {visible.length} photos</p>
          <button onClick={() => setShownCount(count => count + LOAD_STEP)}>
            Load more <Plus size={16} aria-hidden="true" />
          </button>
        </div>
      )}
      <SmartLink className="summit-link" href={section.summitLinkHref}>{section.summitLinkLabel} <ExternalLink size={18} /></SmartLink>
    </section>
  );
}
