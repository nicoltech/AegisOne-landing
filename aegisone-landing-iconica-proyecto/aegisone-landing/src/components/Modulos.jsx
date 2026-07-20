import { Building2, Car, ShieldCheck, Bot, CheckCircle2 } from "lucide-react";
import { C, font } from "../theme.js";
import Reveal from "./Reveal.jsx";
import Chapter from "./Chapter.jsx";
import GlassCard from "./GlassCard.jsx";

const MODS = [
  {
    icon: Building2, name: "Aegis Urban", q: "¿Qué deberías saber antes de continuar tu camino?",
    funcs: ["Análisis contextual", "Evaluación del recorrido", "Condiciones del entorno", "Información urbana", "Recomendaciones inteligentes"],
  },
  {
    icon: Car, name: "Guardian Ride", q: "¿Y si alguien pudiera acompañarte en cada trayecto?",
    funcs: ["Compartir ubicación en tiempo real", "Confirmación automática de llegada", "Alertas inteligentes", "Seguimiento de recorridos", "Detección de desviaciones"],
  },
  {
    icon: ShieldCheck, name: "CyberShield", q: "¿Cómo saber si una llamada o mensaje representa un peligro?",
    funcs: ["Detección de phishing", "Análisis de llamadas", "Protección contra estafas", "Identificación de spam", "Ingeniería social y extorsión digital"],
  },
];

const COPILOT_QS = [
  "¿Esta llamada parece una estafa?",
  "¿Es segura esta ruta?",
  "¿Debo abrir este enlace?",
  "¿Qué hago si recibí una amenaza?",
  "¿Es recomendable tomar este taxi?",
];

// Capítulo 04 — Los módulos de la plataforma.
export default function Modulos() {
  return (
    <section id="modulos" className="relative py-28 px-6" style={{ background: C.bg2 }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <Chapter num="04" title="Los módulos" />
          <h2
            className="text-center"
            style={{ fontFamily: font.display, fontWeight: 700, color: C.white, fontSize: "clamp(1.7rem, 3.8vw, 2.6rem)" }}
          >
            Un copiloto inteligente para tu <span style={{ color: C.cyan }}>seguridad cotidiana</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {MODS.map((m, i) => (
            <Reveal key={m.name} delay={i * 110}>
              <GlassCard className="p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 46, height: 46, borderRadius: 14,
                      background: `linear-gradient(135deg, rgba(47,107,255,0.25), rgba(76,201,240,0.12))`,
                      border: `1px solid ${C.lineStrong}`,
                    }}
                  >
                    <m.icon size={22} style={{ color: C.cyan }} />
                  </div>
                  <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 21, color: C.white }}>
                    {m.name}
                    <span style={{ color: C.cyan, fontSize: 12, verticalAlign: "super" }}>™</span>
                  </h3>
                </div>
                <p style={{ fontFamily: font.display, fontSize: 17, color: C.ice, lineHeight: 1.45, marginBottom: 20 }}>
                  {m.q}
                </p>
                <ul className="flex flex-col gap-2.5" style={{ listStyle: "none" }}>
                  {m.funcs.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} style={{ color: C.blue, marginTop: 3, flexShrink: 0 }} />
                      <span style={{ fontFamily: font.body, fontSize: 14, color: C.muted }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}

          <Reveal delay={330}>
            <GlassCard className="p-8 h-full" style={{ borderColor: C.lineStrong }}>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 46, height: 46, borderRadius: 14,
                    background: `linear-gradient(135deg, ${C.blue}, #1E4FD8)`,
                    boxShadow: "0 0 22px rgba(47,107,255,0.5)",
                  }}
                >
                  <Bot size={22} style={{ color: C.white }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 21, color: C.white }}>
                    Aegis Copilot<span style={{ color: C.cyan, fontSize: 12, verticalAlign: "super" }}>™</span>
                  </h3>
                  <span style={{ fontFamily: font.body, fontSize: 12, color: C.ok }}>● En línea</span>
                </div>
              </div>
              <p style={{ fontFamily: font.display, fontSize: 17, color: C.ice, lineHeight: 1.45, marginBottom: 18 }}>
                El centro de interacción de toda la plataforma. Pregúntale lo que necesites:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {COPILOT_QS.map((q) => (
                  <span
                    key={q}
                    className="px-3.5 py-2"
                    style={{
                      fontFamily: font.body, fontSize: 13, color: C.white,
                      background: "rgba(47,107,255,0.14)", border: `1px solid ${C.line}`, borderRadius: 999,
                    }}
                  >
                    {q}
                  </span>
                ))}
              </div>
              <div
                className="mt-6 p-4"
                style={{
                  background: "rgba(6,12,28,0.8)", borderRadius: 14, border: `1px solid ${C.line}`,
                  fontFamily: font.body, fontSize: 13.5, color: C.ice, lineHeight: 1.6,
                }}
              >
                <span style={{ color: C.cyan }}>Aegis Copilot:</span> He analizado el enlace y encontré
                señales comunes de phishing. Te recomiendo verificar el remitente antes de continuar.
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
