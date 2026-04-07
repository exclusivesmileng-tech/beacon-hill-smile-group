import React, { useState } from "react";
import { motion } from "framer-motion";

/* ─── Brand tokens ───────────────────────────────────── */
const LINE      = "hsl(212,68%,72%)";
const LINE_VIS  = "rgba(60,150,230,0.75)";
const LINE_DIM  = "rgba(60,140,220,0.12)";
const NODE_BG   = "hsl(215,40%,8%)";
const HUB_BG    = "hsl(212,55%,10%)";

/* ─── Geometry ───────────────────────────────────────── */
const W       = 720;
const H       = 720;
const HUB     = { x: 360, y: 360 };
const ORBIT_R = 248;
const NODE_R  = 56;
const HUB_R   = 68;

/* ─── Lucide icon paths (24×24 viewBox, stroke-based) ── */
// Each entry is an array of <path> / <circle> / <line> d-strings
const ICON_PATHS: Record<string, React.ReactNode> = {
  smile: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 13s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeLinecap="round" strokeWidth="3" />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeLinecap="round" strokeWidth="3" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
      <path d="M5 3l.75 2.25L8 6l-2.25.75L5 9l-.75-2.25L2 6l2.25-.75z" />
      <path d="M19 13l.75 2.25L22 16l-2.25.75L19 19l-.75-2.25L16 16l2.25-.75z" />
    </>
  ),
  ear: (
    <>
      <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 0 1-7 0" />
      <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
    </>
  ),
  brain: (
    <>
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </>
  ),
  package: (
    <>
      <path d="M16.5 9.4l-9-5.19" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </>
  ),
};

/* ─── Businesses ─────────────────────────────────────── */
interface Biz { lines: string[]; color: string; url: string; iconKey: string }

const BUSINESSES: Biz[] = [
  { lines: ["Beaconhill", "Smile"],   color: "#7AC143", iconKey: "smile",    url: "https://beaconhillsmile.com" },
  { lines: ["Exclusive",  "Smile"],   color: "#5B21B6", iconKey: "smile",    url: "https://exclusivesmile.com" },
  { lines: ["Vision",     "Craft"],   color: "#0EA5E9", iconKey: "eye",      url: "https://visioncraft.com.ng" },
  { lines: ["Phoenix",    "Derma"],   color: "#A65E3B", iconKey: "sparkles", url: "https://phoenixderma.com" },
  { lines: ["ClearSound", "ENT"],     color: "#1F6F78", iconKey: "ear",      url: "https://clearsoundent.com" },
  { lines: ["Prima",      "Medical"], color: "#2563EB", iconKey: "brain",    url: "https://primamedical.ng" },
  { lines: ["Northshore", "Health"],  color: "#0E7490", iconKey: "package",  url: "https://northshorehealth.ng" },
];

/* ─── Computed positions ─────────────────────────────── */
const SATS = BUSINESSES.map((_, i) => {
  const angle = ((-115.71 + (360 / 7) * i) * Math.PI) / 180;
  return {
    x: HUB.x + ORBIT_R * Math.cos(angle),
    y: HUB.y + ORBIT_R * Math.sin(angle),
  };
});

const POLY_EDGES = SATS.map((s, i) => ({ a: s, b: SATS[(i + 1) % SATS.length] }));

