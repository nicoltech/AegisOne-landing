# AegisOne — Landing Icónica

Landing page oficial de **AegisOne**, plataforma de inteligencia de seguridad impulsada por IA. Esta versión es una **experiencia cinematográfica** narrada por capítulos, diseñada para presentaciones ante jurado.

**Anticipa. Decide. Protege.**

---

## 🎬 La experiencia

1. **Intro cinematográfica (~12 s)** — pantalla negra → los mensajes que todos enviamos ("Avísame cuando llegues…") → el titular del problema → revelación del logo. Incluye botón «Saltar intro» y se omite automáticamente si el sistema tiene movimiento reducido activado.
2. **Hero** — el Índice Inteligente de Seguridad se anima de 0 a 75/100 en un medidor circular, con un foco de luz que sigue el mouse sobre la cuadrícula urbana.
3. **Capítulo 01 · El problema** — 8 escenarios cotidianos de inseguridad.
4. **La cifra** — contador gigante que sube en vivo hasta **+4,000** celulares robados al día en el Perú (Osiptel/Renteseg, 2025).
5. **Capítulo 02 · El motor** — Aegis Intelligence Engine™ como radar con barrido animado y señales convergentes.
6. **Capítulo 03 · La plataforma en acción** — demo interactiva en un teléfono: reporte ciudadano → la IA analiza (92% de confianza) → la comunidad valida → alerta preventiva con mapa de calor. Avanza sola cada 3.6 s y cada paso es clickeable.
7. **Capítulo 04 · Módulos** — Aegis Urban™, Guardian Ride™, CyberShield™ y Aegis Copilot™.
8. **Capítulo 05 · Visión** y **Capítulo 06 · Impacto social**.
9. **Epílogo** — cierre emocional con CTA.

Extras: barra de progreso de lectura en la navegación, partículas ascendentes, glassmorphism y accesibilidad (`prefers-reduced-motion`).

---

## ⚙️ Stack y dependencias

- **React 18 + Vite 5**, JavaScript (.jsx).
- **CSS puro**: los estilos globales están en `src/index.css` y las utilidades de layout en `src/utilities.css` (generadas a medida — **no se usa Tailwind**).

### Dependencia adicional declarada

| Librería | ¿Por qué? | Instalación |
|---|---|---|
| `lucide-react` | Iconos vectoriales consistentes (28 iconos usados en toda la landing: escudos, mapa, cerebro, campana, etc.). Es ligera y solo empaqueta los iconos importados. | `npm install lucide-react` |

> Ya está incluida en `package.json`, así que `npm install` la instala automáticamente. No se usa ninguna otra librería externa.

---

## 🧰 Requisitos previos

- **Node.js 18 o superior** (recomendado: 20 LTS). Verifica con `node -v`.
- **Git** y una cuenta de GitHub (solo para el despliegue).

---

## 🚀 Instalación y ejecución local

```bash
cd aegisone-landing
npm install
npm run dev
```

Abre el enlace que aparece en la terminal (normalmente `http://localhost:5173/aegisone-landing/`).

> La URL local incluye `/aegisone-landing/` porque el proyecto está configurado con esa `base` para GitHub Pages.

## 🏗️ Compilación

```bash
npm run build     # genera dist/
npm run preview   # previsualiza el build
```

---

## 🌐 Despliegue en GitHub Pages

### Paso 0 — Configura usuario y repositorio

Edita **dos archivos** antes de desplegar:

1. **`package.json`** → reemplaza `TU-USUARIO`:

```json
"homepage": "https://TU-USUARIO.github.io/aegisone-landing"
```

2. **`vite.config.js`** → `base` debe coincidir **exactamente** con el nombre de tu repositorio:

```js
base: "/aegisone-landing/",
```

### Paso 1 — Sube el proyecto

```bash
git init
git add .
git commit -m "Landing icónica AegisOne"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/aegisone-landing.git
git push -u origin main
```

### Paso 2 — Despliega

```bash
npm run deploy
```

(`predeploy` ejecuta el build automáticamente y `gh-pages` publica `dist/` en la rama `gh-pages`.)

### Paso 3 — Activa Pages (solo la primera vez)

Repositorio → **Settings** → **Pages** → Source: **Deploy from a branch** → rama **`gh-pages`**, carpeta **/ (root)** → Save. En 1–2 minutos tu landing estará en:

```
https://TU-USUARIO.github.io/aegisone-landing/
```

---

## 🛠️ Solución de errores comunes

**Página en blanco o sin estilos en GitHub Pages** — `base` en `vite.config.js` no coincide con el nombre del repo. Corrígelo, `npm run deploy` de nuevo y recarga con Ctrl+Shift+R.

**`npm install` falla (ERESOLVE)** — actualiza a Node 18+ o usa `npm install --legacy-peer-deps`.

**Permisos al hacer deploy (403)** — revisa `git remote -v` y tu autenticación (token personal o SSH).

**GitHub Pages muestra la versión vieja** — vuelve a ejecutar `npm run deploy` y fuerza recarga; la propagación tarda 1–2 min.

**La intro no aparece** — si tu sistema operativo tiene activado "reducir movimiento", la intro se salta a propósito (accesibilidad). Desactívalo para verla.

---

## 📁 Estructura del proyecto

```
aegisone-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AegisLogo.jsx       # Logo oficial recreado en SVG
│   │   ├── BigStat.jsx         # Contador +4,000
│   │   ├── Chapter.jsx         # Marcador de capítulo
│   │   ├── CicloDemo.jsx       # Demo interactiva (teléfono)
│   │   ├── Cierre.jsx          # Epílogo
│   │   ├── CinematicIntro.jsx  # Intro tipo tráiler
│   │   ├── CityGrid.jsx        # Cuadrícula urbana animada
│   │   ├── Footer.jsx
│   │   ├── GlassCard.jsx       # Tarjeta glassmorphism
│   │   ├── Hero.jsx            # Hero con índice animado
│   │   ├── Impacto.jsx
│   │   ├── Modulos.jsx
│   │   ├── Nav.jsx             # Nav con barra de progreso
│   │   ├── Particles.jsx
│   │   ├── Problema.jsx
│   │   ├── Reveal.jsx          # Animación de entrada al scroll
│   │   ├── SecurityGauge.jsx   # Índice Inteligente de Seguridad
│   │   ├── Solucion.jsx        # Engine con radar
│   │   └── Vision.jsx
│   ├── App.jsx
│   ├── hooks.js                # useReveal, useCountUp
│   ├── index.css               # Estilos globales y keyframes
│   ├── main.jsx
│   ├── theme.js                # Paleta y tipografías
│   ├── utilities.css           # Utilidades de layout (CSS puro)
│   └── utils.js                # scrollToId
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

© AegisOne — Inteligencia preventiva para un mundo más seguro, conectado e inteligente.
