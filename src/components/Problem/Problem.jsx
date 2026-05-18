import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./Problem.css";

const SYMPTOMS = [
  "Sai che il tuo stipendio non basta. Ma non sai da dove cominciare davvero.",
  "Hai letto libri, guardato video, seguito guru online. Sei ancora al punto di partenza.",
  "Il settore finanziario ti attira, ma ti sembra un mondo chiuso, riservato ad altri.",
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
              Non è una questione di impegno.{" "}
              <em className="problem__title-em">
                È una questione di direzione.
              </em>
            </h2>
          </div>
          <div className="problem__body-col" data-anim>
            <p className="problem__body">
              La maggior parte delle persone che vengono da me non ha un
              problema di motivazione. Ha un problema di metodo. Non sa come
              entrare nel settore finanziario, non sa come parlare con un
              cliente, non sa come costruire qualcosa che continua a funzionare
              anche quando smette di lavorare. Io sì. E te lo insegno.
            </p>
          </div>
        </div>
        <div className="problem__cards" data-anim>
          {SYMPTOMS.map((s, i) => (
            <div key={i} className="problem__card">
              <div className="problem__card-label">BLOCCO 0{i + 1}</div>
              <p className="problem__card-text">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
