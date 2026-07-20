import { useEffect, useState } from "react";
import {
  FileText, Brain, Users, BellRing, CheckCircle2, MapPin, AlertTriangle,
} from "lucide-react";
import { C, font, ease } from "../theme.js";
import { useReveal } from "../hooks.js";
import Reveal from "./Reveal.jsx";
import Chapter from "./Chapter.jsx";
import Particles from "./Particles.jsx";
import AegisLogo from "./AegisLogo.jsx";

const CYCLE_STEPS = [
  {
    icon: FileText,
    name: "Reporte ciudadano",
    desc: "Un vecino reporta un incidente en segundos: categoría, ubicación y evidencia.",
  },
  {
    icon: Brain,
    name: "La IA analiza",
    desc: "El motor valida texto, imágenes y reportes similares. Confianza del análisis: 92%.",
  },
  {
    icon: Users,
    name: "La comunidad valida",
    desc: "Los vecinos cercanos confirman la veracidad del reporte en tiempo real.",
  },
  {
    icon: BellRing,
    name: "Alerta preventiva",
    desc: "Quienes se acercan a la zona reciben la alerta antes de llegar. Eso es anticipar.",
  },
];

function PhoneScreen({ step }) {
  const base = { fontFamily: font.body };
  if (step === 0)
    return (
      <div className="flex flex-col gap-3" style={base}>
        <div style={{ fontSize: 12, color: C.faint }}>Nuevo reporte</div>
        <div className="px-3.5 py-3" style={{ background: "rgba(6,12,28,0.9)", borderRadius: 12, border: `1px solid ${C.line}` }}>
          <div style={{ fontSize: 11, color: C.faint }}>Categoría</div>
          <div style={{ fontSize: 14, color: C.white, marginTop: 2 }}>Robo</div>
        </div>
        <div className="px-3.5 py-3" style={{ background: "rgba(6,12,28,0.9)", borderRadius: 12, border: `1px solid ${C.line}` }}>
          <div style={{ fontSize: 11, color: C.faint }}>Ubicación</div>
          <div className="flex items-center gap-1.5" style={{ fontSize: 14, color: C.white, marginTop: 2 }}>
            <MapPin size={13} style={{ color: C.cyan }} /> Parque Kennedy, Miraflores
          </div>
        </div>
        <button
          className="py-2.5 mt-1"
          style={{
            background: C.blue, color: C.white, border: "none", borderRadius: 10,
            fontSize: 13.5, fontWeight: 600, cursor: "default",
          }}
        >
          Enviar reporte
        </button>
      </div>
    );
  if (step === 1)
    return (
      <div className="flex flex-col gap-3" style={base}>
        <div className="flex items-center gap-2" style={{ fontSize: 12, color: C.cyan }}>
          <Brain size={14} /> Analizando reporte…
        </div>
        {["Texto", "Imágenes", "Información geográfica", "Reportes similares"].map((t, i) => (
          <div
            key={t}
            className="flex items-center justify-between px-3.5 py-2.5"
            style={{
              background: "rgba(6,12,28,0.9)", borderRadius: 10, border: `1px solid ${C.line}`,
              opacity: 0, animation: `ao-msg-in .5s ease ${i * 0.3}s forwards`,
            }}
          >
            <span style={{ fontSize: 13, color: C.ice }}>{t}</span>
            <CheckCircle2 size={14} style={{ color: C.ok }} />
          </div>
        ))}
        <div
          className="px-3.5 py-3 mt-1"
          style={{
            background: "rgba(52,211,153,0.08)", borderRadius: 12, border: "1px solid rgba(52,211,153,0.3)",
            opacity: 0, animation: "ao-msg-in .5s ease 1.3s forwards",
          }}
        >
          <span style={{ fontSize: 13, color: C.ok, fontWeight: 600 }}>Confianza: 92%</span>
          <span style={{ fontSize: 12, color: C.muted }}> · Gravedad: Alta · Duplicados: no</span>
        </div>
      </div>
    );
  if (step === 2)
    return (
      <div className="flex flex-col gap-3" style={base}>
        <div className="flex items-center gap-2" style={{ fontSize: 12, color: C.cyan }}>
          <Users size={14} /> Comunidad · Cercanos
        </div>
        <div className="px-3.5 py-3" style={{ background: "rgba(6,12,28,0.9)", borderRadius: 12, border: `1px solid ${C.line}` }}>
          <div style={{ fontSize: 13.5, color: C.white }}>Robo cerca del Parque Kennedy</div>
          <div style={{ fontSize: 11.5, color: C.faint, marginTop: 3 }}>Hace 10 min · ❤ 12 · 💬 5</div>
        </div>
        {[
          ["JuanP", "Yo estuve ahí, y vi lo mismo."],
          ["MaríaG", "Confirmo, mucho cuidado."],
        ].map(([u, m], i) => (
          <div
            key={u}
            className="px-3.5 py-2.5"
            style={{
              background: "rgba(6,12,28,0.9)", borderRadius: 10, border: `1px solid ${C.line}`,
              opacity: 0, animation: `ao-msg-in .5s ease ${0.4 + i * 0.5}s forwards`,
            }}
          >
            <span style={{ fontSize: 12, color: C.cyan, fontWeight: 600 }}>{u}: </span>
            <span style={{ fontSize: 12.5, color: C.ice }}>{m}</span>
          </div>
        ))}
        <div
          className="flex items-center justify-center gap-2 py-2.5"
          style={{
            background: "rgba(52,211,153,0.1)", borderRadius: 10, border: "1px solid rgba(52,211,153,0.3)",
            fontSize: 13, color: C.ok, fontWeight: 600,
            opacity: 0, animation: "ao-msg-in .5s ease 1.5s forwards",
          }}
        >
          <CheckCircle2 size={14} /> 12 confirmaciones de vecinos
        </div>
      </div>
    );
  return (
    <div className="flex flex-col gap-3" style={base}>
      <div className="relative overflow-hidden" style={{ height: 128, borderRadius: 12, background: "#081227", border: `1px solid ${C.line}` }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 130" preserveAspectRatio="none" style={{ opacity: 0.5 }}>
          {[50, 110, 170, 230].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="130" stroke={C.blue} strokeWidth="1" opacity="0.35" />
          ))}
          {[40, 85].map((y) => (
            <line key={y} x1="0" y1={y} x2="300" y2={y} stroke={C.blue} strokeWidth="1" opacity="0.35" />
          ))}
        </svg>
        <span
          className="absolute rounded-full"
          style={{
            width: 62, height: 62, left: "44%", top: "26%",
            background: "radial-gradient(circle, rgba(244,63,94,0.55), transparent 70%)",
            animation: "ao-ring 1.8s ease-in-out infinite",
          }}
        />
        <span
          className="absolute rounded-full"
          style={{
            width: 40, height: 40, left: "16%", top: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.45), transparent 70%)",
            animation: "ao-ring 2.2s ease-in-out .4s infinite",
          }}
        />
      </div>
      <div
        className="px-3.5 py-3"
        style={{ background: "rgba(244,63,94,0.09)", borderRadius: 12, border: "1px solid rgba(244,63,94,0.35)" }}
      >
        <div className="flex items-center gap-2" style={{ fontSize: 13, color: C.danger, fontWeight: 600 }}>
          <AlertTriangle size={14} /> Alerta preventiva
        </div>
        <p style={{ fontSize: 12.5, color: C.ice, marginTop: 5, lineHeight: 1.5 }}>
          Mayor incidencia de robos en esta zona en las últimas horas. Evítala si es posible.
        </p>
      </div>
      <button
        className="py-2.5"
        style={{
          background: C.blue, color: C.white, border: "none", borderRadius: 10,
          fontSize: 13.5, fontWeight: 600, cursor: "default",
        }}
      >
        Ver rutas alternativas
      </button>
    </div>
  );
}

