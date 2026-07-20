import { C, font } from "../theme.js";
import AegisLogo from "./AegisLogo.jsx";

export default function Footer() {
  return (
    <footer className="py-10 px-6" style={{ background: C.bg, borderTop: `1px solid ${C.line}` }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <AegisLogo size={20} glow={false} />
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 15, color: C.white }}>
            Aegis<span style={{ color: C.cyan }}>One</span>
          </span>
        </div>
        <p style={{ fontFamily: font.body, fontSize: 12.5, color: C.faint }}>
          © {new Date().getFullYear()} AegisOne · Diseñado para Latinoamérica · Inteligencia artificial contextual para la seguridad ciudadana
        </p>
      </div>
    </footer>
  );
}
