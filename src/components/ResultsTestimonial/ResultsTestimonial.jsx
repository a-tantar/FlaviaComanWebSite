import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./ResultsTestimonial.css";

const STATS = [
  { value: "+38%", label: "reddito medio dopo 6 mesi" },
  { value: "94%", label: "completa il percorso" },
  { value: "4.9/5", label: "valutazione media" },
];

const TESTIMONIAL = {
  quote:
    "Pensavo mi servisse un altro corso. Mi serviva una strategia. In tre mesi ho rinegoziato il contratto e aperto la mia prima entrata parallela.",
  name: "Giulia M.",
  role: "Marketing Manager",
};

export default function ResultsTestimonial() {
  const ref = useSectionAnim();
  return (
    <div ref={ref} className="results">
      <div className="results__inner">
        <div className="results__header" data-anim>
          <h2 className="results__title">
            Cosa cambia dopo
            <br />
            <em>90 giorni.</em>
          </h2>
        </div>

        <div className="results__stats" data-anim>
          {STATS.map(({ value, label }) => (
            <div key={label} className="results__stat">
              <div className="results__stat-value">{value}</div>
              <div className="results__stat-label">{label}</div>
            </div>
          ))}
        </div>

        <div className="results__testimonial" data-anim>
          <blockquote className="results__quote">
            &ldquo;{TESTIMONIAL.quote}&rdquo;
          </blockquote>
          <div className="results__testimonial-meta">
            <span className="results__testimonial-name">
              {TESTIMONIAL.name}
            </span>
            <span className="results__testimonial-role">
              {TESTIMONIAL.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
