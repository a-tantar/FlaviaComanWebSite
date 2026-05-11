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
          <h2 className="final__heading" data-anim>
            Se sei arrivatə fin qui,
            <br />
            forse non ti serve un altro contenuto.
          </h2>
          <p className="final__sub" data-anim>
            Ti serve qualcuno che ti aiuti a fare chiarezza, tracciare il
            percorso e partire davvero.{" "}
            <strong>La prima chiamata è gratuita. Senza impegno.</strong>
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            data-anim
          >
            Prenota ora la chiamata
          </a>
        </div>
      </div>

      <div className="final__footer">
        <div className="final__footer-inner">
          <div className="final__footer-logo">
            <span className="final__logo-name">Flavia Coman</span>
            <span className="final__logo-sub">Mentor &amp; Strategist</span>
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
          © {new Date().getFullYear()} Flavia Coman. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
