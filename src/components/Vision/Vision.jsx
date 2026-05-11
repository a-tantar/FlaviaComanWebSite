import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./Vision.css";

const CALENDLY_URL = "https://calendly.com/flaviacoman/zoom";

export default function Vision() {
  const ref = useSectionAnim();
  return (
    <div ref={ref} className="vision">
      <div className="vision__inner">
        <div className="vision__label" data-anim>
          Visione
        </div>
        <h2 className="vision__title" data-anim>
          L&apos;indipendenza non è un lusso.
          <br />
          <em className="vision__title-em">È una decisione.</em>
        </h2>
        <p className="vision__body" data-anim>
          Non ti serve un altro corso da 99€. Ti serve qualcuno che ti dica la
          verità su dove sei e cosa fare. Una strategia, non una motivazione.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="vision__cta"
          data-anim
        >
          Prenota una sessione gratuita →
        </a>
      </div>
    </div>
  );
}
