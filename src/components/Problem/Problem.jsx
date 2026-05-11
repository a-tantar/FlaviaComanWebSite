import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./Problem.css";

const SYMPTOMS = [
  "Senti che il tuo stipendio non rispecchia il tuo valore.",
  "Hai competenze, ma non sai come monetizzarle davvero.",
  "Sei stanc* di seguire chi vende sogni, e non metodo.",
];

export default function Problem() {
  const ref = useSectionAnim();
  return (
    <div ref={ref} className="problem">
      <div className="problem__inner">
        <div className="problem__label" data-anim>
          Il punto
        </div>
        <div className="problem__layout">
          <div className="problem__title-col" data-anim>
            <h2 className="problem__title">
              Il problema non sei tu. È che nessuno ti ha mai dato una{" "}
              <em className="problem__title-em">strategia.</em>
            </h2>
          </div>
          <div className="problem__body-col" data-anim>
            <p className="problem__body">
              Il problema non sei tu. È che nessuno ti ha mai dato una
              strategia. Solo informazioni sparse, promesse, e l&apos;ennesimo
              PDF che resta nei download.
            </p>
          </div>
        </div>
        <div className="problem__cards" data-anim>
          {SYMPTOMS.map((s, i) => (
            <div key={i} className="problem__card">
              <div className="problem__card-label">SINTOMO 0{i + 1}</div>
              <p className="problem__card-text">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
