import {
  faBullhorn,
  faChartLine,
  faCoins,
  faGlobe,
  faHandshake,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./Skills.css";

const SKILLS = [
  {
    icon: faUsers,
    title: "Leadership & Duplicazione",
    desc: "Come costruire un team nel settore finanziario che funziona senza che tu debba gestire tutto. Il tuo tempo libero inizia qui, non alla fine del percorso.",
  },
  {
    icon: faChartLine,
    title: "Investire con Intelligenza",
    desc: "Diversificazione, ETF, prodotti accessibili. Non per diventare un trader: per far lavorare il tuo denaro mentre tu fai altro.",
  },
  {
    icon: faCoins,
    title: "Reddito Ricorrente",
    desc: "Da singola transazione a flusso continuo. Costruiamo insieme il sistema che ti paga anche quando sei offline.",
  },
  {
    icon: faHandshake,
    title: "Consulenza che Converte",
    desc: "Comprendi i bisogni reali del cliente. Proponi soluzioni con autorità. Chiudi senza dover ‘vendere’ nel senso che tutti odiano.",
  },
  {
    icon: faBullhorn,
    title: "Presenza Digitale che Attrae",
    desc: "Su Instagram, TikTok e LinkedIn diventi il punto di riferimento che le persone giuste cercano già. Basta cold calling.",
  },
  {
    icon: faGlobe,
    title: "Acquisizione & Chiusura Etica",
    desc: "Script che funzionano, gestione delle obiezioni, chiusura senza pressione. Converti conversazioni in clienti e collaboratori reali.",
  },
];

export default function Skills({ isActive, isDesktop }) {
  const ref = useSectionAnim(isActive, isDesktop);

  return (
    <div ref={ref} className="skills">
      <div className="section-inner">
        <div className="section-header">
          <div className="kicker" data-anim>
            <span className="kicker-dot" />
            L&apos;arsenale
          </div>
          <h2 data-anim>
            Le sei leve che costruiscono <em>indipendenza</em>
          </h2>
        </div>

        <div className="skills__grid">
          {SKILLS.map(({ icon, title, desc }) => (
            <div key={title} className="card skills__card" data-anim>
              <div className="skills__icon-wrap">
                <FontAwesomeIcon icon={icon} className="skills__icon" />
              </div>
              <div>
                <h3 className="skills__title">{title}</h3>
                <p className="skills__desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
