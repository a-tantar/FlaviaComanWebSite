import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./Method.css";

const CALENDLY_URL = "https://calendly.com/flaviacoman/zoom";

const STEPS = [
  {
    num: "1",
    title: "Audit",
    text: "Partiamo da te. Analizziamo risorse, competenze, blocchi e abitudini. Serve a smettere di girare in tondo e iniziare da un punto solido, reale, non ideale.",
  },
  {
    num: "2",
    title: "Skill Focus",
    text: "Individuiamo la competenza più adatta per iniziare a generare reddito nel breve. Non è questione di fare tutto, ma di usare bene ciò che hai già.",
  },
  {
    num: "3",
    title: "Direzione strategica chiara",
    text: "Ti aiuto a capire dove ha senso iniziare, con quali strumenti, e cosa lasciare fuori. Niente caos, niente mille strade: impari a scegliere con lucidità.",
  },
  {
    num: "4",
    title: "Cash-flow attivo",
    text: "Mettiamo in moto il sistema: attivi le prime entrate e impari a gestirle con lucidità. Ti insegno come reinvestire per crescere, non per tornare al punto di partenza.",
  },
  {
    num: "5",
    title: "Tempo riconquistato",
    text: "Automatizzi, deleghi, elimini ciò che non serve. Smetti di scambiare ore per euro e inizi a costruire indipendenza vera.",
  },
];

export default function Method() {
  const ref = useSectionAnim();
  return (
    <div ref={ref} className="method">
      <div className="method__inner">
        <div className="method__header" data-anim>
          <h2>
            Un percorso chiaro. Pensato per chi è pronto a fare sul serio.
          </h2>
          <p className="method__subtitle">
            Non ti do l&apos;ennesima teoria motivazionale.
            <br />
            Ti affianco passo dopo passo con un metodo che trasforma competenze
            e disciplina in reddito reale.
          </p>
        </div>
        <div className="method__grid" data-anim>
          {STEPS.map(({ num, title, text }) => (
            <div key={num} className="method__card">
              <h3 className="method__step-title">
                {num}. {title}
              </h3>
              <p className="method__step-text">{text}</p>
            </div>
          ))}
        </div>
        <div className="method__cta" data-anim>
          <p className="method__cta-text">
            Il mio lavoro non è motivarti.
            <br />
            <strong>
              È costruire insieme un sistema che ti porti risultati veri.
            </strong>
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Prenota una sessione gratuita
          </a>
        </div>
      </div>
    </div>
  );
}
