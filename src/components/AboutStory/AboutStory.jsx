import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./AboutStory.css";

const FACTS = [
  "200+ professionistə accompagnatə",
  "Specializzata in financial empowerment",
  "Italofona, lavoro da remoto in tutta Europa",
  "Approccio pragmatico — niente motivazione vuota",
];

export default function AboutStory({ isActive, isDesktop }) {
  const ref = useSectionAnim(isActive, isDesktop);

  return (
    <div ref={ref} className="about">
      <div className="section-inner about__inner">
        <div className="about__content">
          <div className="kicker" data-anim>
            <span className="kicker-dot" />
            Chi sono
          </div>

          <h2 data-anim>
            Sono Flavia.
            <br />
            <em>Ci sono passata.</em>
          </h2>

          <p className="about__text" data-anim>
            Per anni ho lavorato duramente senza vedere un riconoscimento
            economico proporzionale. Avevo le competenze. Avevo l'impegno. Ma
            non avevo il metodo.
          </p>

          <p className="about__text" data-anim>
            Ho studiato psicologia del denaro, strategie di carriera,
            negoziazione. Ho sperimentato su me stessa e poi su centinaia di
            persone. Il risultato è un percorso che funziona — non per caso, ma
            per costruzione.
          </p>

          <p className="about__text" data-anim>
            Oggi aiuto professionistə italofone a sbloccarsi.{" "}
            <strong>
              Non con motivazione vuota, ma con strategie concrete.
            </strong>
          </p>

          <ul className="about__facts" data-anim>
            {FACTS.map((fact) => (
              <li key={fact} className="about__fact">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="about__fact-icon"
                />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__visual" data-anim>
          <div className="about__photo-wrap">
            <div className="about__photo-placeholder">
              <span className="about__photo-initials">FC</span>
            </div>
            <div className="about__photo-badge">
              <span className="about__photo-badge-text">
                Financial Empowerment
                <br />
                Mentor
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
