import { useEffect, useRef, useState } from "react";
import { useSectionAnim } from "../../hooks/useSectionAnim";
import "./ResultsTestimonial.css";

const STATS = [
  { value: "300+", label: "persone che hanno smesso di aspettare, dal 2021" },
  { value: "4 anni", label: "di metodo testato, non di teoria" },
  { value: "IT · CH · RO", label: "dove costruiamo indipendenza" },
];

const TERMINALS = [
  {
    profitto: "+313.49",
    bilancio: "510.00",
    trades: [
      {
        pair: "XAUUSD",
        dir: "sell",
        size: "0.03",
        from: "3366.19",
        to: "3349.84",
        pnl: "+41.98",
        date: "14.07 17:06",
      },
      {
        pair: "XAUUSD",
        dir: "sell",
        size: "0.03",
        from: "3366.15",
        to: "3349.84",
        pnl: "+41.88",
        date: "14.07 17:06",
      },
      {
        pair: "XAUUSD",
        dir: "buy",
        size: "0.12",
        from: "3344.61",
        to: "3350.72",
        pnl: "+62.83",
        date: "15.07 02:47",
      },
      {
        pair: "GBPNZD",
        dir: "sell",
        size: "0.11",
        from: "2.24252",
        to: "2.24364",
        pnl: "-6.32",
        date: "15.07 11:43",
      },
      {
        pair: "DJ30.fs",
        dir: "buy",
        size: "0.02",
        from: "44691.00",
        to: "44584.00",
        pnl: "-9.19",
        date: "15.07 16:29",
      },
      {
        pair: "DJ30.fs",
        dir: "buy",
        size: "0.02",
        from: "44686.00",
        to: "44584.00",
        pnl: "-8.76",
        date: "15.07 16:33",
      },
      {
        pair: "XAUUSD",
        dir: "buy",
        size: "0.14",
        from: "3330.61",
        to: "3333.11",
        pnl: "+30.14",
        date: "16.07 03:19",
      },
      {
        pair: "XAUUSD",
        dir: "buy",
        size: "0.12",
        from: "3332.84",
        to: "3335.91",
        pnl: "+31.72",
        date: "16.07 06:27",
      },
      {
        pair: "XAUUSD",
        dir: "sell",
        size: "0.09",
        from: "3338.74",
        to: "3330.63",
        pnl: "+63.05",
        date: "16.07 13:07",
      },
      {
        pair: "XAUUSD",
        dir: "sell",
        size: "0.09",
        from: "3339.14",
        to: "3330.63",
        pnl: "+66.16",
        date: "16.07 13:07",
      },
    ],
  },
  {
    profitto: "+313.49",
    bilancio: "10000.00",
    trades: [
      {
        pair: "XAUUSD",
        dir: "buy",
        size: "0.39",
        from: "3353.74",
        to: "3350.50",
        pnl: "-107.19",
        date: "01.07 17:06",
      },
      {
        pair: "XAUUSD",
        dir: "sell",
        size: "0.38",
        from: "3337.90",
        to: "3341.11",
        pnl: "-103.34",
        date: "01.07 20:30",
      },
      {
        pair: "XAUUSD",
        dir: "buy",
        size: "0.38",
        from: "3330.26",
        to: "3348.31",
        pnl: "+102.82",
        date: "08.07 19:37",
      },
      {
        pair: "XAUUSD",
        dir: "sell",
        size: "0.38",
        from: "3330.26",
        to: "3333.27",
        pnl: "-97.49",
        date: "08.07 04:08",
      },
      {
        pair: "XAUUSD",
        dir: "sell",
        size: "0.38",
        from: "3331.75",
        to: "3329.44",
        pnl: "+74.72",
        date: "08.07 06:09",
      },
      {
        pair: "XAUUSD",
        dir: "buy",
        size: "0.38",
        from: "3291.25",
        to: "3294.49",
        pnl: "+102.26",
        date: "08.07 18:14",
      },
      {
        pair: "XAUUSD",
        dir: "buy",
        size: "0.38",
        from: "3303.07",
        to: "3306.26",
        pnl: "+103.39",
        date: "09.07 03:02",
      },
      {
        pair: "XAUUSD",
        dir: "buy",
        size: "0.39",
        from: "3317.18",
        to: "3320.20",
        pnl: "+100.46",
        date: "10.07 01:11",
      },
      {
        pair: "XAUUSD",
        dir: "buy",
        size: "0.39",
        from: "3325.18",
        to: "3328.84",
        pnl: "+102.91",
        date: "11.07 03:20",
      },
      {
        pair: "XAUUSD",
        dir: "sell",
        size: "0.40",
        from: "3349.20",
        to: "3345.83",
        pnl: "+115.33",
        date: "14.07 17:21",
      },
      {
        pair: "XAUUSD",
        dir: "buy",
        size: "0.40",
        from: "3346.20",
        to: "3349.48",
        pnl: "+115.33",
        date: "15.07 02:46",
      },
    ],
  },
  {
    profitto: "+648.15",
    bilancio: "0",
    trades: [
      {
        pair: "XAUUSD",
        dir: "sell",
        size: "0.15",
        from: "3306.35",
        to: "3305.57",
        pnl: "+11.70",
        date: "24.06 17:57",
      },
      {
        pair: "XAUUSD",
        dir: "sell",
        size: "0.3",
        from: "3326.45",
        to: "3317.74",
        pnl: "+261.30",
        date: "25.06 16:23",
      },
      {
        pair: "XAUUSD",
        dir: "sell",
        size: "0.3",
        from: "3343.09",
        to: "3340.08",
        pnl: "+90.30",
        date: "26.06 13:16",
      },
      {
        pair: "XAUUSD",
        dir: "sell",
        size: "0.3",
        from: "3345.00",
        to: "3337.26",
        pnl: "+232.20",
        date: "01.07 21:57",
      },
      {
        pair: "XAUUSD",
        dir: "buy",
        size: "0.3",
        from: "3346.95",
        to: "3349.02",
        pnl: "+62.10",
        date: "02.07 19:58",
      },
    ],
  },
];

