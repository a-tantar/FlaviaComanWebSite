import {
  faChevronLeft,
  faChevronRight,
  faQuoteLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./ResultsTestimonial.css";

const TESTIMONIALS = [
  {
    name: "Giulia M.",
    role: "Marketing Manager",
    result: "+40% stipendio",
    stars: 5,
    text: "Dopo 3 sessioni con Flavia ho rinegoziato il mio contratto e ottenuto un aumento del 40%. Pensavo fosse impossibile nel mio settore. Mi ha dato non solo la strategia, ma anche la fiducia per chiederlo davvero.",
  },
  {
    name: "Marco R.",
    role: "Software Developer",
    result: "Nuova offerta +25%",
    stars: 5,
    text: `Stavo per accettare l'ennesima offerta sottopagata. Il percorso con Flavia mi ha dato gli strumenti per dire no e negoziare da una posizione di forza. Ho trovato qualcosa di molto meglio.`,
  },
  {
    name: "Sara L.",
    role: "Designer Freelance",
    result: "Tariffe ×3 in 4 mesi",
    stars: 5,
    text: "Flavia non ti dà motivazione vuota. Ti dà un piano. Ho triplicato le mie tariffe in 4 mesi grazie al lavoro sul posizionamento e sulla comunicazione del mio valore. Consiglio a tuttə.",
  },
];

const STATS = [
  { value: "200+", label: "persone accompagnate" },
  { value: "+35%", label: "aumento medio di reddito" },
  { value: "4.9/5", label: "valutazione media" },
];

export default function ResultsTestimonial({ isActive, isDesktop }) {
  const ref = useSectionAnim(isActive, isDesktop);
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(null);
  const autoRef = useRef(null);

  const goNext = () => {
    setDir("next");
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  };
  const goPrev = () => {
    setDir("prev");
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-advance when section is active
  useEffect(() => {
    if (!isActive) {
      clearInterval(autoRef.current);
      return;
    }
    autoRef.current = setInterval(goNext, 5000);
    return () => clearInterval(autoRef.current);
  }, [isActive, current]);

  const t = TESTIMONIALS[current];

  return (
    <div ref={ref} className="results">
      <div className="section-inner results__inner">
        <div className="results__header section-header">
          <div className="kicker" data-anim>
            <span className="kicker-dot" />
            Risultati reali
          </div>
          <h2 data-anim>
            Storie di chi <em>ha già cambiato rotta</em>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="results__carousel" data-anim>
          <div className="results__card card">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="results__quote-icon"
            />
            <p className="results__text">{t.text}</p>
            <div className="results__meta">
              <div className="results__author">
                <div className="results__avatar">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <strong className="results__name">{t.name}</strong>
                  <span className="results__role">{t.role}</span>
                </div>
              </div>
              <div className="results__result-badge">{t.result}</div>
            </div>
            <div className="results__stars">
              {Array.from({ length: t.stars }).map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="results__star"
                />
              ))}
            </div>
          </div>

          <div className="results__controls">
            <button
              className="results__arrow"
              onClick={goPrev}
              aria-label="Precedente"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="results__dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`results__dot${i === current ? " results__dot--active" : ""}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Vai a testimonianza ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="results__arrow"
              onClick={goNext}
              aria-label="Successivo"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="results__stats" data-anim>
          {STATS.map(({ value, label }) => (
            <div key={label} className="results__stat">
              <span className="results__stat-value">{value}</span>
              <span className="results__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
