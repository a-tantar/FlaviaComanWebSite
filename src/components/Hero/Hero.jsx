import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./Hero.css";

const CALENDLY_URL = "https://calendly.com/flaviacoman/zoom";

export default function Hero() {
  const ref = useSectionAnim();
  return (
    <div ref={ref} className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__tag" data-anim>
              Mentoring · Indipendenza finanziaria
            </div>
            <h1 className="hero__title" data-anim>
              Niente sogni.
              <br />
              <em className="hero__title-em">Risultati.</em>
            </h1>
            <div className="hero__info-row" data-anim>
              <p className="hero__subtitle">
                Mentoring strategico per chi sa di valere di più del proprio
                stipendio — e vuole smettere di rimandare.
              </p>
              <div className="hero__meta-item">
                <span className="hero__meta-label">Per chi</span>
                <span className="hero__meta-value">
                  Persone tra 25 e 45 anni che si sentono bloccat* nel proprio
                  percorso.
                </span>
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-label">Formato</span>
                <span className="hero__meta-value">
                  Mentoring 1:1 in italiano. Online, su Zoom.
                </span>
              </div>
            </div>
            <div className="hero__actions" data-anim>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__cta-primary"
              >
                Prenota una consulenza gratuita →
              </a>
              <a href="#metodo" className="hero__cta-secondary">
                Scopri il metodo
              </a>
            </div>
          </div>
          <div className="hero__portrait" data-anim>
            <img
              src="/flavia.webp"
              alt="Flavia Coman — Mentor & Strategist"
              className="hero__portrait-img"
              width={450}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
