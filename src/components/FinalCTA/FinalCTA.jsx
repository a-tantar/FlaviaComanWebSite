import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { PopupModal } from "react-calendly";
import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./FinalCTA.css";

const CALENDLY_URL = "https://calendly.com/flaviacoman/zoom";
const WHATSAPP_URL = "https://wa.me/393288174058?text=Ciao%20Flavia!";
const INSTAGRAM_URL = "https://instagram.com/flaviacoman_";
const TIKTOK_URL = "https://tiktok.com/@flavia.coman";
const EMAIL = "flavia@flaviacoman.com";

export default function FinalCTA() {
  const ref = useSectionAnim();
  const [open, setOpen] = useState(false);
  return (
    <>
      <footer ref={ref} className="final">
        <div className="final__cta">
          <div className="final__cta-inner">
            <h2 className="final__heading" data-anim>
              Se sei arrivato fin qui,
              <br />
              non è per caso.
            </h2>
            <p className="final__sub" data-anim>
              Le persone che cambiano davvero non aspettano il momento perfetto.
              Prenotano la chiamata. È gratuita, dura 30 minuti e potrebbe
              essere il cambio di direzione che stai cercando.{" "}
              <strong>Inizia adesso.</strong>
            </p>
            <button
              onClick={() => setOpen(true)}
              className="btn btn-primary"
              data-anim
            >
              Prenota la chiamata →
            </button>
          </div>
        </div>

        <div className="final__footer">
          <div className="final__footer-inner">
            <div className="final__footer-logo">
              <span className="final__logo-name">Flavia Coman</span>
              <span className="final__logo-sub">
                Financial Coach &amp; Consulente
              </span>
            </div>
            <div className="final__footer-links">
              <a href={"mailto:" + EMAIL} className="final__footer-link">
                {EMAIL}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="final__footer-link"
              >
                WhatsApp
              </a>
              <a href="/privacy-policy" className="final__footer-link">
                Privacy Policy
              </a>
            </div>
            <div className="final__footer-social">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="final__social-link"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="final__social-link"
                aria-label="TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </div>
          <p className="final__copyright">
            © {new Date().getFullYear()} Flavia Coman. Tutti i diritti
            riservati.
          </p>
        </div>
      </footer>
      <PopupModal
        url={CALENDLY_URL}
        open={open}
        onModalClose={() => setOpen(false)}
        rootElement={document.body}
      />
    </>
  );
}