/* ─── Pulse rings ────────────────────────────────────── */
function PulseRings({ cx, cy, r, color, hovered }: {
  cx: number; cy: number; r: number; color: string; hovered: boolean;
}) {
  return (
    <>
      {[
        { delay: 0,   duration: 2.5, scale: 1.55 },
        { delay: 0.8, duration: 2.5, scale: 2.1  },
        { delay: 1.6, duration: 2.5, scale: 2.7  },
      ].map((ring, i) => (
        <motion.circle
          key={i}
          cx={cx} cy={cy} r={r}
          fill="none" stroke={color}
          strokeWidth="0.8" strokeDasharray="5 5"
          animate={{
            r:           [r, r * ring.scale],
            opacity:     [hovered ? 0.65 : 0.35, 0],
            strokeWidth: [hovered ? 1.2 : 0.8, 0.2],
          }}
          transition={{ duration: ring.duration, delay: ring.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </>
  );
}

/* ─── Traveling dot ──────────────────────────────────── */
function TravelDot({ sat, color, delay }: { sat: { x: number; y: number }; color: string; delay: number }) {
  return (
    <motion.circle r={2.2} fill={color}
      animate={{
        cx: [HUB.x, sat.x, HUB.x],
        cy: [HUB.y, sat.y, HUB.y],
        opacity: [0, 1, 1, 0],
      }}
      transition={{ duration: 3.6, delay, repeat: Infinity, ease: "easeInOut", times: [0, 0.45, 0.55, 1] }}
    />
  );
}

/* ─── Inline SVG icon at a position ─────────────────── */
function NodeIcon({ cx, cy, size, color, iconKey }: {
  cx: number; cy: number; size: number; color: string; iconKey: string;
}) {
  const half = size / 2;
  // scale factor: our size / 24 (lucide viewBox)
  const scale = size / 24;
  return (
    <g transform={`translate(${cx - half}, ${cy - half}) scale(${scale})`}
      stroke={color} strokeWidth={1.8 / scale} strokeLinecap="round" strokeLinejoin="round" fill="none"
    >
      {ICON_PATHS[iconKey]}
    </g>
  );
}

/* ─── Main component ─────────────────────────────────── */
export default function BusinessNetwork() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative w-full aspect-square max-w-[780px] mx-auto select-none">
      <svg viewBox={`0 0 ${W} ${H}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

        <defs>
          <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="hsl(212,68%,22%)" />
            <stop offset="100%" stopColor={HUB_BG} />
          </radialGradient>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="hsl(215,40%,14%)" />
            <stop offset="100%" stopColor={NODE_BG} />
          </radialGradient>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(60,140,220,0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="hubGlowF">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Ambient glow */}
        <circle cx={HUB.x} cy={HUB.y} r={260} fill="url(#bgGlow)" />

        {/* Orbit guide ring */}
        <circle cx={HUB.x} cy={HUB.y} r={ORBIT_R} stroke={LINE_DIM} strokeWidth="1" strokeDasharray="3 8" />

        {/* Polygon edges */}
        {POLY_EDGES.map((e, i) => (
          <line key={`poly-${i}`}
            x1={e.a.x} y1={e.a.y} x2={e.b.x} y2={e.b.y}
            stroke={LINE_DIM} strokeWidth="0.7" strokeDasharray="4 10"
          />
        ))}

        {/* Spokes */}
        {SATS.map((s, i) => (
          <motion.line key={`spoke-${i}`}
            x1={HUB.x} y1={HUB.y} x2={s.x} y2={s.y}
            stroke={hovered === i ? BUSINESSES[i].color : LINE_VIS}
            strokeWidth={hovered === i ? 2.5 : 1.8}
            strokeLinecap="round"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.8 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}

        {/* Traveling dots */}
        {SATS.map((s, i) => (
          <TravelDot key={`dot-${i}`} sat={s} color={BUSINESSES[i].color} delay={i * 0.55} />
        ))}

        {/* Pulse rings */}
        {SATS.map((s, i) => (
          <PulseRings key={`rings-${i}`}
            cx={s.x} cy={s.y} r={NODE_R}
            color={BUSINESSES[i].color}
            hovered={hovered === i}
          />
        ))}

        {/* Hub pulse rings */}
        {[
          { delay: 0,   dur: 2.8, maxR: HUB_R * 1.5  },
          { delay: 0.9, dur: 2.8, maxR: HUB_R * 2.0  },
          { delay: 1.8, dur: 2.8, maxR: HUB_R * 2.55 },
        ].map((ring, i) => (
          <motion.circle key={`hub-ring-${i}`}
            cx={HUB.x} cy={HUB.y} r={HUB_R}
            fill="none" stroke={LINE} strokeWidth="0.9" strokeDasharray="6 5"
            animate={{ r: [HUB_R, ring.maxR], opacity: [0.5, 0] }}
            transition={{ duration: ring.dur, delay: ring.delay, repeat: Infinity, ease: "easeOut" }}
          />
        ))}

        {/* Satellite nodes */}
        {SATS.map((s, i) => {
          const biz = BUSINESSES[i];
          const isHovered = hovered === i;

          // Layout inside circle: icon(18) + gap(8) + line1(13) + gap(4) + line2(11) = 54 total
          const iconH   = 18;
          const gap     = 8;
          const line1H  = 13;
          const lineGap = 4;
          const line2H  = 11;
          const totalH  = iconH + gap + line1H + lineGap + line2H;
          const top     = s.y - totalH / 2;
          const textFill = isHovered ? biz.color : "rgba(255,255,255,0.97)";
          const iconColor = isHovered ? biz.color : "rgba(255,255,255,0.88)";

          return (
            <motion.g
              key={`node-${i}`}
              style={{ cursor: "pointer", transformOrigin: `${s.x}px ${s.y}px` }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.38 }}
              transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 200, damping: 16 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              onClick={() => window.open(biz.url, "_blank", "noopener,noreferrer")}
            >
              {isHovered && (
                <circle cx={s.x} cy={s.y} r={NODE_R + 12}
                  fill={`${biz.color}22`} filter="url(#nodeGlow)" />
              )}
              <circle cx={s.x} cy={s.y} r={NODE_R} fill="url(#nodeGrad)" />
              <motion.circle
                cx={s.x} cy={s.y} r={NODE_R}
                stroke={biz.color} strokeWidth={isHovered ? 2 : 1.5} fill="none"
                animate={{ opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                filter={isHovered ? "url(#nodeGlow)" : undefined}
              />
              <circle cx={s.x} cy={s.y} r={NODE_R - 7}
                stroke={biz.color} strokeWidth="0.5" strokeDasharray="3 4"
                fill="none" opacity={0.35}
              />

              {/* Icon (pure SVG, no foreignObject) */}
              <NodeIcon
                cx={s.x} cy={top + iconH / 2}
                size={iconH} color={iconColor} iconKey={biz.iconKey}
              />

              {/* Line 1 */}
              <text
                x={s.x} y={top + iconH + gap + line1H / 2}
                textAnchor="middle" dominantBaseline="middle"
                fill={textFill} fontSize="11"
                fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
                fontWeight="800" letterSpacing="0.01em"
              >
                {biz.lines[0]}
              </text>

              {/* Line 2 */}
              <text
                x={s.x} y={top + iconH + gap + line1H + lineGap + line2H / 2}
                textAnchor="middle" dominantBaseline="middle"
                fill={textFill} fontSize="9.5"
                fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
                fontWeight="500" letterSpacing="0.01em"
              >
                {biz.lines[1]}
              </text>
            </motion.g>
          );
        })}

        {/* Hub */}
        <motion.g
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 160, damping: 14 }}
        >
          <circle cx={HUB.x} cy={HUB.y} r={HUB_R + 18} fill="rgba(60,140,220,0.06)" filter="url(#hubGlowF)" />
          <circle cx={HUB.x} cy={HUB.y} r={HUB_R} fill="url(#hubGrad)" />
          <motion.circle
            cx={HUB.x} cy={HUB.y} r={HUB_R}
            stroke={LINE} strokeWidth="2" fill="none"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            filter="url(#hubGlowF)"
          />
          <circle cx={HUB.x} cy={HUB.y} r={HUB_R - 9}
            stroke={LINE} strokeWidth="0.6" strokeDasharray="4 5" fill="none" opacity={0.45} />
          <circle cx={HUB.x} cy={HUB.y} r={HUB_R - 18}
            stroke={LINE} strokeWidth="0.4" strokeDasharray="2 4" fill="none" opacity={0.25} />

          <text x={HUB.x} y={HUB.y - 7}
            textAnchor="middle" dominantBaseline="middle"
            fill="rgba(255,255,255,0.95)" fontSize="12"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="800" letterSpacing="0.06em"
          >
            BEACONHILL
          </text>
          <text x={HUB.x} y={HUB.y + 8}
            textAnchor="middle" dominantBaseline="middle"
            fill="rgba(255,255,255,0.45)" fontSize="8"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="600" letterSpacing="0.14em"
          >
            SMILE GROUP
          </text>
        </motion.g>

      </svg>
    </div>
  );
}
