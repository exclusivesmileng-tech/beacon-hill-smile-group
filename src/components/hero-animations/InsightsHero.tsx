import { motion } from "framer-motion";

const C = 190;
const LINE_Y = [130, 150, 170, 195, 215, 235, 255];
const LINE_WIDTHS = [140, 180, 160, 200, 120, 175, 100]; // varied lengths for book lines

export default function InsightsHero() {
  return (
    <div className="relative w-[380px] h-[380px]" aria-hidden="true">

      {/* Outer slow-spin dashed ring */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        animate={{ rotate: 360 }} transition={{ duration: 100, ease: "linear", repeat: Infinity }}>
        <circle cx={C} cy={C} r="170" stroke="#7AC143" strokeWidth="0.8" strokeDasharray="10 20" strokeOpacity="0.12" />
      </motion.svg>

      {/* Open book shape */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
        {/* Book pages */}
        <motion.path d="M190 115 L100 130 L100 265 L190 250 L280 265 L280 130 Z"
          fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.8" strokeOpacity="0.12"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }} />
        {/* Spine */}
        <motion.line x1={C} y1="115" x2={C} y2="250"
          stroke="#7AC143" strokeWidth="1.5" strokeOpacity="0.4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }} />
        {/* Left page fold */}
        <motion.path d="M190 115 C160 125 100 128 100 130" stroke="#7AC143" strokeWidth="1" fill="none"
          strokeOpacity="0.3" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }} />
        {/* Right page fold */}
        <motion.path d="M190 115 C220 125 280 128 280 130" stroke="#7AC143" strokeWidth="1" fill="none"
          strokeOpacity="0.3" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }} />
      </motion.svg>

      {/* Animated text lines on left page */}
      {LINE_Y.map((y, i) => {
        const x1 = 108;
        const x2 = x1 + LINE_WIDTHS[i] * 0.45;
        return (
          <motion.svg key={`l-${i}`} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none">
            <motion.line x1={x1} y1={y} x2={x2} y2={y}
              stroke={i % 3 === 0 ? "#7AC143" : "white"} strokeWidth={i === 0 ? "2" : "1"}
              strokeOpacity={i === 0 ? 0.5 : 0.15} strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.12 }}
            />
          </motion.svg>
        );
      })}

      {/* Animated text lines on right page */}
      {LINE_Y.map((y, i) => {
        const x1 = C + 8;
        const x2 = x1 + LINE_WIDTHS[i] * 0.44;
        return (
          <motion.svg key={`r-${i}`} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none">
            <motion.line x1={x1} y1={y} x2={x2} y2={y}
              stroke={i % 4 === 0 ? "#7AC143" : "white"} strokeWidth={i === 0 ? "2" : "1"}
              strokeOpacity={i === 0 ? 0.5 : 0.15} strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 1.1 + i * 0.1 }}
            />
          </motion.svg>
        );
      })}

      {/* Orbiting category tags */}
      {[0, 90, 180, 270].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x = C + 155 * Math.cos(rad);
        const y = C + 155 * Math.sin(rad);
        return (
          <motion.svg key={`tag-${i}`} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
            animate={{ rotate: 360 }} transition={{ duration: 70, ease: "linear", repeat: Infinity }}>
            <circle cx={x} cy={y} r="10" fill="#7AC143" fillOpacity="0.12"
              stroke="#7AC143" strokeWidth="0.8" strokeOpacity="0.4" />
            <circle cx={x} cy={y} r="3" fill="#7AC143" opacity="0.7" />
          </motion.svg>
        );
      })}

      {/* Centre glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div className="w-24 h-24 rounded-full bg-brand-green/10 blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }} />
      </div>

      {/* Centre pen/article icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg viewBox="0 0 80 80" fill="none" className="w-16 h-16"
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}>
          <circle cx="40" cy="40" r="28" fill="#7AC143" fillOpacity="0.1" stroke="#7AC143" strokeWidth="1" strokeOpacity="0.3" />
          {/* Pen nib */}
          <path d="M30 52 L28 56 L32 54 Z" fill="#7AC143" opacity="0.8" />
          <path d="M32 22 L50 40 L32 52 L28 56 L30 52 L24 46 Z" fill="#7AC143" fillOpacity="0.2"
            stroke="#7AC143" strokeWidth="1.5" strokeLinejoin="round" strokeOpacity="0.7" />
          <line x1="36" y1="44" x2="46" y2="34" stroke="#7AC143" strokeWidth="1" strokeOpacity="0.5" />
        </motion.svg>
      </div>

    </div>
  );
}
