import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./Problem.css";

const LEFT_ITEMS = [
  "Non sei tu. È il metodo che ti manca.",
  "Hai studiato, letto, provato.",
  "Ma più impari, più ti senti bloccato.",
  "Dentro di te c'è fame di libertà, ma nessuna guida vera.",
];

const SELF_TALK = [
  '"Non riesco a essere costante"',
  '"E se fallisco e mi espongo?"',
  '"Ho troppe idee, ma nessun piano"',
];

export default function Problem() {
  const ref = useSectionAnim();
  return (
    <div ref={ref} className="problem">
      <div className="problem__inner">
        <div className="problem__header" data-anim>
          <h2>
            Il problema non sei tu.
            <br />È la mancanza di un metodo
          </h2>
        </div>
        <div className="problem__body" data-anim>
          <div className="problem__left">
            {LEFT_ITEMS.map((item) => (
              <p key={item} className="problem__statement">
                <strong>{item}</strong>
              </p>
            ))}
          </div>
          <div className="problem__right">
            <p className="problem__self-talk-label">Forse ti sei detto:</p>
            <ul className="problem__self-talk">
              {SELF_TALK.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="problem__footer" data-anim>
          <h3 className="problem__footer-title">
            Non hai bisogno di altra motivazione!
          </h3>
          <h3 className="problem__footer-sub">
            Hai bisogno di un metodo che ti porta a risultati veri
          </h3>
        </div>
      </div>
    </div>
  );
}
