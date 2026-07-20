import { useReveal } from "../hooks.js";
import { ease } from "../theme.js";

// Contenedor con animación de entrada al hacer scroll.
export default function Reveal({ children, delay = 0, y = 26, className = "", style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity .9s ${ease} ${delay}ms, transform .9s ${ease} ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
