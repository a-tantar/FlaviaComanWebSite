import {
  faArrowRightArrowLeft,
  faBullhorn,
  faCalendarCheck,
  faCoins,
  faHandshake,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./Skills.css";

const SKILLS = [
  {
    icon: faHandshake,
    title: "Negoziazione Stipendiale",
    desc: "Tecniche pratiche per chiedere un aumento o rinegoziare il contratto con sicurezza e risultati concreti.",
  },
  {
    icon: faBullhorn,
    title: "Personal Branding",
    desc: "Come posizionarti nel mercato: LinkedIn, comunicazione del valore, presenza digitale che converte.",
  },
  {
    icon: faArrowRightArrowLeft,
    title: "Transizione di Carriera",
    desc: "Strategia su misura per cambiare settore, ruolo o modalità lavorativa senza perdere reddito.",
  },
  {
    icon: faPiggyBank,
    title: "Mindset Finanziario",
    desc: "Lavoro sulle credenze limitanti legate al denaro e al proprio valore che ti impediscono di chiedere di più.",
  },
  {
    icon: faCoins,
    title: "Freelancing & Tariffe",
    desc: `Come strutturare l'offerta, comunicare il valore e negoziare con i clienti per tariffe che riflettono le competenze.`,
  },
  {
    icon: faCalendarCheck,
    title: "Career Planning",
    desc: `Piano d'azione a 6-12 mesi con obiettivi misurabili, milestone chiare e accountability reale.`,
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
            Le competenze
          </div>
          <h2 data-anim>
            Su cosa lavoriamo <em>insieme</em>
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
