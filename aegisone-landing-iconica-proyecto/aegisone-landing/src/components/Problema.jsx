import {
  Footprints, Car, MapPin, PhoneCall, AlertTriangle, Eye, Users, Lock,
} from "lucide-react";
import { C, font } from "../theme.js";
import Reveal from "./Reveal.jsx";
import Chapter from "./Chapter.jsx";
import GlassCard from "./GlassCard.jsx";

const SCENES = [
  { icon: Footprints, label: "Regresar sola a casa por la noche" },
  { icon: Car, label: "Tomar taxis o transporte público" },
  { icon: MapPin, label: "Caminar por zonas desconocidas" },
  { icon: PhoneCall, label: "Recibir llamadas sospechosas" },
  { icon: AlertTriangle, label: "Ser víctima de phishing o estafas" },
  { icon: Eye, label: "Sufrir intentos de extorsión" },
  { icon: Users, label: "No saber si un familiar llegó bien" },
  { icon: Lock, label: "Exponer información personal en internet" },
];

// Capítulo 01 — El problema.
export default function Problema() {
  return (
    <section id="problema" className="relative py-28 px-6" style={{ background: C.bg2 }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <Chapter num="01" title="El problema" />
          <h2
            className="text-center mx-auto"
            style={{
              fontFamily: font.display, fontWeight: 700, color: C.white,
              fontSize: "clamp(1.6rem, 3.6vw, 2.5rem)", lineHeight: 1.2, maxWidth: 720,
            }}
          >
            La inseguridad no solo roba pertenencias.{" "}
            <span style={{ color: C.cyan }}>También roba tranquilidad, tiempo y libertad.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {SCENES.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <GlassCard className="p-5 h-full">
                <div
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: "rgba(47,107,255,0.12)", border: `1px solid ${C.line}`,
                  }}
                >
                  <s.icon size={20} style={{ color: C.cyan }} />
                </div>
                <p style={{ fontFamily: font.body, fontSize: 14.5, lineHeight: 1.5, color: C.ice }}>
                  {s.label}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
