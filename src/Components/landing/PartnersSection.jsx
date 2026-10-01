import { ExternalLink } from "lucide-react";
import SectionIntro from "./SectionIntro";

const intro = {
  kicker: "PARTNERS / JANAKPUR TECH BOOTCAMP",
  titleLines: ["Organizations helping", "talent move forward."],
  accentLine: 1,
  text: "Our partners turn learning into access—through internships, mentorship, tools, opportunities, and community support.",
};

export default function PartnersSection({ partnerships, compact = false }) {
  return (
    <section className={`partners-section${compact ? " is-compact" : ""}`} id={compact ? "partners" : "current-partners"}>
      <SectionIntro section={intro} />
      <div className="partner-logo-grid">
        {partnerships.current.map(partner => {
          const initials = partner.name.split(" ").map(word => word[0]).join("").slice(0, 2).toUpperCase();
          const content = (
            <>
              <div className="partner-logo-frame">
                {partner.logo ? <img src={partner.logo} alt={`${partner.name} logo`} /> : <span className="partner-lettermark" aria-label={`${partner.name} temporary lettermark`}>{initials}</span>}
              </div>
              <div className="partner-card-copy">
                <span>{partner.category}</span>
                <h3>{partner.name}</h3>
                {!compact && <p>{partner.description}</p>}
                {!partner.logo && <small>{partner.status}</small>}
              </div>
              {partner.website && <ExternalLink className="partner-external" size={18} aria-hidden="true" />}
            </>
          );

          return partner.website
            ? <a className="partner-card" href={partner.website} target="_blank" rel="noreferrer" key={partner.id}>{content}</a>
            : <article className="partner-card" key={partner.id}>{content}</article>;
        })}
      </div>
      {compact && <a className="partners-page-link" href="/sponsorship">View partnership opportunities <ExternalLink size={16} /></a>}
    </section>
  );
}
