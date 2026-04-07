import { motion } from "framer-motion";

const HUB = { x: 240, y: 215 };

type Brand = {
  name: string;
  x: number;
  y: number;
  color: string;
  textAnchor: "start" | "middle" | "end";
  labelDx: number;
  labelDy: number;
};

const BRANDS: Brand[] = [
  { name: "Exclusive Smile",   x: 240, y: 52,  color: "#60a5fa", textAnchor: "middle", labelDx: 0,   labelDy: -16 },
  { name: "Beaconhill Smile",  x: 355, y: 98,  color: "#34d399", textAnchor: "start",  labelDx: 18,  labelDy: -8  },
  { name: "Phoenix Derma",     x: 398, y: 215, color: "#f472b6", textAnchor: "start",  labelDx: 20,  labelDy: 4   },
  { name: "Vision Craft",      x: 355, y: 332, color: "#a78bfa", textAnchor: "start",  labelDx: 18,  labelDy: 18  },
  { name: "Prima Medical",     x: 240, y: 378, color: "#38bdf8", textAnchor: "middle", labelDx: 0,   labelDy: 20  },
  { name: "ClearSound ENT",    x: 125, y: 332, color: "#fb923c", textAnchor: "end",    labelDx: -18, labelDy: 18  },
  { name: "Northshore Health", x: 82,  y: 215, color: "#4ade80", textAnchor: "end",    labelDx: -20, labelDy: 4   },
  { name: "Beaconhill Global", x: 125, y: 98,  color: "#e879f9", textAnchor: "end",    labelDx: -18, labelDy: -8  },
];

function curvePath(b: Brand) {
  const dx = HUB.x - b.x;
  const dy = HUB.y - b.y;
  const cx = b.x + dx * 0.5 + dy * 0.18;
  const cy = b.y + dy * 0.5 - dx * 0.18;
  return `M ${b.x} ${b.y} Q ${cx} ${cy} ${HUB.x} ${HUB.y}`;
}

// A few cross-connections between related brands (subtle)
const CROSS: [number, number][] = [
  [0, 1], // Exclusive Smile — Beaconhill Smile
  [2, 3], // Phoenix Derma — Vision Craft
  [6, 7], // Northshore — Beaconhill Global
];

export default function HeroAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-blue-700/10 blur-3xl" />
      </div>

      <svg
        viewBox="0 0 480 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[520px] relative z-10"
      >
        {/* Outer ring guide */}
        <circle
          cx={HUB.x}
          cy={HUB.y}
          r={172}
          stroke="rgba(99,179,237,0.07)"
          strokeWidth="1"
          strokeDasharray="2 10"
        />

        {/* Cross-connections between related brands */}
        {CROSS.map(([a, b], i) => {
          const A = BRANDS[a];
          const B = BRANDS[b];
          return (
            <line
              key={`cross-${i}`}
              x1={A.x} y1={A.y}
              x2={B.x} y2={B.y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
          );
        })}

        {/* Animated connection lines — flow from brand → hub */}
        {BRANDS.map((b, i) => (
          <motion.path
            key={`path-${i}`}
            d={curvePath(b)}
            stroke={b.color}
            strokeWidth="1.5"
            strokeDasharray="6 12"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.55,
              strokeDashoffset: [0, -18],
            }}
            transition={{
              opacity: { delay: 0.3 + i * 0.12, duration: 0.6 },
              strokeDashoffset: {
                repeat: Infinity,
                duration: 1.6,
                ease: "linear",
                delay: i * 0.2,
              },
            }}
          />
        ))}

        {/* Brand nodes */}
        {BRANDS.map((b, i) => (
          <motion.g
            key={`node-${i}`}
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5 + i * 0.12,
              duration: 0.5,
              type: "spring",
              stiffness: 180,
              damping: 14,
            }}
            style={{ transformOrigin: `${b.x}px ${b.y}px` }}
          >
            {/* Expanding pulse ring */}
            <motion.circle
              cx={b.x}
              cy={b.y}
              r={7}
              fill="transparent"
              stroke={b.color}
              strokeWidth="1"
              animate={{ r: [7, 20], opacity: [0.6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.5 + (i % 3) * 0.4,
                ease: "easeOut",
                delay: i * 0.35,
              }}
            />
            {/* Node fill */}
            <circle cx={b.x} cy={b.y} r={6}  fill={b.color} opacity={0.85} />
            <circle cx={b.x} cy={b.y} r={2.5} fill="white"  opacity={0.8} />

            {/* Brand label */}
            <text
              x={b.x + b.labelDx}
              y={b.y + b.labelDy}
              textAnchor={b.textAnchor}
              fill="rgba(255,255,255,0.7)"
              fontSize="9.5"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              fontWeight="600"
              letterSpacing="0.025em"
            >
              {b.name}
            </text>
          </motion.g>
        ))}

        {/* Hub — outer pulse */}
        <motion.circle
          cx={HUB.x}
          cy={HUB.y}
          r={52}
          fill="rgba(37,99,235,0.07)"
          animate={{ r: [46, 58, 46] }}
          transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
        />
        {/* Hub — mid glow */}
        <circle cx={HUB.x} cy={HUB.y} r={40} fill="rgba(37,99,235,0.14)" />
        {/* Hub — core */}
        <circle
          cx={HUB.x}
          cy={HUB.y}
          r={30}
          fill="rgba(8,16,45,0.97)"
          stroke="rgba(99,179,237,0.55)"
          strokeWidth="1.5"
        />

        {/* Hub label */}
        <text
          x={HUB.x}
          y={HUB.y - 5}
          textAnchor="middle"
          fill="rgba(255,255,255,0.95)"
          fontSize="11"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="800"
          letterSpacing="0.05em"
        >
          BHILL
        </text>
        <text
          x={HUB.x}
          y={HUB.y + 8}
          textAnchor="middle"
          fill="rgba(255,255,255,0.4)"
          fontSize="6"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="700"
          letterSpacing="0.12em"
        >
          GROUP
        </text>
      </svg>
    </div>
  );
}
