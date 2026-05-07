import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./FinalCTA.css";

const CALENDLY_URL = "https://calendly.com/flaviacoman/zoom";
const WHATSAPP_URL = "https://wa.me/393288174058?text=Ciao%20Flavia!";
const INSTAGRAM_URL = "https://instagram.com/flaviacoman_";
const TIKTOK_URL = "https://tiktok.com/@flavia.coman";
const EMAIL = "flavia@flaviacoman.com";

export default function FinalCTA() {
  const ref = useSectionAnim();
  return (
    <footer ref={ref} className="final">
      <div className="final__cta">
        <div className="final__cta-inner">
          <div className="final__card" data-anim>
            <div className="final__card-avatar">FC</div>
            <p className="final__card-name">Flavia Coman</p>
            <p className="final__card-role">Financial Empowerment Mentor</p>
            <hr className="final__card-divider" />
            <p className="final__card-detail">Consulenza di 30 minuti</p>
            <p className="final__card-detail">In videocall</p>
          </div>
          <div className="final__text-col" data-anim>
            <h2 className="final__heading">
              Se sei arrivatə fin qui,
              <br />
              forse non ti serve un altro contenuto.
            </h2>
            <p className="final__sub">
              Ti serve qualcuno che ti aiuti a fare chiarezza, tracciare il
              percorso e partire davvero.
              <br />
              <strong>La prima chiamata è gratuita. Senza impegno.</strong>
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary final__cta-btn"
            >
              PRENOTA ORA LA CHIAMATA
            </a>
          </div>
        </div>
      </div>
      <div className="final__footer">
        <div className="final__footer-inner">
          <div className="final__footer-logo">
            <div className="final__logo-stack">
              <span>FLAVIA</span>
              <span>COMAN</span>
            </div>
            <span className="final__logo-sub">
              Financial Empowerment Mentor
            </span>
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
          <div className="final__footer-info">
            <p className="final__footer-info-title">Informazioni</p>
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
        </div>
        <p className="final__copyright">
          © {new Date().getFullYear()} Flavia Coman. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
