import { ArrowDownRight, ArrowRight, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import LineTitle from "./LineTitle";
import SmartLink from "./SmartLink";

const SLOTS = 4;

export default function HeroSection({ hero }) {
  const photos = hero.gallery || [];
  const [slots, setSlots] = useState(() => photos.slice(0, SLOTS).map((_, i) => i));

  useEffect(() => {
    if (photos.length <= SLOTS || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let tick = 0;
    const id = setInterval(() => {
      // Swap one slot at a time (round-robin) to the next photo not currently on screen.
      setSlots(current => {
        const next = [...current];
        let candidate = (Math.max(...current) + 1) % photos.length;
        while (current.includes(candidate)) candidate = (candidate + 1) % photos.length;
        next[tick % SLOTS] = candidate;
        tick += 1;
        return next;
      });
    }, 3200);
    return () => clearInterval(id);
  }, [photos.length]);

  return (
    <section className="hero-section">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span /> {hero.badge}</div>
          <h1><LineTitle lines={hero.headline} accentLine={hero.accentLine} accentElement="em" /></h1>
          <p className="hero-lede">{hero.description}</p>
          <div className="hero-actions">
            <SmartLink className="primary-action" href={hero.primaryCta.href}>{hero.primaryCta.label} <ArrowRight size={20} /></SmartLink>
            <SmartLink className="text-action" href={hero.secondaryCta.href}>{hero.secondaryCta.label} <ArrowDownRight size={19} /></SmartLink>
          </div>
          <div className="hero-badges">
            {hero.startDate && (
              <div className="hero-date-chip" aria-label="Program start date">
                <CalendarDays size={14} aria-hidden="true" />
                <span>Cohort starts <strong>{hero.startDate.month} {hero.startDate.day}</strong></span>
              </div>
            )}
            {hero.deadline && (
              <div className="hero-deadline-chip" aria-label="Application deadline">
                <span>Applications close <strong>{hero.deadline.month} {hero.deadline.day}</strong></span>
              </div>
            )}
          </div>
        </div>
        {photos.length > 0 && (
          <div className="hero-collage" aria-label="Success moments">
            {slots.map((photoIndex, slot) => {
              const photo = photos[photoIndex];
              return (
                <figure key={slot} className={`hero-photo hero-photo--${slot + 1}`}>
                  <img key={photo.src} src={photo.src} alt={photo.alt} loading={slot === 0 ? "eager" : "lazy"} />
                  {photo.label && <figcaption key={`${photo.src}-c`}>{photo.label}</figcaption>}
                </figure>
              );
            })}
            <div className="hero-collage-badge"><strong>10+</strong><span>projects shipped</span></div>
          </div>
        )}
      </div>
      <div className="proof-strip" aria-label="Bootcamp highlights">
        {hero.stats.map(item => <div key={item.value}><strong>{item.value}</strong><span><LineTitle lines={item.lines} /></span></div>)}
      </div>
    </section>
  );
}
