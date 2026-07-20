import { useReveal, useCountUp } from "../hooks.js";
import { C, font } from "../theme.js";

// Índice Inteligente de Seguridad — medidor circular animado.
export default function SecurityGauge({ value = 75 }) {
  const [ref, visible] = useReveal(0.4);
  const v = useCountUp(value, visible, 1800);
  const R = 62;
  const CIRC = 2 * Math.PI * R;
  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ width: 190, height: 190 }}>
      <svg width="190" height="190" viewBox="0 0 160 160" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="80" cy="80" r={R} fill="none" stroke="rgba(76,141,255,0.14)" strokeWidth="10" />
        <circle
          cx="80" cy="80" r={R} fill="none"
          stroke="url(#gaugeGrad)" strokeWidth="10" strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={CIRC * (1 - v / 100)}
          style={{ transition: "stroke-dashoffset .12s linear", filter: "drop-shadow(0 0 8px rgba(76,201,240,0.7))" }}
        />
        <defs>
          <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={C.cyan} />
            <stop offset="100%" stopColor={C.blue} />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 46, color: C.white, lineHeight: 1 }}>
          {v}
        </span>
        <span style={{ fontFamily: font.body, fontSize: 12, color: C.faint }}>/100</span>
        <span
          className="mt-1 px-2.5 py-0.5"
          style={{
            fontFamily: font.body, fontSize: 10.5, color: C.warn,
            background: "rgba(245,158,11,0.12)", borderRadius: 999,
            border: "1px solid rgba(245,158,11,0.3)",
          }}
        >
          Nivel: Moderado
        </span>
      </div>
    </div>
  );
}