function TradingTerminal({ data, delay = 0 }) {
  const [visible, setVisible] = useState(data.trades.slice(0, 5));
  const [newKey, setNewKey] = useState(0);
  const indexRef = useRef(5);

  useEffect(() => {
    const tid = setTimeout(() => {
      const id = setInterval(() => {
        const next = data.trades[indexRef.current % data.trades.length];
        indexRef.current++;
        setNewKey((k) => k + 1);
        setVisible((prev) => [next, ...prev.slice(0, 4)]);
      }, 3000);
      return () => clearInterval(id);
    }, delay);
    return () => clearTimeout(tid);
  }, [data.trades, delay]);

  return (
    <div className="terminal">
      <div className="terminal__header">
        <div className="terminal__pair-badge">XAU / USD</div>
        <div className="terminal__storico">STORICO</div>
      </div>

      <div className="terminal__trades">
        {visible.map((trade, i) => {
          const isPos = trade.pnl.startsWith("+");
          return (
            <div
              key={i === 0 ? `new-${newKey}` : `${trade.date}-${i}`}
              className={`terminal__row${i === 0 ? " terminal__row--new" : ""}`}
            >
              <div className="terminal__row-top">
                <span className={`terminal__dir terminal__dir--${trade.dir}`}>
                  {trade.pair}{" "}
                  <span className="terminal__dir-label">{trade.dir}</span>{" "}
                  {trade.size}
                </span>
                <span className="terminal__date">{trade.date}</span>
              </div>
              <div className="terminal__row-bot">
                <span className="terminal__prices">
                  {trade.from}
                  <span className="terminal__arrow"> → </span>
                  {trade.to}
                </span>
                <span
                  className={`terminal__pnl${isPos ? " terminal__pnl--pos" : " terminal__pnl--neg"}`}
                >
                  {trade.pnl}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="terminal__footer">
        <div className="terminal__footer-item">
          <span className="terminal__footer-key">Profitto</span>
          <span className="terminal__footer-pos">{data.profitto}</span>
        </div>
        <div className="terminal__footer-sep" />
        <div className="terminal__footer-item">
          <span className="terminal__footer-key">Bilancio</span>
          <span className="terminal__footer-val">{data.bilancio}</span>
        </div>
      </div>
    </div>
  );
}

export default function ResultsTestimonial() {
  const ref = useSectionAnim();
  return (
    <div ref={ref} className="results">
      <div className="results__inner">
        <div className="results__header" data-anim>
          <div className="kicker">Persone reali, percorsi reali</div>
          <h2 className="results__title">
            Non tutti partono
            <br />
            <em>dallo stesso posto.</em>
          </h2>
        </div>

        <div className="results__stats" data-anim>
          {STATS.map(({ value, label }) => (
            <div key={label} className="results__stat">
              <div className="results__stat-value">{value}</div>
              <div className="results__stat-label">{label}</div>
            </div>
          ))}
        </div>

        <div className="results__terminals" data-anim>
          {TERMINALS.map((t, i) => (
            <TradingTerminal key={i} data={t} delay={i * 700} />
          ))}
        </div>
      </div>
    </div>
  );
}
