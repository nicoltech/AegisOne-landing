import { useEffect, useRef } from "react";
import { C, font } from "../theme.js";
import AegisLogo from "./AegisLogo.jsx";
import { scrollToId } from "../utils.js";

// Barra de navegación con progreso de lectura.
export default function Nav() {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (barRef.current) barRef.current.style.width = `${p * 100}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["problema", "El problema"],
    ["solucion", "El motor"],
    ["ciclo", "En acción"],
    ["modulos", "Módulos"],
    ["vision", "Visión"],
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        background: "rgba(3, 8, 26, 0.68)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${C.line}`,
      }}
    >
      <div
        ref={barRef}
        style={{
          position: "absolute", top: 0, left: 0, height: 2, width: "0%",
          background: `linear-gradient(90deg, ${C.cyan}, ${C.blue})`,
          boxShadow: `0 0 10px ${C.cyan}`,
        }}
      />
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <AegisLogo size={26} glow={false} />
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 18, color: C.white }}>
            Aegis<span style={{ color: C.cyan }}>One</span>
          </span>
        </button>
        <div className="hidden lg:flex items-center gap-8">
          {links.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToId(id)}
              style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, fontFamily: font.body, fontSize: 14 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollToId("cierre")}
          className="px-4 py-2"
          style={{
            background: C.blue, color: C.white, border: "none", borderRadius: 10,
            fontFamily: font.body, fontSize: 13.5, fontWeight: 600, cursor: "pointer",
            boxShadow: "0 0 24px rgba(47,107,255,0.4)",
          }}
        >
          Únete
        </button>
      </div>
    </nav>
  );
}