// Capítulo 03 — Demo interactiva del ciclo de inteligencia comunitaria.
export default function CicloDemo() {
  const [ref, visible] = useReveal(0.25);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => setStep((s) => (s + 1) % CYCLE_STEPS.length), 3600);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <section
      id="ciclo"
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: `radial-gradient(900px 500px at 20% 30%, rgba(47,107,255,0.1), transparent 60%), ${C.bg}` }}
    >
      <Particles count={12} />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <Chapter num="03" title="La plataforma en acción" />
          <h2
            className="text-center mx-auto"
            style={{
              fontFamily: font.display, fontWeight: 700, color: C.white,
              fontSize: "clamp(1.6rem, 3.6vw, 2.5rem)", maxWidth: 680, lineHeight: 1.2,
            }}
          >
            De un reporte ciudadano a una <span style={{ color: C.cyan }}>alerta que anticipa</span> — en minutos.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-14 items-center mt-16">
          <div className="flex flex-col gap-3 order-2 lg:order-1">
            {CYCLE_STEPS.map((s, i) => {
              const active = i === step;
              return (
                <button
                  key={s.name}
                  onClick={() => setStep(i)}
                  className="text-left px-5 py-4 flex items-start gap-4"
                  style={{
                    background: active ? "rgba(47,107,255,0.12)" : "rgba(13,27,51,0.4)",
                    border: `1px solid ${active ? C.lineStrong : C.line}`,
                    borderRadius: 16, cursor: "pointer",
                    boxShadow: active ? "0 0 30px rgba(47,107,255,0.15)" : "none",
                    transition: `all .5s ${ease}`,
                  }}
                >
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: active ? `linear-gradient(135deg, ${C.blue}, #1E4FD8)` : "rgba(47,107,255,0.1)",
                      border: `1px solid ${active ? "transparent" : C.line}`,
                      transition: `all .5s ${ease}`,
                    }}
                  >
                    <s.icon size={18} style={{ color: active ? C.white : C.cyan }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span style={{ fontFamily: font.body, fontSize: 11, color: C.faint }}>PASO {i + 1}</span>
                      {active && (
                        <span
                          style={{
                            width: 6, height: 6, borderRadius: "50%", background: C.cyan,
                            boxShadow: `0 0 8px ${C.cyan}`, display: "inline-block",
                          }}
                        />
                      )}
                    </div>
                    <div style={{ fontFamily: font.display, fontWeight: 700, fontSize: 16.5, color: active ? C.white : C.ice }}>
                      {s.name}
                    </div>
                    <p
                      style={{
                        fontFamily: font.body, fontSize: 13.5, color: C.muted, lineHeight: 1.55,
                        maxHeight: active ? 60 : 0, overflow: "hidden", opacity: active ? 1 : 0,
                        transition: `all .5s ${ease}`, marginTop: active ? 4 : 0,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </button>
              );
            })}
            <p className="mt-2" style={{ fontFamily: font.body, fontSize: 12.5, color: C.faint }}>
              La demo avanza sola — o toca cualquier paso para explorarlo.
            </p>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div
              className="relative"
              style={{
                width: 296, borderRadius: 36, padding: 12,
                background: "linear-gradient(160deg, #131F3A, #060D1F)",
                border: `1px solid ${C.lineStrong}`,
                boxShadow: "0 30px 80px rgba(2,6,18,0.8), 0 0 60px rgba(47,107,255,0.18)",
              }}
            >
              <div
                style={{
                  position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)",
                  width: 90, height: 20, background: "#060D1F", borderRadius: 999, zIndex: 2,
                }}
              />
              <div
                className="px-4 pt-10 pb-5 overflow-hidden"
                style={{ background: "#0A1428", borderRadius: 26, minHeight: 430 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    <AegisLogo size={15} glow={false} />
                    <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 12, color: C.white }}>
                      Aegis<span style={{ color: C.cyan }}>One</span>
                    </span>
                  </div>
                  <span style={{ fontFamily: font.body, fontSize: 10, color: C.ok }}>● En línea</span>
                </div>
                <div key={step} style={{ animation: `ao-msg-in .55s ${ease}` }}>
                  <PhoneScreen step={step} />
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-3">
                {CYCLE_STEPS.map((_, i) => (
                  <span
                    key={i}
                    style={{
                      width: i === step ? 22 : 7, height: 7, borderRadius: 999,
                      background: i === step ? C.cyan : "rgba(76,141,255,0.25)",
                      transition: `all .4s ${ease}`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
