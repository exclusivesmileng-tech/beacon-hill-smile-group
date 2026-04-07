import { motion } from "framer-motion";

const C = 190;

export default function ContactHero() {
  return (
    <div className="relative w-[380px] h-[380px]" aria-hidden="true">

      {/* Signal waves radiating out from pin */}
      {[0, 1, 2, 3].map((i) => (
        <motion.svg key={i} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
          initial={{ scale: 0.15, opacity: 0.8 }}
          animate={{ scale: 1.1, opacity: 0 }}
          transition={{ duration: 3.5, delay: i * 0.85, ease: "easeOut", repeat: Infinity }}>
          <circle cx={C} cy={C} r="130" stroke="#7AC143" strokeWidth="1.5" strokeOpacity="0.5" />
        </motion.svg>
      ))}

      {/* Outer static ring */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none">
        <circle cx={C} cy={C} r="162" stroke="white" strokeWidth="0.5" strokeOpacity="0.08" />
      </svg>

      {/* Slow-spin dashed ring */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        animate={{ rotate: 360 }} transition={{ duration: 80, ease: "linear", repeat: Infinity }}>
        <circle cx={C} cy={C} r="170" stroke="#7AC143" strokeWidth="0.8" strokeDasharray="10 20" strokeOpacity="0.13" />
      </motion.svg>

      {/* 3 location pins orbiting */}
      {[0, 120, 240].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x = C + 140 * Math.cos(rad);
        const y = C + 140 * Math.sin(rad);
        return (
          <motion.svg key={i} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
            animate={{ rotate: 360 }} transition={{ duration: 45 + i * 7, ease: "linear", repeat: Infinity }}>
            <circle cx={x} cy={y} r="14" fill="#7AC143" fillOpacity="0.1"
              stroke="#7AC143" strokeWidth="0.8" strokeOpacity="0.4" />
            {/* Pin shape */}
            <g transform={`translate(${x - 6}, ${y - 10})`}>
              <path d="M6 0a5 5 0 00-5 5c0 4 5 9 5 9s5-5 5-9a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"
                fill="#7AC143" fillOpacity="0.7" />
            </g>
          </motion.svg>
        );
      })}

      {/* Dotted map grid lines */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }}>
        {[140, 165, 190, 215, 240].map((y, i) => (
          <motion.line key={`h-${i}`} x1="80" y1={y} x2="300" y2={y}
            stroke="white" strokeWidth="0.5" strokeOpacity="0.07" strokeDasharray="4 8"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }} />
        ))}
        {[110, 140, 165, 190, 215, 240, 270].map((x, i) => (
          <motion.line key={`v-${i}`} x1={x} y1="110" x2={x} y2="270"
            stroke="white" strokeWidth="0.5" strokeOpacity="0.07" strokeDasharray="4 8"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.7 + i * 0.08 }} />
        ))}
      </motion.svg>

      {/* Centre glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div className="w-28 h-28 rounded-full bg-brand-green/10 blur-2xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity }} />
      </div>

      {/* Centre location pin */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg viewBox="0 0 80 80" fill="none" className="w-20 h-20"
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}>
          <circle cx="40" cy="40" r="28" fill="#7AC143" fillOpacity="0.1"
            stroke="#7AC143" strokeWidth="1" strokeOpacity="0.3" />
          {/* Large pin */}
          <path d="M40 18a14 14 0 00-14 14c0 11 14 26 14 26s14-15 14-26a14 14 0 00-14-14zm0 19a5 5 0 110-10 5 5 0 010 10z"
            fill="#7AC143" fillOpacity="0.3" stroke="#7AC143" strokeWidth="1.5" strokeOpacity="0.9"
            strokeLinejoin="round" />
          <circle cx="40" cy="31" r="4" fill="#7AC143" opacity="0.9" />
        </motion.svg>
      </div>

    </div>
  );
}
