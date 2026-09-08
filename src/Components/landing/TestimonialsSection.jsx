import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight, Quote } from "lucide-react";
import SectionIntro from "./SectionIntro";

export default function TestimonialsSection({ section }) {
  const items = section.items || [];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (items.length <= 1 || paused) return undefined;
    const id = setInterval(() => setActive(prev => (prev + 1) % items.length), 6500);
    return () => clearInterval(id);
  }, [items.length, paused]);

  if (items.length === 0) return null;

  const featured = items[active];
  // Show only 3 side cards (circular) so the right pane never grows with total count
  const sideItems =
    items.length > 1
      ? Array.from({ length: Math.min(3, items.length - 1) }, (_, k) => items[(active + 1 + k) % items.length])
      : [];

  return (
    <section
      className="testimonials-section"
      id={section.id}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <SectionIntro section={section} />

      <div className="testimonials-shell">
        <div className="testimonial-feature" aria-live="polite">
          <div className="testimonial-feature-stage">
            {items.map((item, i) => (
              <article
                key={item.name}
                className={`testimonial-feature-slide${i === active ? " is-active" : ""}`}
                aria-hidden={i === active ? "false" : "true"}
              >
                <Quote className="testimonial-feature-quote" size={44} aria-hidden="true" />
                <blockquote>“{item.quote}”</blockquote>
                <footer>
                  <span className="testimonial-avatar" aria-hidden="true">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.role}</small>
                  </div>
                  <span className="testimonial-feature-count">
                    <em>{String(i + 1).padStart(2, "0")}</em>
                    <i>/ {String(items.length).padStart(2, "0")}</i>
                  </span>
                </footer>
              </article>
            ))}
          </div>
          <span className="testimonial-feature-sr">Current testimonial from {featured.name}: "{featured.quote}"</span>
        </div>

        {sideItems.length > 0 && (
          <aside className="testimonial-side">
            <ul className="testimonial-list" aria-label="Other student voices">
              {sideItems.map(item => (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => setActive(items.findIndex(i => i.name === item.name))}
                    aria-label={`Show testimonial from ${item.name}`}
                  >
                    <span className="testimonial-avatar small" aria-hidden="true">
                      {item.name.charAt(0)}
                    </span>
                    <div>
                      <strong>{item.name}</strong>
                      <small>{item.role}</small>
                    </div>
                    <p>“{item.quote.length > 110 ? `${item.quote.slice(0, 110)}…` : item.quote}”</p>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {items.length > 1 && (
          <div className="testimonial-controls" role="group" aria-label="Testimonial navigation">
            <button
              type="button"
              onClick={() => setActive(prev => (prev - 1 + items.length) % items.length)}
              aria-label="Previous testimonial"
            >
              <ArrowDownRight size={18} style={{ transform: "rotate(180deg)" }} />
            </button>
            <div className="testimonial-dots">
              {items.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  className={i === active ? "active" : ""}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setActive(prev => (prev + 1) % items.length)}
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
