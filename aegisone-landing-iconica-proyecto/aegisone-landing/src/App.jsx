import { useState } from "react";
import { C, font } from "./theme.js";
import CinematicIntro from "./components/CinematicIntro.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Problema from "./components/Problema.jsx";
import BigStat from "./components/BigStat.jsx";
import Solucion from "./components/Solucion.jsx";
import CicloDemo from "./components/CicloDemo.jsx";
import Modulos from "./components/Modulos.jsx";
import Vision from "./components/Vision.jsx";
import Impacto from "./components/Impacto.jsx";
import Cierre from "./components/Cierre.jsx";
import Footer from "./components/Footer.jsx";

// Experiencia AegisOne: intro cinematográfica + landing por capítulos.
export default function App() {
  const [intro, setIntro] = useState(true);

  return (
    <div
      style={{
        background: C.bg,
        minHeight: "100vh",
        fontFamily: font.body,
        height: intro ? "100vh" : "auto",
        overflow: intro ? "hidden" : "visible",
      }}
    >
      {intro && <CinematicIntro onDone={() => setIntro(false)} />}
      <Nav />
      <Hero />
      <Problema />
      <BigStat />
      <Solucion />
      <CicloDemo />
      <Modulos />
      <Vision />
      <Impacto />
      <Cierre />
      <Footer />
    </div>
  );
}
