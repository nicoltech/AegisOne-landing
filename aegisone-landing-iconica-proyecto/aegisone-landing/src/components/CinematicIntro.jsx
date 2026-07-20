import { useEffect, useState } from "react";
import { C, font, ease } from "../theme.js";
import CityGrid from "./CityGrid.jsx";
import AegisLogo from "./AegisLogo.jsx";

const INTRO_MSGS = [
  "Avísame cuando llegues.",
  "¿Ya estás en casa?",
  "Mándame tu ubicación.",
  "¿Con quién estás?",
  "¿Tomaste el taxi?",
  "Escríbeme cuando llegues.",
];

// Intro cinematográfica: oscuridad → mensajes → titular → logo.
export default function CinematicIntro({ onDone }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onDone();
      return;
    }
    const t = [
      setTimeout(() => setPhase(1), 700),
      setTimeout(() => setPhase(2), 5200),
      setTimeout(() => setPhase(3), 8200),
      setTimeout(() => setPhase(4), 10600),
      setTimeout(() => onDone(), 11600),
    ];
    return () => t.forEach(clearTimeout);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      style={{
        background: `radial-gradient(900px 500px at 50% 120%, rgba(47,107,255,0.10), transparent 60%), #010409`,
        opacity: phase === 4 ? 0 : 1,
        transition: `opacity 1s ${ease}`,
        pointerEvents: phase === 4 ? "none" : "auto",
      }}
    >
      {phase >= 2 && <CityGrid opacity={0.09} />}

      {phase === 0 && (
        <span
          style={{
            width: 8, height: 8, borderRadius: "50%", background: C.cyan,
            boxShadow: `0 0 30px ${C.cyan}`,
            animation: "ao-ring 1.4s ease-in-out infinite",
          }}
        />
      )}

      {phase === 1 && (
        <div className="flex flex-col items-center gap-3 max-w-md w-full">
          {INTRO_MSGS.map((m, i) => (
            <div
              key={m}
              className="px-5 py-3 w-full max-w-xs"
              style={{
                alignSelf: i % 2 === 0 ? "flex-start" : "flex-end",
                background: "rgba(12, 22, 44, 0.85)",
                border: `1px solid ${C.line}`,
                borderRadius: 16,
                color: C.white,
                fontFamily: font.body,
                fontSize: 15,
                boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
                opacity: 0,
                animation: `ao-msg-in .7s ${ease} ${i * 0.55}s forwards`,
              }}
            >
              {m}
              <span style={{ float: "right", color: C.faint, fontSize: 10, marginTop: 4 }}>
                21:{17 + i * 4} <span style={{ color: C.cyan }}>✓✓</span>
              </span>
            </div>
          ))}
          <p
            style={{
              marginTop: 18, fontFamily: font.body, fontSize: 13, color: C.faint,
              letterSpacing: "0.2em", textTransform: "uppercase",
              opacity: 0, animation: `ao-up 1s ease 3.6s forwards`,
            }}
          >
            Los enviamos todos los días.
          </p>
        </div>
      )}

      {phase === 2 && (
        <h1
          className="text-center max-w-3xl"
          style={{
            fontFamily: font.display, fontWeight: 700,
            fontSize: "clamp(1.6rem, 4.5vw, 3rem)", lineHeight: 1.25, color: C.white,
            opacity: 0, animation: `ao-up 1.2s ${ease} .2s forwards`,
          }}
        >
          Cada día, millones de personas toman decisiones importantes{" "}
          <span
            style={{
              background: `linear-gradient(90deg, ${C.cyan}, ${C.blue})`,
              WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            }}
          >
            sin la información necesaria para sentirse seguras.
          </span>
        </h1>
      )}

      {phase >= 3 && (
        <div
          className="flex flex-col items-center"
          style={{ opacity: 0, animation: `ao-up 1.1s ${ease} .1s forwards` }}
        >
          <AegisLogo size={104} />
          <div className="mt-6" style={{ fontFamily: font.display, fontWeight: 700, fontSize: 40, color: C.white }}>
            Aegis<span style={{ color: C.cyan }}>One</span>
          </div>
          <p className="mt-2" style={{ fontFamily: font.body, fontSize: 15, color: C.muted, letterSpacing: "0.12em" }}>
            Anticipa. Decide. Protege.
          </p>
        </div>
      )}

      <button
        onClick={onDone}
        className="absolute bottom-6 right-6 px-4 py-2"
        style={{
          background: "rgba(12,24,48,0.6)", color: C.muted,
          border: `1px solid ${C.line}`, borderRadius: 10,
          fontFamily: font.body, fontSize: 12.5, cursor: "pointer",
          backdropFilter: "blur(8px)",
        }}
      >
        Saltar intro →
      </button>
    </div>
  );
}
