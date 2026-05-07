import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./Hero.css";

const CALENDLY_URL = "https://calendly.com/flaviacoman/zoom";

export default function Hero() {
  const ref = useSectionAnim();
  return (
    <div ref={ref} className="hero">
      <div className="hero__inner">
        <div className="hero__image-col" data-anim>
          <div className="hero__image-wrap">
            <img
              src="/images/flavia-hero.png"
              alt="Flavia Coman"
              className="hero__photo"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
        <div className="hero__text-col">
          <h1 data-anim>
            La tua indipendenza
            <br />
            <span className="hero__accent">non è un sogno.</span>
            <br />È un sistema
          </h1>
          <p className="hero__subtitle" data-anim>
            <strong>Hai le potenzialità. Ti mancano solo le coordinate.</strong>
            <br />
            Ti insegno a trasformare competenze e disciplina in libertà
            finanziaria reale, misurabile e tua.
          </p>
          <div data-anim>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Prenota una consulenza gratuita
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
