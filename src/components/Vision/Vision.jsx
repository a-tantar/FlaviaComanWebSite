import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./Vision.css";

const CALENDLY_URL = "https://calendly.com/flaviacoman/zoom";

export default function Vision() {
  const ref = useSectionAnim();
  return (
    <div ref={ref} className="vision">
      <div className="vision__inner">
        <div className="vision__image-col" data-anim>
          <img
            src="/images/flavia-vision.jpg"
            alt="Flavia Coman"
            className="vision__photo"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div className="vision__text-col">
          <h2 data-anim>
            La mia visione è semplice: la libertà è un diritto. Ma va costruita.
          </h2>
          <p data-anim>
            <strong>Credo che</strong> ognuno abbia la capacità di guadagnarsi
            una libertà finanziaria vera — non per fortuna, ma grazie a metodo,
            disciplina e chiarezza.
          </p>
          <p data-anim>
            <strong>Credo che</strong> il denaro sia uno strumento. E che
            imparare a usarlo bene sia una delle forme più potenti di rispetto
            verso se stessi.
          </p>
          <p data-anim>
            <strong>Credo che</strong> nessuno debba restare bloccato per
            mancanza di guida. Serve qualcuno che ti mostri il percorso — non
            che lo percorra al posto tuo.
          </p>
          <p data-anim>
            Per questo esisto: per aiutare persone ambiziose che hanno già le
            basi, ma non riescono a fare il salto.
          </p>
          <div data-anim>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Parliamone subito!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
