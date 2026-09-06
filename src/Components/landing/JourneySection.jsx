import { useEffect, useRef, useState } from "react";
import SectionIntro from "./SectionIntro";

export default function JourneySection({ section }) {
  const items = section.items;
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const update = () => {
      const rect = track.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const triggerLine = viewportH * 0.55;
      const total = rect.height - viewportH + rect.top;
      const scrolled = Math.min(Math.max(triggerLine - rect.top, 0), Math.max(total, 1));
      const ratio = Math.min(scrolled / Math.max(total, 1), 1);
      setProgress(ratio);

      const cards = track.querySelectorAll("[data-milestone]");
      let nextActive = 0;
      cards.forEach((card, i) => {
        const r = card.getBoundingClientRect();
        if (r.top < viewportH * 0.6) nextActive = i;
      });
      setActiveIndex(nextActive);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="journey-section" id={section.id}>
      <SectionIntro section={section} light />

      <div className="journey-shell">
        <div className="journey-rail" aria-hidden="true">
          <span className="journey-rail-fill" style={{ transform: `scaleY(${progress})` }} />
        </div>

        <ol className="journey-track" ref={trackRef}>
          {items.map((item, index) => {
            const isCurrent = (item.kind || "").split(" ").includes("current");
            const baseKind = (item.kind || "").split(" ")[0];
            return (
              <li
                key={`${item.year}-${item.category}`}
                className={`journey-item ${baseKind}${isCurrent ? " current" : ""}${activeIndex >= index ? " is-revealed" : ""}`}
                data-milestone
              >
                <div className="journey-node">
                  <span className="journey-node-dot" />
                  <span className="journey-node-pulse" />
                  <em>{String(index + 1).padStart(2, "0")}</em>
                </div>

                <article className="journey-card">
                  <header className="journey-card-head">
                    <span className="journey-year">{item.year}</span>
                    <span className="journey-category">{item.category}</span>
                    {isCurrent && <span className="journey-live">Live now</span>}
                  </header>

                  <h3>{item.title}</h3>
                  <p className="journey-story">{item.story}</p>

                  <div className="journey-result">
                    <span>{item.resultLabel}</span>
                    <strong>{item.result}</strong>
                  </div>

                  <footer className="journey-card-foot">
                    <span>{item.meta}</span>
                    <small>{isCurrent ? "Currently in progress" : "Completed"}</small>
                  </footer>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
