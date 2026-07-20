import {
  MapPin, Clock, Route, Building2, Phone, Mail, MessageCircle, Link2,
  Users, Activity, Globe2,
} from "lucide-react";
import { C, font } from "../theme.js";
import Reveal from "./Reveal.jsx";
import Chapter from "./Chapter.jsx";
import AegisLogo from "./AegisLogo.jsx";

const LEFT = [
  { icon: MapPin, label: "Ubicación" },
  { icon: Clock, label: "Horario" },
  { icon: Route, label: "Trayectos" },
  { icon: Building2, label: "Contexto urbano" },
  { icon: Phone, label: "Llamadas" },
  { icon: Mail, label: "Correos" },
];

const RIGHT = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Link2, label: "Enlaces" },
  { icon: Users, label: "Reportes ciudadanos" },
  { icon: Activity, label: "Patrones de comportamiento" },
  { icon: Globe2, label: "Información pública" },
];

function Chip({ icon: Icon, label, side, i }) {
  return (
    <Reveal delay={i * 90} y={12}>
      <div className={`flex items-center gap-3 ${side === "r" ? "lg:flex-row-reverse lg:text-right" : ""}`}>
        <div
          className="flex items-center gap-2 px-4 py-2.5"
          style={{
            background: C.surface, border: `1px solid ${C.line}`, borderRadius: 999,
            backdropFilter: "blur(10px)", whiteSpace: "nowrap",
          }}
        >
          <Icon size={15} style={{ color: C.cyan }} />
          <span style={{ fontFamily: font.body, fontSize: 13, color: C.ice }}>{label}</span>
        </div>
        <span
          className="hidden lg:block flex-1"
          style={{
            height: 1,
            background: side === "r"
              ? `linear-gradient(270deg, transparent, ${C.cyan})`
              : `linear-gradient(90deg, transparent, ${C.cyan})`,
            opacity: 0.5,
            animation: "ao-pulse-line 3s ease-in-out infinite",
            animationDelay: `${i * 0.4}s`,
          }}
        />
      </div>
    </Reveal>
  );
}

// Capítulo 02 — El motor: radar contextual con barrido.
export default function Solucion() {
  return (
    <section
      id="solucion"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: `radial-gradient(800px 500px at 50% 40%, rgba(47,107,255,0.12), transparent 65%), ${C.bg2}` }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <Chapter num="02" title="El motor" />
          <h2
            className="text-center"
            style={{ fontFamily: font.display, fontWeight: 700, color: C.white, fontSize: "clamp(1.7rem, 3.8vw, 2.6rem)" }}
          >
            Aegis Intelligence Engine<span style={{ color: C.cyan, fontSize: "0.6em", verticalAlign: "super" }}>™</span>
          </h2>
          <p className="text-center mt-3 mx-auto" style={{ fontFamily: font.body, color: C.muted, fontSize: 16, maxWidth: 560 }}>
            Un radar contextual que escucha las señales de tu entorno físico y digital.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 items-center gap-10 mt-16">
          <div className="flex flex-col gap-4 order-2 lg:order-1">
            {LEFT.map((c, i) => <Chip key={c.label} {...c} side="l" i={i} />)}
          </div>

          <Reveal className="order-1 lg:order-2 flex justify-center" y={0}>
            <div className="relative flex items-center justify-center" style={{ width: 290, height: 290 }}>
              {[0, 1, 2].map((r) => (
                <span
                  key={r}
                  className="absolute rounded-full"
                  style={{
                    inset: r * 36,
                    border: `1px solid rgba(76,201,240,${0.35 - r * 0.09})`,
                    animation: `ao-ring 4.5s ease-in-out ${r * 0.9}s infinite`,
                  }}
                />
              ))}
              <span
                className="absolute rounded-full overflow-hidden"
                style={{
                  inset: 0,
                  background: "conic-gradient(from 0deg, rgba(76,201,240,0.28), transparent 75deg, transparent 360deg)",
                  animation: "ao-sweep 5s linear infinite",
                  maskImage: "radial-gradient(circle, black 60%, transparent 72%)",
                  WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 72%)",
                }}
              />
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: 168, height: 168, borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 30%, rgba(76,201,240,0.22), rgba(10,20,44,0.94) 65%)",
                  border: `1px solid ${C.lineStrong}`,
                  boxShadow: "0 0 60px rgba(47,107,255,0.35), inset 0 0 30px rgba(76,201,240,0.12)",
                }}
              >
                <AegisLogo size={58} glow={false} />
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 order-3">
            {RIGHT.map((c, i) => <Chip key={c.label} {...c} side="r" i={i} />)}
          </div>
        </div>

        <Reveal delay={200}>
          <p
            className="text-center mt-16 mx-auto"
            style={{
              fontFamily: font.display, fontWeight: 600, color: C.white,
              fontSize: "clamp(1.15rem, 2.4vw, 1.5rem)", lineHeight: 1.5, maxWidth: 620,
            }}
          >
            No reemplazamos tus decisiones.
            <br />
            <span style={{ color: C.cyan }}>Te damos el contexto necesario para tomarlas mejor.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
