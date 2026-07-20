import { C, font } from "../theme.js";

// Marcador de capítulo — la landing se narra como un case film.
export default function Chapter({ num, title }) {
  return (
    <div
      className="flex items-center gap-3 justify-center mb-5"
      style={{ fontFamily: font.body, letterSpacing: "0.3em", fontSize: 11, color: C.cyan, textTransform: "uppercase" }}
    >
      <span style={{ width: 26, height: 1, background: C.lineStrong }} />
      <span style={{ color: C.faint }}>Capítulo {num}</span>
      <span style={{ color: C.white }}>·</span>
      {title}
      <span style={{ width: 26, height: 1, background: C.lineStrong }} />
    </div>
  );
}
