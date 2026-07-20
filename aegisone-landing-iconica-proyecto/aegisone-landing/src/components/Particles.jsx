import { useMemo } from "react";
import { C } from "../theme.js";

// Partículas que ascienden lentamente por el fondo.
export default function Particles({ count = 24 }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (i * 37 + 11) % 100,
        size: 1.5 + ((i * 7) % 3),
        delay: (i * 1.7) % 14,
        dur: 14 + ((i * 5) % 12),
        cyan: i % 3 === 0,
      })),
    [count]
  );
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {dots.map((d, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${d.left}%`,
            bottom: "-10px",
            width: d.size,
            height: d.size,
            borderRadius: "50%",
            background: d.cyan ? C.cyan : C.blue,
            opacity: 0.5,
            animation: `ao-rise ${d.dur}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
