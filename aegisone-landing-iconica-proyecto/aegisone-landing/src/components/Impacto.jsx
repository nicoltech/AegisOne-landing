import { Users, Building2, Globe2 } from "lucide-react";
import { C, font } from "../theme.js";
import Reveal from "./Reveal.jsx";
import Chapter from "./Chapter.jsx";
import GlassCard from "./GlassCard.jsx";

const BLOCKS = [
  { icon: Users, name: "Ciudadanos", items: ["Más tranquilidad", "Decisiones informadas", "Protección física y digital"] },
  { icon: Building2, name: "Ciudades", items: ["Prevención", "Colaboración", "Inteligencia urbana"] },
  { icon: Globe2, name: "Latinoamérica", items: ["Escalabilidad", "Inclusión", "Transformación social"] },
];

// Capítulo 06 — Impacto social.
export default function Impacto() {
  return (
    <section id="impacto" className="py-28 px-6" style={{ background: C.bg2 }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <Chapter num="06" title="Impacto social" />
          <h2
            className="text-center"
            style={{ fontFamily: font.display, fontWeight: 700, color: C.white, fontSize: "clamp(1.6rem, 3.6vw, 2.4rem)" }}
          >
            Tecnología que protege <span style={{ color: C.cyan }}>a escala humana</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.name} delay={i * 120}>
              <GlassCard className="p-8 h-full text-center">
                <div
                  className="mx-auto flex items-center justify-center mb-5"
                  style={{
                    width: 52, height: 52, borderRadius: 16,
                    background: "rgba(47,107,255,0.14)", border: `1px solid ${C.line}`,
                  }}
                >
                  <b.icon size={23} style={{ color: C.cyan }} />
                </div>
                <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 20, color: C.white, marginBottom: 16 }}>
                  {b.name}
                </h3>
                <ul className="flex flex-col gap-2" style={{ listStyle: "none" }}>
                  {b.items.map((it) => (
                    <li key={it} style={{ fontFamily: font.body, fontSize: 14.5, color: C.muted }}>{it}</li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
