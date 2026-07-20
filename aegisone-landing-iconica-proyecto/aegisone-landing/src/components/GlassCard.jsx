import { useState } from "react";
import { C, ease } from "../theme.js";

// Tarjeta glassmorphism con elevación al pasar el mouse.
export default function GlassCard({ children, className = "", style = {}, hover = true }) {
  const [h, setH] = useState(false);
  return (
    <div
      className={className}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: C.surface,
        border: `1px solid ${h && hover ? C.lineStrong : C.line}`,
        borderRadius: 20,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: h && hover
          ? "0 18px 50px rgba(47,107,255,0.18), inset 0 1px 0 rgba(155,216,255,0.08)"
          : "0 8px 30px rgba(2,6,18,0.5), inset 0 1px 0 rgba(155,216,255,0.05)",
        transform: h && hover ? "translateY(-4px)" : "translateY(0)",
        transition: `all .45s ${ease}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
