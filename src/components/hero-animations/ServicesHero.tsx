import { motion } from "framer-motion";

const C = 190;

// 4 specialty departments on 4 concentric rings at different speeds
const SPECIALTIES = [
  {
    name: "Dental",
    r: 80,
    dur: 20,
    color: "#7AC143",
    icon: "M40 20c-8 0-13 6-13 13 0 4 2 8 6 11v14h14V44c4-3 6-7 6-11 0-7-5-13-13-13z",
  },
  {
    name: "Eye",
    r: 110,
    dur: 30,
    color: "#60a5fa",
    icon: "M40 28C28 28 18 40 18 40s10 12 22 12 22-12 22-12-10-12-22-12zm0 18a6 6 0 110-12 6 6 0 010 12z",
  },
  {
    name: "Skin",
    r: 138,
    dur: 42,
    color: "#f9a8d4",
    icon: "M40 16c-13 0-24 11-24 24s11 24 24 24 24-11 24-24S53 16 40 16zm0 40c-9 0-16-7-16-16s7-16 16-16 16 7 16 16-7 16-16 16z",
  },
  {
    name: "Medical",
    r: 160,
    dur: 55,
    color: "#a78bfa",
    icon: "M34 18v14H20v16h14v14h12V48h14V32H46V18z",
  },
];

export default function ServicesHero() {
  return (
    <div className="relative w-[380px] h-[380px]" aria-hidden="true">

      {/* Static orbit tracks */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none">
        {SPECIALTIES.map((s, i) => (
          <circle key={i} cx={C} cy={C} r={s.r}
            stroke={s.color} strokeWidth="0.5" strokeOpacity="0.12" />
        ))}
      </svg>

      {/* Outer slow-spin ring */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        animate={{ rotate: 360 }} transition={{ duration: 80, ease: "linear", repeat: Infinity }}>
        <circle cx={C} cy={C} r="174" stroke="#7AC143" strokeWidth="0.8" strokeDasharray="8 18" strokeOpacity="0.12" />
      </motion.svg>

      {/* Pulse rings */}
      {[0, 1.5, 3].map((delay, i) => (
        <motion.svg key={i} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
          initial={{ scale: 0.3, opacity: 0.5 }}
          animate={{ scale: 1.08, opacity: 0 }}
          transition={{ duration: 4, delay, ease: "easeOut", repeat: Infinity }}>
          <circle cx={C} cy={C} r="80" stroke="#7AC143" strokeWidth="1.5" strokeOpacity="0.4" />
        </motion.svg>
      ))}

      {/* 4 orbiting specialty icons */}
      {SPECIALTIES.map((s, i) => {
        const startDeg = i * 90;
        const rad = (startDeg * Math.PI) / 180;
        const x = C + s.r * Math.cos(rad);
        const y = C + s.r * Math.sin(rad);
        return (
          <motion.svg key={i} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: s.dur, ease: "linear", repeat: Infinity }}>
            <circle cx={x} cy={y} r="18" fill={s.color} fillOpacity="0.1"
              stroke={s.color} strokeWidth="1" strokeOpacity="0.45" />
            {/* Icon glyphs */}
            <g transform={`translate(${x - 10}, ${y - 10}) scale(0.27)`}>
              <path d={s.icon} stroke={s.color} strokeWidth="3" strokeLinecap="round"
                strokeLinejoin="round" fill="none" strokeOpacity="0.8" />
            </g>
          </motion.svg>
        );
      })}

      {/* Centre glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div className="w-24 h-24 rounded-full bg-brand-green/10 blur-2xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.65, 0.3] }}
          transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity }} />
      </div>

      {/* Centre stethoscope icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg viewBox="0 0 80 80" fill="none" className="w-20 h-20"
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <circle cx="40" cy="40" r="28" fill="#7AC143" fillOpacity="0.1"
            stroke="#7AC143" strokeWidth="1" strokeOpacity="0.3" />
          {/* Stethoscope shape */}
          <path d="M28 22 L28 36 A12 12 0 0040 48 A12 12 0 0052 36 L52 22"
            stroke="#7AC143" strokeWidth="2.5" strokeLinecap="round" fill="none" strokeOpacity="0.7" />
          <path d="M40 48 L40 56"
            stroke="#7AC143" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.7" />
          <circle cx="40" cy="58" r="3.5" fill="#7AC143" opacity="0.8" />
          <circle cx="28" cy="22" r="3" fill="#7AC143" opacity="0.6" />
          <circle cx="52" cy="22" r="3" fill="#7AC143" opacity="0.6" />
        </motion.svg>
      </div>

    </div>
  );
}
