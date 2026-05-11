import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./Method.css";

const STEPS = [
  {
    num: "01",
    phase: "SETT. 1",
    category: "DIAGNOSI",
    title: "Posizionamento attuale",
    text: "Mappiamo dove sei davvero — competenze, entrate, vincoli, e ciò che ti tiene ferm*.",
  },
  {
    num: "02",
    phase: "SETT. 2",
    category: "VISIONE",
    title: "Obiettivo a 12 mesi",
    text: "Definiamo un risultato finanziario concreto, misurabile, non un\u2019aspirazione vaga.",
  },
  {
    num: "03",
    phase: "SETT. 3\u20134",
    category: "STRATEGIA",
    title: "Leva personale",
    text: "Identifichiamo la leva che monetizza ciò che già sai fare — senza rivoluzioni inutili.",
  },
  {
    num: "04",
    phase: "MESE 2",
    category: "ESECUZIONE",
    title: "Piano operativo",
    text: "Costruiamo un sistema di azioni settimanali, con metriche e revisioni.",
  },
  {
    num: "05",
    phase: "MESE 3+",
    category: "INDIPENDENZA",
    title: "Consolidamento",
    text: "Trasformiamo i primi risultati in una struttura di entrate sostenibile e replicabile.",
  },
];

export default function Method() {
  const ref = useSectionAnim();
  return (
    <div ref={ref} className="method">
      <div className="method__inner">
        <div className="method__header" data-anim>
          <div className="method__label">Il metodo · 5 step</div>
          <h2 className="method__title">
            Cinque step. <em className="method__title-em">Zero scorciatoie.</em>
          </h2>
          <p className="method__subtitle">
            Un percorso costruito su strategia, non su motivazione.
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
