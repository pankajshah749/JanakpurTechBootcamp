import { ArrowRight, CalendarDays, Code2 } from "lucide-react";
import LineTitle from "./LineTitle";
import SmartLink from "./SmartLink";
import iconMap from "./iconMap";

export default function FinalCtaSection({ finalCta }) {
  const FinalIcon = iconMap[finalCta.icon] || Code2;
  const startDate = finalCta.startDate;
  const deadline = finalCta.deadline;

  return (
    <section className="final-cta" id={finalCta.id}>
      <div className="cta-orbit"><FinalIcon size={34} /></div>
      <p className="section-kicker">{finalCta.kicker}</p>
      <h2><LineTitle lines={finalCta.titleLines} accentLine={finalCta.accentLine} accentElement="em" /></h2>
      <p>{finalCta.text}</p>

      {startDate && (
        <div className="cta-dates" role="group" aria-label="Important dates">
          <div className="cta-date cta-date--start" role="group" aria-label="Program start date">
            <div className="cta-date-card">
              <span className="cta-date-month">{startDate.month}</span>
              <strong className="cta-date-day">{startDate.day}</strong>
              <span className="cta-date-year">{startDate.year}</span>
            </div>
            <div className="cta-date-meta">
              <span className="cta-date-row">
                <CalendarDays size={16} aria-hidden="true" />
                <em>{startDate.weekday}, {startDate.month} {startDate.day}, {startDate.year}</em>
              </span>
              <span className="cta-date-label">Cohort starts</span>
            </div>
          </div>

          {deadline && (
            <div className="cta-date cta-date--deadline" role="group" aria-label="Application deadline">
              <div className="cta-date-card cta-date-card--deadline">
                <span className="cta-date-month">{deadline.month}</span>
                <strong className="cta-date-day">{deadline.day}</strong>
                <span className="cta-date-year">{deadline.year}</span>
              </div>
              <div className="cta-date-meta">
                <span className="cta-date-row cta-date-row--deadline">
                  <CalendarDays size={16} aria-hidden="true" />
                  <em>{deadline.weekday}, {deadline.month} {deadline.day}, {deadline.year}</em>
                </span>
                <span className="cta-date-label">Apply by</span>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="cta-action">
        <SmartLink href={finalCta.buttonHref}>{finalCta.buttonLabel} <ArrowRight size={21} /></SmartLink>
      </div>
    </section>
  );
}
