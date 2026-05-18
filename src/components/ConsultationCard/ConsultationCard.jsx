import {
  faArrowRight,
  faCalendarCheck,
  faCheckCircle,
  faClock,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { PopupModal } from "react-calendly";
import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./ConsultationCard.css";

const CALENDLY_URL = "https://calendly.com/flaviacoman/zoom";
const WHATSAPP_URL =
  "https://wa.me/393288174058?text=Ciao%20Flavia!%20Sono%20interessatə%20al%20coaching%20finanziario%20e%20vorrei%20prenotare%20una%20consulenza%20gratuita.";

const WHAT_YOU_GET = [
  "Mi dici dove sei oggi e dove vuoi essere tra un anno",
  "Ti do una lettura onesta della tua situazione, senza filtri né edulcoranti",
  "Capiamo insieme se questo percorso è giusto per te",
  "Zero pressione. Zero vendita forzata. Parola.",
];

const META = [
  { icon: faVideo, text: "Su Zoom" },
  { icon: faClock, text: "30 minuti" },
  { icon: faCalendarCheck, text: "Senza impegno" },
];

export default function ConsultationCard({ isActive, isDesktop }) {
  const ref = useSectionAnim(isActive, isDesktop);
  const [open, setOpen] = useState(false);

  return (
    <div ref={ref} className="consultation">
      <div className="section-inner consultation__inner">
        <div className="consultation__left" data-anim>
          <div className="kicker">
            <span className="kicker-dot" />
            Inizia qui
          </div>
          <h2>
            Una conversazione.
            <br />
            <em>Poi decidi tu.</em>
          </h2>
          <p className="consultation__desc">
            Non è una presentazione commerciale. È una diagnosi onesta: mi dici
            dove sei, io ti dico cosa vedo e cosa si può fare. Se non fa per te,
            te lo dico io per prima, senza imbarazzo e senza perdere il tuo
            tempo.
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
          <h3 className="consultation__card-title">
            Cosa succede durante la call
          </h3>
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

          <button
            onClick={() => setOpen(true)}
            className="btn btn-primary consultation__btn-main"
          >
            Prenota su Calendly
            <FontAwesomeIcon icon={faArrowRight} />
          </button>

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
      <PopupModal
        url={CALENDLY_URL}
        open={open}
        onModalClose={() => setOpen(false)}
        rootElement={document.body}
      />
    </div>
  );
}
