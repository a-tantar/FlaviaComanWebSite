import { useState } from "react";
import { PopupModal } from "react-calendly";
import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./Hero.css";

const CALENDLY_URL = "https://calendly.com/flaviacoman/zoom";

const STATS = [
  { value: "4 anni", label: "di metodo testato sul campo, non in aula" },
  { value: "300+", label: "persone che hanno smesso di aspettare" },
  { value: "1:1", label: "nessun corso in massa. Solo lavoro reale" },
];

export default function Hero() {
  const ref = useSectionAnim();
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  return (
    <div ref={ref} className="hero">
      {/* ─── Background chart ─────────────────────────────── */}
      <div className="hero__bg-chart" aria-hidden="true">
        <svg
          viewBox="0 0 1440 420"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bgChartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D6A77A" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#D6A77A" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[80, 140, 200, 260, 320, 380].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="1440"
              y2={y}
              stroke="#1A1613"
              strokeOpacity="0.07"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
          ))}
          {[0, 180, 360, 540, 720, 900, 1080, 1260, 1440].map((x) => (
            <line
              key={x}
              x1={x}
              y1="0"
              x2={x}
              y2="420"
              stroke="#1A1613"
              strokeOpacity="0.05"
              strokeWidth="1"
            />
          ))}
          <path
            d="M0,340 L40,320 L80,310 L120,330 L160,305 L200,290 L240,295 L280,275 L320,285 L360,260 L400,270 L440,245 L480,255 L520,235 L560,250 L600,220 L640,230 L680,210 L720,195 L760,215 L800,185 L840,170 L880,180 L920,160 L960,145 L1000,155 L1040,130 L1080,140 L1120,115 L1160,125 L1200,100 L1240,88 L1280,95 L1320,78 L1360,65 L1400,70 L1440,55 L1440,420 L0,420 Z"
            fill="url(#bgChartFill)"
          />
          <polyline
            points="0,340 40,320 80,310 120,330 160,305 200,290 240,295 280,275 320,285 360,260 400,270 440,245 480,255 520,235 560,250 600,220 640,230 680,210 720,195 760,215 800,185 840,170 880,180 920,160 960,145 1000,155 1040,130 1080,140 1120,115 1160,125 1200,100 1240,88 1280,95 1320,78 1360,65 1400,70 1440,55"
            fill="none"
            stroke="#D6A77A"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {[
            { x: 60, open: 318, close: 305, high: 295, low: 328 },
            { x: 180, open: 298, close: 282, high: 272, low: 308 },
            { x: 300, open: 280, close: 270, high: 260, low: 290 },
            { x: 420, open: 252, close: 238, high: 228, low: 262 },
            { x: 540, open: 240, close: 228, high: 218, low: 250 },
            { x: 660, open: 228, close: 215, high: 205, low: 238 },
            { x: 780, open: 210, close: 188, high: 178, low: 220 },
            { x: 900, open: 165, close: 152, high: 142, low: 175 },
            { x: 1020, open: 148, close: 132, high: 122, low: 158 },
            { x: 1140, open: 122, close: 108, high: 98, low: 132 },
            { x: 1260, open: 92, close: 78, high: 68, low: 102 },
            { x: 1380, open: 72, close: 58, high: 48, low: 82 },
          ].map(({ x, open, close, high, low }) => {
            const bull = close < open;
            const col = bull ? "#7ec87e" : "#e07878";
            return (
              <g key={x}>
                <line
                  x1={x}
                  y1={high}
                  x2={x}
                  y2={low}
                  stroke={col}
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
                <rect
                  x={x - 5}
                  y={Math.min(open, close)}
                  width={10}
                  height={Math.abs(open - close) || 2}
                  fill={col}
                  fillOpacity="0.28"
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          {/* Tag */}

          {/* Main title */}
          <h1 className="hero__title" data-anim>
            Il tempo è l&apos;unico asset
            <br />
            <em className="hero__title-em">che non si reinveste.</em>
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle" data-anim>
            Mi chiamo Flavia. Ho smesso di scambiare ore per soldi. Da quattro
            anni insegno alle persone giuste come fare lo stesso. Niente corsi
            preregistrati. Niente motivazione. Solo un sistema che funziona.
          </p>

          {/* Floating stat pills */}
          {/* CTAs */}
          <div className="hero__actions" data-anim>
            <button
              type="button"
              className="btn btn-primary hero__cta-main"
              onClick={() => setCalendlyOpen(true)}
            >
              Inizia adesso. È gratis →
            </button>
            <a href="#metodo" className="hero__cta-secondary">
              Guarda il sistema ↓
            </a>
          </div>

          {/* Footnote strip */}
          <div className="hero__footnote" data-anim>
            <span>In tutta Italia</span>
            <span className="hero__footnote-dot" />
            <span>Solo lavoro 1:1, niente masse</span>
            <span className="hero__footnote-dot" />
            <span>Dal 2021</span>
          </div>
        </div>
      </div>

      <PopupModal
        url={CALENDLY_URL}
        open={calendlyOpen}
        onModalClose={() => setCalendlyOpen(false)}
        rootElement={document.getElementById("root")}
      />
    </div>
  );
}
