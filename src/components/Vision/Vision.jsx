import { useState } from "react";
import { PopupModal } from "react-calendly";
import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./Vision.css";

const CALENDLY_URL = "https://calendly.com/flaviacoman/zoom";

export default function Vision() {
  const ref = useSectionAnim();
  const [open, setOpen] = useState(false);
  return (
    <div ref={ref} className="vision">
      <div className="vision__inner">
        {/* ─── Label row + extending rule ───────────── */}
        <div className="vision__label-row" data-anim>
          <span className="vision__label">La filosofia</span>
          <span className="vision__label-rule" aria-hidden="true" />
        </div>

        {/* ─── Main: large title left · SVG right ──────── */}
        <div className="vision__main">
          <h2 className="vision__title" data-anim>
            La consulenza finanziaria
            <br />
            non è un lavoro.
            <br />
            <em className="vision__title-em">
              È il meccanismo
              <br />
              che ti compra il tempo.
            </em>
          </h2>

          {/* Animated asset flywheel schema */}
          <div className="vision__schema" aria-hidden="true">
            <svg viewBox="0 0 320 280" className="vision__schema-svg">
              <defs>
                <marker
                  id="vis-arrow"
                  markerWidth="5"
                  markerHeight="5"
                  refX="4"
                  refY="2.5"
                  orient="auto"
                >
                  <path d="M0,0 L5,2.5 L0,5 Z" fill="rgba(214,167,122,0.6)" />
                </marker>
              </defs>
              <circle
                cx="160"
                cy="150"
                r="105"
                fill="none"
                stroke="rgba(214,167,122,0.14)"
                strokeWidth="1"
                strokeDasharray="5 9"
                className="vision__orbit"
              />
              <circle
                cx="160"
                cy="150"
                r="62"
                fill="none"
                stroke="rgba(214,167,122,0.09)"
                strokeWidth="1"
                className="vision__pulse-a"
              />
              <circle
                cx="160"
                cy="150"
                r="74"
                fill="none"
                stroke="rgba(214,167,122,0.05)"
                strokeWidth="1"
                className="vision__pulse-b"
              />
              <line
                x1="160"
                y1="104"
                x2="160"
                y2="81"
                stroke="rgba(214,167,122,0.5)"
                strokeWidth="1.5"
                strokeDasharray="26"
                strokeLinecap="round"
                markerEnd="url(#vis-arrow)"
                className="vision__conn vision__conn--1"
              />
              <line
                x1="199"
                y1="173"
                x2="220"
                y2="186"
                stroke="rgba(214,167,122,0.5)"
                strokeWidth="1.5"
                strokeDasharray="26"
                strokeLinecap="round"
                markerEnd="url(#vis-arrow)"
                className="vision__conn vision__conn--2"
              />
              <line
                x1="121"
                y1="173"
                x2="100"
                y2="186"
                stroke="rgba(214,167,122,0.5)"
                strokeWidth="1.5"
                strokeDasharray="26"
                strokeLinecap="round"
                markerEnd="url(#vis-arrow)"
                className="vision__conn vision__conn--3"
              />
              <circle
                cx="160"
                cy="150"
                r="46"
                fill="rgba(214,167,122,0.22)"
                stroke="rgba(214,167,122,0.7)"
                strokeWidth="1.5"
              />
              <text
                x="160"
                y="146"
                textAnchor="middle"
                className="vision__center-title"
              >
                ASSET
              </text>
              <text
                x="160"
                y="160"
                textAnchor="middle"
                className="vision__center-sub"
              >
                finanziario
              </text>
              <g className="vision__node vision__node--1">
                <circle
                  cx="160"
                  cy="46"
                  r="34"
                  fill="rgba(250,246,239,0.05)"
                  stroke="rgba(214,167,122,0.5)"
                  strokeWidth="1.5"
                />
                <text
                  x="160"
                  y="43"
                  textAnchor="middle"
                  className="vision__node-title"
                >
                  CONSULENZA
                </text>
                <text
                  x="160"
                  y="55"
                  textAnchor="middle"
                  className="vision__node-sub"
                >
                  finanziaria
                </text>
              </g>
              <g className="vision__node vision__node--2">
                <circle
                  cx="251"
                  cy="205"
                  r="34"
                  fill="rgba(250,246,239,0.05)"
                  stroke="rgba(214,167,122,0.5)"
                  strokeWidth="1.5"
                />
                <text
                  x="251"
                  y="202"
                  textAnchor="middle"
                  className="vision__node-title"
                >
                  RENDITA
                </text>
                <text
                  x="251"
                  y="214"
                  textAnchor="middle"
                  className="vision__node-sub"
                >
                  passiva
                </text>
              </g>
              <g className="vision__node vision__node--3">
                <circle
                  cx="69"
                  cy="205"
                  r="34"
                  fill="rgba(250,246,239,0.05)"
                  stroke="rgba(214,167,122,0.5)"
                  strokeWidth="1.5"
                />
                <text
                  x="69"
                  y="202"
                  textAnchor="middle"
                  className="vision__node-title"
                >
                  RETE
                </text>
                <text
                  x="69"
                  y="214"
                  textAnchor="middle"
                  className="vision__node-sub"
                >
                  professionale
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* ─── Bottom strip: body text left · CTA right ─── */}
        <div className="vision__foot" data-anim>
          <p className="vision__body">
            Un portafoglio clienti che cresce. Commissioni che arrivano anche
            quando sei in vacanza. Investimenti che lavorano mentre tu vivi. Non
            è un sogno: è aritmetica. E io ti insegno i calcoli.
          </p>
          <button onClick={() => setOpen(true)} className="vision__cta">
            Costruiamolo insieme →
          </button>
        </div>
      </div>
      <PopupModal
        url={CALENDLY_URL}
        open={open}
        onModalClose={() => setOpen(false)}
        rootElement={document.body}
      />
    </div>
  );
}
