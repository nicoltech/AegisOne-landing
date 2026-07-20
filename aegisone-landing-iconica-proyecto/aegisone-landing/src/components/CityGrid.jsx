import { C } from "../theme.js";

// Cuadrícula urbana con nodos que laten y una ruta animada.
export default function CityGrid({ opacity = 0.12 }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
      viewBox="0 0 1200 800"
      style={{ opacity }}
      aria-hidden
    >
      {[120, 300, 480, 660, 840, 1020].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="800" stroke={C.blue} strokeWidth="1" />
      ))}
      {[140, 320, 500, 680].map((y) => (
        <line key={y} x1="0" y1={y} x2="1200" y2={y} stroke={C.blue} strokeWidth="1" />
      ))}
      {[[300, 320], [660, 140], [840, 500], [480, 680], [1020, 320], [120, 500]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={C.cyan}>
          <animate attributeName="opacity" values="0.2;1;0.2" dur={`${3 + i}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <path d="M120 500 L300 320 L660 140 L1020 320" fill="none" stroke={C.cyan} strokeWidth="1.4" strokeDasharray="6 10">
        <animate attributeName="stroke-dashoffset" from="160" to="0" dur="6s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}
