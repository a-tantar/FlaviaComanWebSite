import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./Method.css";

const STEPS = [
  {
    num: "01",
    phase: "SETT. 1",
    category: "VALUTAZIONE",
    title: "Analisi del tuo profilo finanziario",
    text: "Mappiamo le tue competenze, la tua rete professionale e il tuo posizionamento ideale nel mercato della consulenza finanziaria e degli investimenti.",
  },
  {
    num: "02",
    phase: "SETT. 2",
    category: "FORMAZIONE",
    title: "Fondamenta di consulenza finanziaria",
    text: "Ti fornisco le basi solide: prodotti finanziari, investimenti, linguaggio del settore. Parli con autorevolezza sin dall'inizio.",
  },
  {
    num: "03",
    phase: "SETT. 3–4",
    category: "ACQUISIZIONE",
    title: "Clienti e relazioni professionali",
    text: "Definiamo il tuo sistema di acquisizione, le tue prime conversazioni efficaci e come costruire relazioni professionali solide e durature.",
  },
  {
    num: "04",
    phase: "MESE 2",
    category: "CRESCITA",
    title: "Scalare la tua attività",
    text: "Costruiamo un sistema replicabile che ti permette di crescere in autonomia, delegare con fiducia e far lavorare il sistema per te.",
  },
  {
    num: "05",
    phase: "MESE 3+",
    category: "RENDITA PASSIVA",
    title: "Investimenti e libertà",
    text: "Trasformiamo i ricavi ricorrenti e le commissioni in un portafoglio diversificato. Da professionista finanziario a persona economicamente libera.",
  },
];

export default function Method() {
  const ref = useSectionAnim();
  return (
    <div ref={ref} className="method">
      <div className="method__inner">
        <div className="method__header" data-anim>
          <div className="method__label">Il metodo · 5 movimenti</div>
          <h2 className="method__title">
            Non è un corso.{" "}
            <em className="method__title-em">
              È l&apos;ingegneria della tua indipendenza.
            </em>
          </h2>
          <p className="method__subtitle">
            Niente teoria vuota. Ogni step ha un risultato misurabile, e io sono
            lì per assicurarmi che lo raggiungi davvero.
          </p>
        </div>

        <div className="method__table" data-anim>
          {STEPS.map(({ num, phase, category, title, text }) => (
            <div key={num} className="method__row">
              <div className="method__row-num">{num}</div>
              <div className="method__row-mid">
                <div className="method__row-category">{category}</div>
                <div className="method__row-title">{title}</div>
              </div>
              <p className="method__row-text">{text}</p>
              <div className="method__row-phase">{phase}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
