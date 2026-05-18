import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./AboutStory.css";

const FACTS = [
  "300+ persone affiancate in 4 anni di lavoro reale, non di teoria",
  "Attiva in Italia, Romania e Svizzera",
  "Zero promesse impossibili. Solo risultati che si misurano.",
  "Ho fallito. Più volte. Ecco perché so dove non portarti.",
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
            <em>Nessuno mi ha aperto le porte. Me le sono costruite.</em>
          </h2>

          <p className="about__text" data-anim>
            Niente capitali di partenza. Niente rete pronta. Niente papà nel
            settore. Ho iniziato come chiunque venga da me oggi: con più domande
            che risposte, e con la certezza che aspettare non era
            un&apos;opzione.
          </p>

          <p className="about__text" data-anim>
            In quattro anni ho affiancato più di 300 persone attraverso Italia,
            Romania e Svizzera. Persone che volevano cambiare lavoro. Che
            volevano capire come funzionano i soldi davvero. Che volevano
            smettere di dipendere da qualcuno. Ognuna con la sua storia, e con
            la stessa fame di cambiare.
          </p>

          <p className="about__text" data-anim>
            Non faccio coaching motivazionale. Non vendo corsi preregistrati.{" "}
            <strong>
              Ti do accesso al metodo che ho costruito su me stessa, poi testato
              su centinaia di persone reali.
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
            <img
              src="/Flavia-Coman-5.webp"
              alt="Flavia Coman, Consulente Finanziaria &amp; Financial Coach"
              className="about__photo-img"
              width={420}
              height={560}
            />
            <div className="about__photo-badge">
              <span className="about__cred-badge-dot" />
              <span className="about__cred-badge-text">
                Consulente Finanziaria &amp; Financial Coach
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
