import {
  faArrowRight,
  faCalendarCheck,
  faCheckCircle,
  faClock,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./ConsultationCard.css";

const CALENDLY_URL = "https://calendly.com/flaviacoman/zoom";
const WHATSAPP_URL =
  "https://wa.me/393288174058?text=Ciao%20Flavia!%20Vorrei%20prenotare%20una%20consulenza%20gratuita.";

const WHAT_YOU_GET = [
  "Analizziamo la tua situazione attuale",
  "Identifichiamo i principali blocchi",
  "Ti spiego come funziona il percorso",
  "Rispondi a tutte le tue domande",
];

const META = [
  { icon: faVideo, text: "Su Zoom" },
  { icon: faClock, text: "30 minuti" },
  { icon: faCalendarCheck, text: "Senza impegno" },
];

export default function ConsultationCard({ isActive, isDesktop }) {
  const ref = useSectionAnim(isActive, isDesktop);

  return (
    <div ref={ref} className="consultation">
      <div className="section-inner consultation__inner">
        <div className="consultation__left" data-anim>
          <div className="kicker">
            <span className="kicker-dot" />
            Inizia qui
          </div>
          <h2>
            Inizia con una
            <br />
            <em>consulenza gratuita</em>
          </h2>
          <p className="consultation__desc">
            30 minuti su Zoom. Nessun impegno. Analizziamo la tua situazione e
            capisci subito se il percorso fa per te.
          </p>

          <div className="consultation__meta">
            {META.map(({ icon, text }) => (
              <div key={text} className="consultation__meta-item">
                <FontAwesomeIcon
                  icon={icon}
                  className="consultation__meta-icon"
                />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="consultation__card card" data-anim>
          <h3 className="consultation__card-title">Cosa succede nella call</h3>
          <ul className="consultation__list">
            {WHAT_YOU_GET.map((item) => (
              <li key={item} className="consultation__list-item">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="consultation__check"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="consultation__divider" />

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary consultation__btn-main"
          >
            Prenota su Calendly
            <FontAwesomeIcon icon={faArrowRight} />
          </a>

          <div className="consultation__or">
            <span>oppure</span>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp consultation__btn-wa"
          >
            Scrivimi su WhatsApp
          </a>

          <p className="consultation__footnote">
            Rispondo entro 24 ore · Gratuita · Su Zoom
          </p>
        </div>
      </div>
    </div>
  );
}
