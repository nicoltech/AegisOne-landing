import { C } from "../theme.js";

// Recreación SVG del logo oficial de AegisOne:
// "A" angular blanca con ciudad y personas, sobre azul marino.
export default function AegisLogo({ size = 96, glow = true }) {
  return (
    <div
      style={{
        width: size,
        height: (size * 250) / 200,
        filter: glow
          ? "drop-shadow(0 0 22px rgba(76,201,240,0.5)) drop-shadow(0 0 60px rgba(47,107,255,0.28))"
          : "none",
      }}
    >
      <svg viewBox="0 0 200 250" width="100%" height="100%" aria-label="AegisOne">
        <defs>
          <clipPath id="aegis-hole">
            <path d="M100 62 L146 160 L100 135 L54 160 Z" />
          </clipPath>
        </defs>
        <g clipPath="url(#aegis-hole)">
          <rect x="50" y="60" width="100" height="105" fill="#0B1730" />
          <rect x="92" y="82" width="14" height="70" fill="#1D2E52" />
          <rect x="98" y="70" width="2" height="14" fill="#1D2E52" />
          <rect x="76" y="108" width="11" height="46" fill="#182849" />
          <rect x="110" y="100" width="13" height="54" fill="#182849" />
          <rect x="126" y="118" width="10" height="36" fill="#142140" />
          <rect x="64" y="122" width="9" height="32" fill="#142140" />
          <rect x="95" y="90" width="3" height="4" fill="#33507F" />
          <rect x="101" y="98" width="3" height="4" fill="#33507F" />
          <rect x="95" y="108" width="3" height="4" fill="#33507F" />
          <rect x="113" y="110" width="3" height="4" fill="#2A4470" />
          <rect x="118" y="120" width="3" height="4" fill="#2A4470" />
        </g>
        <path
          d="M100 14 L184 194 L100 148 L16 194 Z M100 62 L54 160 L100 135 L146 160 Z"
          fill={C.white}
          fillRule="evenodd"
          stroke={C.white}
          strokeWidth="9"
          strokeLinejoin="round"
        />
        <g fill="#22355C">
          <circle cx="78" cy="186" r="7" />
          <rect x="69" y="195" width="18" height="26" rx="8" />
          <circle cx="122" cy="186" r="7" />
          <rect x="113" y="195" width="18" height="26" rx="8" />
          <circle cx="100" cy="177" r="10" />
          <rect x="87" y="189" width="26" height="34" rx="11" />
        </g>
        <path
          d="M34 192 Q100 248 166 192"
          fill="none"
          stroke={C.white}
          strokeWidth="13"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
