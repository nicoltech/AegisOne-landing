import { useRef } from "react";
import {
  ShieldCheck, AlertTriangle, MapPin, Sparkles, Play, ArrowRight, ChevronDown,
} from "lucide-react";
import { C, font, ease } from "../theme.js";
import { scrollToId } from "../utils.js";
import CityGrid from "./CityGrid.jsx";
import Particles from "./Particles.jsx";
import GlassCard from "./GlassCard.jsx";
import SecurityGauge from "./SecurityGauge.jsx";
import AegisLogo from "./AegisLogo.jsx";

// Hero: la ciudad despierta, con la app viva y foco que sigue el mouse.
export default function Hero() {
  const heroRef = useRef(null);
  const spotRef = useRef(null);

  const onMove = (e) => {
    if (!heroRef.current || !spotRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    spotRef.current.style.background = `radial-gradient(520px at ${x}px ${y}px, rgba(76,201,240,0.09), transparent 70%)`;
  };

  const bubbles = [
    { text: "Avísame cuando llegues.", style: { top: "22%", left: "3%" }, delay: 0.4 },
    { text: "¿Ya estás en casa?", style: { top: "58%", left: "2%" }, delay: 0.9 },
    { text: "¿Tomaste el taxi?", style: { top: "26%", right: "3%" }, delay: 0.6 },
    { text: "Escríbeme cuando llegues.", style: { top: "62%", right: "2%" }, delay: 1.1 },
  ];

  return (
    <header
      ref={heroRef}
      onMouseMove={onMove}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `radial-gradient(1100px 600px at 50% -10%, rgba(47,107,255,0.16), transparent 60%),
                     radial-gradient(900px 500px at 85% 110%, rgba(76,201,240,0.10), transparent 60%),
                     linear-gradient(180deg, ${C.bg} 0%, ${C.bg2} 100%)`,
      }}
    >
      <CityGrid />
      <Particles />
      <div ref={spotRef} className="absolute inset-0 pointer-events-none" aria-hidden />

      {bubbles.map((b, i) => (
        <div
          key={i}
          className="hidden xl:block px-4 py-2.5"
          style={{
            position: "absolute",
            background: "rgba(10, 20, 40, 0.7)",
            border: `1px solid ${C.line}`,
            borderRadius: 14,
            backdropFilter: "blur(10px)",
            color: C.ice, fontFamily: font.body, fontSize: 13,
            opacity: 0,
            animation: `ao-msg-in .9s ${ease} ${b.delay}s forwards, ao-float 8s ease-in-out ${b.delay + 1}s infinite`,
            ...b.style,
          }}
        >
          {b.text}
        </div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div
            className="flex items-center gap-3 mb-6"
            style={{
              fontFamily: font.body, letterSpacing: "0.28em", fontSize: 11,
              color: C.cyan, textTransform: "uppercase",
              opacity: 0, animation: `ao-up 1s ease .2s forwards`,
            }}
          >
            <span style={{ width: 26, height: 1, background: C.lineStrong }} />
            Seguridad ciudadana · Inteligencia artificial
          </div>

          <h1
            style={{
              fontFamily: font.display, fontWeight: 700,
              fontSize: "clamp(1.9rem, 4.4vw, 3.1rem)", lineHeight: 1.15, color: C.white,
              opacity: 0, animation: `ao-up 1.1s ${ease} .45s forwards`,
            }}
          >
            La seguridad no comienza cuando ocurre una emergencia.{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${C.cyan}, ${C.blue})`,
                WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
              }}
            >
              Comienza mucho antes.
            </span>
          </h1>

          <p
            className="mt-6"
            style={{
              fontFamily: font.body, fontSize: 17, lineHeight: 1.7, color: C.muted, maxWidth: 480,
              opacity: 0, animation: `ao-up 1.1s ease .8s forwards`,
            }}
          >
            AegisOne convierte información compleja en inteligencia accionable para que cada
            decisión de tu día —una ruta, un taxi, un enlace, una llamada— sea una decisión
            informada.
          </p>

          <div
            className="flex flex-wrap items-center gap-4 mt-9"
            style={{ opacity: 0, animation: `ao-up 1s ease 1.1s forwards` }}
          >
            <button
              onClick={() => scrollToId("ciclo")}
              className="flex items-center gap-2 px-7 py-3"
              style={{
                background: `linear-gradient(135deg, ${C.blue}, #1E4FD8)`,
                color: C.white, border: "none", borderRadius: 12,
                fontFamily: font.body, fontWeight: 600, fontSize: 15, cursor: "pointer",
                boxShadow: "0 0 34px rgba(47,107,255,0.45)",
              }}
            >
              <Play size={16} /> Ver la plataforma en acción
            </button>
            <button
              onClick={() => scrollToId("solucion")}
              className="flex items-center gap-2 px-7 py-3"
              style={{
                background: "rgba(12,24,48,0.6)", color: C.white,
                border: `1px solid ${C.lineStrong}`, borderRadius: 12,
                fontFamily: font.body, fontWeight: 500, fontSize: 15, cursor: "pointer",
                backdropFilter: "blur(8px)",
              }}
            >
              Explorar plataforma <ArrowRight size={16} style={{ color: C.cyan }} />
            </button>
          </div>

          <div
            className="flex flex-wrap gap-x-7 gap-y-2 mt-10"
            style={{ opacity: 0, animation: `ao-up 1s ease 1.35s forwards` }}
          >
            {["Anticipa riesgos", "Toma mejores decisiones", "Protege lo que más importa"].map((t) => (
              <span key={t} className="flex items-center gap-2" style={{ fontFamily: font.body, fontSize: 13, color: C.faint }}>
                <ShieldCheck size={14} style={{ color: C.cyan }} /> {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ opacity: 0, animation: `ao-up 1.2s ${ease} 1s forwards` }}>
          <GlassCard className="p-8 mx-auto" style={{ maxWidth: 380 }} hover={false}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <AegisLogo size={22} glow={false} />
                <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 15, color: C.white }}>
                  Aegis<span style={{ color: C.cyan }}>One</span>
                </span>
              </div>
              <span style={{ fontFamily: font.body, fontSize: 11, color: C.ok }}>● Protección activa</span>
            </div>

            <p className="text-center mb-2" style={{ fontFamily: font.body, fontSize: 13, color: C.muted }}>
              Índice Inteligente de Seguridad
            </p>
            <div className="flex justify-center">
              <SecurityGauge value={75} />
            </div>

            <div className="flex flex-col gap-2.5 mt-6">
              {[
                { icon: AlertTriangle, txt: "Alertas cercanas", val: "3 en tu zona", col: C.warn },
                { icon: MapPin, txt: "Zonas de riesgo", val: "Mapa actualizado", col: C.cyan },
                { icon: Sparkles, txt: "Recomendaciones", val: "Rutas para ti", col: C.ok },
              ].map((r) => (
                <div
                  key={r.txt}
                  className="flex items-center justify-between px-4 py-3"
                  style={{ background: "rgba(6,12,28,0.7)", borderRadius: 12, border: `1px solid ${C.line}` }}
                >
                  <span className="flex items-center gap-2.5" style={{ fontFamily: font.body, fontSize: 13.5, color: C.ice }}>
                    <r.icon size={15} style={{ color: r.col }} /> {r.txt}
                  </span>
                  <span style={{ fontFamily: font.body, fontSize: 12, color: C.faint }}>{r.val}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      <button
        onClick={() => scrollToId("problema")}
        className="absolute bottom-6 left-1/2"
        style={{
          transform: "translateX(-50%)", background: "none", border: "none",
          color: C.faint, cursor: "pointer", animation: "ao-float 3s ease-in-out infinite",
        }}
        aria-label="Bajar"
      >
        <ChevronDown size={26} />
      </button>
    </header>
  );
}
