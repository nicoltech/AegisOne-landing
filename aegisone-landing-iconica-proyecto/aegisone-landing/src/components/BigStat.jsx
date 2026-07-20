import { useReveal, useCountUp } from "../hooks.js";
import { C, font } from "../theme.js";

// Interludio: la cifra que lo dice todo.
export default function BigStat() {
  const [ref, visible] = useReveal(0.5);
  const n = useCountUp(4000, visible, 2000);
  return (
    <section
      ref={ref}
      className="relative py-32 px-6 overflow-hidden text-center"
      style={{
        background: `radial-gradient(700px 400px at 50% 50%, rgba(244,63,94,0.07), transparent 65%), ${C.bg}`,
      }}
    >
      <div
        style={{
          fontFamily: font.display, fontWeight: 700, color: C.white,
          fontSize: "clamp(4rem, 13vw, 9.5rem)", lineHeight: 1, letterSpacing: "-0.02em",
          textShadow: "0 0 60px rgba(76,201,240,0.25)",
        }}
      >
        +{n.toLocaleString("es-PE")}
      </div>
      <p className="mt-4" style={{ fontFamily: font.body, fontSize: "clamp(1rem, 2.4vw, 1.35rem)", color: C.ice }}>
        celulares se roban <strong style={{ color: C.white }}>cada día</strong> en el Perú.
      </p>
      <p className="mt-3" style={{ fontFamily: font.body, fontSize: 15, color: C.muted }}>
        Uno cada 22 segundos. Solo el 7% se recupera.
      </p>
      <p className="mt-6" style={{ fontFamily: font.body, fontSize: 11, color: C.faint }}>
        Fuente: Osiptel / Renteseg, 2025.
      </p>
    </section>
  );
}
