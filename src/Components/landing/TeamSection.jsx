import { ArrowRight } from "lucide-react";
import SectionIntro from "./SectionIntro";

export default function TeamSection({ section }) {
  const members = section.members || [];

  if (members.length === 0) return null;

  return (
    <section className="team-section" id={section.id}>
      <SectionIntro section={section} light />

      <div className="team-directory">
        {members.map((member, index) => (
          <article
            key={member.name}
            className={`team-row${index % 2 ? " is-flipped" : ""}`}
            aria-label={`${member.name}, ${member.role}`}
          >
            <div className="team-row-rail">
              <span className="team-row-index">{String(index + 1).padStart(3, "0")}</span>
              <div className="team-row-meta">
                <span className="team-role">{member.role}</span>
                <h3>{member.name}</h3>
              </div>
            </div>

            <div className="team-row-content">
              <div className="team-row-image">
                {member.image ? (
                  <img src={member.image} alt={member.name} loading="lazy" />
                ) : (
                  <span className="team-row-initial" aria-hidden="true">
                    {member.name.charAt(0)}
                  </span>
                )}
                <span className="team-row-badge">TEAM</span>
              </div>
              <div className="team-row-body">
                <p>{member.bio}</p>
                <ul className="team-row-tags">
                  {(member.tags || member.role.split("&").map(t => t.trim())).slice(0, 3).map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <footer>
                  <span>Member {String(index + 1).padStart(2, "0")} of {String(members.length).padStart(2, "0")}</span>
                  <a href={`mailto:${member.email || "janakpurtechbootcamp@gmail.com"}`}>
                    Get in touch <ArrowRight size={15} />
                  </a>
                </footer>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
