import { useEffect, useState } from "react";
import { disableAnalytics, enableAnalytics } from "../../lib/analytics";
import "./CookieBanner.css";

const STORAGE_KEY = "fc_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setVisible(true);
    } else if (saved === "accepted") {
      enableAnalytics();
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    enableAnalytics();
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    disableAnalytics();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie" role="dialog" aria-label="Consenso cookie">
      <p className="cookie__text">
        Questo sito usa cookie analitici (Google Analytics) per migliorare
        l&apos;esperienza. Nessun dato personale senza consenso.{" "}
        <a href="/privacy-policy" className="cookie__link">
          Privacy Policy
        </a>
      </p>
      <div className="cookie__actions">
        <button
          className="btn cookie__btn cookie__btn--reject"
          onClick={reject}
        >
          Rifiuta
        </button>
        <button
          className="btn cookie__btn cookie__btn--accept"
          onClick={accept}
        >
          Accetta
        </button>
      </div>
    </div>
  );
}
