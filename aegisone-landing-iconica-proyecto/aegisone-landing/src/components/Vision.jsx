import { Users, Landmark, TrendingUp } from "lucide-react";
import { C, font } from "../theme.js";
import Reveal from "./Reveal.jsx";
import Chapter from "./Chapter.jsx";
import Particles from "./Particles.jsx";

const STEPS = [
  {
    icon: Users, name: "Aegis Family™",
    items: ["Compartir ubicación voluntariamente", "Confirmaciones automáticas", "Contactos de confianza", "Círculos familiares"],
  },
  {
    icon: Landmark, name: "Centro comunitario inteligente",
    items: ["Reportes ciudadanos", "Alertas colaborativas", "Información urbana", "Interpretación mediante IA"],
  },
  {
    icon: TrendingUp, name: "Inteligencia avanzada",
    items: ["Modelos predictivos", "Tendencias urbanas", "Patrones", "Alertas contextuales"],
  },
];

// Capítulo 05 — Visión del futuro.
export default function Vision() {
  return (
    <section id="vision" className="relative py-28 px-6 overflow-hidden" style={{ background: C.bg }}>
      <Particles count={12} />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <Chapter num="05" title="Visión del futuro" />
          <h2
            className="text-center mx-auto"
            style={{
              fontFamily: font.display, fontWeight: 700, color: C.white,
              fontSize: "clamp(1.6rem, 3.6vw, 2.4rem)", maxWidth: 700, lineHeight: 1.25,
            }}
          >
            La seguridad del futuro será{" "}
            <span style={{ color: C.cyan }}>contextual, colaborativa e inteligente.</span>
          </h2>
        </Reveal>
        <div className="relative mt-16">
          <span
            className="hidden md:block absolute left-0 right-0"
            style={{ top: 23, height: 1, background: `linear-gradient(90deg, transparent, ${C.lineStrong}, transparent)` }}
          />
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((s, i) => (
              <Reveal key={s.name} delay={i * 140}>
                <div className="flex flex-col items-center text-center">
                  <div
                    className="relative z-10 flex items-center justify-center mb-6"
                    style={{
                      width: 48, height: 48, borderRadius: "50%",
                      background: C.surfaceSolid, border: `1px solid ${C.lineStrong}`,
                      boxShadow: "0 0 20px rgba(76,201,240,0.25)",
                    }}
                  >
                    <s.icon size={21} style={{ color: C.cyan }} />
                  </div>
                  <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 18, color: C.white, marginBottom: 14 }}>
                    {s.name}
                  </h3>
                  <ul className="flex flex-col gap-2" style={{ listStyle: "none" }}>
                    {s.items.map((it) => (
                      <li key={it} style={{ fontFamily: font.body, fontSize: 14, color: C.muted }}>{it}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
