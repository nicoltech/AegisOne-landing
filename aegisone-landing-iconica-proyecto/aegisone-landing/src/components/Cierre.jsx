import { Sparkles } from "lucide-react";
import { C, font } from "../theme.js";
import Reveal from "./Reveal.jsx";
import Particles from "./Particles.jsx";
import AegisLogo from "./AegisLogo.jsx";

const LINES = [
  "Cada día salimos de casa esperando regresar tranquilos.",
  "Una madre espera el mensaje de su hija.",
  "Un trabajador vuelve tarde después de una larga jornada.",
  "Una familia comparte su ubicación porque quiere sentirse segura.",
];

// Epílogo — el cierre emocional del case film.
export default function Cierre() {
  return (
    <section
      id="cierre"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: `radial-gradient(900px 500px at 50% 100%, rgba(47,107,255,0.14), transparent 60%), ${C.bg}` }}
    >
      <Particles count={16} />
      <div className="relative max-w-2xl mx-auto text-center">
        <Reveal>
          <div
            className="mb-10"
            style={{ fontFamily: font.body, letterSpacing: "0.3em", fontSize: 11, color: C.faint, textTransform: "uppercase" }}
          >
            Epílogo
          </div>
        </Reveal>
        <div className="flex flex-col gap-4 mb-12">
          {LINES.map((l, i) => (
            <Reveal key={l} delay={i * 220} y={14}>
              <p style={{ fontFamily: font.body, fontSize: 17, color: C.muted, lineHeight: 1.6 }}>{l}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p style={{ fontFamily: font.display, fontWeight: 600, fontSize: "clamp(1.2rem, 3vw, 1.7rem)", color: C.white, lineHeight: 1.45 }}>
            La inseguridad no solo roba pertenencias.
            <br />
            <span style={{ color: C.cyan }}>También roba tranquilidad.</span>
          </p>
        </Reveal>
        <Reveal delay={350}>
          <p className="mt-8" style={{ fontFamily: font.body, fontSize: 16, color: C.ice, lineHeight: 1.7 }}>
            AegisOne existe para acompañar las decisiones más importantes de nuestra vida cotidiana.
            Porque la seguridad no comienza cuando ocurre una emergencia.{" "}
            <strong style={{ color: C.white }}>Comienza mucho antes.</strong>
          </p>
        </Reveal>
        <Reveal delay={500}>
          <div className="flex flex-col items-center mt-14">
            <AegisLogo size={78} />
            <div className="mt-5" style={{ fontFamily: font.display, fontWeight: 700, fontSize: 30, color: C.white }}>
              Aegis<span style={{ color: C.cyan }}>One</span>
            </div>
            <p className="mt-1" style={{ fontFamily: font.body, fontSize: 15, letterSpacing: "0.08em", color: C.muted }}>
              Anticipa. Decide. Protege.
            </p>
            <button
              className="flex items-center gap-2 mt-10 px-8 py-3.5"
              style={{
                background: `linear-gradient(135deg, ${C.blue}, #1E4FD8)`,
                color: C.white, border: "none", borderRadius: 12,
                fontFamily: font.body, fontWeight: 600, fontSize: 15.5, cursor: "pointer",
                boxShadow: "0 0 40px rgba(47,107,255,0.5)",
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Sparkles size={17} /> Únete a la nueva generación de seguridad
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
