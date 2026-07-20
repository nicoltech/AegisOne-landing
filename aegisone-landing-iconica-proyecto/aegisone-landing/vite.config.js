import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANTE: "base" debe coincidir EXACTAMENTE con el nombre de tu
// repositorio en GitHub. Si tu repo se llama "aegisone-landing",
// déjalo así. Si se llama distinto, cámbialo aquí y en "homepage"
// dentro de package.json.
export default defineConfig({
  plugins: [react()],
  base: "/aegisone-landing/",
});
