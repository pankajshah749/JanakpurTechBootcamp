import { ArrowDownRight, ArrowRight, CalendarDays } from "lucide-react";
import LineTitle from "./LineTitle";
import SmartLink from "./SmartLink";

export default function HeroSection({ hero }) {
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
      </div>
      <div className="proof-strip" aria-label="Bootcamp highlights">
        {hero.stats.map(item => <div key={item.value}><strong>{item.value}</strong><span><LineTitle lines={item.lines} /></span></div>)}
      </div>
    </section>
  );
}
